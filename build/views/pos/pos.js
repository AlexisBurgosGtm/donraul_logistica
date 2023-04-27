function getView(){
    let view = {
        body:()=>{
            return `
                <div class="row">
                    <div class="card bg-naranja card-rounded shadow col-12 p-2">
                        
                            <div class="row">
                                <div class="col-6 text-left">
                                    <label class="text-white negrita h5" style="font-size:140%" id="lbTotalItems">0 items</label>
                                </div>
                                <div class="col-6 text-right">
                                    <h1 class="text-white negrita" id="lbTotalVenta">Q 0.00</h1>
                                </div>
                            </div>
                        
                    </div>
                </div>
                <br>
                <div class="col-12 p-0">
                    <div class="tab-content" id="myTabHomeContent">
                        <div class="tab-pane fade show active" id="pedido" role="tabpanel" aria-labelledby="dias-tab">
                            ${view.pedido() + view.modal_pedido_editar_cantidad()}
                        </div>
                        <div class="tab-pane fade" id="precios" role="tabpanel" aria-labelledby="clientes-tab">
                          
                        </div>

                        <div class="tab-pane fade" id="documento" role="tabpanel" aria-labelledby="home-tab">
                            ${view.documento()}
                        </div>
                    </div>

                    <ul class="nav nav-tabs hidden" id="myTabHome" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active negrita text-success" id="tab-pedido" data-toggle="tab" href="#pedido" role="tab" aria-controls="profile" aria-selected="false">
                                <i class="fal fa-list"></i></a>Pedido
                        </li>
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-precios" data-toggle="tab" href="#precios" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i></a>Precios
                        </li> 
                        <li class="nav-item">
                            <a class="nav-link negrita text-info" id="tab-documento" data-toggle="tab" href="#documento" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-edit"></i></a>Finalizar
                        </li>                           
                    </ul>
                </div>
            `
        },
        pedido:()=>{
            return `
            <div class="row">

                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div class="card card-rounded shadow border-naranja col-12 p-2">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-6">
                                    <b class="text-naranja">Productos agregados a la Factura</b>
                                </div>
                                <div class="col-6">
                                    <input type="text" class="form-control border-naranja negrita text-secondary" id="txtPosCodprod" placeholder="Buscar por código o descripción...">
                                </div>
                            </div>
                            
                            <hr class="solid text-naranja">
                            
                                <table class="table table-responsive col-12">
                                    <thead class="bg-naranja text-white">
                                        <tr>
                                            <td>PRODUCTO</td>
                                            <td>CANTIDAD</td>
                                            <td>SUBTOTAL</td>
                                            <td></td>
                                        </tr>
                                    </thead>
                                    <tbody id="tblPosPedido"></tbody>
                                </table>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div class="col-12 p-0">
                        <div class="tab-content" id="myTabHomeContent">
                            <div class="tab-pane fade show active" id="categorias" role="tabpanel" aria-labelledby="dias-tab">
                                    <div class="card card-rounded shadow border-naranja col-12 p-2">
                                        <div class="card-body">
                                            <div class="row p-2" id="tblPosClasificaciones">
                
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <div class="tab-pane fade" id="productos" role="tabpanel" aria-labelledby="clientes-tab">
                                    <div class="card card-rounded shadow border-naranja col-12 p-2">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-3 text-left">
                                                    <button class="btn btn-outline-secondary hand shadow" id="btnPosProductosCategoriaAtras">
                                                        <i class="fal fa-arrow-left"></i> Atrás
                                                    </button>
                                                </div>
                                                <div class="col-9">
                                                    <h5 class="text-secondary negrita" id="lbPosCategoriaSeleccionada">Categoria</h5>
                                                </div>
                                            </div>
                                            <br>
                                            <input type="text" class="form-control border-naranja negrita" placeholder='Escriba para filtrar...' id="txtBuscarTblProductos">
                                            <div class="table-responsive col-12 p-2">
                                                <table class="table table-responsive table-border col-12" id="tblProductosBuscar">
                                                    <thead class="bg-naranja text-white">
                                                        <tr>
                                                            <td>Producto</td>
                                                            <td>Medida</td>
                                                            <td>Precio Un.</td>
                                                        </tr>
                                                    </thead>
                                                    <tbody  id="tblPosProductosCategoria"></tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>  
                            </div>
                            <div class="tab-pane fade" id="productos2" role="tabpanel" aria-labelledby="clientes-tab">
                                    <div class="card card-rounded shadow border-naranja col-12 p-2">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-3 text-left">
                                                    <button class="btn btn-outline-secondary hand shadow" id="btnPosProductosCategoriaAtras2">
                                                        <i class="fal fa-arrow-left"></i> Atrás
                                                    </button>
                                                </div>
                                                <div class="col-9">
                                                    <h5 class="text-secondary negrita" id="">Búsqueda de productos</h5>
                                                </div>
                                            </div>
                                            
                                            <div class="table-responsive col-12 p-2">
                                                <table class="table table-responsive table-border col-12">
                                                    <thead class="bg-naranja text-white">
                                                        <tr>
                                                            <td>Producto</td>
                                                            <td>Medida</td>
                                                            <td>Precio Un.</td>
                                                        </tr>
                                                    </thead>
                                                    <tbody  id="tblPosProductosCategoria2"></tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>  
                            </div>
                        </div>

                        <ul class="nav nav-tabs hidden" id="myTabHome" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active negrita text-success" id="tab-categorias" data-toggle="tab" href="#categorias" role="tab" aria-controls="profile" aria-selected="false">
                                    <i class="fal fa-list"></i></a>categorias
                            </li>
                            <li class="nav-item">
                                <a class="nav-link negrita text-danger" id="tab-productos" data-toggle="tab" href="#productos" role="tab" aria-controls="home" aria-selected="true">
                                    <i class="fal fa-comments"></i></a>productos
                            </li>   
                            <li class="nav-item">
                                <a class="nav-link negrita text-danger" id="tab-productos2" data-toggle="tab" href="#productos2" role="tab" aria-controls="home" aria-selected="true">
                                    <i class="fal fa-comments"></i></a>productos2
                            </li>                         
                        </ul>
                    </div>
                    
                </div>
            </div>
            
            <div class="row">


            </div>

            
            <button class="btn btn-info btn-xl btn-bottom-r btn-circle shadow hand" id="btnPosCobro">
                <i class="fal fa-arrow-right"></i>
            </button>
            `
        },
        modal_pedido_editar_cantidad:()=>{
            return `
            <div class="modal fade" id="modal_cambiar_cantidad" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-md" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <label class="modal-title text-naranja h3" id="">Cambiar cantidad de producto</label>
                        </div>
            
                        <div class="modal-body shadow">
                                <div class="">            
                                    
                                    <div class="form-group">
                                        <label>Nueva cantidad:</label>
                                        <input type="number" style="font-size:140%" class="form-control negrita text-naranja border-naranja shadow col-10" id="txtCantNuevaCant">
                                    </div>   
                                    
                                    <div class="form-group">
                                        <label>Precio:</label>
                                        <input type="number" style="font-size:140%" class="form-control negrita text-naranja border-naranja shadow col-10" id="txtCantNuevoPrecio" disabled>
                                    </div>                                                             
                                        
                                </div>
                                
                                <br>
        
                                <div class="row">
                                    <div class="col-5">
                                        <button class="btn btn-secondary btn-xl btn-circle hand shadow waves-effect waves-themed" data-dismiss="modal" id="">
                                            <i class="fal fa-arrow-left"></i>
                                        </button>                                
                                    </div>
        
                                    <div class="col-1"></div>
        
                                    <div class="col-5">
                                        <button class="btn btn-success btn-xl btn-circle hand shadow waves-effect waves-themed" id="btnCantGuardar">
                                            <i class="fal fa-check mr-1"></i>
                                        </button>
                                    </div>
                                    
                                    
                                </div>
                        
                        </div>
                    
                    </div>
                </div>
            </div>`
        },
        documento:()=>{
            return `
            <div class="row">
                
                <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <div class="card card-rounded shadow border-naranja p-4"  style="font-size:80%">
                        <div class="card-body">
                            
                            <div class="form-group">
                                <label class="negrita text-f-90">NIT / DPI</label>
                                <input type="text" class="form-control form-control-md border-naranja negrita text-f-90" id="txtPosCobroNit">
                            </div>
                            <div class="form-group">
                                <label class="negrita text-f-90">CLIENTE</label>
                                <input type="text" class="form-control form-control-md border-naranja negrita text-f-90" id="txtPosCobroNombre">
                            </div>
                            <div class="form-group">
                                <label class="negrita text-f-90">DIRECCIÓN</label>
                                <input type="text" class="form-control form-control-md border-naranja negrita text-f-90" id="txtPosCobroDireccion">
                            </div>

                        </div>
                    </div>
                </div>

                <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <div class="card card-rounded shadow border-naranja p-4">
                        <div class="card-body">
                            
                                <div class="row">
                                    <div class="form-group">
                                        <label class="negrita h4">Total a Pagar</label>
                                        <h1 class="negrita text-danger" style="font-size:280%" id="lbPosCobroTotalPagar">Q 0.00</h1>
                                    </div>
                                  
                                </div>
                                <br><br>
                                <div class="row">
                                    <input type="checkbox" id="switch-tipodoc" data-width="130" checked data-toggle="toggle" data-on="PEDIDO" data-off="COTIZACIÓN" data-onstyle="info" data-offstyle="warning">
                                </div>
                                <br><br>
                                <div class="row">
                                    <div class="form-group">
                                        <label>Serie Documento</label>
                                        <div class="input-group">
                                            <select class="form-control" id="cmbCoddoc">
                                            </select>
                                            <input type="text" class="form-control" id="txtCorrelativo">
                                        </div>
                                    </div>
                                </div>
                            
                        </div>
                    </div>
                </div>

            </div>

            <button class="btn btn-secondary btn-xl btn-bottom-l btn-circle shadow hand" id="btnPosDocumentoAtras">
                <i class="fal fa-arrow-left"></i>
            </button>

            <button class="btn btn-info btn-xl btn-bottom-r btn-circle shadow hand" id="btnCobrar">
                <i class="fal fa-save"></i>
            </button>

            `
        }
    }

    root.innerHTML = view.body();

};


