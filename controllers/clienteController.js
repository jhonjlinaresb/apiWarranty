const ClientModel = require('../models/clientes'); //Llamamos el modelo que genera Schemas en la base de datos

//Función asíncrona que agrega clientes por medio del body 
const addCliente = async (req, res)  => {
        console.log(req.body); //Muestra el body
        const cliente = await ClientModel({ 
            estado: req.body.estado, //Tipo Boolean
            fechaInicio: req.body.fechaInicio, //Tipo Date
            fechaFin: req.body.fechaFin, //Tipo Date
            numero: req.body.numero, //Tipo Number
            direccion: req.body.direccion, //Tipo String
            nombre: req.body.nombre //Tipo String
        }).save(); //Guarda los datos 
        res.status(201).send(cliente); //Genera la respuesta con Código 201
    }

    // Función que elimina cada cliente por el ObjectID generado en MongoDB
    const deleteOne = async (req, res)  => { 
        try {
             await ClientModel.findByIdAndDelete(req.params._id);
             //await ClientModel.findOneAndDelete(req.params.ObjectId);
            res.send({
                message: 'Delete Client Warranty',
            })
        } catch (error) { //En caso de error muestra un mensaje
            console.error(error);
            res.status(500).send({
                message: 'Error to delete Warranty'
            })
            
        }
    }

    // Función que muestra todos los clientes
    const showClients = (req, res) => {
        // We show all clients
        ClientModel.find({})
        .then(cliente=>{
            res.send(cliente)
        })
        .catch(error=>console.log(error))
    
        }
    // Función aíncrona que llama la garantía de los clientes por número de teléfono
    const clientsWarranty = async (req, res) => {
        try {
            const client = await ClientModel.find({  //Busca el cliente por número
                numero: req.params.numero
            })
            res.send({
                client //Genera la respuesta
            })
        } catch (error) {  // En caso de error muestra un mensaje
            console.error(error);
            res.status(500).send({
                message: 'no se pueden mostrar las garantías'
            })
            
        }
    }
// Exporto las funciones para realizar las peticiones
module.exports = {addCliente, 
                  deleteOne,
                  showClients,
                  clientsWarranty};