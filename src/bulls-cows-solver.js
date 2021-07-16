export function hasDuplicateDigit(num){
	num=String(num);
	let len=num.length;
	for(let i=0; i<len; i++){
		var char = num.charAt(i);
		if(num.indexOf(char) != num.lastIndexOf(char)){
			return true;
		}
	}
	return false;
}

var candidates_all=[];
for (var n0 = 123; n0 <= 9876; n0++) {
	var n = ('00'+n0).substr(-4);
	if (!hasDuplicateDigit(n)){
		candidates_all.push(n);
	}
}

export function isValidInput(guess, result) {
	var validResults = {
		'0A0B':true, '0A1B':true, '0A2B':true, '0A3B':true, '0A4B':true,
		'1A0B':true, '1A1B':true, '1A2B':true, '1A3B':true,
		'2A0B':true, '2A1B':true, '2A2B':true, '3A0B':true
	};
	return !!(/^\d{4}$/.test(guess) && !hasDuplicateDigit(guess) && validResults[result.toUpperCase()]);
}
export function compare(n0,n1){
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
export default function(filter){
	if (!(filter instanceof Array)) {
		throw TypeError('Input must be an array');
	}

	if (filter.length == 0) {
		return undefined;
	}

	for (let i = 0; i < filter.length; i++) {
		let filterItem = filter[i];
		try {
			if (!isValidInput(filterItem.guess, filterItem.result)){
				throw Error('Input '+(i+1)+' is invalid.');
			}
		} catch(e) {
			throw Error('Input '+(i+1)+' is invalid.');
		}
	}

	let result = new Array(), filtered = false, candidate;
	for (let candidate of candidates_all) {
		filtered = false;
		for (let filterItem of filter) {
			if (compare(candidate, filterItem.guess) != filterItem.result) {
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