/*Entrega del proyecto fizzbuzz con:
    – Programa funcionando correctamente
    – Test realizados con ava, con cobertura de código 100%
    – Docker-compose para arrancar SonarQube
    – Fichero de configuración de SonarQube
    – Script del package.json para automatizar las labores de: arrancar SonarMQ, lanzar los
test, lanzar los test en modo watch y generar los ficheros de test.*/

const test = require('ava');
const fizzBuzz = require('../src/fizzbuzz');

 test('Should return 1', t => {
 const result = fizzBuzz(1);
 t.is(result, 1);
});

test('Should return fizz', t => {
const result = fizzBuzz(3);
t.is(result, 'fizz');
});

test('Should return buzz', t => {
const result = fizzBuzz(5);
t.is(result, 'buzz');
});

test('Should return fizzbuzz', t => {
const result = fizzBuzz(15);
t.is(result, 'fizzbuzz');
});

test('Should return fizzbuzz', t => {
    const result = fizzBuzz(3, `${condition}`);
    t.is(result, 'fizzbuzz');
});
    