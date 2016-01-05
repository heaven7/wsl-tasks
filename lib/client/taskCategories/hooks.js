/**
 * TaskCategories ownership (before insert)
 */

WSL.collection.addOwnershipBefore(TaskCategories);

/**
 * TaskCategories settings & roles (after insert)
 */

WSL.collection.addSettingsAfter(TaskCategories, 'TaskCategories');
WSL.collection.addRolesAfter(TaskCategories, ['role_taskCategories']);
