/**
 * Tasks ownership (before insert)
 */

WSL.collection.addOwnershipBefore(Tasks);

/**
 * Tasks settings & roles (after insert)
 */

WSL.collection.addSettingsAfter(Tasks, 'Tasks');
WSL.collection.addRolesAfter(Tasks, ['role_tasks']);
