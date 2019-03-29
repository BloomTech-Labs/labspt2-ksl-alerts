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


  }
}
