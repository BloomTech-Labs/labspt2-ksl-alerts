require('dotenv').config();
const axios      = require('axios');
const cheerio    = require('cheerio');
const Nightmare  = require('nightmare');
const port       = 8080;

const proxy = 'http://zproxy.lum-superproxy.io:22225';

const options = {
  show: false,
  executionTimeout: 300000,
  gotoTimeout: 300000,
  waitTimeout: 300000,
  // loadTimeout: 300000,  // 60 seconds
  // switches: {
  //   'proxy-server': proxy,
  //   'ignore-certificate-errors': true,
  // }
};

function itemScraper(url, i, done) {

  const session_id = (1000000 * Math.random())|0;
  const nightmare = new Nightmare(options);

  nightmare
    // .authentication('lum-customer-hl_479f83dd-zone-alertifi-route_err-pass_dyn-country-us-session-' + session_id, 'ddnxl64zgbk4')
    // .useragent('Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36')
    .goto(url)
    .wait('#listingContainer')
    // .wait('.photoDesktop-photoContainer   > .smartImage')
    .click('.photoDesktop-photoContainer  > .smartImage')
    .evaluate(() => {
      return document.querySelector('body').innerHTML;
    })
    .end()
    .then((html) => {

      let $ = cheerio.load(html);

      let pageStatsArr = $('.listingStats-value').map((i, el) => $(el).text()).get();
      let imageSrcArr  = $('.photoViewer-carouselItemPhoto > .smartImage').map((i, el) => $(el).attr('src')).get();

      let data = {
        contactInfo: {
          firstName: $('.listingContactSeller-firstName-value').text(),
          homePhone: $('.listingContactSeller-homePhone > .listingContactSeller-optionText').text(),
          cellPhone: $('.listingContactSeller-cellPhone > .listingContactSeller-optionText').text(),
        },
        pageStats: {
          listingNumber:  pageStatsArr.length > 0 ? pageStatsArr[0] : null,
          expirationDate: pageStatsArr.length > 1 ? pageStatsArr[1] : null,
          pageViews:      pageStatsArr.length > 2 ? pageStatsArr[2] : null,
          favorited:      pageStatsArr.length > 3 ? pageStatsArr[3] : null,
          sellerType:     pageStatsArr.length > 4 ? pageStatsArr[4] : null,
          memberSince:    pageStatsArr.length > 5 ? pageStatsArr[5] : null,
        },
        listingDetails: {
          title:       $('.listingDetails-title').text(),
          location:    $('.listingDetails-location').text(),
          price:       $('.listingDetails-price').text(),
          description: $('.listingDescription-text').text(),
        },
        images: imageSrcArr.map((img, i) => {

          let small = img;
          let large = img.substring(0, img.length - 13) + '664x500';

          return {
            small,
            large,
          };
        }),
      };

      
      return data;

    })
    .then(data => {
      
      done(data);

    })
    .catch(err => {
      // console.log(err);
      setTimeout(() => {
        console.log(`Extracting item... (retry)\n`);
        itemScraper(url, done);
      }, 5000);
    });
}

const aslScraper = (url, done) => {

  const selector = 'body';

    const nightmare = Nightmare(options);

    nightmare
      .authentication('lum-customer-hl_479f83dd-zone-static-country-us-session-', 'sp94796gy4mt')
      .goto(url)
      .wait('.listing-group')
      .evaluate((selector) => {
        return document.querySelector(selector).innerHTML;
      }, selector)
      .then((html) => {

        const $ = cheerio.load(html);

        const items = Array.from($('.listing-group').find('.listing-item-link'));

        const results = $('.total-listings').text().split('');
        results.splice(results.indexOf(','), 1);
        results.splice(results.indexOf(' ', 1));
        resultsNum = parseInt(results.join(''));

        // let pages = Math.ceil(resultsNum / 24) + 1;
        // if (pages > 415) pages = 415;
        // console.log('Total pages: ' + pages);




        items.map((item, i) => {

          const url = `https://classifieds.ksl.com${ item.attribs.href }`;
          setTimeout(() => {
            itemScraper(url, i, done);
          }, 1000);

        });

          // if (pages > 1) {
          //   for(let i = 1; i <= pages; i++) {
          //     Nightmare()
          //       .click('.next')
          //       .wait('.listing-group')
          //       .evaluate((selector) => {
          //         return document.querySelector(selector).innerHTML;
          //       }, selector)
          //       .then((html) => {

          //         const $ = cheerio.load(html);

          //         const items = Array.from($('.listing-group').find('.listing-item-link'));
                  
          //         items.map((item, i) => {

          //           const url = `https://classifieds.ksl.com${ item.attribs.href }`;

          //           setTimeout(() => {
          //             itemScraper(url, i);
          //           }, 1000);
                    

          //         });

          //         console.log('Page: ' + i);

          //       }).catch(console.log);
          //   }
          // }
      })
      .catch(err => {
        // stopScrapoxyInstance();
        // setTimeout(() => {
        //   kslScraper(url);
        // }, 10000);
        console.log(err);
      });
}

module.exports = function kslScraper(urlQuery, done) {


  let interval = 0;

  const session_id = (1000000 * Math.random())|0;
  // const urlQuery = 'https://classifieds.ksl.com/search?category[]=&subCategory[]=&keyword=chair&priceFrom=&priceTo=&zip=&miles=25&sellerType[]=Private&marketType[]=Sale&hasPhotos[]=Has%20Photos&postedTime[]=1HOUR';
  const nightmare = new Nightmare(options);

  nightmare
      // .authentication('lum-customer-hl_479f83dd-zone-alertifi-route_err-pass_dyn-country-us-session-' + session_id, 'ddnxl64zgbk4')
      // .useragent('Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36')
      .goto(urlQuery)
      .wait('.listing-group')
      .evaluate((selector) => {
        return document.querySelector(selector).innerHTML;
      }, 'body')
      .end()
      .then((html) => {

        const $ = cheerio.load(html);

        const items = Array.from($('.listing-group').find('.listing-item-link'));

        items.map((item, i) => {

          const url = `https://classifieds.ksl.com${ item.attribs.href }`;
          setTimeout(() => {
            console.log(`Extracting item...\n`)
            itemScraper(url, i, done);
            interval += 5000;
            console.log(interval);
          }, interval);

        });
        

      }).catch(error => {
        // console.log(error);
        kslScraper();
      });
}
