function getView(){
    let view ={
        body:()=>{
            return `
                <div class="col-12 p-0 bg-white">
                    <div class="tab-content" id="myTabHomeContent">
                        <div class="tab-pane fade show active" id="dia" role="tabpanel" aria-labelledby="receta-tab">
                            ${view.vista_dia()}
                        </div>
                        <div class="tab-pane fade" id="mes" role="tabpanel" aria-labelledby="home-tab">
                            ${view.vista_mes()}
                        </div>    
                    </div>

                    <ul class="nav nav-tabs hidden" id="myTabHome" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active negrita text-success" id="tab-dia" data-toggle="tab" href="#dia" role="tab" aria-controls="profile" aria-selected="false">
                                <i class="fal fa-list"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-mes" data-toggle="tab" href="#mes" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i></a>
                        </li>         
                    </ul>

                </div>
               
            `
        },
        vista_dia : ()=>{
            return `
            <div class="row bg-naranja text-white">
                <div class="col-12">
                    <h5>Seleccione la Fecha y el tipo de Reporte</h5>
                </div>               
            </div>

            <div class="row">
                <div class="col-sm-4 col-md-4 col-lg-4 col-xl-4">
                    <div class="form-group">
                        <label>Por Fecha</label>
                        <input type="date" class="form-control" id="txtFecha">
                    </div>
                </div>
                <div class="col-sm-8 col-md-8 col-lg-8 col-xl-8">
                    <button class="btn btn-success hand shadow btn-circle btn-xl hidden" id="btnRepDiaDocumentos">
                        <i class="fal fa-calendar"></i>
                    </button>
                </div>
            </div>

            <hr class="solid">
            <div class="" id="containerTotal"></div>
                <br>
            <div class="row card">
                <div class="table-responsive" id="tblReport">
                  
                </div>
            </div>
            `
        },
        vista_mes : ()=>{
            return `
            <div class="row bg-naranja text-white">
                <div class="col-12">
                    <h5>Seleccione un Mes y un Reporte</h5>
                </div>               
            </div>

            <div class="row">
                <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                    <div class="row">

                        <div class="col-6">
                            <div class="form-group">
                                <select class="form-control" id="cmbMes"></select>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group">
                                <select class="form-control" id="cmbAnio"></select>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            `
        },
        listado: ()=>{
            return `
                <hr class="solid">
            <div class="" id="containerTotal"></div>
                <br>
            <div class="row card">
                <div class="table-responsive" id="tblReport">
                  
                </div>
            </div>


            `
        },
        modalDetallePedido:()=>{
            return `
            <div class="card">          
            <br>
            <div class="table-responsive">
                <table class="table table-responsive table-hover table-striped table-bordered">
                    <thead class="bg-trans-gradient text-white">
                        <tr>
                            <td>Producto</td>
                            <td>Medida</td>
                            <td>Cant</td>
                            <td>Precio</td>
                            <td>Subtotal</td>
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
            <div class="row">
                <button class="btn btn-info btn-lg" id="btnEditarPedido">
                    <i class="fal fa-edit"></i>
                    Editar Pedido
                </button>
            </div>
        </div>
        `
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
        }
    };

    root.innerHTML = view.body();
};

