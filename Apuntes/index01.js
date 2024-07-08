// requerimos de express, es un framework de node.js que nos permite crear servidores web   
const express = require('express');


// creamos una instancia de express
const app = express();

// Puerto donde correrá el servidor
const port = 3001;

// requerimos de path, es un modulo que nos permite trabajar con rutas de archivos y directorios
// const path = require('path');


// esto nos permite obtener la ruta del archivo principal de la aplicación
// const direccion = path.dirname(require.main.filename);

// creamos una ruta 
app.get('/', (req, res) => {
    // enviamos una respuesta al cliente
    res.end('Hola Mundo');
});

// creamos una ruta
app.get('/about', (req, res) => {
    // enviamos una respuesta al cliente
    res.send('Welcome to the about page');
});

// creamos una ruta /weather
app.get('/weather', (req, res) => {
    // enviamos una respuesta al cliente
    res.end('Welcome to the weather is nice');
});

// creamos una ruta post
app.post('/', (req, res) => {
    // enviamos una respuesta al cliente
    res.end('Welcome to the home page (post)');
});

// creamos una ruta put
app.put('/', (req, res) => {
    // enviamos una respuesta al cliente
    res.end('Welcome to the home page');
});

// creamos una ruta delete
app.delete('/', (req, res) => {
    // enviamos una respuesta al cliente
    res.end('Welcome to the home page');
});

// creamos una ruta patch
app.patch('/', (req, res) => {
    // enviamos una respuesta al cliente
    res.end('Welcome to the home page');
});


// Enviamos una archivo estático de nuestra raiz
app.get('/miarchivo', (req, res) => {
    // 
    res.setHeader('Content-Type', 'text/plain'); // tipo de contenido

    res.sendFile('./archivo.jpg', {
        root: __dirname
    }); // enviamos el archivo
});

// creamos una ruta que devuelve users
app.get('/users', (req, res) => {
    // enviamos una respuesta al cliente
    res.json([
        {userName: 'epaco', lastName: 'paco'},
        {userName: 'iMamani', lastName: 'mamani'},
    ]);
});

// creamos una ruta  estado 200
app.get('/isAlive', (req, res) => {
    // enviamos una respuesta al cliente
    res.status(200).send('200 OK');
});

// creamos una ruta  estado 200
app.get('/isAlive2', (req, res) => {
    // enviamos una respuesta al cliente
    res.sendStatus(200);
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

