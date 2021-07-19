var solver_result = document.getElementById('solver_result');
document.getElementById('form_bulls_cows_solver').addEventListener('submit',(e)=>{
	e.preventDefault();
	var target=e.target;
	var input_all = new Array();
	for (var i = 0; i < 16; i+=2) {
		var guess = target[i].value;
		var result = target[i+1].value;
		if (guess) {
			input_all.push({guess:guess, result:result});
		}
	}
	try {
		var filter_result = bullsCowsSolver(input_all);
		solver_result.innerHTML = '';
		if (undefined !== filter_result) {
			for (var i = 0; i < filter_result.length; i++) {
				if (i > 0) {
					solver_result.innerHTML += ' ';
				}
				solver_result.innerHTML += filter_result[i];
			}
		}
	} catch(e) {
		alert(e);
	}
	return false;
});
