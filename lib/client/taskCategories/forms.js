Template.insertTaskCategoryForm.onCreated(function() {
    this.doc = new ReactiveVar();
    this.docType = new ReactiveVar();
});

Template.insertTaskCategoryForm.onRendered(function() {
    this.doc.set(this.data.doc);
    this.docType.set(this.data.docType);
});

Template.insertTaskCategoryForm.helpers({
    doc: function() {
        return Template.instance().doc.get();
    },
    docType: function() {
        return Template.instance().docType.get();
    },
    cancel: function() {
        return i18n.t("cancel");
    }
});

Template.editTaskCategoryForm.events({
    'click #cancelUpdate': function(e, t) {
        return Session.set('selectedTaskCategory', '');
    }
});

Template.insertTaskCategoryForm.events({
    'click #cancelTaskCategoryForm': function(e, t) {
        Session.set('addTaskCategory', '');
        Session.set('addTaskSubCategory', '');
        return false;
    }
});

Template.insertTaskCategoryForm.helpers({
    buttonText: function() {
        return this.buttonText ? this.buttonText : i18n.t("add_category");
    }
});