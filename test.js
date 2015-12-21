'use strict'

let assert = require('assert')
let fibs = require('./index')

let expected = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]

assert.deepEqual(fibs.fib1(1),               expected.slice(0, 1), 'First item')
assert.deepEqual(fibs.fib1(5),               expected.slice(0, 5), 'First 5 items')
assert.deepEqual(fibs.fib1(expected.length), expected.slice(0),    'All items')
