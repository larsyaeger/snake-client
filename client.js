const net = require('net');
const { IP, PORT } = require("./constants");
const host = IP//'165.227.47.243';
const port = PORT//50541;
const connect = () => {
	const conn = net.createConnection({
		host,
		port
	});

	//interpret incoming data as text
	conn.setEncoding('utf8');
	conn.on('connect', () => {
		console.log('successfully connected');
	});
	conn.on('connect', () => {
		conn.write('Name: Lrs');
	});
	// conn.on('connect', () => {
	// 	conn.write('Move: up');
	// });
	conn.on('data', (data) => {
		console.log(data.toString());
	});

	return conn;
};

module.exports = connect;