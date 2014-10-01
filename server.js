var harp = require('harp');
var port = process.env.PORT || 5000;

harp.server(__dirname, { port: port } );

console.info('Talks are being served on port:', port);