Bulls and Cows Solver
=====================

Get all the possible answers for Bulls and Cows game, based on the history of guesses in one round.

Usage
-----

Node

	var bulls_cows_solver = require('./bulls-cows-solver');
	var result = bulls_cows_solver([
		{guess:'1234', result:'1A3B'},
		{guess:'2134', result:'2A2B'},
	]);

Brwoser

	<script type='text/javascript' src='bulls-cows-solver.js'></script>
	<script type='text/javascript'>
		var result = bulls_cows_solver([
			{guess:'1234', result:'1A3B'},
			{guess:'2134', result:'2A2B'},
		]);
	</script>

