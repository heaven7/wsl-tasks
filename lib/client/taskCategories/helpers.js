AutoForm.hooks({
    insertTaskCategoryForm: {
        onSubmit: function(insert, doc) {},
        onError: function(insert, error, template) {
            return console.log(error);
        },
        onSuccess: function(insert, doc) {
            closeModal('#insertTaskCategoryModal');
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