function getView(){
    let view = {
        body:()=>{
            return `
                <div class="row">
                    <div class="col-6">
                        <h2 id="txtTotalItems" class="negrita">0 items</h2>
                    </div>
                    <div class="col-6">
                        <h1 id="txtTotalVenta" class="text-danger negrita"></h1>
                    </div>
                </div>
            
                <div class="col-12 p-0 bg-white">
                    
                    <div class="tab-content" id="myTabHomeContent">
                        <div class="tab-pane fade show active" id="pedido" role="tabpanel" aria-labelledby="receta-tab">
                           ${view.encabezadoClienteDocumento() + view.gridTempVenta() }
                        </div>
                        <div class="tab-pane fade" id="cliente" role="tabpanel" aria-labelledby="home-tab">
                           ${view.vista_cliente() + view.modalBusquedaCliente()}
                        </div>
                        <div class="tab-pane fade" id="entrega" role="tabpanel" aria-labelledby="home-tab">
                            ${view.vista_entrega()}     
                        </div>
                        <div class="tab-pane fade" id="mapa" role="tabpanel" aria-labelledby="tab-mapa">
                           ${view.vista_mapa()}
                        </div>
                    
                    </div>

                    <ul class="nav nav-tabs hidden" id="myTabHome" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active negrita text-success" id="tab-pedido" data-toggle="tab" href="#pedido" role="tab" aria-controls="profile" aria-selected="false">
                                <i class="fal fa-list"></i>pedido</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-cliente" data-toggle="tab" href="#cliente" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i>cliente</a>
                        </li> 
                        <li class="nav-item">
                            <a class="nav-link negrita text-info" id="tab-entrega" data-toggle="tab" href="#entrega" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-edit"></i>entrega</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link negrita text-warning" id="tab-mapa" data-toggle="tab" href="#mapa" role="tab" aria-controls="profile" aria-selected="false">
                                <i class="fal fa-chart-pie"></i>mapa</a>
                        </li> 
                                
                    </ul>

                </div>
               
            `
        },
        encabezadoClienteDocumento :()=>{
            return `
        <div class="row">
            
            <div class="hidden-md-down col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div id="panel-2" class="panel col-12">
                    <div class="panel-hdr">
                        <h2>Datos del Cliente</h2>
                        <div class="panel-toolbar">
                            <button class="btn btn-panel" data-action="panel-collapse" data-toggle="tooltip" data-offset="0,10" data-original-title="Collapse"></button>
                            <button class="btn btn-panel" data-action="panel-fullscreen" data-toggle="tooltip" data-offset="0,10" data-original-title="Fullscreen"></button>
                        </div>
                    </div>
                    <div class="panel-container collapse">
                        <div class="panel-content">
                            <div class="">
                                <div class="input-group">
                                    <input id="txtNit" type="text" ref="txtNit" class="form-control" placeholder="Código del cliente.." aria-label="" aria-describedby="button-addon4" />
                                    <div class="input-group-prepend">
                                        <button class="btn btn-info waves-effect waves-themed" type="button" id="btnBusquedaClientes">
                                            <i class="fal fa-search"></i>
                                        </button>
                                        <div class="card"></div>
                                        <button class="btn btn-success waves-effect waves-themed" id="btnNuevoCliente">
                                            +
                                        </button>
                                    </div>
                                    
                                </div>
                                <input class="form-control" id="txtNombre" placeholder="Nombre de cliente..">
                                <input class="form-control" id="txtDireccion" placeholder="Dirección cliente">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="hidden-md-down col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div id="panel-3" class="panel col-12">
                    <div class="panel-hdr">
                        <h2>Datos del Documento</h2>
                        <div class="panel-toolbar">
                            <button class="btn btn-panel" data-action="panel-collapse" data-toggle="tooltip" data-offset="0,10" data-original-title="Collapse"></button>
                            <button class="btn btn-panel" data-action="panel-fullscreen" data-toggle="tooltip" data-offset="0,10" data-original-title="Fullscreen"></button>
                        </div>
                    </div>
                    <div class="panel-container collapse"> 
                    <!--show-->
                        <div class="panel-content">
                            <div class="row">
                                <div class="col-6">
                                    <input type="text" class="form-control input-sm" id="cmbCoddoc">
                                    
                                </div>
                                <div class="col-6">
                                    <input type="text" class="form-control" value="0" id="txtCorrelativo" readonly="true">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-6">
                                    Fecha: <input type="date" class="form-control bg-subtlelight pl-4 text-sm" id="txtFecha">
                                </div>
                                <div class="col-6">
                                    Vendedor:
                                    <input type="text" class="form-control" id="cmbVendedor">
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
            `
            //<select class="form-control input-sm" id="cmbCoddoc"></select>
            //<select class="form-control" id="cmbVendedor"></select>
        },
        gridTempVenta :()=>{
            return `
                <div class="row">
                        <label class="text-info hidden" id="lbNomClien">Consumidor Final</label>
                        <div id="panel-2" class="panel col-12">

                            <div class="panel-container show">
                                <div class="panel-content">
                                    
                                    <div class="table-responsive border-top-rounded border-bottom-rounded shadow">
                                        <table class="table table-hover table-striped"><!--mt-5-->
                                            <thead class="bg-secondary text-white">
                                                <tr>
                                                    <th class="">Producto</th>
                                                    <th class="">Subtotal</th>
                                                </tr>
                                            </thead>
                                            <tbody id="tblGridTempVentas"></tbody>
                                        </table>
                                    </div>
                                </div>
                            <div>

                           

                            <button class="btn btn-circle btn-xl btn-success shadow btn-bottom-mr hand" id="btnAgregarProd">
                                <i class="fal fa-search"></i>
                            </button>

                            <button class="btn btn-xl btn-secondary btn-bottom-r btn-circle hand shadow" id="btnCambiarCliente">
                                <i class="fal fa-user"></i>
                            </button>

                        </div>
                    </div>
                    
                <div id="containerModalesVentas"></div>

            </div>
        </div>  
            `
        },
        btnCobrar :()=>{
            return `
            <div id="btn-bottom-r">
                <button class="btn btn-outline-danger btn-lg waves-themed waves-effect shadow" id="btnCobrar">
                    <i class="fal fa-search"></i>
                    COBRAR
                </button>
            </div>
            `
        },
        modalBusquedaProductos :()=>{
            return `
            <div class="modal fade  modal-with-scroll" id="ModalBusqueda" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-right" role="document">
                    <div class="modal-content">

                        <div class="modal-body">
                            <label class="modal-title text-danger h5" id="">Búsqueda de Productos</label>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i class="fal fa-times"></i></span>
                            </button>
                            <br>
                                <div class="input-group p-2">
                                 
                                    <input id="txtBusqueda" type="text" ref="txtBusqueda" class=" border-naranja bg-amarillo form-control col-12 shadow" placeholder="Buscar código o descripción..." aria-label="" aria-describedby="button-addon4" />
                                    <div class="input-group-prepend">
                                        <button class="btn btn-naranja waves-effect waves-themed shadow hand" id="btnBuscarProducto">
                                            <i class="fal fa-search"></i>
                                        </button>
                                    </div>
                                </div>
                       
                        <table class="table table-responsive table-striped table-hover">
                            <thead class="bg-naranja text-white">
                                <tr>
                                    <td>Producto</td>
                                    <td>Precio</td>                         
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody id="tblResultadoBusqueda">
                            

                            </tbody>
                        </table>
                        </div>
                        
                    
                    </div>
                </div>
                <div class="shortcut-menu align-left">
                    <button class="btn btn-danger btn-md" data-dismiss="modal">
                        <i class="fal fa-angle-double-left"></i>Atrás
                    </button>
                </div>
            </div>
            
            `
        },
        modalBusquedaCliente :()=>{
            return `
            <div class="modal fade  modal-with-scroll" id="ModalBusquedaCliente" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-left" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <label class="modal-title text-danger h5" id="">Búsqueda de Clientes</label>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i class="fal fa-times"></i></span>
                            </button>
                        </div>

                        <div class="modal-body">
                            <div class="input-group">
                                    <input id="txtBusquedaCliente" type="text" ref="txtBusquedaCliente" class="form-control" placeholder="Buscar por nombre de cliente..." aria-label="" aria-describedby="button-addon4" />
                                    <div class="input-group-prepend">
                                        <button class="btn btn-secondary waves-effect waves-themed" type="button" id="btnBuscarCliente">
                                            <i class="fal fa-search"></i>
                                        </button>
                                    </div>
                            </div>
                            <table class="table table-responsive table-striped table-hover table-bordered">
                                <thead class="bg-secondary text-white">
                                    <tr>
                                        <td>Cliente</td>
                                        <td></td>
                                    </tr>
                                </thead>
                                <tbody id="tblResultadoBusquedaCliente">
                                

                                </tbody>
                            </table>
                        </div>

                    
                    </div>
                </div>
            </div>
            
            `
        },
        modalTerminar :()=>{
            return `
                <div class="modal fade" id="ModalFinalizarPedido" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <label class="modal-title text-danger h3" id="">Finalización del Pedido</label>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true"><i class="fal fa-times"></i></span>
                                </button>
                            </div>
                
                            <div class="modal-body shadow">
                                    <div class="">            
                                        

                                        <div class="form-group">
                                            <label>Forma de Pago:</label>
                                            <select id="cmbEntregaConcre" class="form-control">
                                                <option value="CON">CONTADO</option>
                                                <option value="CRE">CREDITO</option>
                                                
                                            </select>
                                        </div>

                                        <div class="form-group">
                                            <label>Observaciones</label>
                                            <textarea rows="4" cols="80" class="form-control" id="txtEntregaObs" placeholder="Escriba aqui sus observaciones..."></textarea>
                                        </div>                                                              
                                            
                                    </div>

                                    <div class="row">
                                        <label class="text-white" id="lbDocLat">0</label>
                                        <label class="text-white" id="lbDocLong">0</label class="text-white">
                                    </div>
                                    
                                    <br>
            
                                    <div class="row">
                                        <div class="col-5">
                                            <button class="btn btn-outline-secondary btn-lg  btn-pills btn-block waves-effect waves-themed" data-dismiss="modal" id="btnEntregaCancelar">
                                                <i class="fal fa-ban mr-1"></i>
                                                Cancelar
                                            </button>                                
                                        </div>
            
                                        <div class="col-1"></div>
            
                                        <div class="col-5">
                                            <button class="btn btn-outline-success btn-lg btn-pills btn-block waves-effect waves-themed" id="btnFinalizarPedido">
                                                <i class="fal fa-paper-plane mr-1"></i>Enviar
                                            </button>
                                        </div>
                                        
                                        
                                    </div>
                            
                            </div>
                        
                        </div>
                    </div>
                </div>`
        },
        modalCantidadProducto:()=>{
            return `
            <div class="modal fade" id="ModalCantidadProducto" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-right" role="document">
                    <div class="modal-content">
                        <br><br><br><br><br>
                        <div class="modal-header">
                            <label class="modal-title" id="txtDesProducto">Azucar don Justo Cabal Kilo</label>
                        </div>
                        <div class="modal-body" align="right">
                            <div class="col-8">
                                <div class="row">
                                    <b id="txtCodMedida">UNIDAD</b>
                                </div>
                                
                                <div class="form-group">
                                    <div class="row">
                                        <div class="input-group">
                                
                                            <div class="input-group-prepend">
                                                <button class="btn btn-md btn-icon btn-round btn-info" id="btnCantidadDown">
                                                    -
                                                </button>
                                            </div>
                                
                                            <input type="number" class="text-center form-control" id="txtCantidad" value="1">    
                                
                                            <div class="input-group-append">
                                                <button class="btn btn-md btn-icon btn-round btn-info" id="btnCantidadUp">
                                                    +
                                                </button>    
                                            </div>
                                        </div>                            
                                    </div>                              
                                </div>

                                <div class="col-12">
                                    <label>Precio: </label>
                                    <label class="text-success" id="txtPrecioProducto">Q500</label>
                                    <br>
                                    <label>Subtotal:</label>
                                    <label class="text-danger" id="txtSubTotal">Q500</label>
                                </div>
                                <br>
                                <div class="row">
                                    <div class="col-6">
                                        <button type="button" class="btn btn-outline-secondary btn-round" data-dismiss="modal" id="btnCancelarModalProducto">
                                            <i class="fal fa-ban"></i>Cancelar
                                        </button>
                                    </div>
                                    <div class="col-6">
                                        <button type="button" class="btn btn-primary btn-round" id="btnAgregarProducto">
                                            <i class="fal fa-check"></i>Agregar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            `
        },
        modalCambiarCantidadProducto :()=>{
            return `
                <div class="modal fade" id="modalCambiarCantidadProducto" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-md" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <label class="modal-title text-info h3" id="">Cambiar cantidad de producto</label>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true"><i class="fal fa-times"></i></span>
                                </button>
                            </div>
                
                            <div class="modal-body shadow">
                                    <div class="">            
                                        
                                        <div class="form-group">
                                            <label>Nueva cantidad:</label>
                                            <input type="number" class="form-control border-info shadow col-10" id="txtCantNuevaCant">
                                        </div>                                                             
                                            
                                        <div class="form-group">
                                            <label>Nuevo Precio:</label>
                                            <input type="number" class="form-control border-info shadow col-10" id="txtCantNuevoPrecio">
                                        </div> 

                                        <div class="form-group">
                                            <label>Subtotal</label>
                                            <br>
                                            <h3 id="lbCantNuevoSubtotal">0</h3>
                                        </div> 

                                    </div>
                                    
                                    <br>
            
                                    <div class="row">
                                        <div class="col-5">
                                            <button class="btn btn-secondary btn-lg  btn-pills btn-block waves-effect waves-themed" data-dismiss="modal" id="">
                                                <i class="fal fa-times mr-1"></i>
                                                Cancelar
                                            </button>                                
                                        </div>
            
                                        <div class="col-1"></div>
            
                                        <div class="col-5">
                                            <button class="btn btn-success btn-lg btn-pills btn-block waves-effect waves-themed" id="btnCantGuardar">
                                                <i class="fal fa-check mr-1"></i>Aceptar
                                            </button>
                                        </div>
                                        
                                        
                                    </div>
                            
                            </div>
                        
                        </div>
                    </div>
                </div>`
        },
        vista_entrega :()=>{
            return `
              
                    <div class="card card-rounded shadow">
                            <div class="card-body">
                                    <div class="">            
                                        
                                        <h5 class="text-danger negrita">Detalle de la Entrega</h5>

                                        <div class="form-group">
                                            <label>Forma de Pago:</label>
                                            <select id="cmbEntregaConcre" class="form-control">
                                                <option value="CON">CONTADO</option>
                                                <option value="CRE">CREDITO</option>
                                            </select>
                                        </div>

                                        <div class="form-group">
                                            <label>Tipo de Documento:</label>
                                            <select id="cmbEntregaTipoDoc" class="form-control">
                                                <option value="FACTURA">FACTURA CONTABLE</option>
                                                <option value="ENVIO">ENVIO (COMPROBANTE)</option>
                                            </select>
                                        </div>

                                       
                                    </div>

                                    <div class="row">

                                        <label class="text-white" id="lbDocLat">0</label>
                                        <label class="text-white" id="lbDocLong">0</label>

                                                                            
                                    </div>
                                    
                            </div>
                    </div>

                    <br>

                    <div class="card card-rounded shadow p-2" id="divDatosEntrega">
                        <div class="card-body">
                            <div class="form-group">
                                <label>Contacto</label>
                                <input type="text" class="form-control" id="txtEntregaContacto">
                            </div>
                            <div class="form-group">
                                <label>Teléfonos</label>
                                <input type="text" class="form-control" id="txtEntregaTelefono">
                            </div>

                            <div class="form-group">
                                <label>Dirección entrega</label>
                                <input type="text" maxlength="150" class="form-control" id="txtEntregaDireccion">
                            </div>

                            <div class="form-group">
                                <label>Referencia entrega</label>
                                <input type="text" class="form-control" id="txtEntregaReferencia" value="SN">
                            </div>


                            <div class="row hidden">
                                <div class="col-4">
                                    <span id="lbEntregaLat">0</span>
                                    <span id="lbEntregaLong">0</span>
                                </div>
                                <div class="col-4">
                                    <button class="btn btn-danger btn-circle btn-lg hand shadow" id="btnObtenerUbicacion">
                                        <i class="fal fa-map"></i>
                                    </button>
                                </div>
                                <div class="col-4">
                                    <button class="btn btn-warning btn-circle btn-lg hand shadow" id="btnLimpiarUbicacion">
                                        <i class="fal fa-sync"></i>
                                    </button>
                                </div>
                            </div>

                                                
                        </div>
                    </div>

                    <br> 
            
                    <div class="row">
                        <button class="btn btn-secondary btn-xl btn-circle btn-bottom-ml shadow" id="btnEntregaCancelar">
                            <i class="fal fa-arrow-left"></i>
                        </button>                                                                       
                        <button class="btn btn-success btn-xl btn-circle btn-bottom-r shadow" id="btnFinalizarPedido">
                            <i class="fal fa-paper-plane mr-1"></i>
                        </button>                
                    </div>
                           
                `
        },
        vista_cliente:()=>{
            return `
            <div class="card card-rounded shadow col-12 p-4">
                <div class="card-body">

                    <h5 class="text-danger negrita">Datos de Facturación</h5>
                
                    <div class="form-group">
                        <label>CÓDIGO CLIENTE:</label>
                        <div class="input-group">
                            <input type="text" class="form-control border-secondary" id="txtCliCodigo" disabled>
                            <button class="btn btn-secondary hand shadow" id="btnBuscarClie">
                                <i class="fal fa-search"></i>
                            </button>
                        </div>
                    </div>

                    <div class="form-group">
                        <label>NIT:</label>
                        <input type="text" class="form-control bg-amarillo border-info" id="txtCliNit" value="CF">
                    </div>

                    <div class="form-group">
                        <label>NOMBRE</label>
                        <input type="text" class="form-control" id="txtCliNombre" value="CONSUMIDOR FINAL">
                    </div>

                    <div class="form-group">
                        <label>DIRECCIÓN</label>
                        <input type="text" class="form-control" id="txtCliDireccion" value="CIUDAD">
                    </div>

                    <div class="row">
                        
                        <div class="col-4">
                        
                        </div>
                        <div class="col-4">
                                <button class="btn btn-info btn-md shadow hand" id="btnCobrar2">
                                    <i class="fal fa-truck"></i> Entregar en Domicilio
                                </button>
                        </div>
                        <div class="col-4">
                                <button class="btn btn-danger btn-md shadow hand" id="btnCobrar">
                                    <i class="fal fa-warehouse"></i> Recoge en Tienda
                                </button>
                        </div>

                    </div>

                </div>
            </div>
                              
            <br>

            <button class="btn btn-secondary btn-xl btn-circle btn-bottom-ml shadow hand" id="btnPedido">
                    <i class="fal fa-arrow-left"></i>
            </button>
            `
        },
        vista_mapa :()=>{
            return `
            <div id="mapcontainer" class="mapcontainer4">
            
            </div>
            <button class="btn btn-secondary btn-xl btn-circle btn-bottom-ml shadow hand" id="btnMapaAtras">
                    <i class="fal fa-arrow-left"></i>
            </button>
           
            `
        }
    }

   
    root.innerHTML = view.body(); 
               

    let containerModalesVentas = document.getElementById('containerModalesVentas');
    containerModalesVentas.innerHTML = view.modalBusquedaProductos() 
                                        + view.modalCantidadProducto()
                                        + view.modalCambiarCantidadProducto();

};

