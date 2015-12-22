Template.tasksList.helpers({
    tasks: function() {
        var tTasks;
        tTasks = Tasks.find({doc: this.doc, docType: this.docType, category: this.category, parent: null});
        if (tTasks.count() === 0) {
            return false;
        } else {
            return tTasks;
        }
    }
});

Template.tasksList.events({
    'click .editTask': function(e, t) {
        return Session.set('editTask', this._id);
    },
    'click .deleteTask': function(e, t) {
        //console.log(this);
        var task = Tasks.findOne(this._id);
        return Meteor.call('deleteTask', task, function(error, result) {
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
        Session.set('addSubTask', '');
        Session.set('addTask', '');
        Session.set('addSubTask', this._id);
    },
    'click .addTask': function(e, t) {
        Session.set('addTask', '');
        Session.set('addSubTask', '');
        Session.set('addTask', this._id);
    }
});

Template.task.helpers({
    editTask: function() {
        return Session.get('editTask') === this._id;
    },
    addTask: function() {
        return Session.get('addTask') === this._id;
    },
    addSubTask: function() {
        return Session.get('addSubTask') === this._id;
    },
    subTasks: function() {
        return Tasks.find({parent: this._id});
    },
    addTaskText: function () {
        return i18n.t('add_task');
    },
    addSubTaskText: function () {
        return i18n.t('add_subtask');
    },
    editTaskText: function () {
        return i18n.t('edit');
    },
    deleteTaskText: function () {
        return i18n.t('delete');
    },
    userHasPermission: function() {
        return Roles.userIsInRole(Meteor.userId(), "project-admin", this.doc) ||
            Roles.userIsInRole(Meteor.userId(), "role_tasks", this._id)
    }
});