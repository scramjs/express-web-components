#!/usr/bin/env node

//TODO get the package name from package.json somehow

var exec = require('child_process').exec;
var cmd = 'mkdir -p node_modules/scram-express && ln -s ../../scram-express-app.html node_modules/scram-express/scram-express-app.html && ln -s ../../scram-express-middleware.html node_modules/scram-express/scram-express-middleware.html';

var newProcess = exec(cmd);

newProcess.stdout.on('data', function(data) {
    console.log(data);
});

newProcess.stderr.on('data', function(data) {
    console.log(data);
});
