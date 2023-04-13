//sort ordena comparando los valores como cadenas de caracteres

const array1 = [1, 30, 4, 21, 10, 20];
array1.sort();
console.log(array1);


const array2 = ["dia", "azul","jorge", "cama", "nube", "cielo"];
array2.sort();
console.log(array2);

//Prueba reverse
var nums = [1, 3, 2]; 
console.log(nums.sort().reverse());

//SLICE
var a = [1,2,3,4,5]; 

console.log(a.slice(0,3));


const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]