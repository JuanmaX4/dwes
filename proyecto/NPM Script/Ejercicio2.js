//Script llamado date que imprima la fecha actual (en bash o nodejs)
const { DateTime } = require("luxon");
let date= DateTime.now();
console.log((date.toFormat('dd-MM-yyyy')));
