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

Schemas.addBaseTo(Tasks);
Tasks.attachSchema(Schemas.Tasks);
