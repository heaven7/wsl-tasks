Meteor.publish('tasks', function () {
    return Tasks.find();
});
Meteor.publish('taskCategories', function () {
    return TaskCategories.find();
});