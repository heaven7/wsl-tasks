Template.insertTaskForm.helpers({
    addTaskText: function () {
        return i18n.t('add_task');
    }
});

Template.editTaskForm.onRendered(() => {
   WSL.wysiwyg.editor('.wysiwyg')
})

Template.editTaskForm.events({
    'click #cancelUpdate': function(e, t) {
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