async function iniciarVistaVentas(codigo,nit,nombre,direccion,st){

    
    //inicializa la vista
    getView();


    let lbNomClien = document.getElementById('lbNomClien');
    lbNomClien.innerText = `${nombre} // ${direccion}`;
    

    

    document.getElementById('btnPedido').addEventListener('click',()=>{
        document.getElementById('tab-pedido').click();
    })

    document.getElementById('btnCambiarCliente').addEventListener('click',()=>{
        //classNavegar.inicioVendedor();
        document.getElementById('tab-cliente').click();
    })


    let txtFecha = document.getElementById('txtFecha');txtFecha.value = funciones.getFecha();
    let txtEntregaFecha = funciones.getFecha();// document.getElementById('txtEntregaFecha');txtEntregaFecha.value = funciones.getFecha();

    // listener para el nit
    let txtNit = document.getElementById('txtNit');
    txtNit.addEventListener('keydown',(e)=>{
        if(e.code=='Enter'){
            fcnBuscarCliente('txtNit','txtNombre','txtDireccion');    
        }
        if(e.code=='NumpadEnter'){
            fcnBuscarCliente('txtNit','txtNombre','txtDireccion');    
        }
    });

    document.getElementById('btnBuscarCliente').addEventListener('click',()=>{
        //fcnBuscarCliente('txtNit','txtNombre','txtDireccion');    
    });

    document.getElementById('txtBusqueda').addEventListener('keyup',(e)=>{
        if(e.code=='Enter'){
            fcnBusquedaProducto('txtBusqueda','tblResultadoBusqueda','cmbTipoPrecio');
            //$('#ModalBusqueda').modal('show');
        }
        if(e.code=='NumpadEnter'){
            fcnBusquedaProducto('txtBusqueda','tblResultadoBusqueda','cmbTipoPrecio');
            //$('#ModalBusqueda').modal('show');
        }
    });
    document.getElementById('btnBuscarProducto').addEventListener('click',()=>{
        fcnBusquedaProducto('txtBusqueda','tblResultadoBusqueda','cmbTipoPrecio');
        //$('#ModalBusqueda').modal('show');
    });

   

    let cmbCoddoc = document.getElementById('cmbCoddoc');
    //classTipoDocumentos.comboboxTipodoc('PED','cmbCoddoc');
    cmbCoddoc.value = GlobalCoddoc;

    cmbCoddoc.addEventListener('change',async ()=>{
       await classTipoDocumentos.fcnCorrelativoDocumento('PED',cmbCoddoc.value,'txtCorrelativo');
    });

    let cmbVendedor = document.getElementById('cmbVendedor');

    
    

    //PEDIDO EN TIENDA
    let btnFinalizarPedido = document.getElementById('btnFinalizarPedido');
    btnFinalizarPedido.addEventListener('click',async ()=>{
       
        fcnFinalizarPedido();
    });

  

    // carga el grid
   
    
    await classTipoDocumentos.fcnCorrelativoDocumento('PED',cmbCoddoc.value,'txtCorrelativo');
    await fcnCargarGridTempVentas('tblGridTempVentas');
    //await fcnCargarTotal('txtTotalVenta','txtTotalVentaCobro');

    cmbVendedor.value = GlobalCodUsuario;

  
    // inicializa la calculadora de cantidad
    //iniciarModalCantidad();
    addEventsModalCambioCantidad();

    //carga los datos del cliente
    document.getElementById('txtNit').value = nit;
    document.getElementById('txtNombre').value = nombre;
    document.getElementById('txtDireccion').value = direccion;
    
    //inicia los eventos de la ventana Cantidad al agregar productos
    fcnIniciarModalCantidadProductos();

    document.getElementById('btnAgregarProd').addEventListener('click',()=>{
        $('#ModalBusqueda').modal('show');
    });

    document.getElementById('btnEntregaCancelar').addEventListener('click',()=>{
        document.getElementById('tab-cliente').click();
    });


    


     //RECOGER EN TIENDA
     let btnCobrar = document.getElementById('btnCobrar');
     btnCobrar.addEventListener('click',()=>{

         if(btnCobrar.innerText=='Terminar'){
             funciones.AvisoError('No puede finalizar un pedido sin productos')
         }else{

            if(txtNit.value==''){
                funciones.AvisoError('Especifique el cliente a quien se carga la venta');
            }else{
                funciones.ObtenerUbicacion('lbDocLat','lbDocLong')
                
                GlobalSelectedDomicilio ='NO';
 
                document.getElementById('tab-entrega').click();   
                document.getElementById('divDatosEntrega').style = 'visibility:hidden';
                                  
            }
        }
        
     });

     let btnCobrar2 = document.getElementById('btnCobrar2');
     btnCobrar2.addEventListener('click',()=>{

         if(btnCobrar.innerText=='Terminar'){
             funciones.AvisoError('No puede finalizar un pedido sin productos')
         }else{
            if(txtNit.value==''){
                funciones.AvisoError('Especifique el cliente a quien se carga la venta');
            }else{

                funciones.ObtenerUbicacion('lbDocLat','lbDocLong');
               
                
                GlobalSelectedDomicilio ='SI';
 
                
                
                //valores default en entrega a domicilio
                if(st=='LOAD'){}else{
                    document.getElementById('txtEntregaContacto').value = document.getElementById('txtCliNombre').value;
                    document.getElementById('txtEntregaDireccion').value = document.getElementById('txtCliDireccion').value;    
                }
                


                document.getElementById('tab-entrega').click();   
                document.getElementById('divDatosEntrega').style = 'visibility:visible';
                                  
            }
        }
        
     });



     let btnObtenerUbicacion = document.getElementById('btnObtenerUbicacion');
     btnObtenerUbicacion.addEventListener('click',()=>{

        showUbicacion()
        .then(async(location)=>{
                let lat = location.coords.latitude.toString();
                let longg = location.coords.longitude.toString();
                Lmap(lat, longg);
                   //RE-AJUSTA EL MAPA A LA PANTALLA
                setTimeout(function () {
                    try {
                        map.invalidateSize();    
                    } catch (error) {
                        
                    }
                }, 500);
        });
        document.getElementById('tab-mapa').click();

     });


    document.getElementById('btnMapaAtras').addEventListener('click',()=>{
        document.getElementById('tab-entrega').click();
    });
    
    document.getElementById('btnLimpiarUbicacion').addEventListener('click',()=>{
        document.getElementById('lbEntregaLat').innerText = '0';
        document.getElementById('lbEntregaLong').innerText = '0';
    });


    //BUSQUEDA DEL CLIENTE
    let btnBuscarClie = document.getElementById('btnBuscarClie');
    btnBuscarClie.addEventListener('click',()=>{
        $('#ModalBusquedaCliente').modal('show');
    })

    let txtCliNit = document.getElementById('txtCliNit');
    txtCliNit.addEventListener('focusout', ()=>{

        let nit = txtCliNit.value || 'CF';
        if(nit=='CF'){
            document.getElementById('txtCliNombre').value = 'CONSUMIDOR FINAL';
            document.getElementById('txtCliDireccion').value = 'CIUDAD';   
        }else{
            document.getElementById('txtCliNombre').value = 'VERIFICANDO, ESPERE POR FAVOR.....';
            document.getElementById('txtCliDireccion').value = 'VERIFICANDO......';  

            funciones.GetDataNit(txtCliNit.value)
            .then((json)=>{
                
                document.getElementById('txtCliNombre').value = json.toUpperCase();
                document.getElementById('txtCliDireccion').value = "CIUDAD";    
            })
            .catch(()=>{
                funciones.showToast('Nit no existe o no se pudo verificar');
                
            })
        }
       

    })

    
    
    let txtBusquedaCliente = document.getElementById('txtBusquedaCliente');
    txtBusquedaCliente.addEventListener('keyup',(e)=>{
        if(e.code=='Enter'){
            fcnBusquedaCliente('txtBusquedaCliente','tblResultadoBusquedaCliente');
        }
        if(e.code=='NumpadEnter'){
            fcnBusquedaCliente('txtBusquedaCliente','tblResultadoBusquedaCliente');
        }
    });

    document.getElementById('btnBuscarCliente').addEventListener('click',()=>{
        fcnBusquedaCliente('txtBusquedaCliente','tblResultadoBusquedaCliente');
    });

    //BUSQUEDA DEL CLIENTE
    console.log('st: ' + st);

    if(st=='LOAD'){
         //carga los datos del cliente
        document.getElementById('txtCliCodigo').value = codigo; 
        document.getElementById('txtNit').value = nit;
        document.getElementById('txtCliNit').value = nit;
        document.getElementById('txtNombre').value = nombre;
        document.getElementById('txtCliNombre').value = nombre;
        document.getElementById('txtDireccion').value = direccion;
        document.getElementById('txtCliDireccion').value = direccion;
        document.getElementById('cmbEntregaConcre').value = Global_tipo_pago;
        document.getElementById('cmbEntregaTipoDoc').value = Global_tipo_doc;
        document.getElementById('txtEntregaContacto').value = Global_entrega_contacto;
        document.getElementById('txtEntregaTelefono').value = Global_entrega_telefono;
        document.getElementById('txtEntregaDireccion').value = Global_entrega_direccion;
        document.getElementById('txtEntregaReferencia').value = Global_entrega_referencia;
        document.getElementById('lbEntregaLat').innerText = Global_entrega_lat;
        document.getElementById('lbEntregaLong').innerText = Global_entrega_long;
        console.log('paso por aca....')
    };



  
    
    funciones.slideAnimationTabs();
    
};