function addListeners(){


    $('#switch-tipodoc').bootstrapToggle();

    $('#switch-tipodoc').change(()=> {
        let s_limite = $('#switch-tipodoc').prop('checked').toString();
        let tipo = '';
        if(s_limite.toString()=='true'){tipo='PED'}else{tipo='COT'};
        
        let cmbCoddoc = document.getElementById('cmbCoddoc');
        cmbCoddoc.innerHTML = '';
        let str = '';

        let coddoc_default = '';
        if(tipo=='PED'){coddoc_default=GlobalCoddoc}else{coddoc_default=GlobalCotiz};

        get_coddoc(tipo)
        .then((data)=>{
            data.recordset.map((r)=>{
                str += `<option value="${r.CODDOC}">${r.CODDOC}</option>`;
            })
            cmbCoddoc.innerHTML = str;
            cmbCoddoc.value = coddoc_default;
            get_correlativo_coddoc(cmbCoddoc.value)
            .then((correlativo)=>{
                document.getElementById('txtCorrelativo').value = correlativo;
            })
        })
        .catch(()=>{
            cmbCoddoc.innerHTML = '';
            document.getElementById('txtCorrelativo').value = '';
        })
    });  

    // LISTENER DE LA VENTANA DE PEDIDOS
    listener_vista_pedido();

    listener_vista_cobro();

    get_cards_clasificaciones();

    get_tbl_pedido();

    let btnPosDocumentoGuardar = document.getElementById('btnPosDocumentoGuardar');
    btnPosDocumentoGuardar.addEventListener('click',()=>{
        let vuelto = (Number(GlobalTotalDocumento) - Number(GlobalTotalPagado));


    });

    //CARGA CODDOC DEFAULT
    get_coddoc('PED')
        .then((data)=>{
            data.recordset.map((r)=>{
                str += `<option value="${r.CODDOC}">${r.CODDOC}</option>`;
            })
            cmbCoddoc.innerHTML = str;
            cmbCoddoc.value = coddoc_default;
            get_correlativo_coddoc(cmbCoddoc.value)
            .then((correlativo)=>{
                document.getElementById('txtCorrelativo').value = correlativo;
            })
        })
        .catch(()=>{
            cmbCoddoc.innerHTML = '';
            document.getElementById('txtCorrelativo').value = '';
        })

    
    funciones.slideAnimationTabs();



};

