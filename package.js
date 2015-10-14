Package.describe({
  name: 'heaven7:wsl-tasks',
  version: '0.0.1',
  summary: 'Tasks package',
  git: 'https://github.com/heaven7/wsl-tasks.git',
  documentation: 'README.md'
});

both = ['client','server'];

Package.onUse(function(api) {
    api.versionsFrom('1.1.0.2');

    api.use(['heaven7:wsl-core@0.0.1'], both);
    api.imply(['heaven7:wsl-core']);

    api.addFiles([
        'lib/both/router.js',
        'lib/both/tasks.js',
        'lib/both/schemas.js'
    ], both);

    api.addFiles([
        'lib/client/templates.html',
        'lib/client/helpers.js',
        'lib/client/templates.js'
    ], 'client');

    api.addFiles([
        'lib/server/publish.js',
        'lib/server/methods.js',
        'lib/server/allow.js'
    ], 'server');

    api.export('Tasks', both);

});
