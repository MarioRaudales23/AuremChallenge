import { Meteor } from 'meteor/meteor';
import { lista } from '../lista';

Meteor.publish('lista.all', () => lista.find({}));
