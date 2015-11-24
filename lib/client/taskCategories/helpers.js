AutoForm.hooks({
    insertTaskCategoryForm: {
        onSubmit: function(insert, doc) {},
        onError: function(insert, error, template) {
            return console.log(error);
        },
        onSuccess: function(insert, doc) {
            Session.set('addTaskCategory', '');
            Session.set('addTaskSubCategory', '');
            Session.set('selectedTaskCategory', '');
            return console.log('success insertTaskCategory');
        }
    }
});

AutoForm.hooks({
    editTaskCategoryForm: {
        onSubmit: function(insert, doc) {
        },
        onError: function(insert, error, template) {
            return console.log(error);
        },
        onSuccess: function(insert, doc) {
            Session.set('selectedTaskCategory', '');
        }
    }
});

Meteor.subscribe('taskCategories');