let array = new Array(1,2,3,4,5,6,7,8,9);

console.log("Multiplicando");

for(let i=0; i<=array.length; i++){
    console.log(i)
    console.log(array.length*i)
}

const prompt = require('prompt-sync')();

console.log('¿Que figuras quieres poner?\n 1. Cuadrado\n 2. Circulo\n 3. Triangulo');

const figura = prompt();

let figura2=figura;

switch(figura2){

    case '1':

        for(let i=0; i<3; i++){
            for(let j=0; j<4; j++){
                if(j==5){
                    console.log("");
                }
                else{
                    process.stdout.write("*");
                }
            }
            console.log("");
        }
    break;

    case '2':



    break;

    case '3':
        console.log('triangulo');
        
        for (let i=1;i<=5;i++){
            for (let j=5-i;j>0;j--){
                process.stdout.write(" \t");
            }
            for (let k=1;k<=i;k++){
                process.stdout.write("* \t");
            }
            console.log("");
        }
    break;
    default: 'Introduciste un numero que no esta entre el 1 y el 3';
}


console.log(`Hey there ${figura2}`);
