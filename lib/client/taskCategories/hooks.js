TaskCategories.before.insert(function (userId, doc) {
    doc.owners = typeof doc.owners == 'array' ? doc.owners : [];
    doc.owners.push(userId);
    doc.createdAt = Date.now();
});

/**
 * TaskCategories settings & roles (after insert)
 */

WSL.collection.addSettingsAfter(TaskCategories, 'TaskCategories');
WSL.collection.addRolesAfter(TaskCategories, ['role_taskCategories']);
