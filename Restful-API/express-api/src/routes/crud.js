const { Router } = require('express');

const { getCrud } = require('../controllers/crud');

const router = Router();


app.get('/',(getCrud, res) => {
    res.setHeader("Content-Type", "text/html");
    switch (getCrud.url) {
        case "/books":
            res.sendStatus(200);
            res.send('<html><body>Aqui hay libros</body></html>');
            break;
        case "/authors":
            res.status(500).send('Internal Server Error');
            break;
        default:
            res.sendStatus(404);
            res.send(JSON.stringify({error:"illo no te rayes que por aki no es shur"}));
    }
})
app.listen(4001);


module.exports = router;