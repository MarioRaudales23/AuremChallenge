/**
 * Accounts Setup
 */
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

if (!process.env.MAIL_URL) {
  // console.log(Meteor.settings.private);
  process.env.MAIL_URL = 'smtp://apikey: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@smtp.sendgrid.net:587';
}

Meteor.startup(() => {
  Accounts.urls.resetPassword = token => Meteor.absoluteUrl(`/resetPassword/${token}`);
});