function addListeners(){

   

    document.getElementById('txtFecha').value = funciones.getFecha();

    let f = new Date();
    let cmbMes = document.getElementById('cmbMes');
    cmbMes.innerHTML = funciones.ComboMeses();
    let cmbAnio = document.getElementById('cmbAnio');
    cmbAnio.innerHTML = funciones.ComboAnio();

    cmbMes.value = f.getMonth()+1;
    cmbAnio.value = f.getFullYear();


    


   

    //REPORTE DE DOCUMENTOS DEL DIA
    document.getElementById('txtFecha').addEventListener('change',()=>{
        rpt_pedidos_vendedor(GlobalCodSucursal,GlobalCodUsuario,funciones.devuelveFecha('txtFecha'),'tblReport','containerTotal');
    });
    
    rpt_pedidos_vendedor(GlobalCodSucursal,GlobalCodUsuario,funciones.devuelveFecha('txtFecha'),'tblReport','containerTotal');


    let btnRepDiaDocumentos = document.getElementById('btnRepDiaDocumentos');
    btnRepDiaDocumentos.addEventListener('click',()=>{
            rpt_pedidos_vendedor(GlobalCodSucursal,GlobalCodUsuario,funciones.devuelveFecha('txtFecha'),'tblReport','containerTotal');
                    
    });


   return;
   //CARGA DE LOS REPORTES
   let cmbReporte = document.getElementById('cmbReporte');
   cmbReporte.addEventListener('change',()=>{
       switch (cmbReporte.value.toString()) {
           case '1':
               //PEDIDOS POR FECHA
               apigen.pedidosVendedor(GlobalCodSucursal,GlobalCodUsuario,funciones.devuelveFecha('txtFecha'),'tblReport','containerTotal');
               break;
       
           case '2':
               //MARCAS POR FECHA
               apigen.reporteDiaMarcas(GlobalCodSucursal,GlobalCodUsuario,funciones.devuelveFecha('txtFecha'),'tblReport','containerTotal');
               break;

           case '3':
               //PRODUCTOS POR FECHA
               apigen.reporteDiaProductos(GlobalCodSucursal,GlobalCodUsuario,funciones.devuelveFecha('txtFecha'),'tblReport','containerTotal');
               break;
           
           case '4':
               //VENTAS POR FECHA
               getRptDinero(cmbMes.value, cmbAnio.value);
               break;
           case '5':
               //PRODUCTOS DEL MES
               getRptProductos(cmbMes.value, cmbAnio.value);
               break;
           
           case '6':
               //MARCAS POR MES
               getRptMarcas(cmbMes.value, cmbAnio.value);
               break;
           
           case '7':
               //VENTAS NETAS MES
               getRptDinero2(cmbMes.value, cmbAnio.value);
               break;
           default:
               break;
       }

   });

   let btnEditarPedido = document.getElementById('btnEditarPedido');
   btnEditarPedido.addEventListener('click',()=>{
       cargarPedidoEdicion(GlobalSelectedCoddoc,GlobalSelectedCorrelativo,GlobalSelectedSt);    
   });

};

function inicializarVistaLogro(){
    getView();
    addListeners();
};


function getRptDinero2(mes,anio){
    apigen.reporteDinero2(GlobalCodSucursal,GlobalCodUsuario,anio,mes,'tblReport','containerTotal');
};
function getRptDinero(mes,anio){
    apigen.reporteDinero(GlobalCodSucursal,GlobalCodUsuario,anio,mes,'tblReport','containerTotal');
};
function getRptProductos(mes,anio){
    apigen.reporteProductos(GlobalCodSucursal,GlobalCodUsuario,anio,mes,'tblReport','containerTotal');
};
function getRptMarcas(mes,anio){
    apigen.reporteMarcas(GlobalCodSucursal,GlobalCodUsuario,anio,mes,'tblReport','containerTotal');
};



//POR DIA

function fcn_delete_pedido(coddoc,correlativo,st){
    
    if(st=='I'){
        funciones.Confirmacion('¿Está seguro que desea Eliminar este Pedido?')
        .then((value)=>{
            if(value==true){
                funciones.solicitarClave()
                    .then((clave)=>{
                        if(clave==GlobalPassUsuario){

                                apigen.delete_pedido(GlobalCodSucursal,coddoc,correlativo)
                                .then(()=>{
                                    funciones.Aviso('Pedido Eliminado Exitosamente!!')
                                    rpt_pedidos_vendedor(GlobalCodSucursal,GlobalCodUsuario,funciones.devuelveFecha('txtFecha'),'tblReport','containerTotal');
                                })
                                .catch(()=>{
                                    funciones.AvisoError('No se pudo eliminar');
                                })

                        }else{
                            funciones.AvisoError('Clave incorrecta')
                        }
                    }
                )        
            }
        });

    }else{
        funciones.AvisoError('No se puede Eliminar un pedido que ya fué confirmado por Digitación');
        funciones.hablar('No se puede Eliminar un pedido que ya fué confirmado por Digitación, comuníquese a oficina para solucionarlo');
    }  

};

