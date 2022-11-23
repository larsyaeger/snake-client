let connection;
const handleUserInput = (data) => {
	//console.log(data);
	if (data === '\u0003') {
		process.exit(0);
	} else if (data === 'w') {
		connection.write('Move: up');
	} else if (data === 'a') {
		connection.write('Move: left');
	} else if (data === 's') {
		connection.write('Move: down');
	} else if (data === 'd') {
		connection.write('Move: right');
	}
};
const setupInput = (conn) => {
	connection = conn;
	const stdin = process.stdin;
	stdin.setRawMode(true);
	stdin.setEncoding('utf8');
	stdin.resume();
	stdin.on('data', handleUserInput);
	return stdin;
};
//module.exports = handleUserInput;
module.exports = setupInput;