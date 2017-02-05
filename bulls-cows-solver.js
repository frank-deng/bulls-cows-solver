(function(root, factory) {
	'use strict';
	if (typeof define === 'function' && define.amd) {
		// AMD support.
		define([], factory);
	} else if (typeof exports === 'object') {
		// NodeJS support.
		module.exports = factory();
	} else {
		// Browser global support.
		root.bulls_cows_solver = factory();
	}
}(this, function() {
	'use strict';
	var candidates_all=[];
	for (var n0 = 123; n0 <= 9876; n0++) {
		var n = ('0'+n0).substr(-4), valid = true;
		for (var i = 0; i < 3; i++) {
			var c = n.charAt(i);
			if (n.indexOf(c) != n.lastIndexOf(c)) {
				valid = false;
				break;
			}
		}
		if (valid) {
			candidates_all.push(n);
		}
	}

	var isValidInput = function(guess, result) {
		var validResults = [
			'0A0B', '0A1B', '0A2B', '0A3B', '0A4B',
			'1A0B', '1A1B', '1A2B', '1A3B',
			'2A0B', '2A1B', '2A2B', '3A0B',
			'4A0B',
		];
		if (!/^\d{4}$/.test(guess)) {
			return false;
		}
		for (var i = 0; i < 3; i++) {
			var c = guess.charAt(i);
			if (guess.indexOf(c) != guess.lastIndexOf(c)) {
				return false;
			}
		}
		if (-1 == validResults.indexOf(result)) {
			return false;
		}
		return true;
	}
    var compare = function(n0,n1){
		var i, j, a=0, b=0;
		for (i = 0; i < 4; i++) {
			if (n0.charAt(i) == n1.charAt(i)) {
				a++;
			} else {
				for (j = 0; j < 4; j++) {
					if (i != j && n0.charAt(i) == n1.charAt(j)) {
						b++;
					}
				}
			}
		}
		return a+'A'+b+'B';
	}
    return function(filter){
		if (!(filter instanceof Array)) {
			throw 'Invalid input.';
		}

		if (filter.length == 0) {
			return undefined;
		}

		for (var i = 0; i < filter.length; i++) {
			var f = filter[i];
			try {
				if (!isValidInput(f.guess, f.result)){
					throw 'Input '+(i+1)+' is invalid.';
				}
			} catch(e) {
				throw 'Input '+(i+1)+' is invalid.';
			}
		}

		var result = new Array(), filtered = false, candidate;
		for (var i = 0; i < candidates_all.length; i++) {
			candidate = candidates_all[i];
			filtered = false;
			for (var j = 0; j < filter.length; j++) {
				var f = filter[j];
				if (compare(candidate, f.guess) != f.result) {
					filtered = true;
					break;
				}
			}
			if (!filtered) {
				result.push(candidate);
			}
		}
		return result;
    }
}));
