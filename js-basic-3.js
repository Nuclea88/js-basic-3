
console.log("hola");
//Números:

//1. Escribe una función que tome dos números como argumentos y devuelva su suma.
function sumar(a, b) {
    return a+b;
}

//2. Escribe una función que tome dos números como argumentos y devuelva su resta.
function restar(a, b) {
    return a-b;
}
//3. Escribe una función que tome dos números como argumentos y devuelva su producto.
function multiplicar(a, b) {
    return a*b;
}
//4. Escribe una función que tome dos números como argumentos y devuelva su división.
function dividir (a,b){
    return a/b;
}
//5. Escribe una función que tome un número base y un exponente y devuelva el resultado de elevar el número base a la potencia dada.
function potencia(base, exponente) {
    return a**b;
}

//6. Escribe una función que tome dos números como argumentos y devuelva el resto de la división del primer número entre el segundo.
function rest (a,b){

    return a%b;
}

//7. Escribe una función que tome un número como argumento y devuelva su raíz cuadrada.
function raizCuadrada(a){
    return Math.sqrt(a);
}

//8. Escribe una función que tome un número como argumento y devuelva su valor absoluto.
function absolute (a){

    return Math.abs(a);
}
//9. Escribe una función que tome un número decimal como argumento y devuelva el número redondeado al entero más cercano.
function redondeo(a){

    return Math.round(a);
}

//10. Escribe una función que genere y devuelva un número aleatorio entre 0 y 1.

function randomNumber (){

    return Math.random();
}


//## Letras:

//1. Escribe una función que tome dos cadenas de texto como argumentos y devuelva su concatenación.
function concat(chain1, chain2){
    return chain1 + chain2;
}

//2. Escribe una función que tome una cadena de texto como argumento y devuelva su longitud.
function lenght(chain1){
    return chain1.length;
}
//3. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena en mayúsculas.
function upperCase(chain){

    return chain.toUpperCase();
}
//4. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena en minúsculas.
function lowerCase(chain){
    return chain.toLowercase();
}
//5. Escribe una función que tome una cadena de texto y un índice como argumentos, y devuelva el carácter en esa posición.
function characterChain(chain, index){
    return chain.charAt(index);
}
//6. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena invertida.
function reverseChain(chain){
    return chain.split('').reverse().join('');
}
//7. Escribe una función que tome una cadena de texto y un carácter como argumentos, y devuelva la cantidad de veces que el carácter aparece en la cadena.
function countCharacter(chain, character){
    let count = 0;
    for(let i=0, len = chain.length; i<len; i++){
        if(chain.charAt(i) === character){
            count++;}
        }
    return count;
    } 
//8. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena sin espacios en blanco.
function withoutBlank(chain){
    return chain.replace(/ /g, "");
}

//9. Escribe una función que tome una cadena de texto como argumento y devuelva true si es un palíndromo (se lee igual de izquierda a derecha y de derecha a izquierda), o false si no lo es.
function isPalindrome(chain){
    let reverseChain = chain.split('').reverse().join('');
    return reverseChain === chain; 
}

//10. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena con la primera letra de cada palabra en mayúscula.

function toCapitalize(chain){

    let words = chain.split(" ");
    let upperChain ="";
    for (let word of words){
    
        upperChain += word[0].toUpperCase() + word.substring(1) + " ";
        console.log(upperChain)
    }
    return upperChain.trim();
}

let hola="hola soy nueva por aqui"

 console.log(toCapitalize(hola));
//## Arrays:

//1. Escribe una función que tome un array de números como argumento y devuelva la suma de todos sus elementos.
function sumArray(array){
    let suma = 0;
    for (i of array){
        suma += i;
    } 
    return suma;
}
            //se podría hacer tb con reduce
                function reduceArray(array){
                return array.reduce((a,b)=>a+b)
                }

let ej3 = [3,2,1,4,15]
console.log(reduceArray(ej3));
//2. Escribe una función que tome un array de números como argumento y devuelva el promedio de todos sus elementos.
function mediaArray (array){
 let suma = 0;
    for (i of array){
        suma += i;
    } 
    return suma/array.length;
}
            //tb se puede hacer con reduce:
            function mediaRArray(array){
                return array.reduce((a,b)=>a+b)/array.length;
            }

//3. Escribe una función que tome un array de números como argumento y devuelva el array ordenado de forma ascendente.
function sortArray(array){
    return array.sort((a,b) =>a-b);
}
//4. Escribe una función que tome un array de números y un número como argumentos, y devuelva un nuevo array con los elementos mayores al número dado.
function majorArray (array, number){
let newArray = [];
for (i of array){
if (i > number){
    newArray.push(i);
}
}return newArray;
}
        // tb se puede hacer con filter:
        function filterArray(array, number){
        return array.filter(num=>num>number);
        }
//5. Escribe una función que tome dos arrays como argumentos y devuelva un nuevo array con todos los elementos de ambos arrays.
function addArray (array1,array2){
    let newArray = array1.concat(array2);
    return newArray;
}
//6. Escribe una función que tome un array de números como argumento y devuelva el número máximo dentro del array.
let ej = [3,2,1,4,5]
let ej2= [7,8,9,10]
console.log(filterArray(ej, 3));
//7. Escribe una función que tome un array de números como argumento y devuelva el número mínimo dentro del array.

//8. Escribe una función que tome un array y un elemento como argumentos, y devuelva la cantidad de veces que el elemento aparece en el array.

//9. Escribe una función que tome un array como argumento y devuelva un nuevo array sin elementos duplicados.

//10. Escribe una función que tome un array como argumento y devuelva un nuevo array con los elementos en orden inverso.

//## Objetos literales:

//1. Escribe una función que tome un objeto literal con una propiedad "nombre" y devuelva el valor de esa propiedad.

//2. Escribe una función que tome un objeto literal con una propiedad "edad" y un número como argumentos, y actualice el valor de la propiedad "edad" con el número dado.

//3. Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y agregue una nueva propiedad al objeto con la cadena de texto como nombre y un valor inicial de null.

//4. Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y elimine la propiedad del objeto con el nombre dado.

//5. Escribe una función que tome un objeto literal como argumento y devuelva la cantidad de propiedades que tiene.

//6. Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y devuelva true si el objeto tiene una propiedad con ese nombre, o false si no la tiene.

//7. Escribe una función que tome un objeto literal como argumento y devuelva un array con todos los valores de sus propiedades.

//8. Escribe una función que tome dos objetos literales como argumentos y devuelva true si tienen las mismas propiedades y los mismos valores en esas propiedades, o false si son diferentes.

//9. Escribe una función que tome un objeto literal como argumento y devuelva una copia exacta de ese objeto.

//10. Escribe una función que tome dos objetos literales como argumentos y devuelva un nuevo objeto con todas las propiedades de ambos objetos. Si hay propiedades con el mismo nombre, el valor del segundo objeto deberá prevalecer.