function listener_vista_pedido(){

    let txtPosCodprod = document.getElementById('txtPosCodprod');
    txtPosCodprod.addEventListener('keyup',(e)=>{
        let filtro = txtPosCodprod.value || '';
        
        if(filtro==''){return;}

        if (e.code === 'Enter') { 
            get_buscar_producto(filtro);
        };
        if (e.keyCode === 13 && !e.shiftKey) {
            get_buscar_producto(filtro);
        };

    });
    
    

    document.getElementById('btnPosProductosCategoriaAtras').addEventListener('click',()=>{
        document.getElementById('tab-categorias').click();
    });

    document.getElementById('txtBuscarTblProductos').addEventListener('input',()=>{
        funciones.FiltrarTabla('tblProductosBuscar','txtBuscarTblProductos');
    });

    document.getElementById('btnPosProductosCategoriaAtras2').addEventListener('click',()=>{
        document.getElementById('tab-categorias').click();
    });

};

function listener_vista_cobro(){
    
    //document.getElementById('cmbPosCoddocFecha').value = funciones.getFecha();
    document.getElementById('txtPosCobroDireccion').value = "CIUDAD";

    document.getElementById('btnPosCobro').addEventListener('click',()=>{
        document.getElementById('tab-documento').click();
    });

    document.getElementById('btnPosDocumentoAtras').addEventListener('click',()=>{
        document.getElementById('tab-pedido').click();
    });

    document.getElementById('txtPosCobroNit').addEventListener('keyup',(e)=>{
        
        document.getElementById('txtPosCobroNit').value = document.getElementById('txtPosCobroNit').value.toUpperCase();
        document.getElementById('txtPosCobroNit').value = document.getElementById('txtPosCobroNit').value.replace('-','').replace(" ","");

       
            if (e.code === 'Enter') {
                funciones.GetDataNit(document.getElementById('txtPosCobroNit').value)
                .then((json)=>{
                    document.getElementById('txtPosCobroNombre').value = json;
                })
            };
            if (e.keyCode === 13 && !e.shiftKey) {
                funciones.GetDataNit(document.getElementById('txtPosCobroNit').value)
                .then((json)=>{
                    document.getElementById('txtPosCobroNombre').value = json;
                })
            };
     

    });



    let btnCobrar = document.getElementById('btnCobrar');
    btnCobrar.addEventListener('click',()=>{

        

        funciones.Confirmacion('¿Está seguro que desea registrar esta Venta?')
        .then((value)=>{
            if(value==true){
                btnCobrar.disabled = true;
                btnCobrar.innerHTML = '<i class="fal fa-save fa-spin"></i>';





            }
        })
    })


};

