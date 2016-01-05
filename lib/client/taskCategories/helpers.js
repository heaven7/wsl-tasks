AutoForm.hooks({
    insertTaskCategoryForm: {
        onSubmit: function(insert, doc) {},
        onError: function(insert, error, template) {
            return console.log(error);
        },
        onSuccess: function(insert, doc) {
            closeModal('#insertTaskCategoryModal');
            Session.set('selectedTaskCategory', '');
            return console.log('success insertTaskCategory', insert, doc);
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
            return Session.set('selectedTaskCategory', '');
        }
    }
});

Meteor.subscribe('taskCategories');