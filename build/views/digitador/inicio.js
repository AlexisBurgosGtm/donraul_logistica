function getView(){
    let view ={
        encabezado : ()=>{
            return `
            <div class="row">

                <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                      
                        
                        <div class="input-group">
                            <select class="form-control" id="cmbStatus">
                                <option value="O">Pendientes</option>
                                <option value="A">Finalizado</option>
                            </select>
                            <div class="input-group-prepend">
                                <button class="btn btn-info waves-effect waves-themed shadow" type="button" id="btnRecargar">
                                    <i class="fal fa-sync"></i>
                                </button>
                            </div>
                        </div>
                </div>

                <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <div class="form-group">
                        <label>Total : </label>
                        <h3 id='lbTotal' class="text-danger"></h3>
                    </div>
                </div>

            </div> 
            `
        },
        listado : ()=>{
            return `
            <br>
            <div class="row">
                <div class="col-12">                    
                    <div class="table-responsive" id="tblPedidos">
                       
                    </div>
                </div>
            </div>
            `
        },
        detallepedido: ()=>{
            return `
            <div class="card">
                <br>
                <div class="row">
                
                    <div class="col-6">
                            <button class="btn btn-md hand shadow btn-danger" id="btnPedidoConfirmar">
                                <i class="fal fa-check"></i>
                                Confirmar de entregado
                            </button>
                    </div>

                    <div class="col-6">
                        <button class="btn btn-md btn-danger hidden" id="btnPedidoBloquear">
                            <i class="fal fa-globe"></i>
                            Finalizar
                        </button>
                        <button class="btn btn-md hand shadow btn-success" id="btnPedidoAgregar">
                            <i class="fal fa-plus"></i>
                            Agregar producto
                        </button>
                    </div>

                </div>
                <br>
                <div class="table-responsive col-12">
                    <table class="table table-responsive table-hover table-striped table-bordered">
                        <thead class="bg-trans-gradient text-white">
                            <tr>
                                <td>Producto</td>
                                <td>Cant</td>
                                <td>Precio</td>
                                <td>Subtotal</td>
                                <td></td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody id="tblDetallePedido"></tbody>
                        
                    </table>
                </div>
                <br>
                <div class="">
                    <div class="col-1"></div>
                    <div class="col-5">
                        <label>Total Pedido : </label>
                        <h2 class="text-danger" id="lbTotalDetallePedido"></h2>
                    </div>
                    
                </div>
            </div>
            `
        },
        listaTipoPrecio : ()=>{
            return `
        <div class="modal fade" id="modalTipoPrecio" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <label class="modal-title text-danger h3" id="">Tipo de Precio en Pedidos</label>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><i class="fal fa-times"></i></span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="table-responsive" id="">
                                <table class="table table-hover table-striped table-bordered">
                                    <thead class="bg-trans-gradient text-white">
                                        <tr>
                                            <td>Documento</td>
                                            <td>Producto</td>
                                            <td>Medida</td>
                                            <td>Cant</td>
                                            <td>Precio</td>
                                            <td>Importe</td>
                                        </tr>
                                    </thead>
                                    <tbody id="tblTipoPrecio">
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="row"></div>
    
                    </div>
                </div>
            </div>
        </div>`

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
                                            <button class="btn btn-secondary btn-lg  btn-pills btn-block waves-effect waves-themed" id="btnCantCancelar">
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
        modalListaProductos :()=>{
            return `
            <div class="modal fade modal-with-scroll" id="ModalBusqueda" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-right" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <label class="modal-title text-danger h3" id="">Búsqueda de Productos</label>
                          
                        </div>

                        <div class="modal-body">
                            <div class="row">
                                <div class="input-group">
                                    <select class="form-control col-3 shadow border-secondary negrita border-left-0 border-right-0 border-top-0 hidden" id="cmbTipoPrecio">
                                        <option value="P">P</option>
                                        <option value="C">C</option>
                                        <option value="B">B</option>
                                        <option value="A">A</option>
                                        <option value="K">K</option>
                                    </select>
                                    <input id="txtBusqueda" type="text" ref="txtBusqueda" class="bg-amarillo form-control col-7 shadow" placeholder="Buscar código o descripción..." aria-label="" aria-describedby="button-addon4" />
                                    <div class="input-group-prepend">
                                        <button class="btn btn-success btn-rounded waves-effect waves-themed shadow" type="button" id="btnBuscarProducto">
                                            <i class="fal fa-search"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        <table class="table table-responsive table-striped table-hover">
                            <thead class="bg-secondary text-white">
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
                    <button class="btn btn-danger btn-sm" id="btnCerrarModalLista">
                        <i class="fal fa-angle-double-left"></i>Atrás
                    </button>
                </div>
            </div>
            
            `
        }
    };

    root.innerHTML = view.encabezado() + view.listado() + view.listaTipoPrecio();
    rootMenuLateral.innerHTML = view.detallepedido() + view.modalCambiarCantidadProducto() + view.modalListaProductos();
    
};

async function addListeners(){
   
   
    //tipo de lista
    let cmbStatus = document.getElementById('cmbStatus');
    cmbStatus.addEventListener('change',()=>{
        digitadorPedidosVendedor(GlobalCodSucursal,'tblPedidos','lbTotal',cmbStatus.value)
    });

   
   
    document.getElementById('btnRecargar').addEventListener('click',()=>{
        digitadorPedidosVendedor(GlobalCodSucursal,'tblPedidos','lbTotal',cmbStatus.value)
    });
        
   
    digitadorPedidosVendedor(GlobalCodSucursal,'tblPedidos','lbTotal',cmbStatus.value)
       


    let btnPedidoBloquear = document.getElementById('btnPedidoBloquear');
    btnPedidoBloquear.addEventListener('click',()=>{
        funciones.Confirmacion('¿Está seguro que desea FINALIZAR este Pedido?')
        .then((value)=>{
            if(value==true){
                apigen.digitadorBloquearPedido(GlobalCodSucursal,GlobalSelectedCoddoc,GlobalSelectedCorrelativo)
                .then(()=>{
                    funciones.Aviso('Pedido FINALIZADO exitosamente!!')
                    digitadorPedidosVendedor(GlobalCodSucursal,'tblPedidos','lbTotal',cmbStatus.value)
                    $("#modalMenu").modal('hide');
                })
                .catch(()=>{
                    funciones.AvisoError('No se pudo Bloquear :(')
                })
            }
        })
        
    });

    //let cmbEmbarques = document.getElementById('cmbEmbarques');

    let btnPedidoConfirmar = document.getElementById('btnPedidoConfirmar');
    btnPedidoConfirmar.addEventListener('click',()=>{
        
        funciones.Confirmacion('¿Está seguro que desea CONFIRMAR este Pedido?')
        .then((value)=>{
            if(value==true){

                
                
                btnPedidoConfirmar.disabled = true;
                btnPedidoConfirmar.innerHTML = '<i class="fal fa-check fa-spin"></i>Confirmando...';

                apigen.digitadorConfirmarPedido(GlobalCodSucursal,GlobalSelectedCoddoc,GlobalSelectedCorrelativo,'ENTREGADO')
                .then(()=>{

                    funciones.Aviso('Pedido CONFIRMADO exitosamente!!')
                    digitadorPedidosVendedor(GlobalCodSucursal,'tblPedidos','lbTotal',cmbStatus.value)
                    $("#modalMenu").modal('hide');

                    btnPedidoConfirmar.disabled = false;
                    btnPedidoConfirmar.innerHTML = `<i class="fal fa-check"></i>Confirmar de entregado`;
                })
                .catch(()=>{
                    funciones.AvisoError('No se pudo CONFIRMAR :(');

                    btnPedidoConfirmar.disabled = false;
                    btnPedidoConfirmar.innerHTML = `<i class="fal fa-check"></i>Confirmar de entregado`;
                })
            }
        })

    });

  
    let btnPedidoAgregar = document.getElementById('btnPedidoAgregar');
    btnPedidoAgregar.addEventListener('click',()=>{
        
        $("#ModalBusqueda").modal('show');

    });

    document.getElementById('btnBuscarProducto').addEventListener('click',()=>{
        fcnBusquedaProducto('txtBusqueda','tblResultadoBusqueda','cmbTipoPrecio');
       
    });


    document.getElementById('btnCerrarModalLista').addEventListener('click',()=>{
        $("#ModalBusqueda").modal('hide');
    })

    document.getElementById('btnCantCancelar').addEventListener('click',()=>{
        $("#modalCambiarCantidadProducto").modal('hide');
    })

    //btnCantCancelar

    //await apigen.digitadorComboEmbarques('cmbEmbarques');
    addEventsModalCambioCantidad();

};

function iniciarVistaDigitador(){
    getView();
    addListeners();

};


// LISTA DE PRODUCTOS
function fcnBusquedaProducto(idFiltro,idTablaResultado,idTipoPrecio){
    
    let cmbTipoPrecio = document.getElementById(idTipoPrecio);

    let filtro = document.getElementById(idFiltro).value;
    
    let tabla = document.getElementById(idTablaResultado);
    tabla.innerHTML = GlobalLoader;


    let str = ""; 

    selectProducto(filtro)
    .then((response) => {
        const data = response;
        //con esta variable determino el tipo de precio a usar            
        let pre = 0;
            
            data.map((rows)=>{
                let exist = Number(rows.EXISTENCIA)/Number(rows.EQUIVALE); let strC = '';
                if(Number(rows.EXISTENCIA<=0)){strC='bg-danger text-white'}else{strC='bg-success text-white'};
                let totalexento = 0;
                if (rows.EXENTO==1){totalexento=Number(rows.PRECIO)}
                
                switch (cmbTipoPrecio.value) {
                    case 'P':
                        pre = Number(rows.PRECIO)
                        break;
                    case 'C':
                        pre = Number(rows.PRECIOC)
                        break;
                    case 'B':
                        pre = Number(rows.PRECIOB)
                        break;
                    case 'A':
                        pre = Number(rows.PRECIOA)
                        break;
                    case 'K':
                        pre = Number(0.01)
                        break;
     
                }

                str += `<tr id="${rows.CODPROD}" onclick="getDataMedidaProducto('${rows.CODPROD}','${funciones.quitarCaracteres(rows.DESPROD,'"'," plg",true)}','${rows.CODMEDIDA}',1,${rows.EQUIVALE},${rows.EQUIVALE},${rows.COSTO},${pre},${totalexento},${Number(rows.EXISTENCIA)});" class="border-bottom">
                <td >
                    ${funciones.quitarCaracteres(rows.DESPROD,'"'," pulg",true)}
                    <br>
                    <small class="text-danger"><b>${rows.CODPROD}</b></small><small class="text-info">//Escala:${rows.DESPROD3}</small>
                    <br>
                    <b class"bg-danger text-white">${rows.CODMEDIDA}</b>
                    <small>(${rows.EQUIVALE})</small>
                </td>
                <td>${funciones.setMoneda(pre || 0,'Q ')}
                    <br>
                    <small class="${strC}">E:${funciones.setMoneda(exist,'')}</small>
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

function getDataMedidaProducto(codprod,desprod,codmedida,cantidad,equivale,totalunidades,costo,precio,exento,existencia){
   
        


        insert_nuevo_producto('P', codprod,desprod, codmedida, Number(equivale), Number(cantidad), Number(totalunidades), Number(costo), Number(precio), (Number(costo)*Number(cantidad)), (Number(precio)*Number(cantidad)) )
        .then(()=>{
            funciones.showToast('Producto agregado exitosamente!!');
            getDetallePedido(varPedidoMes,varPedidoAnio,GlobalSelectedCoddoc,GlobalSelectedCorrelativo,'','');
        })
        .catch((err)=>{
            
            console.log(err);
            funciones.AvisoError('No se pudo agregar');

        })
    

};


function insert_nuevo_producto(tipoprecio, codprod, desprod, codmedida, equivale, cantidad, totalunidades, costo, precio, totalcosto, totalprecio){
   
    return new Promise((resolve,reject)=>{
             
        axios.post('/ventas/insert_row_docproductos',{
            sucursal:GlobalCodSucursal,
            coddoc:GlobalSelectedCoddoc,
            correlativo:GlobalSelectedCorrelativo,
            empnit: GlobalCodSucursal,
            anio: varPedidoAnio, 
            mes: varPedidoMes,
            tipoprecio: tipoprecio,
            codprod: codprod,
            desprod: desprod,
            codmedida: codmedida,
            cantidad: cantidad,
            equivale: equivale,
            totalunidades: totalunidades,
            costo: costo,
            precio: precio,
            totalprecio: totalprecio,
            totalcosto: totalcosto
        })
        .then((response) => {
           resolve();             
        }, (error) => {
            reject();
        });

    })

};




function getDetallePedido(mes,anio,coddoc,correlativo,st, cliente){
    //GlobalSelectedFecha = fecha;
    lbMenuTitulo.innerText = `${cliente}`; //` Pedido: ${coddoc}-${correlativo}`;
    digitadorDetallePedido(mes,anio,coddoc,correlativo,'tblDetallePedido','lbTotalDetallePedido')
    $("#modalMenu").modal('show');
};

function getModalCantidad(idRow){

    document.getElementById('lbCalcTotal').innerText='';    
    $("#ModalCantidad").modal('show');


};


function deleteProductoPedido(idRow,coddoc,correlativo,totalprecio,totalcosto){
    funciones.Confirmacion('¿Está seguro que desea Quitar este Producto en este Pedido?')
    .then((value)=>{
        if(value==true){

            apigen.digitadorQuitarRowPedido(idRow,coddoc,correlativo,totalprecio,totalcosto)
            .then(async()=>{
                
                await digitadorPedidosVendedor(GlobalCodSucursal,'tblPedidos','lbTotal',cmbStatus.value)
                document.getElementById(idRow).remove();
                
                digitadorDetallePedido(varPedidoMes,varPedidoAnio,coddoc,correlativo,'tblDetallePedido','lbTotalDetallePedido')

                funciones.Aviso('Item removido exitosamente !!')
            })
            .catch((error)=>{
                console.log(error)
                funciones.AvisoError('No se pudo remover el item')
            })
            
            
        }
    })    
};


function addEventsModalCambioCantidad(){



    document.getElementById('btnCantGuardar').addEventListener('click',()=>{

        let nuevacantidad = Number(document.getElementById('txtCantNuevaCant').value);
        let nuevoprecio = Number(document.getElementById('txtCantNuevoPrecio').value);



        if(nuevacantidad>0){
            fcnUpdateTempRow(GlobalSelectedId,nuevacantidad,nuevoprecio)
           
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

function fcnUpdateTempRow(id,cantidad,precio){

    
    //--------------------------
    if(Number(GlobalSelectedCosto)>Number(precio)){
            funciones.AvisoError('Precio menor al costo, por favor rectifique');
            return;
    };
    //--------------------------
 
    document.getElementById('btnCantGuardar').innerHTML = `<i class="fal fa-check mr-1 fa-spin"></i>Actualizando...`;
    document.getElementById('btnCantGuardar').disabled = true;

    update_row_pedido(id,cantidad,precio)
            .then(()=>{
                
                document.getElementById('btnCantGuardar').innerHTML = `<i class="fal fa-check mr-1"></i>Aceptar`;
                document.getElementById('btnCantGuardar').disabled = false;

                $('#modalCambiarCantidadProducto').modal('hide');

                digitadorDetallePedido(varPedidoMes,varPedidoAnio,GlobalSelectedCoddoc,GlobalSelectedCorrelativo,'tblDetallePedido','lbTotalDetallePedido');
               
             
            })
            .catch((err)=>{
                
                document.getElementById('btnCantGuardar').innerHTML = `<i class="fal fa-check mr-1"></i>Aceptar`;
                document.getElementById('btnCantGuardar').disabled = false;

                funciones.AvisoError('No se logró editar...');
            })
};

function editProductoPedido(idRow,coddoc,correlativo,cantidad,costo,precio){
    funciones.Confirmacion('¿Está seguro que desea EDITAR este Producto en este Pedido?')
    .then((value)=>{
        if(value==true){

            GlobalSelectedId = idRow;
            GlobalSelectedExistencia = Number(0);
            GlobalSelectedCosto = Number(costo);
    
            document.getElementById('txtCantNuevaCant').value = cantidad;
            document.getElementById('txtCantNuevoPrecio').value = precio;
    
            let subtotal = cantidad * precio;
            document.getElementById('lbCantNuevoSubtotal').innerText = funciones.setMoneda(subtotal,'Q');
        
            $("#modalCambiarCantidadProducto").modal('show');
            
        }
    })    
};



function update_row_pedido(idrow,cantidad,precio){
   
    let totalprecio = Number(precio) * Number(cantidad);
    let totalcosto = Number(GlobalSelectedCosto) * Number(cantidad);

    console.log('costo: ' + totalcosto);
   
    return new Promise((resolve,reject)=>{
             
        axios.post('/digitacion/updaterowpedido',{
            sucursal:GlobalCodSucursal,
            item:idrow,
            coddoc:GlobalSelectedCoddoc,
            correlativo:GlobalSelectedCorrelativo,
            cantidad:cantidad,
            precio:precio,
            totalprecio:totalprecio,
            totalcosto:totalcosto
        })
        .then((response) => {
            
           resolve();             
        }, (error) => {
            
            reject();
        });

    })

};


function digitadorPedidosVendedor(sucursal,idContenedor,idLbTotal,st){

    let container = document.getElementById(idContenedor);
    container.innerHTML = GlobalLoader;
    
    let lbTotal = document.getElementById(idLbTotal);
    lbTotal.innerText = '---';
    
    let strdata = '';
    let totalpedidos = 0;
    let strApicall= '';

    switch (st) {
        case "O":
            strApicall = '/digitacion/pedidospendientes';
            break;
        case "A":
            strApicall = '/digitacion/pedidosbloqueados';
            break;
    
        default:
            break;
    }
    axios.post(strApicall, {
        app:GlobalSistema,
        sucursal: sucursal
    })
    .then((response) => {
        const data = response.data.recordset;
        let total =0;
        let strClassStatus = '';
        let strClassRowSt = '';
        data.map((rows)=>{
                let domicilio = ''; let tblentrega = '';
                if(rows.DOMICILIO=='SI'){
                    strClassStatus='bg-danger text-white';
                    domicilio='ENTREGA DOMICILIO';
                    tblentrega = `<table class="">
                                   
                                    <tbody>
                                        <tr>
                                            <td>
                                                <small class="${strClassStatus}">${domicilio}</small>
                                            </td>
                                            <td>  
                                                <button class="btn btn-md btn-warning shadow hand" onclick="funciones.gotoGoogleMaps('${rows.ENTREGA_LAT}','${rows.ENTREGA_LONG}')">
                                                    <i class="fal fa-map"></i> Ver en el mapa
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="negrita-subrayado">Contacto:</td>
                                            <td>${rows.ENTREGA_CONTACTO}</td>
                                        </tr>
                                        <tr>
                                            <td class="negrita-subrayado">Teléfono:</td>
                                            <td>${rows.ENTREGA_TELEFONO}</td>
                                        </tr>
                                        <tr>
                                            <td class="negrita-subrayado">Dirección:</td>
                                            <td>${rows.ENTREGA_DIRECCION}</td>
                                        </tr>
                                        <tr>
                                            <td class="negrita-subrayado">Referencia:</td>
                                            <td>${rows.ENTREGA_REFERENCIA}</td>
                                        </tr>
                                    </tbody>
                                </table>`;
                }else{
                    strClassStatus='bg-info text-white';
                    domicilio='TIENDA';
                    tblentrega = '';
                }
                if(rows.ST=='A'){strClassRowSt='bg-danger text-white'}else{strClassRowSt=''}
                total = total + Number(rows.IMPORTE);
                totalpedidos = totalpedidos + 1;
                let f = funciones.convertDateNormal(rows.FECHA);

                strdata = strdata + `
                        <div class="card shadow col-12 p-2 card-rounded border-info">
                            <div class="card-body">
                                <div class="row">

                                    <div class="col-6">
                                        <b>Fecha: ${f}</b>
                                        <br>
                                        Pedido:<b>${rows.CODDOC + '-' + rows.CORRELATIVO}</b>
                                        <br>
                                        <small class="negrita">${rows.NOMVEN}</small>
                                    </div>
                                    <div class="col-6 hand" onclick="getDetallePedido('${rows.MES}','${rows.ANIO}','${rows.CODDOC}','${rows.CORRELATIVO}','${rows.ST}','${rows.NIT} - ${rows.NOMCLIE}')">
                                        <h2 class="negrita text-danger text-right">${funciones.setMoneda(rows.IMPORTE,'Q')}</h2>
                                    </div>

                                </div>   
                                
                                <br class="solid">

                                <div class="row">
                                    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                            <small class="negrita text-danger">Datos de Facturación:</small>
                                            <br>
                                            <table class="">
                                                <tbody>
                                                    <tr>
                                                        <td class="negrita-subrayado">Nit: </td>
                                                        <td>${rows.NIT}</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="negrita-subrayado">Nombre: </td>
                                                        <td>${rows.NOMCLIE}</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="negrita-subrayado">Dirección: </td>
                                                        <td>${rows.DIRCLIE}</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="negrita-subrayado">Tipo Documento: </td>
                                                        <td class="negrita ${strClassRowSt}"> ${rows.OBS}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                       
                                    </div>
                                    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                            
                                            <div class="table-responsive">
                                                ${tblentrega}                                            
                                            </div>
                                    </div>

                                </div>

                              

                            </div>    
                        </div>
                        <br>
                           
                           
                              
                           `
        })
        container.innerHTML = strdata;
        lbTotal.innerText = `${funciones.setMoneda(total,'Q ')} - Peds:${totalpedidos} - Prom:${funciones.setMoneda((Number(total)/Number(totalpedidos)),'Q')}`;
    }, (error) => {
        funciones.AvisoError('Error en la solicitud');
        strdata = '';
        container.innerHTML = '';
        lbTotal.innerText = 'Q 0.00';
    });
       
};

function digitadorDetallePedido(mes,anio,coddoc,correlativo,idContenedor,idLbTotal){

    
    varPedidoAnio = Number(anio);
    varPedidoMes = Number(mes);
    varPedidoTotalCosto = 0;
    varPedidoTotalPrecio = 0;

    let container = document.getElementById(idContenedor);
    container.innerHTML = GlobalLoader;
    
    let lbTotal = document.getElementById(idLbTotal);
    lbTotal.innerText = '---';
    
    let strdata = '';

    GlobalSelectedCoddoc = coddoc;
    GlobalSelectedCorrelativo = correlativo;

    axios.post('/digitacion/detallepedido', {
        sucursal: GlobalCodSucursal,
        coddoc:coddoc,
        correlativo:correlativo
    })
    .then((response) => {
        const data = response.data.recordset;
        let total =0;
        data.map((rows)=>{
            
            varPedidoTotalCosto += Number(rows.TOTALCOSTO);
            varPedidoTotalPrecio += Number(rows.IMPORTE);

                total = total + Number(rows.IMPORTE);
                strdata = strdata + `
                        <tr id='${rows.DOC_ITEM}'>
                            <td>${rows.DESPROD}
                                <br>
                                <small class="text-danger">${rows.CODPROD}</small>
                            </td>

                            <td><b>${rows.CANTIDAD} - ${rows.CODMEDIDA}</b></td>

                            <td>${funciones.setMoneda(rows.PRECIO,"")}</td>
                            <td>${funciones.setMoneda(rows.IMPORTE,"")}</td>
                            <td>
                                <button class="btn btn-info btn-md btn-circle hand shadow"
                                            onclick="editProductoPedido('${rows.DOC_ITEM}','${GlobalSelectedCoddoc}','${GlobalSelectedCorrelativo}',${rows.CANTIDAD},${rows.COSTO},${rows.PRECIO})">
                                            <i class="fal fa-edit"></i>
                                </button>              
                            </td>
                            <td>
                                <button class="btn btn-danger btn-md btn-circle hand shadow"
                                            onclick="deleteProductoPedido('${rows.DOC_ITEM}','${GlobalSelectedCoddoc}','${GlobalSelectedCorrelativo}',${rows.IMPORTE},${rows.TOTALCOSTO})">
                                            <i class="fal fa-trash"></i>
                                </button>              
                            </td>
                            
                        </tr>
                        `
        })
        container.innerHTML = strdata;
        lbTotal.innerText = `${funciones.setMoneda(total,'Q')}`;
        
        update_total_documento()
        .then(()=>{ document.getElementById('btnRecargar').click();});

    }, (error) => {
        funciones.AvisoError('Error en la solicitud');
        strdata = '';
        container.innerHTML = '';
        lbTotal.innerText = 'Q0.00';
        varPedidoTotalCosto = 0;
        varPedidoTotalPrecio = 0;
    });
       
};

function update_total_documento(){
   
    return new Promise((resolve,reject)=>{
             
        axios.post('/digitacion/updatedocumentototal',{
            sucursal:GlobalCodSucursal,
            coddoc:GlobalSelectedCoddoc,
            correlativo:GlobalSelectedCorrelativo,
            totalprecio:varPedidoTotalPrecio,
            totalcosto:varPedidoTotalCosto
        })
        .then((response) => {
           resolve();             
        }, (error) => {
            reject();
        });

    })

};