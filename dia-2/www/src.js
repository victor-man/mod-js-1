'use strict'

 /* let myString = ''

for(let i = 0; i < 4; i++){
    myString += '*';
    console.log(myString);
} */ 

/* const height = 4;

let floor = '';

for(let i = 0; i < height; i++){
    floor += '*';
    console.log(floor);
} */

/* const height = 4;

let floor = '';

for(let i = 0; i < height; i++)
 */

 /* const num_a = parseInt(prompt('dame el primer numero'));
 const num_b = parseInt(prompt('dame el segundo numero'));
 const option = parseInt(prompt('opcion'));

 if(option === 0){
     alert(num_a + num_b);
 } else if (option === 1){
     alert(num_a - num_b);
 } else if(option === 2){
     alert(num_a * num_b);
 } else if(option === 3){
     if(num_b === 0){
         alert('no es posible dividir entre 0');
     } else {
         alert(num_a / num_b);
         
     }
     } else if(option === 4){
     alert(num_a ** num_b);
  }else {
    alert('no es posible');
 }   */


 let password = Math.ceil(Math.random() * 10);

 

 for(let i = 0; i < 5; i++){
     

     const userpassword = parseInt(prompt('introduce numero'));


     if(userpassword === password){
         alert('vives un dia mas');
         break;
     }
     if(i === 4 && userpassword !== password){
         alert('boom');
     }
         
     
 }