function initView(){
   
    getView();
    addListeners();

   

};


function get_buscar_producto(filtro){

    document.getElementById('tab-productos2').click();

    let container = document.getElementById('tblPosProductosCategoria2');
    container.innerHTML = GlobalLoader;

    let str = '';

    axios.post('/pos/productos_filtro', {
        sucursal: GlobalCodSucursal,
        filtro:filtro
    })
    .then((response) => {        
        if(response=='error'){
            funciones.AvisoError('Error en la solicitud');
            container.innerHTML = 'No day datos....';
        }else{
            const data = response.data.recordset;
            data.map((r)=>{
                str += `
                <tr class="hand border-secondary border-top-0 border-left-0 border-right-0" onclick="get_data_producto_categoria('${r.CODPROD}','${r.DESPROD}','${r.CODMEDIDA}','${r.EQUIVALE}','${r.COSTO}','${r.PRECIO}')">
                    <td>
                        ${funciones.limpiarTexto(r.DESPROD)}
                        <br>
                        <small>Código: <b class="text-danger">${r.CODPROD}</b></small>
                        <br>
                        <small>Marca: <b class="text-secondary">${r.DESMARCA}</b></small>
                    </td>
                    <td>
                        ${r.CODMEDIDA} 
                        <br>
                        <small>Equivale: <b class="text-danger">${r.EQUIVALE}</b></small>
                    </td>
                    <td><b class="h4">${funciones.setMoneda(r.PRECIO ||0,'Q')}</b></td>
                </tr>
                `
            })
            container.innerHTML = str;
        }
    }, (error) => {
        funciones.AvisoError('Error en la solicitud');
        container.innerHTML = 'No day datos....';
    });



};


