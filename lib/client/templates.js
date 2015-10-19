Template.tasksList.helpers({
    tasks: function() {
        var tTasks;
        tTasks = Tasks.find({doc: this.doc, docType: this.docType});
        if (tTasks.count() === 0) {
            return false;
        } else {
            return tTasks;
        }
    }
});

Template.tasksList.events({
    'click .editTask': function(e, t) {
        return Session.set('selectedTask', this._id);
    },
    'click .deleteTask': function(e, t) {
        return Meteor.call('deleteTask', this, function(error, result) {
            if (error) {
                console.log('Error: ' + error);
            }
            return true;
        });
    }
});

Template.insertTaskForm.helpers({

});

Template.editTaskForm.helpers({

});

Template.editTaskForm.events({
    'click #cancelUpdate': function(e, t) {
        return Session.set('selectedTask', '');
    },
    'doc': function() {
        return this;
    }
});

Template.task.helpers({
    selectedTask: function() {
        return Session.get('selectedTask') === this._id;
    }
});
