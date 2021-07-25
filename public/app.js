//Conexión con axios
//Obtener todos los clientes-------------------
  /* const getClientes = () => {
    axios.get('/garantia/clientes')
    .then(response => {
    const clientes = response.data;
    console.log(`GET Clientes`, clientes);
    //html.innerHTML=(`GET Clientes`, clientes);
    })
     .catch(error => console.error(error));
    };
    getClientes(); */
//---------------------------------------------
/* var obj = {
    "nombre" : String,
    "numero": Number,
    "direccion": String,
    "estado": Boolean,
    "fechaInicio": Date,
    "fechaFin": Date
}
var html = document.getElementById("html");
html.innerHTML+="<p>nombre="+obj.getClientes.nombre;
html.innerHTML+="<p>numero="+getClientes.numero; */
/* import axios from 'axios';
export default {
  data() {
    return {
      clients: [],
      errors: []
    }
  },
  created() {
    axios.get('/garantia/clientes')
    .then(response => {
      this.clients = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
} */

var vm = new Vue({
  el: '#app',
  data: {
    posts: [
      {id: "_id", estado: "estado", nombre: "nombre", numero: "numero", direccion: "direccion", fechaInicio: "fechaInicio", fechaFin: "fechaFin"},
      //{id: _id, estado: estado, nombre: nombre, numero: numero, direccion: direccion, fechaInicio: fechaInicio, fechaFin: fechaFin},
      //{id: _id, estado: estado, nombre: nombre, numero: numero, direccion: direccion, fechaInicio: fechaInicio, fechaFin: fechaFin}
    ]
  },
  methods: {
    getClientes: function() {
      axios.get('/garantia/clientes')
        .then(response => {this.posts = response.data})
        console.log('Hola, he funcionado :D', this);
    }
  }
});

