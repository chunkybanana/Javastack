# Builtins
 command | inputs | effect
 ---|---|---
|`add`| (a: number / string, b: number / string) | a + b (addition) |
|`and`| (a: any, b: any) | a && b (logical)|
|`append`| (a:any, b:non-number) | b.push(a) (string b will produce list of chars and a)|
|`bitand`| (a: number, b: number)| a & b (bitwise) |
|`bitnot`| (a: number) | ~a (bitwise not) |
|`bitor`| (a: number, b: number)| a \| b (bitwise) |
|`ceil`| (a: number) | Math.ceil(a) |
|`char`| (a:number) | chr(a) |
|`charcode`| (a:string) | ord(a[0]) |
|`double`| (a:number) | a * 2 |
|`duplicate`| (a: any) | a,a (duplicate) |
|`floor`| (a: number) | Math.floor(a) |
|`half`| (a:number) | a / 2 |
|`index`| (a: number, b: any) | b\[a\] (index a into b) |
|`iterate`| (a: any) | stack.push(...a) (append each item of a to the stack) |
|`maybe`| (none) | A random boolean |
|`multiply`| (a: number, b:number) | a * b (multiply)|
|`not`| (a: any) | !a (logical not)  |
|`or`| (a: any, b: any) | a \|\| b (logical)|
|`pair`| (a:any, b:any) | \[b,a\] (pair) |
|`prepend`| (a: any, b: non-number) | b.unshift(a) (string b will produce list of chars and a) |
|`print`|(a: any) | Print a to stdout|
|`quadruple`| (a:number) | a * 4 |
|`quarter`| (a:number) | a / 4 |
|`randfloat`| (none) | Math.random() (random float between 0 and 1)
|`randint`| (a: number) | random integer between 0 and a |
|`randminmax`| (a:  number, b: number) | random integer between a and b |
|`random`| (a: any) | random item from a |
|`repeat`| (a:number, b:string) | b repeated a times
|`sum`| (a:list) | sum(a) |
|`swap`| (a: any, b: any) | b, a (swap the top two elements) |
|`third`| (a:number) | a / 3 |
|`triple`| (a:number) | a * 3 |
|`wrap`| (none) | stack |