function addEventsModalCambioCantidad(){



    document.getElementById('btnCantGuardar').addEventListener('click',()=>{

        let nuevacantidad = Number(document.getElementById('txtCantNuevaCant').value);
        let nuevoprecio = Number(document.getElementById('txtCantNuevoPrecio').value);


        if(nuevacantidad>0){
            fcnUpdateTempRow(GlobalSelectedId,nuevacantidad,nuevoprecio)
            .then(()=>{
                $('#modalCambiarCantidadProducto').modal('hide');
            })
        }else{
            funciones.AvisoError('Escriba una cantidad válida')
        }  
    });
    
    document.getElementById('txtCantNuevaCant').addEventListener('change',()=>{
      
        let nuevacantidad = Number(document.getElementById('txtCantNuevaCant').value);
        let nuevoprecio = Number(document.getElementById('txtCantNuevoPrecio').value);

            let subtotal = nuevacantidad * nuevoprecio;

            document.getElementById('lbCantNuevoSubtotal').innerText = funciones.setMoneda(subtotal,'Q');
    });

    document.getElementById('txtCantNuevoPrecio').addEventListener('change',()=>{
      
        let nuevacantidad = Number(document.getElementById('txtCantNuevaCant').value);
        let nuevoprecio = Number(document.getElementById('txtCantNuevoPrecio').value);

            let subtotal = nuevacantidad * nuevoprecio;

            document.getElementById('lbCantNuevoSubtotal').innerText = funciones.setMoneda(subtotal,'Q');
    });

};

