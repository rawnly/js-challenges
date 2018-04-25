/**
 * @name typeCheck
 * @param {Array} args Arguments
 * 
 * @throws SyntaxError
 * 
 * @return null
 */
module.exports = function (...args) {
	args.map(({
		param,
		type
	}) => {
		var expected = type;
		var varType = Array.isArray(param) ? 'array' : typeof param;

		if (Array.isArray(expected)) {
			if (expected.indexOf(varType) < 0) {
				throw new SyntaxError(`Expected ${expected.join( expected.length > 1 ? ' or ' : '')} saw ${varType}`);
			}

			return;
		} else {
			if (expected !== varType) {
				throw new SyntaxError(`Expected ${expected} saw ${varType}`)
			}

			return;
		}
	})

	return;
}