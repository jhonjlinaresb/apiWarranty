// Se  crea una variable para cargar los datos de los clientes
var vm = new Vue({ //Se genera un nuevo Vue
  el: '#app',//Llama a la etiqueta de la pagina
  data: { //Array de datos para pintar en el HTML
    posts: [ //Array de datos
      {
      id: "_id", 
      estado: "estado", 
      nombre: "nombre", 
      numero: "numero", 
      direccion: "direccion", 
      fechaInicio: "fechaInicio", 
      fechaFin: "fechaFin",
      descripcion: "descripcion"
      }
    ]
  },
  methods: {
    getClientes: function() { //Método para obtener los clientes
      axios.get('/garantia/clientes') //Petición a la API con Axios
        .then(response => {this.posts = response.data}) //Luego genera una respuesta y se asigna el array de datos a la variable posts
        console.log('Hola, he funcionado :D', this); //Muestra en consola un mensaje de éxito
        console.log(this.posts)
    }
  }
});

//let numero = document.getElementById("numero").numero;
new Vue({
  el: '#main',
  data: {
    client:[
      {
        id: "", 
        estado: "estado", 
        nombre: "nombre", 
        numero: "numero", 
        direccion: "direccion", 
        fechaInicio: "fechaInicio", 
        fechaFin: "fechaFin",
        descripcion: "descripcion"
      }
    ]
  },
  methods: {
    getCliente: function(){
      let numero = document.getElementById("numero").value;
      try {
      axios.get('/garantia/garantias/'+numero)
      .then(response => {this.client = response.data})
      console.log('Proccess Successfuly', this);
      console.log(numero);
      console.log(this.client);
      } catch (e) {
        console.log(e);
      }
    }
  }
});


