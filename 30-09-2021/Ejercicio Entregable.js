function menosde18(){

    let nums = [1,2,3,4,5,9999999,999,66,7,8,9,20];

    const result = nums.filter(nums => nums > 18);

    console.log(result);

}

menosde18();

function sumaReduceArray(){
 
    let array1 = [5,6,69,8,6];
    
    let reduccion = (antesNum, ahoraNum) => antesNum + ahoraNum;

    console.log(array1.reduce(reduccion));

}

sumaReduceArray();

function sieteBoom(){

    let sieteArray = [1,2,3,46,53454,6123,8,99999999];

    sieteArray.filter(sieteArray => sieteArray == 7 console.log("BOOM"));

}

sieteBoom();
