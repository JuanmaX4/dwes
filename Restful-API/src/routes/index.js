const { Router } = require('express');

const router = Router();

//rutas
router.get('/test', (req, res) => {
    const data = {
        "nombre": "Juanma",
        "website": "api.com"
    };
    res.json(data);
});

module.exports = router;
