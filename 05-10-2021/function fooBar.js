function fooBar() {
	for (let i = 0; i < 100; i++) {
        
        if (i%3==0 && i%5==0) {
            console.log('FooBar');
        }
        else if (i%3==0) {
            console.log('Foo');
        }
        else if (i%5==0){
            console.log('Bar');
        }        
    }
}

fooBar();


function fibonacci(numero) {

    // aqui ponemos el maximo numero del fibonacci
    let num1 = 0, num2 = 1, siguienteNum;
    
    let arr = [];

    console.log('Fibonacci Series:');

    for (let i = 1; i <= numero; i++) {
        console.log(num1);
        siguienteNum = num1 + num2;
        num1 = num2;
        num2 = siguienteNum;
        arr.push(siguienteNum);
    }
    
    console.log('Numero final del fibonacci: \t'+arr);
}

//fibonacci(11);


function palindromo(palabra) {

    // find the length of a string
    const mitadPalabra = palabra.length;

    // bucle que recorre la mitad de la palabra
    for (let i = 0; i < mitadPalabra / 2; i++) {

        // empieza a comprobar si tiene la misma letra del principio o el final
        if (palabra[i] !== palabra[mitadPalabra - 1 - i]) {
            console.log('No es palindromo');
            return false;
        }
    }
    console.log('Es palindromo');
    return true;
}

//palindromo('palabra');


function texto(frase) {

        let palabras = [... new Set(frase.toLowerCase())]
    
        for(var i=0; i<caracteres.length; i++){
            let arreglo=[]
            frase.split('').map(n => {
                
            })
            console.log(`La cantidad de ${palabras[i]} es: ${arreglo.length}`);
        }
    
}
    texto('Objeto sirve para crear instancias de clases donde estan estan alojadas dichos objetos que descomponen sus propiedades.');


/*
Objeto sirve para crear instancias de clases donde estan estan alojadas dichos objetos que descomponen sus propiedades.

Son parametros de inicializacion de variables.

Pues como el nombre indica estatico hace que no pueda haber variaciones mientras que el dinamico si.

Publico es un codigo que se puede visualizar en cualquier carpeta mientras que el privado no solo lo puede ver el que lo creo y por ultimo el
protegido son aquellos que son visibles solo en las clases a las que pertenecen además de sus subclases. 

Esto pasa cuando se crean varios metodos del mismo nombre y con diferentes parametros esto por ejemplo en JS nunca pasa

Son clases que declaran metodos pero no los implementa

Interfaz se componen con un conjuntos de declaraciones sin implementar

Lenguaje compilado es el que compila la maquina en el momento de su ejecucion y el interpretado es cuando la maquina nos interpreta su lenguaje
esto es mas sencillo con el codigo binario esto seria un simple ejemplo 0100 es A

*/