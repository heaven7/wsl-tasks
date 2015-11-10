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
    }
}]);


/**
 * Attach schemas
 */

Tasks.attachSchema(Schemas.Tasks);
TaskCategories.attachSchema(Schemas.TaskCategories);
