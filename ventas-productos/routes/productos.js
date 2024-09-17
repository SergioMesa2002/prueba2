const express = require('express');
const router = express.Router();
const productos = require('../data/productos.json');

let venta = [];

router.get('/', (req, res) => {
    res.render('index', { productos, venta, total: calcularTotal(), content: 'index' });
});

router.post('/agregar', (req, res) => {
    const productoId = parseInt(req.body.productoId);
    const productoSeleccionado = productos.find(p => p.id === productoId);

    if (productoSeleccionado && productoSeleccionado.stock > 0) {
        venta.push(productoSeleccionado);
        productoSeleccionado.stock -= 1;
    } else {
        res.send('No hay suficiente stock del producto seleccionado.');
        return;
    }

    res.redirect('/');
});

function calcularTotal() {
    return venta.reduce((total, producto) => total + producto.precio, 0);
}

module.exports = router;
router.get('/', (req, res) => {
    res.render('index', { productos, venta, total: calcularTotal() });
});
