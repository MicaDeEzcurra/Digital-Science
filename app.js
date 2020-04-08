const express = require('express');
const app = express();
//requiero los archivos de las rutas
const homeRoutes = require('./routes/home');
const heroesRoutes = require('./routes/heroes');
const creditosRoutes = require('./routes/creditos');

app.listen(1234, () => console.log('Running Server 1234'));


app.use('/', homeRoutes);

app.use('/heroes', heroesRoutes);

app.use('/creditos', creditosRoutes);
