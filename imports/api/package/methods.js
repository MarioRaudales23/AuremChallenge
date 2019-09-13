// Methods related to links

import { Meteor } from 'meteor/meteor';
import { lista, listaSchema } from './lista';

Meteor.methods({
  listInsert: doc => {
    listaSchema.validator();
    lista.insert(doc);
  },
  listDelete: doc => {
    lista.remove(doc);
  },
  listUpdate: (doc, id) => {
    lista.update({ _id: id }, {
      $push: {
        lista: doc
      }
    });
  },
  listItemUpdate: (id, doc) => {
    lista.update({ _id: id }, {
      $set: { lista: doc }
    });
  }
});
