'use strict'



/* 
function num(num_a,num_b){
    return(num_a + num_b);

    }
console.log(num(3,6)); */


/* const myString = "o vicedo;santiago;o grove;ribadeo;chantada;sarria;ponteareas";
const myArray = myString.split(';');

console.log(myArray);

myArray.splice(4, 0, 'meira');
console.log(myArray);
 */



/* const colors = ['amarillo', 'blanco', 'azul']; 

// En este caso he decidido llamar a los parámetros del callback "value", "index" y "array", pero 
// podría haberles llamado de otra forma. De todos modos el orden de estos parámetros es inalterable.
colors.map(function (value, index, array) { 
    // Lo normal es encontrarse con un "return" pero os quiero mostrar el valor que devuelve cada 
    // elemento del array en cada repetición por tanto usaremos "console.log()". 
    console.log(value); 
    console.log(index); 
    console.log(array); 
}); 

// Podemos emular el resultado del "map" anterior con un "for" de esta manera. 
for (let i = 0; i < colors.length; i++) { 
    console.log(colors[i]); 
    console.log(i); 
    console.log(colors); 
} */

/* const numbers = [3, 4, 12, 9, 20, 17, 5, 8];

const masAlto = numbers.map((num) => {
    if(num > 8){
        return num;
    }else{
        return null;
    }
})

console.log(masAlto); */



/* const numbers = [3, 4, 12, 9, 20, 17, 5, 8];

const masAlto = numbers.filter((num) => num > 8);

console.log(masAlto); */


/* const euros = parseInt(prompt('inserta una cantidad:'));

function eur_to_usd(quantity) {
    fetch('https://api.exchangerate-api.com/v4/latest/EUR')
    .then((response) => {
        const data = response.json();
        return data;
    })
    .then((data) => {
        const conversion = (quantity * data.rates.USD).toFixed(2);
        console.log(conversion);
    })
}

eur_to_usd(euros) */

/* const usd = parseInt(prompt('inserta una cantidad:'));

function eur_to_usd(quantity) {
    fetch('https://api.exchangerate-api.com/v4/latest/USD')
    .then((response) => {
        const data = response.json();
        return data;
    })
    .then((data) => {
        const conversion = (quantity * data.rates.EUR)
            .toFixed(2);
        console.log(conversion);
    })
}

eur_to_usd(usd) */



/* const url_usd = 'https://api.exchangerate-api.com/v4/latest/USD';

async function usd_to_eur(url){
    const quantity = parseInt(prompt('cantidad'));
    const response = await fetch(url);
    const data = await response.json();
    const conversion = (quantity * data.rates.EUR).toFixed(2);
    console.log(`${quantity}$ son ${conversion}e`); 
}
 usd_to_eur(url_usd) */
/* 
async function searchFilms(words, page){
    const response = await fetch(`https://www.episodate.com/api/search?q=${word}&page=${page}`);
    const data = await response.json();
    return data.tv_shows;
}

(async() => {
    const myWord = prompt('introduce terminos de busqueda')
    const myPage = prompt('introduce página')
    const result = await searchFilms(myWord, myPage);
    console.log(result);
})(); */

/*  const url = 'https://www.el-tiempo.net/api/json/v2/provincias'


async function getProvince(community) {

    // Obtenemos el response.
    const response = await fetch(`https://www.el-tiempo.net/api/json/v2/provincias`);
    
    // Transformamos el response en un objeto que JavaScript pueda interpretar.
    const data = await response.json();

    
    const myProvinces = data.provincias.filter((province) => {
        return province.COMUNIDAD_CIUDAD_AUTONOMA === `${community}`;
    });
    console.log(myProvinces);
    return myProvinces;
}

getProvince('Galicia') */

/* 
//* / Llamamos a la función mediante una IIFE asíncrona.
 (async() => {
    const result = await getProvince();
    console.log(result);
})(); 
 */ 


//  const url = 'https://www.el-tiempo.net/api/json/v2/municipios'

/*  async function getmunicipality(province) {

    // Obtenemos el response.
    const response = await fetch(`https://www.el-tiempo.net/api/json/v2/municipios`);
    
    // Transformamos el response en un objeto que JavaScript pueda interpretar.
    const data = await response.json();
    console.log(data);
    
    const myMunicipality = data.filter((municipality) => municipality.NOMBRE_PROVINCIA === `${province}`);
    console.log(myMunicipality);
    return myMunicipality;
}

getmunicipality('Pontevedra') */


/* async function getmunicipality(province) {

    // Obtenemos el response.
    const response = await fetch(`https://www.el-tiempo.net/api/json/v2/municipios`);
    
    // Transformamos el response en un objeto que JavaScript pueda interpretar.
    const data = await response.json();
    console.log(data);
    
    const myMunicipality = data.filter((municipality) => municipality.NOMBRE_PROVINCIA === `${province}`);

    const municipalityName = myMunicipality.map((municipality) => municipality.NOMBRE);
    console.log(myMunicipality);
    console.log(municipalityName);
    return myMunicipality;
}

getmunicipality('A Coruña') */

/* async function getmunicipality(province) {

    // Obtenemos el response.
    const response = await fetch(`https://www.el-tiempo.net/api/json/v2/municipios`);
    
    // Transformamos el response en un objeto que JavaScript pueda interpretar.
    const data = await response.json();
    console.log(data);
    
    const myMunicipality = data.filter((municipality) => municipality.NOMBRE_PROVINCIA === `${province}`);

    const municipalityName = myMunicipality.map((municipality) => municipality.NOMBRE);

    const personProvince = myMunicipality.reduce((acc, municipality )=> {
        return acc += municipality.POBLACION_MUNI;
    }, 0);

    console.log(myMunicipality);
    console.log(municipalityName);
    console.log(personProvince);
    return myMunicipality;
}

getmunicipality('A Coruña') */

async function getmunicipality(){
    const response = await fetch(`https://www.el-tiempo.net/api/json/v2/municipios`);
    const data = await response.json();
    console.log(data);
    const myTown = data.filter((cod) => cod.NOMBRE === 'Vigo');
    console.log(myTown);
    const mycode = myTown.map((cod) => cod.CODPROV);
    console.log(mycode);
    const myid = myTown.map((cod) => cod.CODIGOINE.substring(0, 5));
    console.log(myid);
    
} 

getmunicipality()