import './addList.html';
import { Meteor } from 'meteor/meteor';

Template.addList.events({
  'click #addListButton' (event) {
    const doc = {
      listName: $('#addListName').val(),
      listOwner: Meteor.userId(),
      lista: []
    };
    console.log(doc);
    Meteor.call('listInsert', doc, error => {
      if (error) {
        alert(error.error);
      } else {
        console.log('success');
      }
    });
  }
});