function delete_pedido (sucursal,coddoc,correlativo){
    return new Promise((resolve,reject)=>{
        axios.post('/ventas/deletepedidovendedor',{
           sucursal:sucursal,
           coddoc:coddoc,
           correlativo:correlativo
        })
        .then((response) => {
            let data = response.data;
            if(Number(data.rowsAffected[0])>0){
                resolve(data);             
            }else{
                reject();
            }                     
        }, (error) => {
            reject();
        });
    })
}


function getDetallePedido(fecha,coddoc,correlativo,codclie,nomclie,dirclie,st,
    tipo_pago,tipo_doc,
    entrega_contacto,entrega_telefono,entrega_direccion,entrega_referencia,entrega_lat,entrega_long,domicilio){

    GlobalSelectedSt = st;
    GlobalSelectedFecha = fecha;
    GlobalSelectedCoddoc = coddoc;
    GlobalSelectedCorrelativo = correlativo;
    GlobalSelectedCodCliente=codclie;
    GlobalSelectedNomCliente=nomclie;
    GlobalSelectedDirCliente=dirclie;
    Global_tipo_pago = tipo_pago;
    Global_tipo_doc = tipo_doc;
    Global_entrega_contacto = entrega_contacto;
    Global_entrega_telefono = entrega_telefono;
    Global_entrega_direccion = entrega_direccion;
    Global_entrega_referencia = entrega_referencia;
    Global_entrega_lat = entrega_lat;
    Global_entrega_long = entrega_long;
    Global_domicilio = domicilio;

    //lbMenuTitulo.innerText = `Pedido: ${coddoc}-${correlativo}`;
    apigen.digitadorDetallePedido(fecha,coddoc,correlativo,'tblDetallePedido','lbTotalDetallePedido')
    //$("#modalMenu").modal('show');
    
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
                
                await apigen.pedidosVendedor(GlobalCodSucursal,GlobalCodUsuario,funciones.devuelveFecha('txtFechaPedido'),'tblListaPedidos','lbTotalPedidos');

                document.getElementById(idRow).remove();
                
                apigen.digitadorDetallePedido(GlobalSelectedFecha,coddoc,correlativo,'tblDetallePedido','lbTotalDetallePedido')

                funciones.Aviso('Item removido exitosamente !!')
            })
            .catch((error)=>{
                console.log(error)
                funciones.AvisoError('No se pudo remover el item')
            })
            
            
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

