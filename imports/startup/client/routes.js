import { Router } from 'meteor/iron:router';

// Import needed templates
import '../../ui/layouts/body/body';

import '../../ui/pages/home/home';
import '../../ui/pages/listArticles/listArticles';
import '../../ui/pages/not-found/not-found';
import '../../ui/pages/adminPackage/adminPackage';
import '../../ui/pages/resetPassword/resetPassword';

Router.configure({
  layoutTemplate: 'App_body',
  notFoundTemplate: 'App_notFound'
});

Router.route('/', {
  name: 'home',
  template: 'home'
});

Router.route('/listArticles', {
  name: 'listArticles',
  template: 'listArticles'
});
Router.route('/recoverPassword', {
  name: 'recoverPassword',
  template: 'recoverPassword',
  onBeforeAction: function () {
    // do some login checks or other custom logic
    this.next();
  }
});
Router.route('/resetPassword/:token', {
  name: 'resetPassword',
  template: 'resetPassword',
  onBeforeAction: function () {
    // do some login checks or other custom logic
    this.next();
  }
});
