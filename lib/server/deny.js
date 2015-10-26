Tasks.deny({
    insert: function(userId, doc) {
        console.log('deny tasks: ' +  doc.owners.indexOf(userId) < -1);
        return doc.owners.indexOf(userId) < -1;
    },
    update: function(userId, doc, fields, modifier) {
        return doc.owners.indexOf(userId) < -1;
    },
    remove: function(userId, doc) {
        return doc.owners.indexOf(userId) > -1;
    }
});