function fcnIniciarModalCantidadProductos(){

        
    let btnAgregarProducto = document.getElementById('btnAgregarProducto'); //boton agregar 
    let txtCantidad = document.getElementById('txtCantidad'); //input
    let btnCantidadUp = document.getElementById('btnCantidadUp');
    let btnCantidadDown = document.getElementById('btnCantidadDown');
    let txtSubTotal = document.getElementById('txtSubTotal'); //label

    btnAgregarProducto.addEventListener('click',()=>{
        GlobalSelectedCantidad = Number(txtCantidad.value);
        let totalunidades = (Number(GlobalSelectedEquivale) * Number(GlobalSelectedCantidad));
        let totalexento = GlobalSelectedCantidad * GlobalSelectedExento;

        
        
        fcnAgregarProductoVenta(GlobalSelectedCodprod,GlobalSelectedDesprod,GlobalSelectedCodmedida,GlobalSelectedCantidad,GlobalSelectedEquivale,totalunidades,GlobalSelectedCosto,GlobalSelectedPrecio,totalexento);
        
        
    });

    txtCantidad.addEventListener('click',()=>{txtCantidad.value =''});

    btnCantidadUp.addEventListener('click',()=>{
        let cant = parseInt(txtCantidad.value);
        txtCantidad.value = cant + 1;

        let _SubTotal = parseFloat(GlobalSelectedPrecio) * parseFloat(txtCantidad.value);
        //_SubTotalCosto = parseFloat(_Costo) * parseFloat(txtCantidad.value);
        txtSubTotal.innerHTML = funciones.setMoneda(_SubTotal,'Q');
        
    })

    btnCantidadDown.addEventListener('click',()=>{
        if (parseInt(txtCantidad.value)==1){

        }else{
        let cant = parseInt(txtCantidad.value);
        txtCantidad.value = cant - 1;

        let _SubTotal = parseFloat(GlobalSelectedPrecio) * parseFloat(txtCantidad.value);
        //s_SubTotalCosto = parseFloat(_Costo) * parseFloat(txtCantidad.value);
        txtSubTotal.innerHTML = funciones.setMoneda(_SubTotal,'Q');
        }
        
    })

};

