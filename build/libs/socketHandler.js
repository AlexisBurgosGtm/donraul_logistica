var socket = io();



socket.on('nuevo_pedido', function(tipo,msn){
  
      try {
          if(GlobalSelectedForm=='DESPACHO'){
              funciones.Aviso(`Nuevo pedido: Vendedor: ${tipo} ${msn}`);
              
              let cmbClaUno = document.getElementById('cmbClaUno');
              get_tbl_despacho(cmbClaUno.value);
          }
      } catch (error) {
        console.log('Previo: ' +  error);
      }
      
});



socket.on('despacho_preparado', (tipo,msn)=>{

  try {
    
  } catch (error) {
    
  }

});



