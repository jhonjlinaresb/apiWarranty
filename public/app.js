//Conexión con axios
  const getClientes = () => {
    
    
    axios.get('/garantia/clientes')
    .then(response => {
    const clientes = response.data;
    console.log(`GET Clientes`, clientes);
    })
     .catch(error => console.error(error));
    };
    getClientes();