function fcnBusquedaProducto(idFiltro,idTablaResultado,idTipoPrecio){
    
    //let cmbTipoPrecio = document.getElementById(idTipoPrecio);

    let filtro = document.getElementById(idFiltro).value;
    
    let tabla = document.getElementById(idTablaResultado);
    tabla.innerHTML = GlobalLoader;


    let str = ""; 

    get_data_precios(filtro)
    .then((response) => {
        const data = response.recordset;
        //con esta variable determino el tipo de precio a usar            
        let pre = 0;
            
            data.map((rows)=>{
                let exist = Number(rows.EXISTENCIA)/Number(rows.EQUIVALE); let strC = ''; let strCfont = '';
                if(Number(rows.EXISTENCIA<=0)){strC='bg-danger text-white'; strCfont='text-danger negrita'}else{strC='bg-success text-white'; strCfont='text-info negrita'};
                let totalexento = 0;
                if (rows.EXENTO==1){totalexento=Number(rows.PRECIO)}
                
                pre = Number(rows.PRECIO);

                str += `<tr id="${rows.CODPROD}" onclick="getDataMedidaProducto('${rows.CODPROD}','${funciones.quitarCaracteres(rows.DESPROD,'"'," plg",true)}','${rows.CODMEDIDA}',1,${rows.EQUIVALE},${rows.EQUIVALE},${rows.COSTO},${pre},${totalexento},${Number(rows.EXISTENCIA)});" class="border-bottom">
                <td >
                    ${funciones.quitarCaracteres(rows.DESPROD,'"'," pulg",true)}
                    <br>
                    <small class="${strCfont}"><b>${rows.CODPROD}</b></small><small class="text-info">//Escala:${rows.DESPROD3}</small>
                    <br>
                    <b class"bg-danger text-white">${rows.CODMEDIDA}</b>
                    <small>(${rows.EQUIVALE})</small>
                </td>
                <td>${funciones.setMoneda(pre || 0,'Q ')}
                    <br>
                    <h5 class="${strCfont}">E:${funciones.setMoneda(exist,'')}</h5>
                </td>
                
                <td>
                    <button class="btn btn-sm btn-success btn-circle text-white" 
                    onclick="getDataMedidaProducto('${rows.CODPROD}','${funciones.quitarCaracteres(rows.DESPROD,'"'," plg",true)}','${rows.CODMEDIDA}',1,${rows.EQUIVALE},${rows.EQUIVALE},${rows.COSTO},${pre},${totalexento},${Number(rows.EXISTENCIA)});">
                        +
                    </button>
                <td>
                
            </tr>`
            })
            tabla.innerHTML= str;
        
    }, (error) => {
        console.log(error);
    })
    .catch((error)=>{
        //funciones.AvisoError(error);
        tabla.innerHTML ='<label>Debe descargar los productos al menos una vez al día.. Descárguelos nuevamente por favor.</label>';
    })




};

function get_data_precios(filtro){
    return new Promise((resolve,reject)=>{
        axios.post('/productos/buscar_precio',{
           sucursal:GlobalCodSucursal,
           filtro:filtro
        })
        .then((response) => {
            let data = response.data;
            if(response=='error'){
                reject();
            }else{
                if(Number(data.rowsAffected[0])>0){
                    resolve(data);             
                }else{
                    reject();
                } 
            }
                        
        }, (error) => {
            reject();
        });
    })
}



//gestiona la apertura de la cantidad
function getDataMedidaProducto(codprod,desprod,codmedida,cantidad,equivale,totalunidades,costo,precio,exento,existencia){
   

    //if(parseInt(existencia)>0){
        GlobalSelectedCodprod = codprod;
        GlobalSelectedDesprod = desprod;
        GlobalSelectedCodmedida = codmedida;
        GlobalSelectedEquivale = parseInt(equivale);
        GlobalSelectedCosto = parseFloat(costo);
        GlobalSelectedPrecio = parseFloat(precio);
        
        GlobalSelectedExento = parseInt(exento);
        GlobalSelectedExistencia = parseInt(existencia);
    
        //modal para la cantidad del producto
        document.getElementById('txtDesProducto').innerText = desprod; //label
        document.getElementById('txtCodMedida').innerText = codmedida; //label
        document.getElementById('txtPrecioProducto').innerText = funciones.setMoneda(precio,'Q'); //label
        document.getElementById('txtSubTotal').innerText = funciones.setMoneda(precio,'Q'); //label
            
        document.getElementById('txtCantidad').value = 1;
    
        $("#ModalCantidadProducto").modal('show');    
    //}else{
        //funciones.AvisoError('Producto SIN EXISTENCIA')
    //}


};

//GRID TEMP VENTAS

