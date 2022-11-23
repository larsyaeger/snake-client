//const net = require('net');
const connect = require('./client');
const setupInput = require('./input');
console.log('connecting ...');
//connect();
const conn = connect();
setupInput(conn);