import './signIn.html';
import { Meteor } from 'meteor/meteor';
import '../recoverPassword/recoverPassword';

Template.signIn.events({
  'click #signInButton' (event) {
    event.preventDefault();
    const email = $('#userEmailSignIn').val();
    const password = $('#userPasswordSignIn').val();
    Meteor.loginWithPassword(email, password, err => {
      if (!err) {
        $('.modal-backdrop').remove();
        Router.go('listArticles');
      } else {
        alert(err);
      }
    });
  },
  'click #forgotPasswordButton' () {
    $('.modal-backdrop').remove();
    Router.go('recoverPassword');
  }
});
