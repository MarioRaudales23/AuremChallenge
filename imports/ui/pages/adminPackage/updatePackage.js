/*import './updatePackage.html';
import { Template } from 'meteor/templating';
import toastr from 'toastr';
import { PackageSchema, Package } from '../../../api/package/package';

Template.updatePackage.onCreated(() => {
  Meteor.subscribe('Package.all');
});
Template.updatePackage.onRendered(() => {
  $('#updatePackage').on('hidden.bs.modal', () => {
    AutoForm.resetForm('updatePackageForm');
  });
});
Template.updatePackage.helpers({
  PackageSchema () {
    return PackageSchema;
  },
  doc () {
    return Package.findOne({ _id: Session.get('idPackage') });
  }
});
AutoForm.addHooks('updatePackageForm', {
  onSuccess: function () {
    toastr.success('Actualizado');
  }
});*/
