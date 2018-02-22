#! /usr/local/bin node

const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

const functions = require('.');
let requirements = [];

mkdirp.sync( path.join(__dirname, 'tests') );

for (funcname in functions) {
	requirements.push(funcname);
	var testName = `${funcname.split(/[A-Z]/g)[0]} ${funcname.match(/[A-Z]/g)}${funcname.split(/[A-Z]/g)[1]}`.toUpperCase();

	var template = `const test = require('ava');
const {${funcname}} = require('..');
const solutions = require('../src/solutions')

test('${testName}', t => {
	var argument = 'hello';
	var output = ${funcname}.apply(this, argument);

	return t.deepEqual(output, solutions.${funcname}.apply(this, argument));
})`

	var testPath = path.join(__dirname, 'tests', `_${funcname}.js`);

	if ( !fs.existsSync(testPath) ) {
		fs.writeFileSync(testPath, template)
	}
}

requirements = requirements.map(req => {
	return `require('./tests/_${req}');`
})

fs.unlinkSync(path.join(__dirname, 'test.js'));
fs.writeFileSync(path.join(__dirname, 'test.js'), requirements.join('\n'));