function get_cards_clasificaciones(){

 
    let container = document.getElementById('tblPosClasificaciones');
    container.innerHTML = GlobalLoader;

    let str = '';

    axios.post('/pos/claseuno', {
        sucursal: GlobalCodSucursal
    })
    .then((response) => {
        if(response=='error'){
            funciones.AvisoError('Error en la solicitud');
            container.innerHTML = 'No day datos....';
        }else{
            const data = response.data.recordset;
            data.map((r)=>{
                str += `
                <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4">
                    <div class="card card-rounded shadow border-naranja hand" onclick="get_data_card_clasificacion('${r.CODIGO}','${r.DESCRIPCION}')">
                        <div class="card-body p-4">
                            <b class="text-naranja" style="font-size:100%"><i class="fal fa-box"></i> ${r.DESCRIPCION}</b>
                        </div>
                    </div>
                    <br>
                </div>
                `
            })
            container.innerHTML = str;
        }
    }, (error) => {
        funciones.AvisoError('Error en la solicitud');
        container.innerHTML = 'No day datos....';
    });
    

};

function get_data_card_clasificacion(codigo,descripcion){

    GlobalSelectedCodCategoria = codigo;

    document.getElementById('lbPosCategoriaSeleccionada').innerText = descripcion;
    document.getElementById('tab-productos').click();

    get_tbl_productos_clasificacion(codigo);

};

function get_tbl_productos_clasificacion(codigo){

    let container = document.getElementById('tblPosProductosCategoria');
    container.innerHTML = GlobalLoader;

    let str = '';

    axios.post('/pos/productos_categoria', {
        sucursal: GlobalCodSucursal,
        codigo:codigo
    })
    .then((response) => {        
        if(response=='error'){
            funciones.AvisoError('Error en la solicitud');
            container.innerHTML = 'No day datos....';
        }else{
            const data = response.data.recordset;
            data.map((r)=>{
                str += `
                <tr class="hand border-secondary border-top-0 border-left-0 border-right-0" onclick="get_data_producto_categoria('${r.CODPROD}','${r.DESPROD}','${r.CODMEDIDA}','${r.EQUIVALE}','${r.COSTO}','${r.PRECIO}')">
                    <td>
                        ${funciones.limpiarTexto(r.DESPROD)}
                        <br>
                        <small>Código: <b class="text-danger">${r.CODPROD}</b></small>
                        <br>
                        <small>Marca: <b class="text-secondary">${r.DESMARCA}</b></small>
                    </td>
                    <td>
                        ${r.CODMEDIDA} 
                        <br>
                        <small>Equivale: <b class="text-danger">${r.EQUIVALE}</b></small>
                    </td>
                    <td><b class="h4">${funciones.setMoneda(r.PRECIO ||0,'Q')}</b></td>
                </tr>
                `
            })
            container.innerHTML = str;
        }
    }, (error) => {
        funciones.AvisoError('Error en la solicitud');
        container.innerHTML = 'No day datos....';
    });


};


function get_data_producto_categoria(codprod,desprod,codmedida,equivale,costo,precio){

    insert_producto_pedido(codprod,desprod,codmedida,equivale,costo,precio,1)
    .then(()=>{
        funciones.showToast('Producto agregado ' + desprod);
        get_tbl_pedido();
    })
    .catch(()=>{
        funciones.AvisoError('No se pudo agregar')
    })
    

};


function insert_producto_pedido(codprod,desprod,codmedida,equivale,costo,precio,cantidad){
    
    let datos = 
        {
            CODSUCURSAL:GlobalCodSucursal.toString(),
            EMPNIT:GlobalCodSucursal.toString(),
            USUARIO:'',
            CODPROD:codprod.toString(),
            DESPROD:desprod.toString(),
            CODMEDIDA:codmedida.toString(),
            EQUIVALE:Number(equivale),
            COSTO:Number(costo),
            PRECIO:Number(precio),
            CANTIDAD:Number(cantidad),
            TOTALUNIDADES:Number(cantidad * equivale),
            TOTALPRECIO:Number(cantidad * precio)
        };

    

    return new Promise((resolve,reject)=>{
        insertTempVentasPOS(datos)
        .then(()=>{
            resolve();
        }) 
        .catch(()=>{
            reject();
        }) 
    });

};

