'use strict'


const height = 4;
let floor = '';

for (let i = 0; i < height; i++) {



    for (let spaces = (height - 1) - i; spaces > 0; spaces--) {
        floor += ' ';
    }

    for (let asterisk = 1 + (i * 2); asterisk > 0; asterisk--) {
        floor += '*';

    }



    console.log(floor);
    floor = '';
}

const heightA = 3;
floor ='';

for (let i = 0; i < heightA; i++) {

    for (let spaces = (heightA - 2) + (i - 1); spaces >= 0; spaces--) {
        floor += ' ';
    }
    for (let asterisk = (heightA + 1) - (i * 2); asterisk >= 0; asterisk--) {
        floor += '*';
    }
    console.log(floor);
    floor = '';
}