/**
 * Tasks Mongo Collection
 * @type {Mongo.Collection}
 */

TaskCategories = new Meteor.Collection('taskCategories');

/**
 * Ensure index
 */

if(Meteor.isServer) {
    TaskCategories._ensureIndex({ title: "text" });
}
