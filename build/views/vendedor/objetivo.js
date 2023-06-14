function getView(){
    let view ={
        body:()=>{
            return `
                <div class="col-12 p-0 bg-white">
                    <div class="tab-content" id="myTabHomeContent">
                        <div class="tab-pane fade show active" id="dia" role="tabpanel" aria-labelledby="receta-tab">
                            ${view.vista_dia()}
                        </div>
                        <div class="tab-pane fade" id="detalle" role="tabpanel" aria-labelledby="home-tab">
                            ${view.detalle_pedido()}
                            
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
                            <a class="nav-link negrita text-danger" id="tab-detalle" data-toggle="tab" href="#detalle" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i></a>
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
                    <h5>Logro del día</h5>
                </div>               
            </div>

            <div class="row">
                <div class="col-6">
                    <div class="form-group">
                        <label>Por Fecha</label>
                        <input type="date" class="form-control" id="txtFecha">
                    </div>
                </div>

                <div class="col-6">
                    <div class="" id="containerTotal"></div>
                </div>

            </div>

            <hr class="solid">
           
            <div class="row">
                <div class="table-responsive" id="tblReport">
                  
                </div>
            </div>
            `
        },
        detalle_pedido:()=>{
            return `
            <div class="row">
                <div class="col-6">
                    <label>Total Pedido : </label>
                        <h2 class="text-danger" id="lbTotalDetallePedido"></h2>
                    </div>
                <div class="col-6">
                    <button class="btn btn-success shadow hand" id="btnEditarPedido">
                        <i class="fal fa-edit"></i>
                        Editar Pedido
                    </button>
                </div>
                
            </div>
        <div class="card card-rounded shadow">          
            <br>
            <div class="table-responsive">
                <table class="table table-responsive table-hover table-striped table-bordered">
                    <thead class="bg-naranja text-white">
                        <tr>
                            <td>Producto</td>
                            <td>Medida</td>
                            <td>Cant</td>
                            <td>Precio</td>
                            <td>Subtotal</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody id="tblDetallePedido"></tbody>
                    
                </table>
            </div>
         
            
        </div>

        <div class="row">
            <div class="col-6">
                    <button class="btn btn-xl btn-secondary btn-circle hand shadow" id="btnDetalleAtras">
                        <i class="fal fa-arrow-left"></i>
                    </button>
            </div>
            <div class="col-6">
                    <button class="btn btn-xl btn-outline-danger btn-circle hand shadow" id="btnPdf">
                        <i class="fal fa-download"></i>
                    </button>
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


    

    let btnDetalleAtras = document.getElementById('btnDetalleAtras');
    btnDetalleAtras.addEventListener('click',()=>{
        document.getElementById('tab-dia').click();
    });

    funciones.slideAnimationTabs();

 
   let btnEditarPedido = document.getElementById('btnEditarPedido');
   btnEditarPedido.addEventListener('click',()=>{
       cargarPedidoEdicion(GlobalSelectedCoddoc,GlobalSelectedCorrelativo,GlobalSelectedSt);    
   });

   let btnPdf = document.getElementById('btnPdf');
   btnPdf.addEventListener('click',()=>{
        get_pdf(GlobalSelectedNitClie,GlobalSelectedNomCliente,GlobalSelectedDirCliente,GlobalSelectedCoddoc,GlobalSelectedCorrelativo,'btnPdf')
   });

};

function inicializarVistaLogro(){
    getView();
    addListeners();
};





//POR DIA

function fcn_delete_pedido(coddoc,correlativo,st,idBtn){
   
    let btn = document.getElementById(idBtn);

        funciones.Confirmacion('¿Está seguro que desea Eliminar este Pedido?')
        .then((value)=>{
            if(value==true){

                
                funciones.solicitarClave()
                    .then((clave)=>{
                        if(clave==GlobalPassUsuario){

                            btn.disabled = true;
                            btn.innerHTML = '<i class="fal fa-trash fa-spin"></i>';

                                delete_pedido(GlobalCodSucursal,coddoc,correlativo)
                                .then(()=>{
                                    funciones.Aviso('Pedido Eliminado Exitosamente!!')
                                    rpt_pedidos_vendedor(GlobalCodSucursal,GlobalCodUsuario,funciones.devuelveFecha('txtFecha'),'tblReport','containerTotal');
                                })
                                .catch(()=>{
                                    btn.disabled = false;
                                    btn.innerHTML = '<i class="fal fa-trash"></i> Eliminar';
                                    funciones.AvisoError('No se pudo eliminar');
                                })
                            
                        }else{
                            funciones.AvisoError('Clave incorrecta')
                        }
                    }
                )        
            }
        });

 
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


function getDetallePedido(fecha,coddoc,correlativo,codclie,nit,nomclie,dirclie,st,
    tipo_pago,tipo_doc,
    entrega_contacto,entrega_telefono,entrega_direccion,entrega_referencia,entrega_lat,entrega_long,domicilio){

    GlobalSelectedSt = st;
    GlobalSelectedFecha = fecha;
    GlobalSelectedCoddoc = coddoc;
    GlobalSelectedCorrelativo = correlativo;
    GlobalSelectedCodCliente=codclie;
    GlobalSelectedNitClie = nit;
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

    
    document.getElementById('tab-detalle').click();

    //lbMenuTitulo.innerText = `Pedido: ${coddoc}-${correlativo}`;
    //apigen.get_detalle_pedido(,'tblDetallePedido','lbTotalDetallePedido')
    apigen.data_get_detalle_pedido(coddoc,correlativo)
    .then((data)=>{


        let container = document.getElementById('tblDetallePedido');
        container.innerHTML = GlobalLoader;
        
        let lbTotal = document.getElementById('lbTotalDetallePedido');
        lbTotal.innerText = '---';
        
        let strdata = '';

        let total =0;
        let totalentregados = 0;
        data.map((rows)=>{
                totalentregados += Number(rows.CANTIDADENVIADA||0);
                total = total + Number(rows.IMPORTE);
                strdata = strdata + `
                        <tr id='${rows.DOC_ITEM}'>
                            <td colspan="3">${rows.DESPROD}
                                <br>
                                <small class="text-danger">${rows.CODPROD}</small>
                                <br>
                                <b class="text-info">${rows.CODMEDIDA}</b>-<b>Cant: ${rows.CANTIDAD}</b>
                            </td>
                            <td>${funciones.setMoneda(rows.PRECIO,"")}</td>
                            <td>${funciones.setMoneda(rows.IMPORTE,"")}
                               
                            </td>
                            <td>
                                    <button class="btn btn-danger btn-md btn-circle"
                                            onclick="deleteProductoPedido('${rows.DOC_ITEM}','${GlobalSelectedCoddoc}','${GlobalSelectedCorrelativo}',${rows.IMPORTE},${rows.TOTALCOSTO},'${rows.CANTIDADENVIADA}')">
                                            <i class="fal fa-trash"></i>
                                    </button>
                            </td>
                        </tr>
                        `
        })
        container.innerHTML = strdata;
        lbTotal.innerText = `${funciones.setMoneda(total,'Q')}`;
        if(totalentregados==0){document.getElementById('btnEditarPedido').style="visibility:visible"}else{document.getElementById('btnEditarPedido').style="visibility:hidden"}
    })
    .catch(()=>{
        funciones.AvisoError('No se puede cargar');
        document.getElementById('tab-dia').click();
    })
    
    
};



function deleteProductoPedido(idRow,coddoc,correlativo,totalprecio,totalcosto,cantidadenviada){
    
    if(Number(cantidadenviada)==0){}else{funciones.AvisoError('No puedes quitar este item porque ya fué facturado');return;};

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


//SELECCIONA EL DETALLE DEL PEDIDO Y LO CARGA
function loadDetallePedido(coddoc,correlativo){
    
    return new Promise((resolve,reject)=>{
        axios.post('/ventas/loadpedido_edicion', {
            sucursal:GlobalCodSucursal,
            coddoc: coddoc,
            correlativo: correlativo,
            usuario:GlobalUsuario
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


function anular_pedido(coddoc,correlativo){
    return new Promise((resolve,reject)=>{
        axios.post('/ventas/anular_pedido', {
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
                let idBtn = `btnEliminar${rows.CODDOC + '-' + rows.CORRELATIVO}`;
                total = total + Number(rows.IMPORTE);
                totalpedidos = totalpedidos + 1;
                strdata = strdata + `<tr>
                            <td colspan="2">
                                    <b class="text-danger">${rows.CODDOC + '-' + rows.CORRELATIVO}</b>
                                <br>
                                    ${rows.NOMCLIE}
                                <br>
                                    <small class="text-secondary">${rows.DIRCLIE + ', ' + rows.DESMUNI}</small>
                                <br>
                                    <small class="text-white bg-secondary">${rows.OBS}</small>
                                <br>
                                <div class="row">
                                    <div class="col-6">
                                        <button class="btn btn-outline-info btn-sm"
                                            onclick="getDetallePedido('${rows.FECHA.toString().replace('T00:00:00.000Z','')}','${rows.CODDOC}',
                                            '${rows.CORRELATIVO}','${rows.CODCLIE}','${rows.NIT}','${rows.NOMCLIE}','${rows.DIRCLIE}','${rows.ST}',
                                            '${rows.TIPO_PAGO}','${rows.TIPO_DOC}','${rows.ENTREGA_CONTACTO}','${rows.ENTREGA_TELEFONO}','${rows.ENTREGA_DIRECCION}',
                                            '${rows.ENTREGA_REFERENCIA}','${rows.ENTREGA_LAT}','${rows.ENTREGA_LONG}','${rows.DOMICILIO}');">
                                            <i class="fal fa-edit"></i> Editar
                                        </button>    
                                    </div>
                                    <div class="col-6">
                                        <button class="btn btn-outline-danger btn-sm" id='${idBtn}'
                                            onclick="fcn_delete_pedido('${rows.CODDOC}','${rows.CORRELATIVO}','${rows.ST}','${idBtn}');">
                                            <i class="fal fa-trash"></i> Eliminar
                                        </button>    
                                    </div>
                                </div>
                            </td>
                            <td>
                                <b>${funciones.setMoneda(rows.IMPORTE,'Q')}</b>
                                <br>
                                <button class="btn btn-outline-danger btn-sm btn-circle hand shadow" id='${idBtn}D'
                                    onclick="get_pdf('${rows.NIT}','${rows.NOMCLIE}','${rows.DIRCLIE}','${rows.CODDOC}','${rows.CORRELATIVO}','${idBtn}D')">
                                    <i class="fal fa-download"></i>
                                </button> 
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


//EDICION DE PEDIDO
function cargarPedidoEdicion(coddoc,correlativo){

        funciones.Confirmacion('¿Está seguro que desea EDITAR este pedido, no se podrá deshacer lo que haga?')
        .then((value)=>{
            if(value==true){
                funciones.solicitarClave()
                        .then((clave)=>{
                            if(clave==GlobalPassUsuario){
                                
                                
                                db_delete_temp()
                                .then(()=>{

                                    //descarga el pedido y lo inserta en el indexed
                                    loadDetallePedido(coddoc,correlativo)
                                    .then(()=>{
                                        funciones.showToast('Pedido cargado...');

                                        //ACTUALIZO EL DOC_ESTATUS=A PARA QUE YA NO SE PUEDA FACTURAR Y NO LO ELIMINO
                                        anular_pedido(coddoc,correlativo)
                                        .then(()=>{
                                            
                                            funciones.showToast('Pedido anterior eliminado con éxito!!');
                                            
                                            classNavegar.ventas(GlobalSelectedCodCliente,GlobalSelectedNitClie,GlobalSelectedNomCliente,GlobalSelectedDirCliente,'LOAD');
                                        })
                                        .catch(()=>{
                                            funciones.AvisoError('No se pudo eliminar el pedido anterior');
                                        })
        
                                    })
                                    .catch((error)=>{
                                        funciones.AvisoError('No se pudo cargar el pedido. Error: ' + error);
                                    })
                                })
                                .catch(()=>{
                                    funciones.AvisoError('No se pudo limpiar el pedido')
                                })
                                
    
                            }
                        })
    
            }
        })

    

    
    
};



function get_pdf(nit,cliente,direccion,coddoc, correlativo, idbtn){

    let btn = document.getElementById(idbtn);

    btn.innerHTML = '<i class="fal fa-download fa-spin"></i>';
    btn.disabled = true;

    axios.post('/pdf',{
        sucursal:GlobalCodSucursal,
        coddoc:coddoc,
        correlativo:correlativo,
        nit:nit,
        cliente:cliente,
        direccion:direccion
     })
     .then((response) => {
        let base = response.data;
        base = base.replace('data:application/pdf;base64,','');
        var link = document.createElement('a');
        link.innerHTML = 'Download PDF file';
        link.download ='DOCUMENTO_' + coddoc.toString() + correlativo.toString() + '.pdf';
        link.href = 'data:application/octet-stream;base64,' + base;
        //document.body.appendChild(link);
        link.click();
        link.remove();
        //desbloquea el botón para que deje de dar vueltas
        btn.innerHTML = '<i class="fal fa-download"></i>';
        btn.disabled = false;
        
     }, (error) => {
        console.log(error);
        
        btn.innerHTML = '<i class="fal fa-download"></i>';
        btn.disabled = false;

        funciones.AvisoError('No se logró crear el pdf')
     });     

};