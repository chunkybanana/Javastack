# Javastack
Java but stack-based and more cursed

## The language

Javastack has three types of tokens:  

- Numeric literals, marked by a string of digits
- String literals, marked by a string of characters in between `"`
- Commands, a string of letters.

The commands are all available in `elements.md`.

It also has several constructs, such as loops, conditionals, etc:

- `twice`, `thrice`, `four` and `five` loops evaluate the code within them said amount of times
- `times` loops pop the stack, and loop that many times
- `forever` loops run forever
- `foreach` loops iterate over each item of a list or string (item is currently inaccessible), using the current stack
- `while` loops pop the stack at every iteration and check that that is truthy
- `map` iterates over each value of a list or string in its own stack, popping it at the end to return a value and modify the existing value
- `if` pops the stack and runs the code between it and an `else` or `end` if the popped value is truthy
- `else` can only go after an `if`, and runs the code between it and an `end` if the popped value of the `if` is falsy
- `end` closes any structure

