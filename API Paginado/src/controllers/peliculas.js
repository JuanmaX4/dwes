const data = require('../data/peliculas');

function peliculas(req, res, next) {

    const { limit = 5, offset = 0, ...filters } = req.query;
    const filteredPeliculas = data.filter(peliculas => {

        let isValid = true;
        for (key in filters) {
            console.log(key, peliculas[key], filters[key]);
            isValid = isValid && peliculas[key] == filters[key];
        }
        return isValid;
    });

    const paginacion = filteredPeliculas.slice(parseInt(offset), parseInt(offset) + parseInt(limit));
    return res.send(paginacion);

}
module.exports = {
    peliculas
}