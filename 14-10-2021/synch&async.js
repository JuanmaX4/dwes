var numRandom = 0;

function sleep(milisegundos){
    return new Promise(resolver => {
        setTimeout(() => {
            resolver('Resuelto');
        }, milisegundos);
    });
}

async function init(){
    console.log('Hola');
    await sleep(1000);

    await sleep(3000);
    console.log('Multiplicalo por 9');
    await sleep(5000);
    console.log('Suma sus cifras');
    await sleep(3000);
    console.log('Restale 5');
    await sleep (3000);
    console.log('Espera que lo adivino....');
    await sleep (5000);
    console.log('Es el 4!!');
}

init();
console.log('piensa un numero del 1 al 10');
