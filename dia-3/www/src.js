'use strict'
/* 
let coche = {
    modelo : 'ibiza',
    marca : 'seat',
    color : 'blanco',
}

console.log(coche.color);

coche.color = 'rojo';

console.log(coche.color);

coche.matriculacion = '2000';

console.log(coche.matriculacion);



if(confirm('mostrar propiedades')){
    console.log(Object.keys(coche));
}else {
    console.log(Object.values(coche));
}
 */


/* function showInfo(username,userage){
    return `el nombre es ${username} y la edad es ${userage}.`
}

console.log(showInfo('pepe','37'));

const showInfo_2 = function(username, userage){
    return `${username} ${userage}`
}

console.log(showInfo_2('pepe','37'));

const showInfo_3 = (username, userage) => `${username} ${userage}`;
console.log(showInfo_3('pepe','37')); */

const numbers = [1,2,3,4,5,6]



/* for(const num of numbers){
    console.log(num);
} */

/* for(let i = 0;i <= numbers.length;i++){
    console.log([i]);
}
 */
/* let counter = 0;
 while(counter < numbers.length) {
    console.log(numbers[counter]);
    counter++
 } */
/*  for(const num of numbers){
    console.log(num + 1);
 } */

const numbersOne = []
 for(const num of numbers){
     numbersOne.push(num + 1);
 }
  console.log(numbersOne);