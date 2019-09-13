import './resetPassword.html';
import { Meteor } from 'meteor/meteor';

Template.resetPassword.events({
  'click #resetPasswordButton' (event) {
    event.preventDefault();
    const data = Router.current().params.token;
    const password = $('#resetPasswordPassword').val();
    Accounts.resetPassword(data, password, err => {
      if (err) {
        alert(err);
      } else {
        Router.go('home');
      }
    });
  }
});
