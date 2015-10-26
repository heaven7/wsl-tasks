AutoForm.hooks({
    insertTaskCategoryForm: {
        onSubmit: function(insert, doc) {},
        onError: function(insert, error, template) {
            return console.log(error);
        },
        onSuccess: function(insert, doc) {
            Session.set('addTaskCategory', '');
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