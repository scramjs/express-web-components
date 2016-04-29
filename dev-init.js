#!/usr/bin/env node

//TODO to make this a module of its own, get the package name from package.json somehow

var exec = require('child_process').exec;
var cmd = 'mkdir -p node_modules/scram-express && ln -s ../../express-app.html node_modules/scram-express/express-app.html && ln -s ../../express-middleware.html node_modules/scram-express/express-middleware.html';

var newProcess = exec(cmd);

newProcess.stdout.on('data', function(data) {
    console.log(data);
});

newProcess.stderr.on('data', function(data) {
    console.log(data);
});
