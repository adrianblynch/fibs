'use strict'

function fib1(length) {

	let seq = [1]

	for (let i = 1; i < length; i++) {
		let a = seq[i - 1]
		let b = seq[i - 2] || 0
		seq[i] = a + b
	}

	return seq

}

function fib2(length) {

	function fib(n) {
		if (n < 2) {
			return 1
		}
		return fib(n - 1) + fib(n - 2)
	}

	let seq = []

	for (let i = 0; i < length; i++) {
		seq.push(fib(i))
	}

	return seq

}

function fib3(length) {

	// TODO: Implement using generators

}

module.exports = {
	fib1: fib1,
	fib2: fib2
}
