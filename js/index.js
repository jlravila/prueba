/** Opción 1: Bucle con let **/
var x = 5;
var y = 10;
var z = x + y;
alert (z);



console.log("'p' Antes: ", p); // Antes: undefined

console.log("bucle con 'let'");

for (let p = 0; p < 3; p++)

console.log("'p' durante - ", p); // Durante: 0, 1, 2

console.log("'p' Después: ", p); // Después: undefined

console.log(typeof p);

/*console.log(p.constructor.name);*/



/** Opción 2: Bucle con var **/

console.log("'p' Antes: ", p); // Antes: undefined

console.log("bucle con 'var'");

for (var p = 0; p < 3; p++)

console.log("- ", p); // Durante: 0, 1, 2

console.log("Después: ", p); // Después: 3 (WTF!)

console.log(typeof p);

console.log(p.constructor.name);