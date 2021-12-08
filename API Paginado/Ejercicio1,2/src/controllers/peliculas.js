const peliculas = require('../data/peliculas');

function peliculas(req, res, next) {
    const filters = req.query;
    const filteresPeliculas = peliculas.filter(peliculas => {
        let isValid = true;
        for (key in filters) {
            console.log(key, peliculas[key], filters[key]);
            isValid = isValid && peliculas[key] == filters[key];
        }
        return isValid;
    });
    res.send(filteresPeliculas);
}
module.exports = {
    peliculas

}
