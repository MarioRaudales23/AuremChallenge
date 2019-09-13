import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

Meteor.methods({
  insertUser: function (doc) {
    console.log(doc);
    const {
      email,
      password,
      profile
    } = doc;
    const userId = Accounts.createUser({
      email: email,
      password: password,
      profile: profile
    });
    Accounts.sendVerificationEmail(userId);
  }
});
