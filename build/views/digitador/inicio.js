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
                
                    <div class="col-0 hidden">
                        
                        <select class="form-control hidden" id="cmbEmbarques">
                        </select>
                    </div>

                    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <button class="btn btn-md btn-danger hidden" id="btnPedidoBloquear">
                            <i class="fal fa-globe"></i>
                            Finalizar
                        </button>
                        <button class="btn btn-md hand shadow btn-success" id="btnPedidoConfirmar">
                            <i class="fal fa-check"></i>
                            Confirmar de entregado
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
                                <table class="table table-responsive table-hover table-striped table-bordered">
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
        modalCantidad:()=>{
            return `
            <div class="modal fade" id="ModalCantidad" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-md" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <label class="modal-title text-danger h3" id="">Nueva Cantidad</label>
                        </div>

                        <div class="modal-body">

                            <div class="row">
                                <div class="col-2">
                                    <h1 class="text-danger fw-700">Cant:</h1>
                                </div>
                                <div class="col-8 text-center">
                                    <h1 class="text-danger fw-700" id="lbCalcTotal">0</h1>
                                </div>
                                <div class="col-2"></div>
                            </div>
                            
                            <br>

                            <div class="row">
                                <div class="col-4">
                                    <button class="btn btn-xl btn-circle btn-info" id="btnCalc1">1</button>
                                </div>
                                <div class="col-4">
                                    <button class="btn btn-xl btn-circle btn-info" id="btnCalc2">2</button>
                                </div>
                                <div class="col-4">
                                    <button class="btn btn-xl btn-circle btn-info" id="btnCalc3">3</button>
                                </div>
                            </div>
                            
                            <br>

                            <div class="row">
                                <div class="col-4">
                                    <button class="btn btn-xl btn-circle btn-info" id="btnCalc4">4</button>
                                </div>
                                <div class="col-4">
                                    <button class="btn btn-xl btn-circle btn-info" id="btnCalc5">5</button>
                                </div>
                                <div class="col-4">
                                    <button class="btn btn-xl btn-circle btn-info" id="btnCalc6">6</button>
                                </div>
                            </div>
                            
                            <br>

                            <div class="row">
                                <div class="col-4">
                                    <button class="btn btn-xl btn-circle btn-info" id="btnCalc7">7</button>
                                </div>
                                <div class="col-4">
                                    <button class="btn btn-xl btn-circle btn-info" id="btnCalc8">8</button>
                                </div>
                                <div class="col-4">
                                    <button class="btn btn-xl btn-circle btn-info" id="btnCalc9">9</button>
                                </div>
                            </div>
                            <br>
                            <div class="row">
                                <div class="col-4">
                            
                                </div>
                                <div class="col-4">
                                    <button class="btn btn-xl btn-circle btn-info" id="btnCalc0">0</button>
                                </div>
                                <div class="col-4">
                            
                                </div>
                            </div>

                            <br><br><br>

                            <div class="row">
                                <div class="col-4">
                                    <button class="btn btn-danger btn-md" id="btnCalcCancelar">Cancelar</button>
                                </div>
                                <div class="col-4">
                                    <button class="btn btn-primary btn-md" id="btnCalcLimpiar">Limpiar</button>
                                </div>
                                <div class="col-4">
                                    <button class="btn btn-success btn-md" id="btnCalcAceptar">Aceptar</button>
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
        }
    };

    root.innerHTML = view.encabezado() + view.listado() + view.listaTipoPrecio();
    rootMenuLateral.innerHTML = view.detallepedido() + view.modalCambiarCantidadProducto() + view.modalCantidad();
    
};

async function addListeners(){
    
    iniciarModalCantidad();

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

    /**
      btnPedidoConfirmar.addEventListener('click',()=>{
        
        funciones.Confirmacion('¿Está seguro que desea CONFIRMAR este Pedido?')
        .then((value)=>{
            if(value==true){
                apigen.digitadorConfirmarPedido(GlobalCodSucursal,GlobalSelectedCoddoc,GlobalSelectedCorrelativo,cmbEmbarques.value)
                .then(()=>{
                    funciones.Aviso('Pedido CONFIRMADO exitosamente!!')
                    digitadorPedidosVendedor(GlobalCodSucursal,'tblPedidos','lbTotal',cmbStatus.value)
                    $("#modalMenu").modal('hide');
                })
                .catch(()=>{
                    funciones.AvisoError('No se pudo CONFIRMAR :(')
                })
            }
        })

    });
     */

    //await apigen.digitadorComboEmbarques('cmbEmbarques');
    addEventsModalCambioCantidad();

};

function iniciarVistaDigitador(){
    getView();
    addListeners();

};

function getDetallePedido(fecha,coddoc,correlativo){
    GlobalSelectedFecha = fecha;
    lbMenuTitulo.innerText = `Pedido: ${coddoc}-${correlativo}`;
    digitadorDetallePedido(fecha,coddoc,correlativo,'tblDetallePedido','lbTotalDetallePedido')
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
                
                digitadorDetallePedido(GlobalSelectedFecha,coddoc,correlativo,'tblDetallePedido','lbTotalDetallePedido')

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

                digitadorDetallePedido('',GlobalSelectedCoddoc,GlobalSelectedCorrelativo,'tblDetallePedido','lbTotalDetallePedido');
               
             
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


function iniciarModalCantidad(){
    let total = document.getElementById('lbCalcTotal');
    total.innerText = "";
    let btnCalcAceptar = document.getElementById('btnCalcAceptar');
    let btnCalcLimpiar = document.getElementById('btnCalcLimpiar');
    let btnCalcCancelar = document.getElementById('btnCalcCancelar');

    let b0 = document.getElementById('btnCalc0');
    let b1 = document.getElementById('btnCalc1');
    let b2 = document.getElementById('btnCalc2');
    let b3 = document.getElementById('btnCalc3');
    let b4 = document.getElementById('btnCalc4');
    let b5 = document.getElementById('btnCalc5');
    let b6 = document.getElementById('btnCalc6');
    let b7 = document.getElementById('btnCalc7');
    let b8 = document.getElementById('btnCalc8');
    let b9 = document.getElementById('btnCalc9');

    b0.addEventListener('click',()=>{total.innerText = total.innerText + "0"})
    b1.addEventListener('click',()=>{total.innerText = total.innerText + "1"})
    b2.addEventListener('click',()=>{total.innerText = total.innerText + "2"})
    b3.addEventListener('click',()=>{total.innerText = total.innerText + "3"})
    b4.addEventListener('click',()=>{total.innerText = total.innerText + "4"})
    b5.addEventListener('click',()=>{total.innerText = total.innerText + "5"})
    b6.addEventListener('click',()=>{total.innerText = total.innerText + "6"})
    b7.addEventListener('click',()=>{total.innerText = total.innerText + "7"})
    b8.addEventListener('click',()=>{total.innerText = total.innerText + "8"})
    b9.addEventListener('click',()=>{total.innerText = total.innerText + "9"})
    btnCalcLimpiar.addEventListener('click',()=>{total.innerText = ""})

    btnCalcAceptar.addEventListener('click',async ()=>{
        let n = Number(total.innerText);
        
        fcnUpdateRowPedido();
        //fcnUpdateTempRow(GlobalSelectedId,n)
        //.then(async()=>{
            
            //
        //})
        total.innerText = "";
        
        $("#ModalCantidad").modal('hide');
    })

    btnCalcCancelar.addEventListener('click',()=>{
        $("#ModalCantidad").modal('hide');
    });

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
                    tblentrega = `<table class="table">
                                   
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
                                            <td>Contacto:</td>
                                            <td>${rows.ENTREGA_CONTACTO}</td>
                                        </tr>
                                        <tr>
                                            <td>Teléfono:</td>
                                            <td>${rows.ENTREGA_TELEFONO}</td>
                                        </tr>
                                        <tr>
                                            <td>Dirección:</td>
                                            <td>${rows.ENTREGA_DIRECCION}</td>
                                        </tr>
                                        <tr>
                                            <td>Referencia:</td>
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
                                    <div class="col-6" onclick="getDetallePedido('${f}','${rows.CODDOC}','${rows.CORRELATIVO}','${rows.ST}')">
                                        <h2 class="negrita text-danger text-right">${funciones.setMoneda(rows.IMPORTE,'Q')}</h2>
                                    </div>
                                </div>   
                                
                                <hr class="solid">

                                <div class="row">
                                    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                            <small class="negrita text-danger">Datos de Facturación:</small>
                                            <br>
                                            <table class="table">
                                                <tbody>
                                                    <tr>
                                                        <td>Nit:</td>
                                                        <td>${rows.NIT}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Nombre:</td>
                                                        <td>${rows.NOMCLIE}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Dirección:</td>
                                                        <td>${rows.DIRCLIE}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Tipo Documento</td>
                                                        <td class="negrita ${strClassRowSt}">${rows.OBS}</td>
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



function digitadorDetallePedido(fecha,coddoc,correlativo,idContenedor,idLbTotal){

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

                            <td><b class="text-info">${rows.CODMEDIDA}</b>-<b>Cant: ${rows.CANTIDAD}</b></td>

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