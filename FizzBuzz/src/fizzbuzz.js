function fizzBuzz(n){
let result = '';
if(n%3 === 0) result += 'fizz';
  if(n%5 === 0) result += 'buzz';
    return result || n;
}
module.exports = fizzBuzz;

function fizzbuzz2(n, condition){

  const n = 100;
  const condition = {
    2: 'poo',
    3: 'fizz',
    5: 'buzz',
    15: 'foo',
  }
  
  let result2 = '';
if(n%3 === 0) result2 += 'fizz';
  if(n%5 === 0) result2 += 'buzz';
    return result2 || n;
}
