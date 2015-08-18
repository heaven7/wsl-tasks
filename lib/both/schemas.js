/**
 * Tasks schema
 * @type {SimpleSchema}
 */

Schemas.Tasks = new SimpleSchema({

    title: {
        type: String
    }

});

/**
 * Attach schemas
 */

Tasks.attachSchema(Schemas.Tasks);
