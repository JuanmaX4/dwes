const got = require('got');

(async () => {
    try {
        const response = await got('https://pokeapi.co/api/v2/pokemon/chimchar', {
            responseType: 'json',
        });
        console.log(response.body);
        //=> '<!doctype html> ...'
    } catch (error) {
        console.log(error.response.body);
        //=> 'Internal server error ...'
    }
})();
