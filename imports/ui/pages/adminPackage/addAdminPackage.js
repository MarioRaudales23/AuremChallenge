/*import './addAdminPackage.html';
import { Template } from 'meteor/templating';
import toastr from 'toastr';
import { PackageSchema } from '../../../api/package/package';

Template.addAdminPackage.onCreated(() => {
  Meteor.subscribe('Package.all');
});
Template.addAdminPackage.onRendered(() => {
  $('#addAdminPackage').on('hidden.bs.modal', () => {
    AutoForm.resetForm('insertExamForm');
  });
});
Template.addAdminPackage.helpers({
  PackageSchema () {
    return PackageSchema;
  }
});
AutoForm.addHooks('insertExamForm', {
  onSuccess: function () {
    toastr.success('Agregado');
  }
});*/
