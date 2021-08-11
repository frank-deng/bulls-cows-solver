import assert from 'assert';
import {hasDuplicateDigit, isValidInput, compare, default as bullsCowsSolver} from './src/bulls-cows-solver';

describe('Internal function test',function(){
	it('hasDuplicateDigit()',function(){
		assert.strictEqual(hasDuplicateDigit('1324'),false);
		assert.strictEqual(hasDuplicateDigit('5678'),false);
		assert.strictEqual(hasDuplicateDigit('1122'),true);
		assert.strictEqual(hasDuplicateDigit('1231'),true);
		assert.strictEqual(hasDuplicateDigit('1132'),true);
		assert.strictEqual(hasDuplicateDigit('3211'),true);
	});
	it('compare()',function(){
		assert.strictEqual(compare('1234', '5678'),'0A0B');
		assert.strictEqual(compare('1234', '5671'),'0A1B');
		assert.strictEqual(compare('1234', '5621'),'0A2B');
		assert.strictEqual(compare('1234', '5321'),'0A3B');
		assert.strictEqual(compare('1234', '4321'),'0A4B');
		assert.strictEqual(compare('1234', '5674'),'1A0B');
		assert.strictEqual(compare('1234', '2431'),'1A3B');
		assert.strictEqual(compare('1324', '1234'),'2A2B');
		assert.strictEqual(compare('1324', '1394'),'3A0B');
		assert.strictEqual(compare('1234', '1234'),'4A0B');
	});
	it('isValidInput()',function(){
		assert.strictEqual(isValidInput('1324', '0A2B'),true);
		assert.strictEqual(isValidInput('1324', '0a2b'),true);
		assert.strictEqual(isValidInput('1324', '3a0b'),true);
		assert.strictEqual(isValidInput('5678', '1A4B'),false);
		assert.strictEqual(isValidInput('1322', '0A2B'),false);
	});
});
describe('Main Function Test',function(){
	it('Filter result',function(){
		assert.deepStrictEqual(bullsCowsSolver([
				{guess:'1234', result:'1A3B'},
			]),
			[ '1342', '1423', '2314', '2431', '3124', '3241', '4132', '4213' ]
		);
	});
	it('Empty input',function(){
		assert.strictEqual(bullsCowsSolver([]), undefined);
	});
	it("Invalid Input Detection",async function(){
		assert.throws(()=>bullsCowsSolver(), TypeError('Input must be an array'));
		assert.throws(()=>bullsCowsSolver("1234"), TypeError('Input must be an array'));
		assert.throws(()=>bullsCowsSolver(23543), TypeError('Input must be an array'));
		assert.throws(()=>bullsCowsSolver([
			{guess:'1234', result:'1A3B'},
			{guess:'32a9',},
			{guess:'3234', result:'1A3B'},
		]), Error('Input 2 is invalid.'));
		assert.throws(()=>bullsCowsSolver([
			{result:'1A3B'},
			{guess:'32a9',},
			{guess:'3234', result:'1A3B'},
		]), Error('Input 1 is invalid.'));
		assert.throws(()=>bullsCowsSolver([
			{guess:'1234', result:'1A3B'},
			{guess:'32a9', result:'0A0B'},
			{guess:'3234', result:'1A3B'},
		]), Error('Input 2 is invalid.'));
		assert.throws(()=>bullsCowsSolver([
			{guess:'1234', result:'1A3B'},
			{guess:'234', result:'0A0B'},
			{guess:'3234', result:'1A3B'},
		]), Error('Input 2 is invalid.'));
		assert.throws(()=>bullsCowsSolver([
			{guess:'1234', result:'1A3B'},
			{guess:'23456', result:'0A0B'},
			{guess:'3274', result:'1A3B'},
		]), Error('Input 2 is invalid.'));
		assert.throws(()=>bullsCowsSolver([
			{guess:'1234', result:'1A3B'},
			{guess:'2345', result:'0A0B'},
			{guess:'3274', result:'1A4B'},
		]), Error('Input 3 is invalid.'));
	});
});
