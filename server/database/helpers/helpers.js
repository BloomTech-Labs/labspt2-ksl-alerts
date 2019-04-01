const models = require('../models/models.js');

module.exports = {
  createUser: function(data, done) {
    models.User.create(data, (err, user) => {
      if (err) {
        done(err);
      } else {
        done(null, user);
      }
    })
  },
  createTempUser: function(data, done) {
    models.TempUser.create(data, (err, user) => {
      if (err) {
        done(err);
      } else {
        done(null, user);
      }
    });
  },
  findByUsername: function(data, done) {
    models.User.findOne({ username: data.username, }, (err, user) => {
      if (err) {
        done(err);
      } else {
        done(null, user);
      }
    });
  },
  findByEmail: function(data, done) {
    models.User.findOne({ email: data.email, }, (err, user) => {
     if (err) {
       done(err);
     } else {
       done(null, user);
     }
    })
  },
  findByUrlTemp: function(data, done) {
    models.TempUser.findOne({ url: data.url, }, (err, user) => {
      if (err) {
        done(err);
      } else {
        done(null, user);
      }
    });
  },
  deleteByUrlTemp: function(data, done) {
    models.TempUser.deleteOne({ url: data.url, }, (err, user) => {
      if (err) {
        done(err);
      } else {
        done(null, user);
      }
    })
  },
  findByEmailTemp: function(data, done) {
    
    models.TempUser.findOne({ email: data.email, }, (err, user) => {
      if (err) {
        done(err);
      } else {
        done(null, user);
      }
    });
  },
  changeAccountType: function(data, done) {

    const { email, accountType, } = data;

    models.User.findOneAndUpdate({ email, }, { accountType, }, (error, user) => {

      if (error) {
        done(error);
      } else {

        const updatedUser = Object.assign({}, user._doc, { accountType, });

        done(null, updatedUser);
      }

    });
  },
  createNewAlert: function(data, done) {

    const { email, title, urlQuery, } = data;

    models.User.findOne({ email, }, (error, user) => {

      const alerts = [];

      // Remove the placeholder alert.
      for (let i in user.alerts) {
        if (user.alerts[i].title) {
          alerts.push(user.alerts[i]);
        }
      }

      const alert = {
        title,
        urlQuery,
        items: [{

        }],
      };

      alerts.push(alert);

      models.User.findOneAndUpdate({ email, }, { alerts, }, { new: true, }, (foundError, updatedUserData) => {
        if (foundError) {
          done(foundError);
        } else {
          done(null, updatedUserData);
        }
      });
    });
  },
  addAlertItem: function(data, done) {

    const { email, title, item} = data;

    models.User.findOne({ email, }, (error, user) => {

      // console.log(item);
      console.log('Item extracted');


     

      for (let i in user.alerts) {
        if (user.alerts[i].title === title) {
          // console.log(user.alerts[i].title);

          const items = user.alerts[i].items;

          for (let j in items) {
            if (items[j].hasOwnProperty('pageStats')) {
              if (!(items[j].pageStats.listingNumber === item.pageStats.listingNumber)) {
                items.push(item);
              }
            } else {
              items.push(item);
            }
              
            console.log(items);

            let alert = {
              title: user.alerts[i].title,
              urlQuery: user.alerts[i].urlQuery,
              items,
            };

            // console.log(alert.items);


            
            const alerts = [];

            // for (let k in user.alerts) {
            //   if (user.alerts[k].title !== title) {
            //     alerts.push(user.alerts[k]);
            //   }
            // }

            alerts.push(alert);

            // console.log(alerts);

            const alertsArr = [];

            for (let k in user.alerts) {
                alertsArr.push({
                  title: user.alerts[k].title,
                  urlQuery: user.alerts[k].urlQuery,
                  items: user.alerts[k].items,
                });
            }

            

            for (let k in alertsArr) {
              if (!(typeof alertsArr[k].title === 'undefined')) {
                alerts.push(alertsArr[k]);
              }
            }

        
            // console.log(alerts);



            models.User.findOneAndUpdate({ email, }, { alerts, }, { new: true, }, (foundError, updatedUserData) => {
              if (foundError) {
                done(foundError);
              } else {
                done(null, updatedUserData);
              }
            });
          }
        }
      }
    });
  }
}