function cargarPedidoEdicion(coddoc,correlativo,st){
    if(st=='O'){

        funciones.Confirmacion('¿Está seguro que desea EDITAR este pedido, no se podrá deshacer lo que haga?')
        .then((value)=>{
            if(value==true){
                $("#modalMenu").modal('hide');
                funciones.solicitarClave()
                        .then((clave)=>{
                            if(clave==GlobalPassUsuario){
                                setLog(`<label>Eliminando datos de algún pedido pendiente...</label>`,'rootWait')
                                $('#modalWait').modal('show');

                                //document.getElementById('btnEditarPedido').innerHTML = GlobalLoaderMini;
                                //document.getElementById('btnEditarPedido').disabled = true;
                                
                                deleteTempVenta(GlobalUsuario)
                                .then(()=>{
                                    setLog(`<label>Descargando datos del pedido a editar...</label>`,'rootWait')
                                    //descarga el pedido y lo inserta en el indexed
                                    loadDetallePedido(coddoc,correlativo)
                                    .then(()=>{
                                        funciones.showToast('Pedido cargado...');

                                        setLog(`<label>Eliminando pedido anterior...</label>`,'rootWait')
                                        fcnDeletePedidoCargado(coddoc,correlativo)
                                        .then(()=>{
                                            funciones.showToast('Pedido anterior eliminado con éxito!!');
                                            
                                            $('#modalWait').modal('hide');
                                            classNavegar.ventas(GlobalSelectedCodCliente,GlobalSelectedNomCliente,GlobalSelectedDirCliente,'LOAD');
                                        })
                                        .catch(()=>{
                                            $('#modalWait').modal('hide');
                                            //document.getElementById('btnEditarPedido').innerHTML = `<i class="fal fa-edit"></i>Editar Pedido`;
                                            //document.getElementById('btnEditarPedido').disabled = false;
                                            funciones.AvisoError('No se pudo eliminar el pedido anterior');
                                        })
        
                                    })
                                    .catch((error)=>{
                                        $('#modalWait').modal('hide');
                                        //document.getElementById('btnEditarPedido').innerHTML = `<i class="fal fa-edit"></i>Editar Pedido`;
                                        //document.getElementById('btnEditarPedido').disabled = false;
                                        funciones.AvisoError('No se pudo cargar el pedido. Error: ' + error);
                                    })
                                })
                                .catch(()=>{
                                    $('#modalWait').modal('hide');

                                    funciones.AvisoError('No se pudo limpiar el pedido')
                                })

                                
    
                            }
                        })
    
            }
        })

    }else{
        funciones.AvisoError('No se puede EDITAR un pedido que ya fue confirmado en digitación');
    }

    
    
};

//SELECCIONA EL DETALLE DEL PEDIDO Y LO CARGA
function loadDetallePedido(coddoc,correlativo){
    
    return new Promise((resolve,reject)=>{
        axios.post('/ventas/loadpedido', {
            sucursal:GlobalCodSucursal,
            coddoc: coddoc,
            correlativo: correlativo,
            usuario: GlobalUsuario
        })
        .then((response) => {
            const data = response.data;
           data.recordset.map((rows)=>{
                insertTempVentas(rows);
           })
            resolve();
        }, (error) => {
            //funciones.AvisoError('Error en la solicitud');
            reject('Error de solicitud');
        });

    })
    
    
};

function loadDetallePedido_online(coddoc,correlativo){
    
    return new Promise((resolve,reject)=>{
        axios.post('/ventas/loadpedido', {
            sucursal:GlobalCodSucursal,
            coddoc: coddoc,
            correlativo: correlativo,
            usuario: GlobalUsuario
        })
        .then((response) => {
            console.log(response);
            const data = response.data;
            if (data.rowsAffected[1]==0){
                //funciones.AvisoError('No se cargó el pedido');
                reject('No se cargó el pedido');
            }else{
                //funciones.Aviso('Pedido Cargado con éxito')
                resolve();
            }
            
        }, (error) => {
            //funciones.AvisoError('Error en la solicitud');
            resolve('Error de solicitud');
        });

    })
    
    
};

function fcnDeletePedidoCargado(coddoc,correlativo){
    return new Promise((resolve,reject)=>{
        axios.post('/ventas/eliminarpedidocargado', {
            sucursal:GlobalCodSucursal,
            coddoc: coddoc,
            correlativo: correlativo
        })
        .then((response) => {
            
            const data = response.data;
            if(Number(data.rowsAffected[0])>0){
                resolve();             
            }else{
                reject();
            }
          
        }, (error) => {
            //funciones.AvisoError('Error en la solicitud');
            reject();
        });
    })
    
};



