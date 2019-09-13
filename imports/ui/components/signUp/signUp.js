import './signUp.html';

Template.signUp.events({
  'click #createUser' () {
    const password = $('#userPassword').val();
    const confirmPassword = $('#userConfirmPassword').val();
    if (password === confirmPassword) {
      const doc = {
        email: $('#userEmailSignUp').val(),
        password: $('#userPassword').val(),
        profile: { firstName: $('#userNameSignUp').val() }
      };
      Meteor.call('insertUser', doc);
    }
  }
});
