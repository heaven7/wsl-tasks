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

    api.use(['heaven7:wsl-core'], both);
    api.imply(['heaven7:wsl-core']);

    api.addFiles([
        'router.js',
        'tasks.js',
        'schemas.js'
    ], both);

    api.addFiles([
        'templates.html',
        'templates.js'
    ], 'client');

    api.addFiles([
        'publish.js'
    ], 'server');

});
