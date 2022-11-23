const handleUserInput = (data) => {
	//console.log(data);
	if (data === '\u0003') {
		process.exit(0);
	};
};
const setupInput = () => {
	const stdin = process.stdin;
	stdin.setRawMode(true);
	stdin.setEncoding('utf8');
	stdin.resume();
	stdin.on('data', handleUserInput);
	return stdin;
};
//module.exports = handleUserInput;
module.exports = setupInput;