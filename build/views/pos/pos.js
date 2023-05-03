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
                            ${view.pedido() + view.modal_cantidad()}
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

                    <input type="search" autocomplete="off" class="form-control border-naranja negrita" placeholder='Escriba para buscar...' id="txtPosCodprod">
                    
                    <div class="table-responsive col-12 p-2">
                        <table class="table table-responsive table-hover table-border col-12" id="tblProductosBuscar">
                            <thead class="bg-naranja text-white">
                                <tr>
                                    <td>Producto</td>
                                    <td>Medida</td>
                                    <td>Precio Un.</td>
                                    <td>Existencia</td>
                                </tr>
                            </thead>
                            <tbody  id="tblPosProductosCategoria"></tbody>
                        </table>
                    </div>  
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div class="card card-rounded shadow border-naranja col-12 p-2">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-8">
                                    <b class="text-naranja">Productos agregados a la Factura</b>
                                </div>
                                <div class="col-4 text-right">
                                    <img src="./favicon.png" width="50px" height="50px">
                                </div>
                            </div>
                            
                           
                                <table class="table table-responsive  table-hover col-12">
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
            </div>
            
            <div class="row">


            </div>

            
            <button class="btn btn-info btn-xl btn-bottom-r btn-circle shadow hand" id="btnPosCobro">
                <i class="fal fa-arrow-right"></i>
            </button>
            `
        },
        modal_cantidad:()=>{
            return `
            <div class="modal" id="modal_cantidad" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">

                        <div class="modal-header">
                            <label class="modal-title text-naranja h3" id="lbCantidadDesprod">Cantidad de producto</label>
                        </div>
            
                        <div class="modal-body p-4">
                            <div class="row">
                                <div class="col-4 text-center">
                                    <img src="./favicon.png" width="120px" height="120px">
                                </div>
                                <div class="col-8">
                                    <div class="form-group">
                                        <label>Cantidad:</label>
                                        <input type="number" style="font-size:140%" class="form-control negrita text-info border-naranja shadow col-10" id="txtMCCantidad">
                                    </div>   
                                    
                                    <div class="form-group">
                                        <label>Precio:</label>
                                        <input type="number" style="font-size:140%" class="form-control negrita text-info border-naranja shadow col-10" id="txtMCPrecio">
                                    </div>
                                    
                                    <div class="form-group">
                                        <label>Subtotal:</label>
                                        <input type="number" style="font-size:150%" class="form-control negrita text-naranja border-naranja shadow col-10" id="txtMCTotalPrecio" disabled>
                                    </div>
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
                                        <button class="btn btn-naranja btn-xl btn-circle hand shadow waves-effect waves-themed" id="btnMCGuardar">
                                            <i class="fal fa-check mr-1"></i>
                                        </button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
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
                                <div class="input-group">
                                    <input type="text" class="form-control form-control-md border-naranja negrita text-f-90" id="txtPosCobroNit">
                                    <button class="btn btn-naranja text-white hand" id="btnBuscarCliente">
                                        <i class="fal fa-search"></i>
                                    </button>
                                </div>
                                
                            
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
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label>Serie Documento</label>
                                            <div class="input-group">
                                                <select class="form-control" id="cmbCoddoc">
                                                </select>
                                                <input type="text" class="form-control" id="txtCorrelativo">
                                            </div>
                                        </div>
                                        <button class="btn form-control btn-xl btn-info hand shadow">
                                            <i class="fal fa-save"></i> Crear Pedido (f8)
                                        </button>
                                    </div>
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label>Serie Documento</label>
                                            <div class="input-group">
                                                <select class="form-control" id="cmbCoddocCot">
                                                </select>
                                                <input type="text" class="form-control" id="txtCorrelativoCot">
                                            </div>
                                        </div>
                                        <button class="btn form-control btn-xl btn-warning hand shadow">
                                            <i class="fal fa-save"></i> Crear Cotización (f9)
                                        </button>
                                    </div>
                                    
                                </div>
                            
                        </div>
                    </div>
                </div>

            </div>

            <button class="btn btn-secondary btn-xl btn-bottom-l btn-circle shadow hand" id="btnPosDocumentoAtras">
                <i class="fal fa-arrow-left"></i>
            </button>
            `
        }
    }

    root.innerHTML = view.body();

};

function addListeners(){


    // LISTENER DE LA VENTANA DE PEDIDOS
    listener_vista_pedido();

    listener_vista_cobro();

    listener_teclado();
    
    get_tbl_pedido();



    //CARGA CODDOC DEFAULT
    let cmbCoddoc = document.getElementById('cmbCoddoc');
    let cmbCoddocCot = document.getElementById('cmbCoddocCot');
    
    get_coddoc('PED')
        .then((data)=>{
            let str = '';
            data.recordset.map((r)=>{
                str += `<option value="${r.CODDOC}">${r.CODDOC}</option>`;
            })
            cmbCoddoc.innerHTML = str;
            cmbCoddoc.value = GlobalCoddoc;
            get_correlativo_coddoc(cmbCoddoc.value)
            .then((correlativo)=>{
                document.getElementById('txtCorrelativo').value = correlativo;
            })
        })
        .catch(()=>{
            cmbCoddoc.innerHTML = '';
            document.getElementById('txtCorrelativo').value = '';
        });

    get_coddoc('COT')
        .then((data)=>{
            let strs = '';
            data.recordset.map((r)=>{
                strs += `<option value="${r.CODDOC}">${r.CODDOC}</option>`;
            })
            cmbCoddocCot.innerHTML = strs;
            cmbCoddocCot.value = GlobalCotiz;
            get_correlativo_coddoc(cmbCoddocCot.value)
            .then((correlativo)=>{
                document.getElementById('txtCorrelativoCot').value = correlativo;
            })
        })
        .catch(()=>{
            cmbCoddocCot.innerHTML = '';
            document.getElementById('txtCorrelativoCot').value = '';
        });
    
    
    cmbCoddoc.addEventListener('change',()=>{
            get_correlativo_coddoc(cmbCoddoc.value)
            .then((correlativo)=>{
                document.getElementById('txtCorrelativo').value = correlativo;
            })
    });

    cmbCoddocCot.addEventListener('change',()=>{
        get_correlativo_coddoc(cmbCoddocCot.value)
        .then((correlativo)=>{
            document.getElementById('txtCorrelativoCot').value = correlativo;
        })
    });

    
    funciones.slideAnimationTabs();



};

function listener_teclado(){
    //evitando errores
    Mousetrap.bind('f5', function(e) { e.preventDefault(); });
    Mousetrap.bind('f7', function(e) { e.preventDefault(); });
    Mousetrap.bind('f10', function(e) { e.preventDefault(); });
    Mousetrap.bind('f11', function(e) { e.preventDefault(); });
    Mousetrap.bind('f12', function(e) { e.preventDefault(); });
    
    //evitando errores

    Mousetrap.bind('f2', function() { document.getElementById('txtPosCodprod').focus() });
    Mousetrap.bind('ctrl+right', function() { document.getElementById('btnPosCobro').click() });
    Mousetrap.bind('ctrl+left', function() { document.getElementById('btnPosDocumentoAtras').click() });
    
    Mousetrap.bind('f3', function(e) { e.preventDefault(); document.getElementById('btnBuscarCliente').click() });
    Mousetrap.bind('f8', function() { funciones.Aviso('Creando pedido') });
    Mousetrap.bind('f9', function() { funciones.Aviso('creando cotizacion') });
};

function listener_vista_pedido(){


    let txtPosCodprod = document.getElementById('txtPosCodprod');
    txtPosCodprod.addEventListener('keyup',(e)=>{

        txtPosCodprod.value = txtPosCodprod.value.toUpperCase();
        let filtro = txtPosCodprod.value || '';
        

        if(filtro==''){return;}

        if (e.code === 'Enter') { 
            get_buscar_producto(filtro);
        };
        if (e.keyCode === 13 && !e.shiftKey) {
            get_buscar_producto(filtro);
        };

    });
    


    
    let btnMCGuardar = document.getElementById('btnMCGuardar');
    btnMCGuardar.addEventListener('click',()=>{

        let cantidad = Number(document.getElementById('txtMCCantidad').value || 1);
        let preciounitario = Number(document.getElementById('txtMCTotalPrecio').value||0);

        if(preciounitario==0){
            funciones.AvisoError('Precio inválido');
            return;
        };

        if(Number(preciounitario)<Number(Selected_costo)){
            funciones.AvisoError('Precio menor al costo');
            return;
        };


        insert_producto_pedido(Selected_codprod,Selected_desprod,Selected_codmedida,Selected_equivale,Selected_costo,preciounitario,cantidad)
        .then(()=>{
            
            $("#modal_cantidad").modal('hide');

            funciones.showToast('Producto agregado ' + Selected_desprod);
            get_tbl_pedido();
        })
        .catch(()=>{
            funciones.AvisoError('No se pudo agregar');
        })

    });


    document.getElementById('txtMCCantidad').addEventListener('input',()=>{
        CalcularTotalPrecio();  
    });
    document.getElementById('txtMCCantidad').addEventListener('keyup',(e)=>{
        if (e.code === 'Enter') { 
            document.getElementById('txtMCPrecio').focus();
        };
        if (e.keyCode === 13 && !e.shiftKey) {
            document.getElementById('txtMCPrecio').focus();
        };  
    });
    document.getElementById('txtMCPrecio').addEventListener('input',()=>{
        CalcularTotalPrecio();  
    });
    document.getElementById('txtMCPrecio').addEventListener('keyup',(e)=>{
        if (e.code === 'Enter') { 
            document.getElementById('btnMCGuardar').focus();
        };
        if (e.keyCode === 13 && !e.shiftKey) {
            document.getElementById('btnMCGuardar').focus();
        };  
    });
        

    

};

function CalcularTotalPrecio(){

    let cantidad = document.getElementById('txtMCCantidad').value || 1;
    let precio = document.getElementById('txtMCPrecio').value;
    
    document.getElementById('txtMCTotalPrecio').value = (Number(cantidad)*Number(precio));


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

    document.getElementById('btnBuscarCliente').addEventListener('click',()=>{
        funciones.Aviso('buscando cliente...')
    })





};

function initView(){
   
    getView();
    addListeners();

   

};

function get_buscar_producto(filtro){

    let container = document.getElementById('tblPosProductosCategoria');
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
                let strClassExist = 'text-success';
                if(Number(r.EXISTENCIA)<0){strClassExist="text-danger"};
                str += `
                <tr class="hand border-secondary border-top-0 border-left-0 border-right-0" onclick="get_producto('${r.CODPROD}','${r.DESPROD}','${r.CODMEDIDA}','${r.EQUIVALE}','${r.COSTO}','${r.PRECIO}')">
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
                    <td>
                        <b class="h4">${funciones.setMoneda(r.PRECIO ||0,'Q')}</b>
                    </td>
                    <td>
                        <b class="${strClassExist}">${r.EXISTENCIA}</b>
                    </td>
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

function get_producto(codprod,desprod,codmedida,equivale,costo,precio){

    $("#modal_cantidad").modal('show');

    
    Selected_codprod = codprod;
    Selected_desprod = desprod;
    Selected_codmedida = codmedida;
    Selected_equivale = Number(equivale);
    Selected_costo = Number(costo);
    Selected_precio = Number(precio);

    document.getElementById('lbCantidadDesprod').innerText = `${desprod} (${codmedida} - Eq: ${equivale})`;

    document.getElementById('txtMCCantidad').value = '';
    document.getElementById('txtMCPrecio').value = precio;

    CalcularTotalPrecio();

    document.getElementById('txtMCCantidad').focus();
    
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
            TOTALCOSTO:Number(costo)*Number(cantidad),
            PRECIO:Number(precio),
            CANTIDAD:Number(cantidad),
            TOTALUNIDADES:Number(cantidad * equivale),
            TOTALPRECIO:Number(precio)*Number(cantidad)
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
                    <b class="text-info" style="font-size:140%">${rows.CANTIDAD}</b>
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


