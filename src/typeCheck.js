/**
 * @name typeCheck
 * @param {Array} args Arguments
 * 
 * @throws SyntaxError
 * 
 * @return null
 */
module.exports = function (...args) {
	let defaultOptions = {
		throwError: true
	};

	if (Array.isArray(args[0])) {
		defaultOptions = Object.assign(defaultOptions, args[1]);
		args = args[0];
	}

	return args.filter(({
		param,
		type
	}) => {
		var expected = type;
		var varType = Array.isArray(param) ? 'array' : typeof param;

		if (/\|/g.test(expected)) {
			expected = expected.split('|');
		}

		if (Array.isArray(expected)) {
			if (expected.indexOf(varType) < 0) {
				if (defaultOptions.throwError === true) {
					throw new SyntaxError(`Expected ${expected.join( expected.length > 1 ? ' or ' : '')} saw ${varType}`);
				}

				return false;
			}

			return true;
		} else {
			if (expected !== varType) {
				if (defaultOptions.throwError === true) {
					throw new SyntaxError(`Expected ${expected} saw ${varType}`)
				}

				return false;
			}

			return true;
		}
	}).length > 0
}