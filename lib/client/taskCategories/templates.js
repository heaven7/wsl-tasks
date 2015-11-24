Template.taskCategoriesList.helpers({
    taskCategories: function() {
        var tTaskCategories;
        tTaskCategories = TaskCategories.find({doc: this.doc, docType: this.docType, parent: null});
        if (tTaskCategories.count() === 0) {
            return false;
        } else {
            return tTaskCategories;
        }
    }
});

Template.taskCategoriesList.events({
    'click .editTaskCategory': function(e, t) {
        return Session.set('selectedTaskCategory', this._id);
    },
    'click .deleteTaskCategory': function(e, t) {
        return Meteor.call('deleteTaskCategory', this, function(error, result) {
            if (error) {
                console.log('Error: ' + error);
            }
            return true;
        });

    }
});

Template.taskCategory.events({
    'click .addTaskCategory': function(e, t) {
        Session.set('addTaskCategory', '');
        return Session.set('addTaskCategory', this._id);
    },
    'click .editTaskCategory': function(e, t) {
        return Session.set('selectedTaskCategory', this._id);
    },
    'click .addTaskSubCategory': function(e, t) {
        return Session.set('addTaskSubCategory', this._id);
    }
});

Template.taskCategory.helpers({
    selectedTaskCategory: function() {
        return Session.get('selectedTaskCategory') === this._id;
    },
    addTaskCategory: function() {
        return Session.get('addTaskCategory') === this._id;
    },
    addTaskSubCategory: function() {
        return Session.get('addTaskSubCategory') === this._id;
    },
    taskSubCategories: function() {
        var tTaskSubCategories;
        tTaskSubCategories = TaskCategories.find({doc: this.doc, docType: this.docType, parent: this._id});
        if (tTaskSubCategories.count() === 0) {
            return false;
        } else {
            return tTaskSubCategories;
        }
    },
    buttonTextSubCategory: function() {
        return i18n.t("add_subcategory");
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