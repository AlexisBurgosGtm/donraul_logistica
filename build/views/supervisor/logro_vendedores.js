function getView(){
    let view = {
        body:()=>{
            return `
                ${view.encabezado()}
                <br>
                <div class="col-12 p-0">
                    <div class="tab-content" id="myTabHomeContent">
                        <div class="tab-pane fade show active" id="uno" role="tabpanel" aria-labelledby="receta-tab">
                            ${view.rpt_vendedores_dia() + view.modal_documentos_vendedor() + view.modal_productos_vendedor()}
                        </div>
                        <div class="tab-pane fade" id="dos" role="tabpanel" aria-labelledby="home-tab">
                            ${view.rpt_productos_dia()}
                        </div>
                        <div class="tab-pane fade" id="tres" role="tabpanel" aria-labelledby="home-tab">
                            
                        </div>    
                    </div>

                    <ul class="nav nav-tabs hidden" id="myTabHome" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active negrita text-success" id="tab-uno" data-toggle="tab" href="#uno" role="tab" aria-controls="profile" aria-selected="false">
                                <i class="fal fa-list"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-dos" data-toggle="tab" href="#dos" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i></a>
                        </li>  
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-tres" data-toggle="tab" href="#tres" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i></a>
                        </li>         
                    </ul>
                </div>

                <button class="btn btn-bottom-l2 btn-xl btn-circle btn-info hand shadow" id="btnRptVendedores">
                    <i class="fal fa-list"></i>
                </button>

                <button class="btn btn-bottom-ml btn-xl btn-circle btn-secondary hand shadow" id="btnRptProductos">
                    <i class="fal fa-box"></i>
                </button>

                <button class="btn btn-bottom-r btn-xl btn-circle btn-outline-secondary hand shadow" id="btnFiltro">
                    <i class="fal fa-filter"></i>
                </button>

                ${view.modal_parametros()}
            `
        },
        encabezado:()=>{
            return `
                <div class="card card-rounded shadow">
                    <div class="card-body p-2">

                        <h5 class="text-center negrita text-naranja">Análisis de Vendedores Ruteros</h5>
                            
                        <div class="row">
                            <div class="col-4">
                                    <div class="form-group">
                                        <label>Total Costo:</label>
                                        <h5 class="negrita text-secondary" id="lbTotalCosto">---</h5>
                                    </div>
                            </div>
                            <div class="col-4">
                                    <div class="form-group">
                                        <label>Total Importe:</label>
                                        <h4 class="negrita text-info" id="lbTotalImporte">---</h4>
                                    </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label>Utilidad Bruta:</label>
                                    <h5 class="negrita text-naranja" style="" id="lbUtilidad">---</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        rpt_vendedores_dia:()=>{
            return `
            
            <div class="card card-rounded shadow">
                <div class="card-body p-0">
                    
                    <div class="table-responsive col-12" id="tblVendedores">
                        
                    </div>
                </div>
            </div>
            `
        },
        rpt_productos_dia:()=>{
            return `
            <div class="card card-rounded shadow">
                <div class="card-body p-2">
                    
                    <div class="table-responsive col-12">
                        <table class="table table-responsive table-bordered table-hover col-12">
                            <thead class="bg-secondary text-white">
                                <tr>
                                    <td>PRODUCTO</td>
                                </tr>
                            </thead>
                            <tbody id="tblProductos">
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            `
        },
        modal_documentos_vendedor:()=>{
            return `
            <div class="modal fade" id="modal_documentos" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl modal-dialog-right" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <label class="modal-title text-danger h3" id="">Documentos del Vendedor</label>
                        </div>

                        <div class="modal-body">
                            <div class="table-responsive col-12">
                                <table class="table table-responsive table-hover">
                                    <thead class="bg-info text-white">
                                        <tr>
                                            <td>DOCUMENTO</td>
                                            <td>COSTO</td>
                                            <td>VENTA</td>
                                            <td>UTILIDAD</td>
                                            <td>MARGEN</td>
                                        </tr>
                                    </thead>
                                    <tbody id="tblDocumentosVendedor"></tbody>
                                </table>
                            </div>
                        
                        </div>
                        
                        <button class="btn btn-secondary btn-circle btn-xl hand shadow" data-dismiss="modal">
                            <i class="fal fa-arrow-left"></i>
                        </button>
                    </div>
                </div>
            </div>
            
            `
        },
        modal_productos_vendedor:()=>{
            return `
            <div class="modal fade" id="modal_productos" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl modal-dialog-right" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <label class="modal-title text-danger h3" id="">Productos Vendedor</label>
                    </div>

                    <div class="modal-body">
                        <div class="table-responsive col-12">
                            <table class="table table-responsive table-hover table-striped table-bordered">
                                <thead class="bg-secondary text-white">
                                    <tr>
                                        <td>PRODUCTO</td>
                                    </tr>
                                </thead>
                                <tbody id="tblProductosVendedor"></tbody>
                            </table>
                        </div>
                    </div>
                    <button class="btn btn-secondary btn-circle btn-xl hand shadow" data-dismiss="modal">
                        <i class="fal fa-arrow-left"></i>
                    </button>
                </div>
            </div>
        </div>
            `
        },
        modal_parametros:()=>{
            return `
            <div class="modal fade" id="modal_parametros" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-md modal-dialog-bottom" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <label class="modal-title text-naranja h3" id="">Parámetros</label>
                        </div>

                        <div class="modal-body p-4">
                                <div class="row">
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label>Fecha Inicial</label>
                                            <input type="date" class="form-control" id="txtFecha">
                                        </div>
                                    </div>

                                    <div class="col-6">
                                        <div class="form-group">
                                            <label>Fecha Final</label>
                                            <input type="date" class="form-control" id="txtFechaF">
                                        </div>
                                    </div>
                                    
                                </div>
                                <br>
                                <div class="row">
                                    <div class="form-group">
                                        <label>Tipo de Documento</label>
                                        <select class="form-control negrita text-naranja" id="cmbTipoDocumentos">
                                            <option value="FAC">FACTURAS</option>
                                            <option value="PED">PEDIDOS</option>
                                            <option value="COT">COTIZACIONES</option>
                                        </select>
                                    </div>
                                </div>
                            <br>    
                            <div class="row">
                                <div class="col-6">
                                        <button class="btn btn-secondary btn-circle btn-xl hand shadow" data-dismiss="modal">
                                            <i class="fal fa-arrow-left"></i>
                                        </button>
                                </div>
                                <div class="col-6">
                                        <button class="btn btn-naranja btn-circle btn-xl hand shadow" data-dismiss="modal" id="btnAceptarFiltro">
                                            <i class="fal fa-check"></i>
                                        </button>
                                </div>
                            </div>
                        </div>
                        
                       
                    </div>
                </div>
            </div>
            
            `
        },
    }

    root.innerHTML = view.body();

};

function addListeners(){

    document.getElementById('btnFiltro').addEventListener('click',()=>{
        $("#modal_parametros").modal('show');
    });



    document.getElementById('txtFecha').value = funciones.getFecha();
    document.getElementById('txtFechaF').value = funciones.getFecha();


    document.getElementById('btnAceptarFiltro').addEventListener('click',()=>{
        rtp_vendedores_dia();
        rtp_productos_dia();
    });

  

    let btnRptVendedores = document.getElementById('btnRptVendedores');
    btnRptVendedores.addEventListener('click',()=>{
        document.getElementById('tab-uno').click();
        rtp_vendedores_dia();
    });


    let btnRptProductos = document.getElementById('btnRptProductos');
    btnRptProductos.addEventListener('click',()=>{
        document.getElementById('tab-dos').click();
        rtp_productos_dia();
    });
    
    
    rtp_vendedores_dia();


};

function initView(){

    getView();
    addListeners();

};


function data_rpt_vendedores_dia(fecha,fechaf){
    return new Promise((resolve,reject)=>{
        axios.post('/reportes/vendedores_dia', {
            sucursal: GlobalCodSucursal,
            fecha:fecha,
            fechaf:fechaf,
            tipodoc:document.getElementById('cmbTipoDocumentos').value
        })
        .then((response) => {
                const data = response.data.recordset;
                if(response.data.toString()=='error'){
                    reject();
                }else{
                    resolve(data);
                }
            }, (error) => {
                reject();
        });
    })
    
};

function rtp_vendedores_dia(){
    let container = document.getElementById('tblVendedores');
    container.innerHTML = GlobalLoader;


    let lbTotal = document.getElementById('lbTotalImporte');
    lbTotal.innerText = '---';
    let lbTotalCosto = document.getElementById('lbTotalCosto');
    lbTotalCosto.innerText = '---';
    let lbUtilidad = document.getElementById('lbUtilidad');
    lbUtilidad.innerText = '---';

    let fecha = funciones.devuelveFecha('txtFecha');
    let fechaf = funciones.devuelveFecha('txtFechaF');
    
    let str = ''; let total = 0; let totalcosto = 0;
    let tblHead = `
                        <table class="table table-responsive table-hover col-12">
                            <thead class="bg-info text-white">
                                <tr>
                                    <td>VENDEDOR</td>
                                    <td>PEDIDOS</td>
                                    <td>COSTO</td>
                                    <td>IMPORTE</td>
                                    <td>UTILIDAD</td>
                                    <td>MARGEN</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody id="tblVendedores"> `;
    let tblFoot = '</tbody></table>';

    data_rpt_vendedores_dia(fecha,fechaf)
    .then((data)=>{
        let tipodispositivo = funciones.detectarPc();
        data.map((r)=>{
            total += Number(r.IMPORTE);
            totalcosto += Number(r.COSTO);
            if(tipodispositivo=='pc'){
                str += `
                <tr>
                    <td>${r.NOMVEN}</td>
                    <td>${r.PEDIDOS}</td>
                    <td>${funciones.setMoneda(r.COSTO,'Q')}</td>
                    <td>${funciones.setMoneda(r.IMPORTE,'Q')}</td>
                    <td>${funciones.setMoneda((Number(r.IMPORTE)-Number(r.COSTO)),'Q')}</td>
                    <td class="negrita">${funciones.setMoneda(((Number(r.IMPORTE)-Number(r.COSTO))/Number(r.IMPORTE))*100,'')} %
                    <td>
                        <button class="btn btn-circle btn-lg btn-info hand shadow"
                        onclick="rpt_documentos_vendedor('${r.CODVEN}')">
                            <i class="fal fa-list"></i>
                        </button>
                    </td>
                    <td>
                        <button class="btn btn-circle btn-lg btn-secondary hand shadow"
                        onclick="rtp_productos_vendedor_dia('${r.CODVEN}')">
                            <i class="fal fa-box"></i>
                        </button>
                    </td>
                </tr>
                `
            }else{
                tblHead=''; tblFoot='';
                str += `
                <div class="card card-rounded shadow border-naranja col-12">
                    <div class="card-body p-2">
                        <div class="row">
                            <div class="col-3 p-0">
                                <img src="./favicon.png" class="imgresp">
                            </div>
                            <div class="col-9">
                                <h5 class="text-naranja">${r.NOMVEN}</h5>
                                <table class="">
                                    <tbody>
                                        <tr>
                                            <td>Pedidos:</td>
                                            <td>${r.PEDIDOS}</td>
                                        </tr>
                                        <tr>
                                            <td>Costo:</td>
                                            <td>${funciones.setMoneda(r.COSTO,'Q')}</td>
                                        </tr>
                                        <tr>
                                            <td>Venta:</td>
                                            <td>${funciones.setMoneda(r.IMPORTE,'Q')}</td>
                                        </tr>
                                        <tr>
                                            <td>Utilidad:</td>
                                            <td>${funciones.setMoneda((Number(r.IMPORTE)-Number(r.COSTO)),'Q')}</td>
                                        </tr>
                                        <tr>
                                            <td>Margen:</td>
                                            <td class="negrita">${funciones.setMoneda(((Number(r.IMPORTE)-Number(r.COSTO))/Number(r.IMPORTE))*100,'')} %<td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-6">
                                <button class="btn btn-md btn-info hand shadow"
                                onclick="rpt_documentos_vendedor('${r.CODVEN}')">
                                    <i class="fal fa-list"></i>Documentos
                                </button>
                            </div>
                            <div class="col-6">
                                <button class="btn btn-md btn-secondary hand shadow"
                                onclick="rtp_productos_vendedor_dia('${r.CODVEN}')">
                                    <i class="fal fa-box"></i> Productos
                                </button>
                            </div>
                        </div>    
                    </div>
                </div>
                <br>
                `
            }
            
        })
        container.innerHTML = tblHead + str + tblFoot;
        lbTotal.innerText = funciones.setMoneda(total,'Q');
        lbTotalCosto.innerText = funciones.setMoneda(totalcosto,'Q');
        lbUtilidad.innerText = `${funciones.setMoneda((total-totalcosto),'Q')} (${(((total-totalcosto)/total)*100).toFixed(2)} %)`; 
    })
    .catch(()=>{
        container.innerHTML = 'No hay datos....';
        lbTotal.innerText = '---';
        lbTotalCosto.innerText= '---';
        lbUtilidad.innerText = '---';
    })

};


function data_rpt_productos_dia(fecha,fechaf){
    return new Promise((resolve,reject)=>{
        axios.post('/reportes/productos_dia', {
            sucursal: GlobalCodSucursal,
            fecha:fecha,
            fechaf:fechaf,
            tipodoc:document.getElementById('cmbTipoDocumentos').value
        })
        .then((response) => {
                const data = response.data.recordset;
                if(response.data.toString()=='error'){
                    reject();
                }else{
                    resolve(data);
                }
            }, (error) => {
                reject();
        });
    })
    
};

function rtp_productos_dia(){
    let container = document.getElementById('tblProductos');
    container.innerHTML = GlobalLoader;


    let lbTotal = document.getElementById('lbTotalImporte');
    lbTotal.innerText = '---';
    let lbTotalCosto = document.getElementById('lbTotalCosto');
    lbTotalCosto.innerText = '---';
    let lbUtilidad = document.getElementById('lbUtilidad');
    lbUtilidad.innerText = '---';
    

    let fecha = funciones.devuelveFecha('txtFecha');
    let fechaf = funciones.devuelveFecha('txtFechaF');

    let str = ''; let total = 0;

    let totalcosto = 0; let totalimporte = 0;

    data_rpt_productos_dia(fecha,fechaf)
    .then((data)=>{
        data.map((r)=>{
            total += Number(r.IMPORTE);
            totalcosto += Number(r.COSTO);

            str += `
            <tr>
                <td>${r.DESPROD} (Cód:${r.CODPROD})
                    <br>
                    <small>Cantidad: ${r.TOTALUNIDADES}</small>
                    <br>
                    <div class="row">
                        <div class="col-4">
                            <small>Costo:</small>
                        </div>
                        <div class="col-4">
                            <small>Venta:</small>
                        </div>
                        <div class="col-4">
                            <small class="negrita text-naranja">${funciones.setMoneda((Number(r.IMPORTE)-Number(r.COSTO)),'Q')}</small>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4">
                            <small class="negrita">${funciones.setMoneda(r.COSTO,'Q')}</small>
                        </div>
                        <div class="col-4">
                            <small class="negrita text-info">${funciones.setMoneda(r.IMPORTE,'Q')}</small>
                        </div>
                        <div class="col-4">
                            <small class="negrita text-danger">${funciones.setMoneda(((Number(r.IMPORTE)-Number(r.COSTO))/Number(r.IMPORTE))*100,'')} %</small>
                        </div>
                    </div>
                </td>
            </tr>
            `
        })
        container.innerHTML = str;
        lbTotal.innerText = funciones.setMoneda(total,'Q');
        lbTotalCosto.innerText = funciones.setMoneda(totalcosto,'Q');
        lbUtilidad.innerText = `${funciones.setMoneda((total-totalcosto),'Q')} (${(((total-totalcosto)/total)*100).toFixed(2)} %)`;
    })
    .catch(()=>{
        container.innerHTML = 'No hay datos....';
        lbTotal.innerText = '---';
        lbTotalCosto.innerText= '---';
        lbUtilidad.innerText = '---';
    })

};


function data_rpt_documentos_vendedor(codven,fecha,fechaf){
    return new Promise((resolve,reject)=>{
        axios.post('/reportes/vendedores_dia_documentos', {
            sucursal: GlobalCodSucursal,
            codven:codven,
            fecha:fecha,
            fechaf:fechaf,
            tipodoc:document.getElementById('cmbTipoDocumentos').value
        })
        .then((response) => {
                const data = response.data.recordset;
                if(response.data.toString()=='error'){
                    reject();
                }else{
                    resolve(data);
                }
            }, (error) => {
                reject();
        });
    })
    
};

function rpt_documentos_vendedor(codven){

    let container = document.getElementById('tblDocumentosVendedor');
    container.innerHTML = GlobalLoader;

    $("#modal_documentos").modal('show');


    let fecha =  funciones.devuelveFecha('txtFecha')
    let fechaf =  funciones.devuelveFecha('txtFechaF')
    
    data_rpt_documentos_vendedor(codven,fecha,fechaf)
    .then((data)=>{
        let str = '';
        data.map((r)=>{
            str += `
                <tr>
                    <td>${r.CODDOC}-${r.DOC_NUMERO}</td>
                    <td>${funciones.setMoneda(r.COSTO,'Q')}</td>
                    <td>${funciones.setMoneda(r.IMPORTE,'Q')}</td>
                    <td>${funciones.setMoneda((Number(r.IMPORTE)-Number(r.COSTO)),'Q')}</td>
                    <td>${(((Number(r.IMPORTE)-Number(r.COSTO))/Number(r.IMPORTE))*100).toFixed(2)}%</td>
                </tr>
            `
        })
        container.innerHTML = str;
    })
    .catch(()=>{
        container.innerHTML = '';
    })

};


function data_rpt_productos_vendedor_dia(codven,fecha,fechaf){
    return new Promise((resolve,reject)=>{
        axios.post('/reportes/productos_vendedor_dia', {
            sucursal: GlobalCodSucursal,
            codven:codven,
            fecha:fecha,
            fechaf:fechaf,
            tipodoc:document.getElementById('cmbTipoDocumentos').value
        })
        .then((response) => {
                const data = response.data.recordset;
                if(response.data.toString()=='error'){
                    reject();
                }else{
                    resolve(data);
                }
            }, (error) => {
                reject();
        });
    })
    
};

function rtp_productos_vendedor_dia(codven){
    let container = document.getElementById('tblProductosVendedor');
    container.innerHTML = GlobalLoader;

    $("#modal_productos").modal('show');

    let fecha = funciones.devuelveFecha('txtFecha');
    let fechaf = funciones.devuelveFecha('txtFechaF');

    let str = ''; let total = 0;

    let totalcosto = 0; let totalimporte = 0;

    data_rpt_productos_vendedor_dia(codven,fecha,fechaf)
    .then((data)=>{
        data.map((r)=>{
            total += Number(r.IMPORTE);
            totalcosto += Number(r.COSTO);

            str += `
            <tr class="col-12">
                <td>${r.DESPROD}
                    <br>
                    <small class="negrita text-naranja">Código: ${r.CODPROD}</small>
                    <br>
                    <div class="row">
                        <div class="col-3">
                            <small>Cantidad</small>
                        </div>
                        <div class="col-3">
                            <small>Costo</small>
                        </div>
                        <div class="col-3">
                            <small>Venta</small>
                        </div>
                        <div class="col-3">
                            <small class="negrita">${funciones.setMoneda((Number(r.IMPORTE)-Number(r.COSTO)),'Q')}</small>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col-3">
                            <small class="negrita">${r.TOTALUNIDADES}</small>
                        </div>
                        <div class="col-3">
                            <small class="text-danger">${funciones.setMoneda(r.COSTO,'Q')}</small>
                        </div>
                        <div class="col-3">
                            <small class="negrita">${funciones.setMoneda(r.IMPORTE,'Q')}</small>
                        </div>
                        <div class="col-3">
                            <small class="negrita">${funciones.setMoneda(((Number(r.IMPORTE)-Number(r.COSTO))/Number(r.IMPORTE))*100,'')}%
                            </small>
                        </div>
                    </div>
                 
                </td>
            </tr>
            `
        })
        container.innerHTML = str;
    })
    .catch(()=>{
        container.innerHTML = 'No hay datos....';
    })

};