Package.describe({
  name: 'heaven7:wsl-tasks',
  version: '0.0.3_2',
  summary: 'Tasks package',
  git: 'https://github.com/heaven7/wsl-tasks.git',
  documentation: 'README.md'
});

both = ['client','server'];

Package.onUse(function(api) {
    api.versionsFrom('1.2');

    api.use(['heaven7:wsl-core@0.0.3_1'], both);
    api.imply(['heaven7:wsl-core']);

    api.addFiles([
        'lib/both/router.js',
        'lib/both/tasks.js',
        'lib/both/taskCategories.js',
        'lib/both/schemas.js'
    ], both);

    api.addFiles([
        'lib/client/tasks/forms.html',
        'lib/client/tasks/forms.js',
        'lib/client/tasks/templates.html',
        'lib/client/tasks/helpers.js',
        'lib/client/tasks/templates.js',
        'lib/client/tasks/hooks.js',
        'lib/client/taskCategories/forms.html',
        'lib/client/taskCategories/forms.js',
        'lib/client/taskCategories/templates.html',
        'lib/client/taskCategories/helpers.js',
        'lib/client/taskCategories/templates.js',
        'lib/client/taskCategories/hooks.js'
    ], 'client');

    api.addFiles([
        'lib/server/publish.js',
        'lib/server/methods.js',
        'lib/server/allow.js'
    ], 'server');

    api.export('Tasks', both);
    api.export('TaskCategories', both);

});
