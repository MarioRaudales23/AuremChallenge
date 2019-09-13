import { Meteor } from 'meteor/meteor';
import './recoverPassword.html';

Template.recoverPassword.events({
  'click #recoverPasswordButton' (event) {
    event.preventDefault();
    const email = $('#recoverPasswordEmail').val();
    const options = {};
    options.email = email;
    Accounts.forgotPassword(options, err => {
      if (err) {
        console.log(err);
      } else {
        Router.go('home');
        console.log('success');
      }
    });
  }
});