function rpt_pedidos_vendedor(sucursal,codven,fecha,idContenedor,idLbTotal){

    let container = document.getElementById(idContenedor);
    container.innerHTML = GlobalLoader;
    
    let lbTotal = document.getElementById(idLbTotal);
    lbTotal.innerText = '---';

    let tableheader = `<table class="table table-responsive table-hover table-striped table-bordered">
                        <thead class="bg-naranja text-white">
                            <tr>
                                <td>Documento</td>
                                <td>Cliente</td>
                                <td>Importe</td>
                            </tr>
                        </thead>
                        <tbody id="tblListaPedidos">`;
    let tablefoooter ='</tbody></table>';

    let strdata = '';
    let totalpedidos = 0;
    axios.post('/ventas/lista_pedidos', {
        sucursal: sucursal,
        coddoc:GlobalCoddoc,
        fecha:fecha   
    })
    .then((response) => {
        const data = response.data.recordset;
        let total =0;
        data.map((rows)=>{
                total = total + Number(rows.IMPORTE);
                totalpedidos = totalpedidos + 1;
                strdata = strdata + `<tr>
                            <td colspan="2">
                                    <b class="text-danger">${rows.CODDOC + '-' + rows.CORRELATIVO}</b>
                                <br>
                                    ${rows.NEGOCIO} // ${rows.NOMCLIE}
                                <br>
                                    <small class="text-secondary">${rows.DIRCLIE + ', ' + rows.DESMUNI}</small>
                                <br>
                                    <small class="text-white bg-secondary">${rows.OBS}</small>
                                <br>
                                <div class="row">
                                    <div class="col-3">
                                    </div>
                                    <div class="col-3">
                                        <button class="btn btn-info btn-sm btn-circle"
                                            onclick="getDetallePedido('${rows.FECHA.toString().replace('T00:00:00.000Z','')}','${rows.CODDOC}',
                                            '${rows.CORRELATIVO}','${rows.CODCLIE}','${rows.NOMCLIE}','${rows.DIRCLIE}','${rows.ST}',
                                            '${rows.TIPO_PAGO}','${rows.TIPO_DOC}','${rows.ENTREGA_CONTACTO}','${rows.ENTREGA_TELEFONO}','${rows.ENTREGA_DIRECCION}',
                                            '${rows.ENTREGA_REFERENCIA}','${rows.ENTREGA_LAT}','${rows.ENTREGA_LONG}','${rows.DOMICILIO}');">
                                            <i class="fal fa-edit"></i>
                                        </button>    
                                    </div>
                                    <div class="col-3">
                                        <button class="btn btn-danger btn-sm btn-circle"
                                            onclick="fcn_delete_pedido('${rows.CODDOC}','${rows.CORRELATIVO}','${rows.ST}');">
                                            <i class="fal fa-trash"></i>
                                        </button>    
                                    </div>
                                    <div class="col-3">
                                        <button class="btn btn-outline-success btn-sm btn-circle"
                                            onclick="funciones.enviarPedidoWhatsapp2('${rows.FECHA.toString().replace('T00:00:00.000Z','')}','${rows.CODDOC}','${rows.CORRELATIVO}');">
                                            w
                                        </button>    
                                    </div>
                                </div>
                            </td>
                            <td>
                                <b>${funciones.setMoneda(rows.IMPORTE,'Q')}</b>
                            </td>
                        </tr>`
        })
        container.innerHTML = tableheader + strdata + tablefoooter;
        //lbTotal.innerText = `${funciones.setMoneda(total,'Q ')} - Pedidos: ${totalpedidos} - Promedio:${funciones.setMoneda((Number(total)/Number(totalpedidos)),'Q')}`;
        lbTotal.innerHTML = `<h3 class="negrita text-naranja">Total Importe: ${funciones.setMoneda(total,'Q ')}</h3>
                             <h3 class="negrita text-danger">No. Pedidos: ${totalpedidos}</h3>
                            `;
    }, (error) => {
        funciones.AvisoError('Error en la solicitud');
        strdata = '';
        container.innerHTML = '';
        lbTotal.innerHTML = '-- --';
    });
       
}