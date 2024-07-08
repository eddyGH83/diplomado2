// requerimos de express, es un framework de node.js que nos permite crear servidores web   
const express = require('express');
const path = require('path');


// Morgan, es un middleware que nos permite ver en consola las peticiones que se hacen al servidor
const morgan = require('morgan');


// Puerto donde correrá el servidor
const port = 3001;

// creamos una instancia de express
const app = express();


// habilitamos el case sensitive routing, por defecto es false 
// app.set('case sensitive routing', true); // sirve para que las rutas sean case sensitive


// Midelware para parsear el body de una petición
app.use(express.json());
// Midelware morgan para ver las peticiones en consola 
app.use(morgan('short'));  // short, tiny, dev, combined


// 
app.set('views', path.resolve(__dirname, 'views')); // Indica la carpeta donde se encuentran las vistas
app.set('view engine', 'ejs'); // Establece EJS como el motor de plantillas





// ruta para la página principal
app.get('/', (req, res) => {
    res.render('index',{title:'Hola mundo desde ejs'}); // Pasamos un objeto con datos a la vista
});















// creamos una ruta 404 para cuando no se encuentre la ruta solicitada
app.use((req, res) => {
    // enviamos una respuesta al cliente
    res.status(404).send('404 Page Not Found--');
});

app.listen(port);
console.log('Servidor corriendo en el puerto: ' + port);




// requerimos de body-parser, es un middleware que nos permite parsear los datos que vienen en el body de una petición
// const bodyParser = require('body-parser');

