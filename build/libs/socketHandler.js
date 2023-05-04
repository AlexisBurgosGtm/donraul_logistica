var socket = io();



socket.on('nuevo_pedido', function(tipo,msn){
  
      try {
          funciones.Aviso(`Nuevo pedido: Vendedor: ${tipo} ${msn}`);
      } catch (error) {
        console.log('Previo: ' +  error);
      }
      
});




