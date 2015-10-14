/**
 * Tasks schema
 * @type {SimpleSchema}
 */

Schemas.Tasks = new SimpleSchema({

    title: {
        type: String
    },

    parent: {
        type: String,
        regEx: SimpleSchema.RegEx.Id
    }

});

/**
 * Attach schemas
 */

Schemas.add(Schemas.packages(Schemas.Tasks), Tasks);
