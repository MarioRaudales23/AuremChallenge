import './listArticles.html';
import { Meteor } from 'meteor/meteor';
import { ReactiveDict } from 'meteor/reactive-dict';
import { lista } from '../../../api/package/lista';
import '../../components/addList/addList';
import '../../components/addArticle/addArticle';
import '../../components/list/list';

Template.listArticles.onCreated(function bodyOnCreated () {
  this.state = new ReactiveDict();
  this.state.set('actualList', '');
  this.actualList = new ReactiveDict();
  Session.set('searchInputList', '');
  Session.set('searchInputArticles', '');
  Meteor.subscribe('lista.all');
});
Template.listArticles.helpers({
  lists () {
    return lista.find({ listOwner: Meteor.userId() });
  },
  listArticles () {
    const templateInstance = Template.instance();
    const id = templateInstance.state.get('actualList');
    const listass = lista.findOne({ _id: id });
    return listass.lista;
  },
  searchLists () {
    const regexStr = Session.get('searchInputList').split(/ /).join('|');
    const regex = new RegExp(regexStr, 'i');
    if (Session.get('searchInputList') !== '') {
      return lista.find({
        listOwner: Meteor.userId(),
        $or: [
          { listName: { $regex: regex } }
        ]
      });
    } else {
      return undefined;
    }
  },
  searchInputList () {
    return Session.get('searchInputList') === '';
  },
  searchArticles () {
    const regexStr = Session.get('searchInputArticles').split(/ /).join('|');
    if (Session.get('searchInputArticles') !== '') {
      const templateInstance = Template.instance();
      const id = templateInstance.state.get('actualList');
      const articulosLista = lista.findOne({ _id: id }).lista;

      const temp = articulosLista.map(x => {
        if (x.nombre.includes(regexStr)) {
          return x;
        }
      }).filter(y => typeof y !== 'undefined');
      return temp;
    } else {
      return undefined;
    }
  },
  searchInputArticles () {
    return Session.get('searchInputArticles') === '';
  }
});

Template.listArticles.helpers({
  getActualList () {
    return Template.instance().state.get('actualList');
  }
});
Template.listArticles.events({
  'input #listSearch'(event) {
    Session.set('searchInputList', $('#listSearch').val());
  },
  'input #articulosSearch' (event) {
    Session.set('searchInputArticles', $('#articulosSearch').val());
  },
  'click .useThisEvent' (event, templateInstance) {
    const id = $(event.currentTarget).data('id');
    templateInstance.state.set('actualList', id);
  },
  'click #logOut' (event, templateInstance) {
    Meteor.logout(err => {
      if (!err) {
        Router.go('home');
      } else {
        alert(err);
      }
    });
  },
  'click #changeItemState' (event, templateInstance) {
    const nombre = $(event.currentTarget).data('id');
    const id = templateInstance.state.get('actualList');
    const listass = lista.findOne({ _id: id });
    const validateElement = listass.lista.map(x => {
      if (x.nombre === nombre) {
        return x;
      }
    }).filter(y => typeof y !== 'undefined');
    if (validateElement[0].estado === 'NoComprado') {
      const fixed = listass.lista.map(x => {
        if (x.nombre !== nombre) {
          return x;
        }
      }).filter(y => typeof y !== 'undefined');
      const element = listass.lista.map(x => {
        if (x.nombre === nombre) {
          return x;
        }
      }).filter(y => typeof y !== 'undefined');
      element[0].estado = 'Comprado';
      fixed.push(element[0]);
      Meteor.call('listItemUpdate', id, fixed, error => {
        if (error) {
          alert(error.error);
        }
      });
    } else {
      alert('Elemento ya esta comprado');
    }
  }
});
