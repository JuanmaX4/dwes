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

    let sieteArray = [1,2,3,46,53457774,6123,8,99999999];
    
    console.log(sieteArray);

    let textosiete = sieteArray.join();

    console.log(textosiete);

    textosiete.includes('7') ? console.log("BOOOM!!!") : console.log("NO BOOM");

}

sieteBoom();


function parImpar(){

    let num = 43;
	var array = num.toString().split('');

    console.log(array);

	var sumaArray = array.reduce((a, b) => parseInt(a) + parseInt(b));
	
    sumaArray%2==0 ? console.log("Par") : console.log("Impar");
}

parImpar();