// agrega el producto a temp_ventas
async function fcnAgregarProductoVenta(codprod,desprod,codmedida,cantidad,equivale,totalunidades,costo,precio,exento){
   
    if(Number(GlobalSelectedExistencia)<Number(totalunidades)){
        //funciones.AvisoError('No pude agregar una cantidad mayor a la existencia');
        //return;
    };

    document.getElementById('btnAgregarProducto').innerHTML = GlobalLoader;
    document.getElementById('btnAgregarProducto').disabled = true;

    //document.getElementById('tblResultadoBusqueda').innerHTML = '';
    let cmbTipoPrecio = 'P';//document.getElementById('cmbTipoPrecio');
        let totalcosto = Number(costo) * Number(cantidad);
        let totalprecio = Number(precio) * Number(cantidad);
        console.log('intenta agregar la fila')
        let coddoc = document.getElementById('cmbCoddoc').value;
        try {        
                var data = {
                    EMPNIT:GlobalEmpnit,  
                    CODSUCURSAL:GlobalCodSucursal,
                    CODDOC:coddoc,     
                    CODPROD:codprod,
                    DESPROD:desprod,
                    CODMEDIDA:codmedida,
                    CANTIDAD:cantidad,
                    EQUIVALE:equivale,
                    TOTALUNIDADES:totalunidades,
                    COSTO:costo,
                    PRECIO:precio,
                    TOTALCOSTO:totalcosto,
                    TOTALPRECIO:totalprecio,
                    EXENTO:exento,
                    USUARIO:GlobalUsuario,
                    TIPOPRECIO:cmbTipoPrecio,
                    EXISTENCIA:GlobalSelectedExistencia
                };

                insertTempVentas(data)
                .then(()=>{                    
      
                        $('#ModalCantidadProducto').modal('hide') //MARCADOR
                        funciones.showToast('Agregado: ' + desprod);
                        
                        fcnCargarGridTempVentas('tblGridTempVentas');
                        
                        document.getElementById('btnAgregarProducto').innerHTML  = `<i class="fal fa-check"></i>Agregar`;
                        document.getElementById('btnAgregarProducto').disabled = false;
                        let txbusqueda = document.getElementById('txtBusqueda');
                        txbusqueda.value = '';
                        
                  })
                  .catch(
                      ()=>{
                        document.getElementById('btnAgregarProducto').innerHTML  = `<i class="fal fa-check"></i>Agregar`;
                        document.getElementById('btnAgregarProducto').disabled = false;
                        funciones.AvisoError('No se pudo agregar este producto a la venta actual');
                      }
                  )
        
        } catch (error) {
            document.getElementById('btnAgregarProducto').innerHTML  = `<i class="fal fa-check"></i>Agregar`;
            document.getElementById('btnAgregarProducto').disabled = false;
        }
   

};

function fcnEliminarItem(id){
    funciones.Confirmacion('¿Está seguro que desea quitar este item?')
    .then((value)=>{
        if(value==true){
                deleteItemVenta(id)
                  .then(()=>{                       
                        //document.getElementById(id.toString()).remove();
                        funciones.showToast('item eliminado');
                        fcnCargarGridTempVentas('tblGridTempVentas');
                  })
                  .catch(
                      ()=>{
                        funciones.AvisoError('No se pudo remover este producto a la venta actual');
                      }
                  )
        }        
    })
    
};

async function fcnCargarGridTempVentas(idContenedor){
    
    let tabla = document.getElementById(idContenedor);
    tabla.innerHTML = GlobalLoader;

    let varTotalVenta = 0; let varTotalCosto = 0;
    let varTotalItems =0;

    let btnCobrarTotal = document.getElementById('btnCobrar')
    btnCobrarTotal.disabled = true; //.innerText =  'Terminar';
    let btnCobrar2 = document.getElementById('btnCobrar2');
    btnCobrar2.disabled = true;
   
    let coddoc = document.getElementById('cmbCoddoc').value;
    
    let containerTotalVenta = document.getElementById('txtTotalVenta');
    containerTotalVenta.innerHTML = '--';

    let containerTotalItems = document.getElementById('txtTotalItems');
    containerTotalItems.innerHTML = '--'

    try {
        selectTempventas(GlobalUsuario)
        .then((response)=>{
            let idcant = 0;
            let data = response.map((rows)=>{
                idcant = idcant + 1;
                varTotalItems += 1;
                varTotalVenta = varTotalVenta + Number(rows.TOTALPRECIO);
                varTotalCosto = varTotalCosto + Number(rows.TOTALCOSTO);
                return `<tr id="${rows.ID.toString()}" class="border-bottom" ondblclick="funciones.hablar('${rows.DESPROD}')">
                            <td class="text-left">
                                ${rows.DESPROD}
                                <br>
                                <small class="text-danger"><b>${rows.CODPROD} (${rows.EQUIVALE} item)</b></small>
                                <br>
                                    <small>
                                        Cant:<b class="text-danger h4" id=${idcant}>${rows.CANTIDAD}</b>  ${rows.CODMEDIDA}  ||  Precio:<b>${funciones.setMoneda(rows.PRECIO,'Q')}</b>
                                    </small>
                                <br>
                                <div class="row">
                                    <div class="col-4"></div>
                                    <div class="col-4 " align="right">
                                        <button class="btn btn-secondary btn-sm btn-circle" onClick="fcnCambiarCantidad(${rows.ID},${rows.CANTIDAD},'${rows.CODPROD}',${rows.EXISTENCIA},${rows.PRECIO},${rows.COSTO});">
                                            <i class="fal fa-edit"></i>
                                        </button>    
                                    </div>
                                    <div class="col-4 text-right" align="right">
                                        <button class="btn btn-sm btn-danger btn-circle" onclick="fcnEliminarItem(${rows.ID});">
                                            <i class="fal fa-trash"></i>
                                        </button>    
                                    </div>
                                </div>
                            </td>
                                                        
                            <td class="text-right" id=${'S'+idcant}>${funciones.setMoneda(rows.TOTALPRECIO,'Q')}</td>
                            
                        </tr>`
           }).join('\n');
           tabla.innerHTML = data;
           GlobalTotalDocumento = varTotalVenta;
           GlobalTotalCostoDocumento = varTotalCosto;
           containerTotalVenta.innerHTML = `${funciones.setMoneda(GlobalTotalDocumento,'Q ')}`;
           if(GlobalTotalDocumento==0){
                btnCobrarTotal.disabled = true;
                btnCobrar2.disabled = true;
           }else{
                btnCobrarTotal.disabled = false;
                btnCobrar2.disabled = false;
           }
             //innerHTML = '<h1>Terminar : ' + funciones.setMoneda(GlobalTotalDocumento,'Q ') + '</h1>';
           containerTotalItems.innerHTML = `${varTotalItems} items`;
        })
    } catch (error) {
        console.log('NO SE LOGRO CARGAR LA LISTA ' + error);
        tabla.innerHTML = 'No se logró cargar la lista...';
        containerTotalVenta.innerHTML = '0';
        btnCobrarTotal.disabled = true; //innerText =  'Terminar';
        btnCobrar2.disabled = true;
        containerTotalItems.innerHTML = `0 items`;
    }
};

async function fcnUpdateTempRow(id,cantidad,precio){

    //--------------------------
    if(Number(GlobalSelectedExistencia)<Number(cantidad)){
        //funciones.AvisoError('No pude agregar una cantidad mayor a la existencia');
        //return;
    };
    if(Number(GlobalSelectedCosto)>Number(precio)){
            funciones.AvisoError('Precio menor al costo, por favor rectifique');
            return;
    };
    //--------------------------

    return new Promise((resolve, reject) => {
            //OBTIENE LOS DATOS DE LA ROW    
            selectDataRowVenta(id,cantidad,precio)
            .then(()=>{
                fcnCargarGridTempVentas('tblGridTempVentas');
                resolve();
            })
            .catch(()=>{
                funciones.AvisoError('No se logró Eliminar la lista de productos agregados');
                reject();
            })

        });
};

async function fcnCambiarCantidad(id,cantidad,codprod, existencia,precio,costo){
    
        GlobalSelectedId = id;
        GlobalSelectedExistencia = Number(existencia);
        GlobalSelectedCosto = Number(costo);

        //$('#ModalCantidad').modal('show');
        document.getElementById('txtCantNuevaCant').value = cantidad;
        document.getElementById('txtCantNuevoPrecio').value = precio;

        let subtotal = cantidad * precio;
        document.getElementById('lbCantNuevoSubtotal').innerText = funciones.setMoneda(subtotal,'Q');
    
        $('#modalCambiarCantidadProducto').modal('show');
        
};


