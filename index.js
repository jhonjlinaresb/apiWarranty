const express = require('express');
const cors = require('./middleware/cors');
const bodyParser = require('body-parser');

//LLamamos las funciones para realizar el CRUD de clientes
const {addCliente, deleteOne, showClients, clientsWarranty} = require('./controllers/clienteController');

const db = require('./db');
db();

const app = express();

// Convierte peticiones a JSON
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(bodyParser.json());

const PORT = process.env.PORT || 8000;

//Middleware
app.use(cors);
app.use(express.json());
app.options('/*', (req, res) => res.send());

app.use('/',express.static(__dirname + '/public/'));

const one = app.use('/one', express.static(__dirname + '/public/pages/one.html'));

app.get('/', (req, res) => { res.send('Server Online') });

app.get('/onetest', (req, res) => { res.send('${one}') });

app.post('/garantia/cliente', addCliente); //Agrega Cliente nuevo
app.get('/garantia/clientes', showClients); //Mira todos los clientes
app.get('/garantia/garantias', clientsWarranty); //Mira las garantías de clientes
app.delete('/garantia/eliminar', deleteOne); //Elimina clientes

app.listen(PORT, () => {
    console.log("Server Online! in the port" + PORT);
});