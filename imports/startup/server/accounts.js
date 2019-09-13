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
