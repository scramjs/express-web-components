#!/usr/bin/env node

//TODO to make this a module of its own, get the package name from package.json somehow

var exec = require('child_process').exec;
var cmd = `
    mkdir -p bower_components/express-web-components &&
    ln -s ../../express-app.html bower_components/express-web-components/express-app.html &&
    ln -s ../../express-middleware.html bower_components/express-web-components/express-middleware.html &&
    ln -s ../../express-router.html bower_components/express-web-components/express-router.html &&
    ln -s ../../express-config.html bower_components/express-web-components/express-config.html &&
    ln -s ../../express-param.html bower_components/express-web-components/express-param.html
`;

var newProcess = exec(cmd);

newProcess.stdout.on('data', function(data) {
    console.log(data);
});

newProcess.stderr.on('data', function(data) {
    console.log(data);
});
