//Realizar programa que reciba por argumentos el nombre de un fichero e imprima su contenido

const path = require('path');
const fs = require('fs'); 

function fichero() {

    // console.log(process.argv);
    try {
        const data = fs.readFileSync(path.join(__dirname, process.argv[2]), 'utf8');
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

fichero();

//Descomponer una URL extrayendo: protocol, ipAdress, subDomain, domainName, folderTree, targetFile, argumentsFile.

function decomposeUrl(url) {

	const protocolo= 'http';
	const ipAdress = url;
	const subDominio = 'www';
	const domainName = '"google.com"';
    const targetFile = 'www.google.com/test/index.html';
    const argumentsFile = '../../../../../';
}

descomposeUrl('192.168.41.23');

