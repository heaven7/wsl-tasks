Template.tasksList.helpers({
    tasks: function() {
        var tTasks;
        tTasks = Tasks.find();
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
    id: function() {
        return Meteor.userId();
    },
    docType: function() {
        return 'User';
    },
    currentUser: function() {
        return Meteor.users.find({
            _id: Meteor.userId()
        });
    }
});

Template.editTaskForm.helpers({
    doc: function() {
        return this;
    },
    id: function() {
        return Meteor.userId();
    },
    docType: function() {
        return 'User';
    },
    taskUsers: Meteor.users.find().fetch()
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
