Meteor.publish(null, function () {
    return Tasks.find();
    return TaskCategories.find();
});