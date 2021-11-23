function getFibonacci(req, res) {

    // aqui ponemos el maximo numero del fibonacci
    const numero = 10;
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
    
    res.send('Numero final del fibonacci: \t'+arr);

    return arr;
}

module.exports = {getFibonacci};
