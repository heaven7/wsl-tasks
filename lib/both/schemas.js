/**
 * Tasks schema
 * @type {SimpleSchema}
 */

Schemas.Tasks = new SimpleSchema({

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

    parent: {
        type: String,
        regEx: SimpleSchema.RegEx.Id,
        optional: true
    }

});

/**
 * Attach schemas
 */

Schemas.add(Schemas.packages(Schemas.Tasks), Tasks);
