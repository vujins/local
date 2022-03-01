/* eslint-disable @typescript-eslint/no-var-requires */
const Service = require('node-windows').Service;
const path = require('path');

// Create a new service object
const svc = new Service({
  name: 'Hassio Local Server',
  description: 'NestJS server that executes Hassio requests.',
  script: path.join(__dirname, '../dist/main.js'),
  nodeOptions: ['--harmony', '--max_old_space_size=4096'],
  workingDirectory: path.join(__dirname, '../src'),
  //, allowServiceLogon: true
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install', () => {
  svc.start();
});

svc.install();
