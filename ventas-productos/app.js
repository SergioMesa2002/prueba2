const express = require('express');
const bodyParser = require('body-parser');
const productosRoutes = require('./routes/productos');

const app = express();

// Configuraciones
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Rutas
app.use('/', productosRoutes);

// Puerto del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