//CLIENTE
async function fcnBuscarCliente(idNit,idNombre,idDireccion){
    return;

    let nit = document.getElementById(idNit);
    let nombre = document.getElementById(idNombre);
    let direccion = document.getElementById(idDireccion);

    axios.get('/ventas/buscarcliente?empnit=' + GlobalEmpnit + '&nit=' + nit.value  + '&app=' + GlobalSistema)
    .then((response) => {
        const data = response.data;
        if (data.rowsAffected[0]==0){
            funciones.AvisoError('No existe un cliente con este código')
            nit.value = '';
            nombre.value = '';
            direccion.value = '';
        }else{
            data.recordset.map((rows)=>{
                GlobalSelectedCodCliente= nit.value;
                nombre.value = rows.NOMCLIENTE;
                direccion.value = rows.DIRCLIENTE;
            });
        }
        
                
    }, (error) => {
        console.log(error);
    });
};

async function fcnBusquedaCliente(idFiltro,idTablaResultado){
    
    let filtro = document.getElementById(idFiltro).value;
    let tabla = document.getElementById(idTablaResultado);
    tabla.innerHTML = GlobalLoader;


    let str = ""; 
    axios.get('/clientes/buscarcliente?empnit=' + GlobalCodSucursal + '&filtro=' + filtro)
    .then((response) => {
        const data = response.data;        
        data.recordset.map((rows)=>{
            str += `<tr id="${rows.CODCLIE}">
                        <td>
                            ${rows.NOMCLIE}
                            <br>
                            <small class="bg-warning">Código: ${rows.CODCLIE} / Nit: ${rows.NIT}</small>
                            <br>
                            <small>${rows.DIRCLIE},${rows.DESMUNICIPIO}</small>
                        </td>
                        
                        <td>
                            <button class="btn btn-sm btn-success btn-circle text-white" 
                            onclick="fcnAgregarClienteVenta('${rows.CODCLIE}','${rows.NIT}','${rows.NOMCLIE}','${rows.DIRCLIE}')">
                                +
                            </button>
                        </td>
                    </tr>`
        })
        tabla.innerHTML= str;
        
    }, (error) => {
        console.log(error);
    });

};

async function fcnAgregarClienteVenta(codigo,nit,nombre,direccion){
    GlobalSelectedCodCliente = codigo;
    document.getElementById('tblResultadoBusquedaCliente').innerHTML = '';

    document.getElementById('txtCliCodigo').value = codigo;
    document.getElementById('txtNit').value = codigo; //nit;
    document.getElementById('txtCliNit').value = nit;
    document.getElementById('txtNombre').value = nombre;
    document.getElementById('txtCliNombre').value = nombre;
    document.getElementById('txtDireccion').value = direccion;
    document.getElementById('txtCliDireccion').value = direccion;
    

    $('#ModalBusquedaCliente').modal('hide');  
};

async function fcnGuardarNuevoCliente(form){
    
    let nit = form[0].value;
    let nomclie = form[1].value;
    let nomfac = form[2].value;
    let dirclie = form[3].value;
    let codpais = form[4].value;
    let telclie = form[5].value;
    let emailclie = form[6].value;
    let codmunicipio = form[7].value;
    let coddepto = form[8].value;
    let tipoprecio = form[9].value;

    let codven = document.getElementById('cmbVendedor').value;

    // OBTIENE LA LATITUD Y LONGITUD DEL CLIENTE
    let lat = ''; let long = '';
    try {navigator.geolocation.getCurrentPosition(function (location) {lat = location.coords.latitude.toString();long = location.coords.longitude.toString(); })
    } catch (error) {lat = '0'; long = '0'; };
    
    // FECHA DE CREACION DEL CLIENTE
    let f = funciones.getFecha();

    axios.post('/clientes/clientenuevo', {
        app:GlobalSistema,
        empnit: GlobalEmpnit,
        codclie:nit,
        nitclie:nit,
        nomclie:nomclie,
        nomfac:nomfac,
        dirclie:dirclie,
        coddepto:coddepto,
        codmunicipio:codmunicipio,
        codpais:codpais,
        telclie:telclie,
        emailclie:emailclie,
        codbodega:GlobalCodBodega,
        tipoprecio:tipoprecio,
        lat:lat,
        long:long,
        codven:codven,
        fecha:f        
    })
    .then((response) => {
        const data = response.data;
        if (data.rowsAffected[0]==0){
            funciones.AvisoError('No se logró Guardar el nuevo cliente');
        }else{
            funciones.Aviso('Nuevo Cliente Agregado Exitosamente !!')
            document.getElementById('txtNit').value = nit;
            document.getElementById('txtNombre').value = nomclie;
            document.getElementById('txtDireccion').value = dirclie;
            document.getElementById('btnCancelarCliente').click();
        }
    }, (error) => {
        funciones.AvisoError('No se logró Guardar el nuevo cliente');
        console.log(error);
    });


};


