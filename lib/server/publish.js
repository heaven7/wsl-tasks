Meteor.publish('tasks', function () {
    return Tasks.find();
    return TaskCategories.find();
});