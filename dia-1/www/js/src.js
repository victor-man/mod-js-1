'use strict'

// const num_a = 8;
// const num_b = 4;
// const option = 3;

// if(option === 0){
//     console.log(num_a + num_b);
// } else if (option === 1){
//     console.log(num_a - num_b);
// } else if(option === 2){
//     console.log(num_a * num_b);
// } else if(option === 3){
//     if(num_b === 0){
//         console.log('no es posible dividir entre 0');
//     } else {
//         console.log(num_a / num_b);
//     }
// } else if(option === 4){
//     console.log(num_a ** num_b);
/*  }else {
    console.log('no es posible');
 } */
/* 
 for(let i = 0;i <= 100;i += 10){
     console.log(i);
 } */

/*  for(let i = 100; i >=0; i -= 25){
     console.log(i);
 } */

 /* #################
 * ## Ejercicio 1 ##
 * #################
 *
 * Crea una variable que almacene tu nombre y otra variable que almacene
 * tu número favorito.
 *  - Muestra ambos valores por consola.
 *  - Cambia tu nº favorito por cualquier otro nº.
 *  - Muestra por consola el resultado del cambio.
 *  - Muestra por consola el tipo de las variables definidas.
*/

/* const name = 'Lucía';
let favouriteNumber = 7;

console.log(name, favouriteNumber);

favouriteNumber = 14;

console.log(favouriteNumber);

console.log(typeof(name), typeof(favouriteNumber)); */


/* #################
 * ## Ejercicio 2 ##
 * #################
 *
 * Dado el valor "num_a = 8" y "num_b = 2":
 *  - Muestra por consola la suma de A + B.
 *  - Muestra el resto de dividir A entre B.
 *  - Muestra el resultado de elevar A a B.
*/

/* const num_a = 8;
const num_b = 2;

console.log(num_a + num_b, num_a % num_b, num_a ** num_b); */

/* #################
 * ## Ejercicio 3 ##
 * #################
 *
 * Dada una variable que almacene la edad de una persona:
 *
 *  - Si edad es "menor" que 18 muestra por consola un mensaje indicando que la
 *    la persona tiene menos de 18 años.
 *
 *  - Si la edad es "igual o mayor" que 18 y "menor" que 45 muestra por consola un
 *    mensaje indicando que la persona tiene entre 18 y 44 años.
 *
 *  - Si edad es "igual o mayor" que 45 muestra por consola un mensaje indicando
 *    que la persona tiene 45 años o más.
*/

/* let age = 48;

if(age < 18) {
    console.log('Tiene menos de 18 años.');
} else if (age >= 18 && age < 45) {
    console.log('La persona tiene entre 18 y 44 años.');
} else {
    console.log('La persona tiene 45 años o más.');
} */

/* const option = 0;


/* #######################
 * ## Ejemplo de Switch ##
 * #######################
*/

/*switch (option) {

    case 0:
        console.log('Es un perro.');
        break;

    case 1:
        console.log('Es un gato.');
        break;

    case 2:
        console.log('Es un ratón.');
        break;

    default:
        console.log('No se reconoce el animal.');
        break;

} */


/* #################
 * ## Ejercicio 4 ##
 * #################
 *
 * Crea una calculadora con "if" y "switch" que opere con dos números. La
 * calculadora utilizará la variable "option" para decidir el tipo de operación
 * a realizar. Debe poder sumar, restas, multiplicar y dividir. Como bonus, debe
 * permitir elevar el nº A a la potencia de B.
 *
 * ¡OJO! No se puede dividir entre 0.
*/

/* const num_a = 2;
const num_b = 3;
const option = '**¡';

switch(option) {
    case '+':
        console.log(num_a + num_b);
        break;

    case '-':
        console.log(num_a - num_b);
        break;

    case '*':
        console.log(num_a * num_b);
        break;

    case '/':
        if(num_b === 0) {
            console.log('No es posible dividir entre 0.');
        } else {
            console.log(num_a / num_b);
        } 
        break;

    case '**':
        console.log(num_a ** num_b);
        break;

    default:
        console.log('No has seleccionado un tipo de operación correcto.');
        break;
} */

/* if(option === 0) {
    console.log(num_a + num_b);
} else if(option === 1) {
    console.log(num_a - num_b);
} else if(option === 2) {
    console.log(num_a * num_b);
} else if(option === 3) {
    if(num_b === 0) {
        console.log('No es posible dividir entre 0.');
    } else {
        console.log(num_a / num_b);
    } 
} else if(option === 4) {
    console.log(num_a ** num_b);
} else {
    console.log('No has seleccionado un tipo de operación correcto.');
} */


/* #################
 * ## Ejercicio 5 ##
 * #################
 *
 * Crea un bucle "for" que recorra los números del 0 al 100 saltando de 10 en 10.
 * Posteriormente crea otro bucle "for" que recorra los números del 100 al 0 de
 * 25 en 25.
*/

/* for(let i = 0; i <= 100; i += 10) {
    console.log(i);
} */

/* for(let i = 100; i >= 0; i -= 25) {
    console.log(i);
} */
