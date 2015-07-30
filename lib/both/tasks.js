/**
 * Tasks Mongo Collection
 * @type {Mongo.Collection}
 */

Tasks = new Meteor.Collection('tasks');

/**
 * Ensure index
 */

if(Meteor.isServer) {
    Tasks._ensureIndex({ title: "text" });
}
