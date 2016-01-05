Tasks.before.insert(function (userId, doc) {
    doc.owners = typeof doc.owners == 'array' ? doc.owners : [];
    doc.owners.push(userId);
    doc.createdAt = Date.now();
});

/**
 * Tasks settings & roles (after insert)
 */

WSL.collection.addSettingsAfter(Tasks, 'Tasks');
WSL.collection.addRolesAfter(Tasks, ['role_tasks']);
