// requerimos de express, es un framework de node.js que nos permite crear servidores web   
const express = require('express');

// Morgan, es un middleware que nos permite ver en consola las peticiones que se hacen al servidor
const morgan = require('morgan');


// Puerto donde correrá el servidor
const port = 3001;

// creamos una instancia de express
const app = express();

// habilitamos el case sensitive routing, por defecto es false 
app.set('case sensitive routing', true); // sirve para que las rutas sean case sensitive


// Midelware para parsear el body de una petición
app.use(express.json());
// Midelware morgan para ver las peticiones en consola 
app.use(morgan('short'));  // short, tiny, dev, combined





// middleware para interceptar las peticiones
app.use((req, res, next) => {
    console.log('middleware', req.method, req.url); // imprimimos el método y la url de la petición
    next(); // llamamos a la función next para que la petición continúe
    // res.end('Finalización de la petición'); // finalizamos la petición
});


// Ruta con variable
app.get('/hello/:user', (req, res) => {
    // obtenemos el valor de la variable id
    const user = req.params;
    // enviamos una respuesta al cliente
    res.send('Hola: ' + user); 
});

// Ruta post
app.post('/login', (req, res) => {
    const{
        user,
        password
    } = req.body;

    console.log('headers: ', req.headers);
    console.log('body: ', req.body);

    // enviamos una respuesta al cliente
    res.send('Usuario: ' + user + ', Password: ' + password);    
});



// Ruta con about
app.get('/about', (req, res) => {
    // enviamos una respuesta al cliente
    res.send('Welcome to the about page');
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

