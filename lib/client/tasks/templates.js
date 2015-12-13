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
    'click .selectTask': function(e, t) {
        return Session.set('selectedTask', this._id);
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
    selectedTask: function() {
        return Session.get('selectedTask') === this._id;
    },
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
    }
});

Template.insertTaskForm.helpers({
    addTaskText: function () {
        return i18n.t('add_task');
    }
});

Template.editTaskForm.events({
    'click #addTaskCategory': function(e, t) {
        console.log('addTaskCategory');
    }
});

Template.editTaskForm.events({
    'click #cancelUpdate': function(e, t) {
        Session.set('selectedTask', '');
        return false;
    }
});


Template.editTaskForm.helpers({
    taskCategories: function() {
        return TaskCategories.find({doc: this.doc, docType: this.docType}).map(function (category) {
                return {label: category.title, value: category._id}
            }
        );
    },
    incomingTasks: function() {
        return Tasks.find({_id: {$ne: this.model._id}, doc: this.doc, docType: this.docType}).map(function (task) {
                return {label: task.title, value: task._id}
            }
        );
    },
    outgoingTasks: function() {
        return Tasks.find({_id: {$ne: this.model._id}, doc: this.doc, docType: this.docType}).map(function (task) {
                return {label: task.title, value: task._id}
            }
        );
    }
});


