console.log();
var bulls_cows_solver = require('./bulls-cows-solver.js');
QUnit.test("Test", function(assert) {
	assert.deepEqual(bulls_cows_solver([
			{guess:'1234', result:'1A3B'},
		]),
		[ '1342', '1423', '2314', '2431', '3124', '3241', '4132', '4213' ]
	);
});
