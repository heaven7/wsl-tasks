/**
 * Tasks schema
 * @type {SimpleSchema}
 */

Schemas.Tasks = new SimpleSchema([Schemas.Base, {

    title: {
        type: String
    },

    description: {
        type: String,
        optional: true
    },

    startDate: {
        type: Date,
        optional: true
    },

    stopDate: {
        type: Date,
        optional: true
    },

    estimatedTimeToComplete: {
        type: String,
        optional: true
    },

    publicity: {
        type: Number,
        optional: true
    },

    completed: {
        type: Number,
        optional: true
    },

    category: {
        type: SimpleSchema.RegEx.Id,
        optional: true
    },

    /**
     * Parent tasks
     */

    parent: {
        type: String,
        regEx: SimpleSchema.RegEx.Id,
        optional: true
    },

    /**
     * Incoming tasks
     * Tasks which depend on others
     */

    incomingTasks: {
        type: [SimpleSchema.RegEx.Id],
        optional: true
    },

    /**
     * Outgoing tasks
     * Tasks which depend on others
     */

    outgoingTasks: {
        type: [SimpleSchema.RegEx.Id],
        optional: true
    }

}]);

/**
 * TaskCategories schema
 * @type {SimpleSchema}
 */

Schemas.TaskCategories = new SimpleSchema([Schemas.Base, {
    title: {
        type: String
    },

    /**
     * Parent category
     */

    parent: {
        type: String,
        regEx: SimpleSchema.RegEx.Id,
        optional: true
    }
}]);


/**
 * Attach schemas
 */

Meteor.startup(function() {
    Schemas.Tasks.i18n("schemas.tasks");
    Tasks.attachSchema(Schemas.Tasks);
    Schemas.TaskCategories.i18n("schemas.taskcategories");
    TaskCategories.attachSchema(Schemas.TaskCategories);
});

