import './index.less';

var solver_result = document.getElementById('solver_result');
document.getElementById('form_bulls_cows_solver').addEventListener('submit',(e)=>{
	e.preventDefault();
	var guess_elem_all = document.getElementsByName('guess[]');
	var result_elem_all = document.getElementsByName('result[]');
	var input_all = new Array();
	for (var i = 0; i < 8; i++) {
		var guess = guess_elem_all[i].value;
		var result = result_elem_all[i].value;
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
