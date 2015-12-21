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

module.exports = {
	fib1: fib1
}
