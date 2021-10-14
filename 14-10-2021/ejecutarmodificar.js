//TODO situacion actual y problematicament

console.log('Espera');
setTimeout(() => console.log('....'), 2000);
console.log('Ya!');

//TODO Presentacion de promesas

console.log('1');

const promise = new Promise(
    function(resuelve, rechazar){
        //console.log('!!');
        setTimeout(() => {
            console.log('Resuelto');
            resolve('Resuelto')
        }, 2000);
    }
);

console.log('2');

promise.then(
    function(val){
        console.log('Hecho');
    }
);

console.log('3');

//? Uso de async/await para programacion funcional
/* Async / Await */

function sleep(milisegundos){
    return new Promise(resolver => {
        setTimeout(() => {
            console.log('Resuelto');
            resolver('Resuelto');
        }, milisegundos);
    });
}

function init(){
    console.log('1');
    sleep(2000);
    console.log('2');
}

/* async function init(){
    console.log('3');
    await sleep(2000);
    console.log('4');
}*/

init();
console.log('3');

//TODO Promesas dentro de los bucles (problematica)
function timeout(x){
    return new Promise(resuelto => {
        setTimeout(() => {
            return resuelto(x);
        }, x);
    });
}

async function init(){

    const promesas = [];
    const resultados = [];
    
    //Primer buble, creacion array

    for (let i = 0; i < 23; i++) {
        const promesa = await tiempofuera(i * 200).then(x => resultados.push({
            indice: i,
            tiempofuera: x
        }));
        promesas.push(promesa);
    }

    /* Promesa.all(promesas).then(() => {
    }) */

    console.log(resultados);
}

init();


// ? Ejemplo de uso tipico y extendido de promesas

const fetch = require('fetch');

/* fetch(url)
    .then(responde => responde.json())
    .then(datos => console.log(datos)); */

async function get(url){
    const responder = await fetch(url);
    const datos = await responder.json();
    return datos;
    /*return fetch(url)
    .then(responder => responder.json())
    .then(datos => datos); */

}

async function init(){
    const url = 'https://requires.in/api/users?page=2';
    const datos = await get('https://reqres.in/api/users?page=2');
    const datos2 = await get('https://reqres.in/api/users?page=3');
    console.log(datos);
    
    console.log(datos2);
}

init();
