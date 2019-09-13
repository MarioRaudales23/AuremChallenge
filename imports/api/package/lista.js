// Definition of the users collection
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { Tracker } from 'meteor/tracker';
import SimpleSchema from 'simpl-schema';

SimpleSchema.extendOptions(['autoform']);
const lista = new Mongo.Collection('lista');
const listaSchema = new SimpleSchema({
  listName: {
    type: String,
    label: 'nombre',
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col col-lg-12 col-md-12 col-sm-12 col-12'
      }
    }
  },
  listOwner: {
    type: String,
    label: 'owner',
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col col-lg-12 col-md-12 col-sm-12 col-12'
      }
    }
  },
  lista: {
    type: Array,
    label: 'articulo',
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col col-lg-12 col-md-12 col-sm-12 col-12'
      }
    }
  },
  'lista.$': {
    type: Object
  },
  'lista.$.nombre': {
    type: String,
    label: 'nombreArticulo'
  },
  'lista.$.descripcion': {
    type: String,
    label: 'descripcionArticulo'
  },
  'lista.$.estado': {
    type: String,
    label: 'estadoArticulo'
  },
  'lista.$.image': {
    type: String,
    autoform: {
      adFieldInput: {
        type: 'fileUpload',
        collection: 'AttachedFile',
        'formgroup-class': 'form-control col col-lg-12 col-md-12 col-sm-12 col-12'
      }
    }
  }
}, { check: check, tracker: Tracker });

lista.deny({
  insert () { return true; },
  update () { return true; },
  remove () { return true; }
});
lista.allow({
  insert () { return true; },
  update () { return true; },
  remove () { return true; }
});
lista.attachSchema(listaSchema);

export {
  listaSchema,
  lista
};
