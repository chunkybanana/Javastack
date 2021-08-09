# Builtins
 command | inputs | effect
 ---|---|---
|`add`| (a: number / string, b: number / string) | a + b (addition) |
|`alphabet`| (none) | lowercase alphabet
|`logicand`| (a: any, b: any) | a && b (logical)|
|`append`| (a:any, b:non-number) | b.push(a) (string b will produce list of chars and a)|
|`ascii`| (none) | Printable ASCII |
|`bitand`| (a: number, b: number)| a & b (bitwise) |
|`bitnot`| (a: number) | ~a (bitwise not) |
|`bitor`| (a: number, b: number)| a \| b (bitwise) |
|`ceil`| (a: number) | Math.ceil(a) |
|`char`| (a:number) | chr(a) |
|`charcode`| (a:any) | ord(a[0]) |
|`context`| (none) | context variable |
|`divide`| (a: number, b: number) | b/a |
|`divmod`| (a: number, b: number) | [floor(b/a), b%a] |
|`double`| (a:non-list) | a + a |
|`duplicate`| (a: any) | a,a (duplicate) |
|`equal`|(a: any, b: any) | a == b |
|`eval`| (a: string) | eval as Javastack code |
|`flatprint`|(a: any) | print without newline |
|`floor`| (a: number) | Math.floor(a) |
|`floordiv`| (a: number, b: number) | floor(b/a) |
|`half`| (a:number) | a / 2 |
|`increment`|(a: number) | a + 1|
|`index`| (a: number, b: any) | b\[a\] (index a into b) |
|`iterate`| (a: any) | stack.push(...a) (append each item of a to the stack) |
|`join`| (a: string, b: list) | b.join(a) |
|`length`| (a: any) | a.length |
|`maybe`| (none) | A random boolean |
|`multiply`| (a: number, b:number) | a * b (multiply)|
|`logicnot`| (a: any) | !a (logical not)  |
|`logicor`| (a: any, b: any) | a \|\| b (logical)|
|`pair`| (a:any, b:any) | \[b,a\] (pair) |
|`pop`|(a: any) | pop stack |
|`power`| (a: number, b: number) | a ** b
|`prepend`| (a: any, b: non-number) | b.unshift(a) (string b will produce list of chars and a) |
|`print`|(a: any) | Print a to stdout|
|`quadruple`| (a:number) | a + a + a + a |
|`quarter`| (a:number) | a / 4 |
|`quote`| (none) | '"' - ascii quote character |
|`randfloat`| (none) | Math.random() (random float between 0 and 1)
|`randint`| (a: number) | random integer between 0 and a |
|`randminmax`| (a:  number, b: number) | random integer between a and b |
|`random`| (a: any) | random item from a |
|`range`| (a: number) | 0...n |
|`remove`| (a: any, b: any) | remove all occurences of a from b |
|`repeat`| (a:number, b:any) | b repeated a times |
|`replace`| (a: any, b: any, c: any) | c.replaceAll(b,a) |
|`split`| (a: any, b: any) | b.split(a) |
|`square`| (a: number) | a ** 2 |
|`subtract`| (a: number, b: number) | b - a |
|`sum`| (a:list) | sum(a) |
|`swap`| (a: any, b: any) | b, a (swap the top two elements) |
|`third`| (a:number) | a / 3 |
|`triple`| (a:non-list) | a + a + a |
|`wrap`| (none) | \[stack\] |
|`zpake`| (none) | space char |