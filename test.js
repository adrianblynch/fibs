'use strict'

let assert = require('assert')
let fibs = require('./index')

let expected = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]

for (let i = 1; i <= expected.length; i++) {
	assert.deepEqual(fibs.fib1(i), expected.slice(0, i), `#fib1() - First ${i} item(s)`)
	assert.deepEqual(fibs.fib2(i), expected.slice(0, i), `#fib2() - First ${i} item(s)`)
}
