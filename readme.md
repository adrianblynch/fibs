# Fibs

Methods to generate fibonacci sequences using:

- **fib1()** - Regular looping
- **fib2()** - Recursion (not optimised)
- **fib3()** - Generators (still to do)

## Install

`npm install fibs`

## Usage

```
var fibs = require('fibs')

fibs.fib1(5) // [ 1, 1, 2, 3, 5 ]
fibs.fib2(5) // [ 1, 1, 2, 3, 5 ]
```

## Notes

- This isn't really for use, it's more of an exercise for the brain.

## Todo

- Implement fib3() using a generator
- Allow the sequence to start at 0
