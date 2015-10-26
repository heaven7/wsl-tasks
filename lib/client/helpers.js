AutoForm.hooks({
    insertTaskForm: {
        onSubmit: function(insert, doc) {},
        onError: function(insert, error, template) {
            return console.log(error);
        },
        onSuccess: function(insert, doc) {
            Session.set('addTask', '');
            Session.set('addSubTask', '');
        }
    }
});

AutoForm.hooks({
    editTaskForm: {
        onSubmit: function(insert, doc) {
        },
        onError: function(insert, error, template) {
            return console.log(error);
        },
        onSuccess: function(insert, doc) {
            Session.set('selectedTask', '');
        }
    }
});