//FINALIZAR PEDIDO
async function fcnFinalizarPedido(){
    
  
      
    let codcliente = document.getElementById('txtCliCodigo').value || ''; //GlobalSelectedCodCliente;
    if(codcliente==''){funciones.AvisoError('Seleccione un cliente');return;}

    let nit = document.getElementById('txtCliNit').value || 'CF';
    //codcliente = 'CF';
    let ClienteNombre = document.getElementById('txtCliNombre').value;
    GlobalSelectedNomCliente = ClienteNombre;
    
    let dirclie = document.getElementById('txtCliDireccion').value; // CAMPO DIR_ENTREGA
    GlobalSelectedDirCliente = dirclie;

    let obs = document.getElementById('cmbEntregaTipoDoc').value; //document.getElementById('txtEntregaObs').value; 
    let direntrega = "SN"; //document.getElementById('txtEntregaDireccion').value; //CAMPO MATSOLI
    let codbodega = GlobalCodBodega;
    let cmbTipoEntrega = document.getElementById('cmbEntregaConcre').value; //campo TRANSPORTE


    let txtFecha = new Date(document.getElementById('txtFecha').value);
    let anio = txtFecha.getFullYear();
    let mes = txtFecha.getUTCMonth()+1;
    let d = txtFecha.getUTCDate() 
    let fecha = anio + '-' + mes + '-' + d; // CAMPO DOC_FECHA
    let dia = d;

    let hora = funciones.getHora();
    
    let fe = txtFecha;// new Date(document.getElementById('txtEntregaFecha').value);
    let ae = fe.getFullYear();
    let me = fe.getUTCMonth()+1;
    let de = fe.getUTCDate() 
    let fechaentrega = ae + '-' + me + '-' + de;  // CAMPO DOC_FECHAENT

    let coddoc = document.getElementById('cmbCoddoc').value;//GlobalCoddoc;
    let correlativoDoc = document.getElementById('txtCorrelativo').value;

    let cmbVendedor = document.getElementById('cmbVendedor');

  

    let latdoc = document.getElementById('lbDocLat').innerText;
    let longdoc = document.getElementById('lbDocLong').innerText;

            let tipo_pago = document.getElementById('cmbEntregaConcre').value;
            let tipo_doc = document.getElementById('cmbEntregaTipoDoc').value;
            let entrega_contacto = document.getElementById('txtEntregaContacto').value || document.getElementById('txtNombre').value;
            let entrega_telefono = document.getElementById('txtEntregaTelefono').value || '00';
            let entrega_direccion = document.getElementById('txtEntregaDireccion').value || 'SN';
            let entrega_referencia = document.getElementById('txtEntregaReferencia').value || 'SN';
            let entrega_lat = document.getElementById('lbEntregaLat').innerText || '0';
            let entrega_long = document.getElementById('lbEntregaLong').innerText || '0';
            

        document.getElementById('btnFinalizarPedido').innerHTML = '<i class="fal fa-paper-plane mr-1 fa-spin"></i>';
        document.getElementById('btnFinalizarPedido').disabled = true;

            classTipoDocumentos.getCorrelativoDocumento('PED',GlobalCoddoc)
                .then((correlativo)=>{
                    correlativoDoc = correlativo;
                    
                    //document.getElementById('btnFinalizarPedido').innerHTML = '<i class="fal fa-paper-plane mr-1"></i>';
                    //document.getElementById('btnFinalizarPedido').disabled = false;

                    funciones.Confirmacion('¿Está seguro que desea Finalizar este Pedido')
                    .then((value)=>{
                        if(value==true){
                         
                        
                            gettempDocproductos(GlobalUsuario)
                            .then((response)=>{
                                let docproductos_ped = response;
                                
                                axios.post('/ventas/insertventa', {
                                    jsondocproductos:JSON.stringify(response),
                                    codsucursal:GlobalCodSucursal,
                                    empnit: GlobalEmpnit,
                                    coddoc:coddoc,
                                    correl: correlativoDoc,
                                    anio:anio,
                                    mes:mes,
                                    dia:dia,
                                    fecha:fecha,
                                    fechaentrega:fechaentrega,
                                    formaentrega:cmbTipoEntrega,
                                    codbodega:codbodega,
                                    codcliente: codcliente,
                                    nomclie:ClienteNombre,
                                    totalcosto:GlobalTotalCostoDocumento,
                                    totalprecio:GlobalTotalDocumento,
                                    nitclie:nit,
                                    dirclie:dirclie,
                                    obs:entrega_referencia,
                                    direntrega:direntrega,
                                    usuario:GlobalUsuario,
                                    codven:cmbVendedor.value,
                                    lat:latdoc,
                                    long:longdoc,
                                    hora:hora,
                                    tipo_pago:tipo_pago,
                                    tipo_doc:tipo_doc,
                                    entrega_contacto:entrega_contacto,
                                    entrega_telefono:entrega_telefono,
                                    entrega_direccion:entrega_direccion,
                                    entrega_referencia:entrega_referencia,
                                    entrega_lat:entrega_lat,
                                    entrega_long:entrega_long,
                                    domicilio:GlobalSelectedDomicilio
                                })
                                .then(async(response) => {
                                    const data = response.data;
                                    console.log(response);
                                    //if (data.rowsAffected[0]==0){
                                    if (data=='error'){
                                            funciones.AvisoError('No se pudo guardar este pedido');
                                            document.getElementById('btnFinalizarPedido').innerHTML = '<i class="fal fa-paper-plane mr-1"></i>';
                                            document.getElementById('btnFinalizarPedido').disabled = false;
                                    }else{
                                        
                                        document.getElementById('btnFinalizarPedido').innerHTML = '<i class="fal fa-paper-plane mr-1"></i>';
                                        document.getElementById('btnFinalizarPedido').disabled = false;

                                        funciones.Aviso('Pedido Generado Exitosamente !!!')
                                    
                                        document.getElementById('btnEntregaCancelar').click();
                                                            
                                     
                                        deleteTempVenta(GlobalUsuario)

                                    
                                        //prepara todo para un nuevo pedido
                                        fcnNuevoPedido();
                                    }
                                }, (error) => {
                                    console.log(error);
                                    funciones.AvisoError('No se pudo guardar este pedido');
                                    document.getElementById('btnFinalizarPedido').innerHTML = '<i class="fal fa-paper-plane mr-1"></i>';
                                    document.getElementById('btnFinalizarPedido').disabled = false;
                                });        

                            })
                            .catch((error)=>{
                                    funciones.AvisoError('No se pudo guardar este pedido');
                                    document.getElementById('btnFinalizarPedido').innerHTML = '<i class="fal fa-paper-plane mr-1"></i>';
                                    document.getElementById('btnFinalizarPedido').disabled = false;
                            })

                            
                        

                        }else{
                            document.getElementById('btnFinalizarPedido').innerHTML = '<i class="fal fa-paper-plane mr-1"></i>';
                            document.getElementById('btnFinalizarPedido').disabled = false;
                        }
                    })

                })
                .catch(()=>{
                    console.log('pasa por aqui...');
                    funciones.AvisoError('No se pudo guardar este pedido');
                    document.getElementById('btnFinalizarPedido').innerHTML = '<i class="fal fa-paper-plane mr-1"></i>';
                    document.getElementById('btnFinalizarPedido').disabled = false;
                    
                })

    
};

async function fcnEliminarTempVentas(usuario){
    let coddoc = document.getElementById('cmbCoddoc').value;
    axios.post('/ventas/tempVentastodos', {
        empnit: GlobalEmpnit,
        usuario:usuario,
        coddoc:coddoc,
        app:GlobalSistema
    })
    .then((response) => {
        const data = response.data;
        if (data.rowsAffected[0]==0){
            funciones.AvisoError('No se logró Eliminar la lista de productos agregados');
        }else{
            
        }
    }, (error) => {
        console.log(error);
    });
};

async function fcnNuevoPedido(){
    
    document.getElementById('lbEntregaLat').innerText ='0';
    document.getElementById('lbEntregaLong').innerText ='0';

    
    $('#modalWait').modal('hide');

    classNavegar.ventas('','CF','CONSUMIDOR FINAL', 'CIUDAD');
    
};



async function fcnGetMunicipios(idContainer){
    let container = document.getElementById(idContainer);
    container.innerHTML = GlobalLoader;

    let str = ""; 
    axios.get('/clientes/municipios?empnit=' + GlobalEmpnit + '&app=' + GlobalSistema)
    .then((response) => {
        const data = response.data;        
        data.recordset.map((rows)=>{
            str += `<option value='${rows.CODMUNICIPIO}'>${rows.DESMUNICIPIO}</option>`
        })
        container.innerHTML= str;
        
    }, (error) => {
        console.log(error);
        container.innerHTML = '';
    });
};

async function fcnGetDepartamentos(idContainer){
    let container = document.getElementById(idContainer);
    container.innerHTML = GlobalLoader;

    let str = ""; 
    axios.get('/clientes/departamentos?empnit=' + GlobalEmpnit + '&app=' + GlobalSistema)
    .then((response) => {
        const data = response.data;        
        data.recordset.map((rows)=>{
            str += `<option value='${rows.CODDEPTO}'>${rows.DESDEPTO}</option>`
        })
        container.innerHTML= str;
        
    }, (error) => {
        console.log(error);
        container.innerHTML = '';
    });
};




function showUbicacion(){
    return new Promise((resolve,reject)=>{
        try {
            navigator.geolocation.getCurrentPosition(function (location) {
                console.log(location);
                resolve(location);
            })
        } catch (error) {
            reject();
        }
    })
};

function Lmap(lat,long){

    try {
        map.off();
        map.remove();    
    } catch (error) {
        
    }
    

    document.getElementById('mapcontainer').innerHTML = '';


    //INICIALIZACION DEL MAPA            
      var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      osmAttrib = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      osm = L.tileLayer(osmUrl, {center: [lat, long],maxZoom: 20, attribution: osmAttrib});    
      map = L.map('mapcontainer').setView([lat, long], 11).addLayer(osm);

      var userIcon = L.icon({
        iconUrl: '../img/userIcon.png',
        shadowUrl: '../img/marker-shadow.png',
    
        iconSize:     [30, 45], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

      L.marker([lat, long],{draggable:'true'})
        .addTo(map)
        .bindPopup('Mi Ubicación', {closeOnClick: false, autoClose: false})   
        .openPopup()
        .on('dragend', function(event){
            var marker = event.target;
            var position = marker.getLatLng();
            marker.setLatLng(new L.LatLng(position.lat, position.lng),{draggable:'true'});
            map.panTo(new L.LatLng(position.lat, position.lng));
            document.getElementById('lbEntregaLat').innerText = position.lat.toString();
            document.getElementById('lbEntregaLong').innerText = position.lng.toString();
          });        
      return map;
};