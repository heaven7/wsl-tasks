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
                return false;
            }
            return true;
        });

    }
});

Template.task.events({
    'click .addSubTask': function(e, t) {
        Session.set('addTask', '');
        Session.set('addSubTask', '');
        return Session.set('addSubTask', this._id);
    },
    'click .addTask': function(e, t) {
        Session.set('addTask', '');
        Session.set('addSubTask', '');
        return Session.set('addTask', this._id);
    }
});

Template.task.helpers({
    selectedTask: function() {
        return Session.get('selectedTask') === this._id;
    },
    addTask: function() {
        return Session.get('addTask') === this._id;
    },
    addSubTask: function() {
        return Session.get('addSubTask') === this._id;
    },
    subTasks: function() {
        return Tasks.find({parent: this._id});
    }
});

Template.editTaskForm.events({
    'click #cancelUpdate': function(e, t) {
        return Session.set('selectedTask', '');
    }
});