function get_tbl_pedido(){

    let container = document.getElementById('tblPosPedido');
    container.innerHTML = GlobalLoader;

    let str = '';
    let varTotalItems = 0;
    let varTotalVenta = 0;
    let varTotalCosto = 0;

    selectTempVentasPOS(GlobalCodSucursal)
    .then((data)=>{
        let datos = data.map((rows)=>{
            varTotalItems += 1;
            varTotalVenta = varTotalVenta + Number(rows.TOTALPRECIO);
            varTotalCosto = varTotalCosto + Number(rows.TOTALCOSTO);
            return `
            <tr class="border-naranja border-left-0 border-right-0 border-top-0">
                <td class="text-left">
                    ${rows.DESPROD}
                    <br>
                    <div class="row">
                        <div class="col-6">
                            <small class="negrita"><b>${rows.CODPROD}</b></small>
                        </div>
                    </div>
                </td>
                <td>
                    <button class="btn btn-md btn-circle btn-outline-danger shadow hand" onclick="disminuir_cantidad('${rows.ID}','${rows.CANTIDAD}','${rows.COSTO}','${rows.PRECIO}')">
                        -
                    </button> 
                    <b class="text-info" style="font-size:140%">${rows.CANTIDAD}</b>
                     <button class="btn btn-md btn-circle btn-outline-success shadow hand" onclick="aumentar_cantidad('${rows.ID}','${rows.CANTIDAD}','${rows.COSTO}','${rows.PRECIO}')">
                        +
                    </button>
                    <br><small>${rows.CODMEDIDA} (eq: ${rows.EQUIVALE})</small>
                </td>
                <td class="negrita text-danger h4">${funciones.setMoneda(rows.TOTALPRECIO,'Q')}</td>
                <td>
                    <button class="btn btn-md btn-circle btn-danger shadow hand" onclick="delete_item_pedido('${rows.ID}')">
                        <i class="fal fa-trash"></i>
                    </button>
                </td>                            
            </tr>`
       }).join('\n');
        container.innerHTML = datos;
        GlobalTotalCostoDocumento = varTotalCosto;
        GlobalTotalDocumento = varTotalVenta;
        document.getElementById('lbTotalItems').innerText = varTotalItems.toString() + ' items';
        document.getElementById('lbTotalVenta').innerText = funciones.setMoneda(varTotalVenta,'Q');
        document.getElementById('lbPosCobroTotalPagar').innerText = funciones.setMoneda(varTotalVenta,'Q');
    })
    .catch((error)=>{
        container.innerHTML = 'No hay datos...';
    })

};

function aumentar_cantidad(id,cantidad,costo,precio){

        let nuevacantidad = (Number(cantidad)+1);

        selectDataRowVentaPOS(id,nuevacantidad,precio)
        .then(()=>{
            get_tbl_pedido();
        })
        .catch(()=>{
            funciones.AvisoError('No se logró Eliminar la lista de productos agregados');
        })

};

function disminuir_cantidad(id,cantidad,costo,precio){
    let nuevacantidad = (Number(cantidad)-1);

    if(nuevacantidad==0){return;}

    selectDataRowVentaPOS(id,nuevacantidad,precio)
    .then(()=>{
        get_tbl_pedido();
    })
    .catch(()=>{
        funciones.AvisoError('No se logró Eliminar la lista de productos agregados');
    })
};

function edit_cantidad_pos(id,cantidad,costo,precio){

    document.getElementById('txtCantNuevaCant').value = cantidad;
    document.getElementById('txtCantNuevoPrecio').value = precio;

    $("#modal_cambiar_cantidad").modal('show');

};

function delete_item_pedido(id){

    funciones.Confirmacion('¿Está seguro que desea quitar este item?')
    .then((value)=>{
        if(value==true){
            deleteItemVentaPOS(id)
            .then(()=>{
                funciones.showToast('Item eliminado');
                get_tbl_pedido();
            })
            .catch(()=>{
                funciones.AvisoError('No se pudo quitar este item');
            })
        }
    })
    
};



function get_coddoc(tipo){
    return new Promise((resolve, reject)=>{
        axios.post('/tipodocumentos/series_doc', {
            sucursal: GlobalCodSucursal,
            tipo:tipo
        })
        .then((response) => {
            if(response=='error'){
                funciones.AvisoError('Error en la solicitud');
            }else{
                const data = response.data;
                resolve(data);
            }
        }, (error) => {
            funciones.AvisoError('Error en la solicitud');
        });
    })
};

function get_correlativo_coddoc(coddoc){
    return new Promise((resolve, reject)=>{
        axios.post('/tipodocumentos/correlativo_doc', {
            sucursal: GlobalCodSucursal,
            coddoc:coddoc
        })
        .then((response) => {
            if(response=='error'){
                resolve('         0')
            }else{
                let correlativo = '';
                const data = response.data;
                data.recordset.map((r)=>{
                    correlativo = r.CORRELATIVO;
                })
                resolve(correlativo);
            }
        }, (error) => {
            resolve('         0')
        });
    })
};


