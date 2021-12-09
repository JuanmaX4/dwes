const data = require('../data/users');

function users(req, res, next) {
    const { limit = 5, offset = 0, ...filters } = req.query;
    const filteredUsers = data.filter(user => {

        let isValid = true;
        for (key in filters) {
            console.log(key, user[key], filters[key]);
            isValid = isValid && user[key] == filters[key];
        }
        return isValid;
    });

    const paginacion = filteredUsers.slice(parseInt(offset), parseInt(offset) + parseInt(limit));
    return res.send(paginacion);
}
module.exports = {
    users

}