const { Router } = require('express');

const router = Router();

const Producto = require('../models/productos');

router.get('/productos', async (req, res) => {
    const limit = parseInt(req.query.limit, 10) || 2;
    const page = parseInt(req.query.limit, 10) || 4;
    const productos = await Producto.paginate({}, {limit, page});
    res.json(productos);
});

router.post('/productos', async (req, res) => {
    console.log(req.body);

    const nuevoProducto = new Producto(req.body);
    const productoGuardado = await nuevoProducto.save();
    res.send(productoGuardado);
});

module.exports = router;