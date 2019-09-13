import './addArticle.html';
import { Template } from 'meteor/templating';
import { listaSchema } from '../../../api/package/lista';

Template.addArticle.onCreated(function bodyOnCreated() {
  this.dataUrl = new ReactiveDict();
  this.dataUrl.set('image', '');
});
Template.addArticle.events({
  'change #addArticleImage'(event, templateInstance) {
    const files = event.target.files;
    if (files.length === 0) {
      return;
    }
    const file = files[0];
    const fileReader = new FileReader();
    fileReader.onload = (event) => {
      const dataUrl = event.target.result;
      templateInstance.dataUrl.set('image', dataUrl);
    };
    fileReader.readAsDataURL(file);
    console.log(templateInstance.dataUrl.get('image'));
  },
  'click #addArticleButton'(event, templateInstance) {
    const doc = {
      nombre: $('#addArticleName').val(),
      descripcion: $('#addArticleDescription').val(),
      estado: 'NoComprado',
      image: templateInstance.dataUrl.get('image')
    };
    const id = templateInstance.data.thisVar;
    Meteor.call('listUpdate', doc, id, error => {
      if (error) {
        alert(error.error);
      } else {
        console.log('success');
      }
    });
  }
});
