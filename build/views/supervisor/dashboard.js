function getView(){
  let view = `
  <div class="row">
  <div class="card col-12 shadow">
    
    <div class="row p-4">
      
      <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <div class="form-group" id="empresasContainer">
          <label>Empresa:</label>
          <select id="cmbEmpresas" class="form-control shadow negrita">
              <option value="">Todas...</option>                                      
          </select>
        </div>
      </div>

      <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 text-right">
    
        <div class="form-group">
          <label>Mes y Año</label>
          <div class="input-group">

            <select class="form-control shadow negrita" id="cmbMeses">
              <option value="10">Octubre</option>
            </select>

            <select class="form-control shadow negrita" id="cmbAnio">
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
              <option value="2030">2030</option>
            </select>

          </div>
        </div>                            
    
      </div>

    </div>
    
  </div>
</div>
      
<!-- PANEL DE RESUMENES -->
<div class="row"> 
    <div id="panel-2" class="panel col-12">
        <div class="panel-hdr">
          <h2>
            Resúmenes
          </h2>
            <div class="panel-toolbar">
                <button class="btn btn-panel hidden" data-action="panel-collapse" data-toggle="tooltip" data-offset="0,10" data-original-title="Collapse"></button>
                <button class="btn btn-panel hidden" data-action="panel-fullscreen" data-toggle="tooltip" data-offset="0,10" data-original-title="Fullscreen"></button>
                
            </div>
        </div>
        <div class="panel-container show">
            <div class="panel-content">

              <div class="row">
                <div class="col-sm-3 col-xl-3">
                    <div class="p-3 bg-warning-400 rounded overflow-hidden position-relative text-white mb-g shadow">
                        <div class="">
                            <h1 class="display-5 d-block l-h-n m-0 fw-500" id="txtPromedioDia">
                                Q0.00
                            </h1>
                            <small class="m-0 l-h-n">Promedio Diario Ventas</small>
                        </div>
                        <i class="fal fa-gem position-absolute pos-right pos-bottom opacity-15  mb-n1 mr-n4" style="font-size: 6rem;"></i>
                    </div>
                </div>

                <div class="col-sm-3 col-xl-3">
                    <div class="p-3 bg-info-200 rounded overflow-hidden position-relative text-white mb-g shadow">
                        <div class="">
                            <h1 class="display-5 d-block l-h-n m-0 fw-500" id="txtTotalMes">
                                Q0.00
                            </h1>
                            <small class="m-0 l-h-n">Total Ventas del Mes</small>
                        </div>
                        <i class="fal fa-globe position-absolute pos-right pos-bottom opacity-15 mb-n1 mr-n4" style="font-size: 6rem;"></i>
                    </div>
                </div>

                <div class="col-sm-3 col-xl-3">
                  <div class="p-3 bg-danger-200 rounded overflow-hidden position-relative text-white mb-g shadow">
                      <div class="">
                          <h1 class="display-5 d-block l-h-n m-0 fw-500" id="txtTotalCompras">
                              Q0.00
                          </h1>
                          <small class="m-0 l-h-n">Total Compras del Mes</small>
                      </div>
                      <i class="fal fa-globe position-absolute pos-right pos-bottom opacity-15 mb-n1 mr-n4" style="font-size: 6rem;"></i>
                  </div>
              </div>

                <div class="col-sm-3 col-xl-3">
                    <div class="p-3 bg-success-400 rounded overflow-hidden position-relative text-white mb-g shadow">
                        <div class="">
                            <h1 class="display-5 d-block l-h-n m-0 fw-500" id="txtTotalUtilidades">
                                Q0.00
                            </h1>
                            <small class="m-0 l-h-n">Ganancias Brutas del Mes</small>
                        </div>
                        <i class="fal fa-globe position-absolute pos-right pos-bottom opacity-15 mb-n1 mr-n4" style="font-size: 6rem;"></i>
                    </div>
                </div>

                <div class="col-sm-3 col-xl-3">
                  <div class="p-3 bg-campesino rounded overflow-hidden position-relative text-white mb-g shadow">
                      <div class="">
                          <h1 class="display-5 d-block l-h-n m-0 fw-500" id="txtTotalUtilidadesPorc">
                              0.00
                          </h1>
                          <small class="m-0 l-h-n">Márgen Bruto</small>
                      </div>
                      <i class="fal fa-globe position-absolute pos-right pos-bottom opacity-15 mb-n1 mr-n4" style="font-size: 6rem;"></i>
                  </div>
              </div>


              </div>

            </div>
        </div>
    </div>
</div>

<!-- PANEL DE DETALLE -->
<div class="row">
  
    <div id="panel-3" class="panel col-12">
        <div class="panel-hdr">
          <h2>
          Ventas por Día (Utilidad Bruta)
          </h2>
            <div class="panel-toolbar">
                <button class="btn btn-panel" data-action="panel-collapse" data-toggle="tooltip" data-offset="0,10" data-original-title="Collapse"></button>
                <button class="btn btn-panel" data-action="panel-fullscreen" data-toggle="tooltip" data-offset="0,10" data-original-title="Fullscreen"></button>
                
            </div>
        </div>
        <div class="panel-container show">
            <div class="panel-content">
          
                          <div class="table table-responsive">
                            <table class="table table-striped table-hovered" id="tblListado">
                              <thead class="bg-info text-white">
                                <tr>
                                  <td>Dia</td>
                                  <td>TotalCosto</td>
                                  <td>TotalVentas</td>
                                  <td>Utilidad</td>
                                  <td>Márgen</td>
                                  <td>Docs</td>
                                  <td>Prods</td>
                                </tr>
                              </thead>
                              <tbody id="tblVentas">
                        
      
                              </tbody>
                            </table>
                          </div>
                
            </div>
      </div>
    </div>
</div>

<div class="row">
    <div id="panel-4" class="panel col-12">
        <div class="panel-hdr">
          <h2>Ventas por Día</h2>
            <div class="panel-toolbar">
                <button class="btn btn-panel" data-action="panel-collapse" data-toggle="tooltip" data-offset="0,10" data-original-title="Collapse"></button>
                <button class="btn btn-panel" data-action="panel-fullscreen" data-toggle="tooltip" data-offset="0,10" data-original-title="Fullscreen"></button>
            </div>
        </div>
        <div class="panel-container show">
            <div class="panel-content">
                <canvas id="barChart"></canvas>
            </div>
        </div>
    </div>  
</div>

<div class="row">
  <div id="panel-5" class="panel col-12">
      <div class="panel-hdr">
        <h2>Comparativa días anteriores por Mes</h2>
          <div class="panel-toolbar">
              <button class="btn btn-panel" data-action="panel-collapse" data-toggle="tooltip" data-offset="0,10" data-original-title="Collapse"></button>
              <button class="btn btn-panel" data-action="panel-fullscreen" data-toggle="tooltip" data-offset="0,10" data-original-title="Fullscreen"></button>
          </div>
      </div>
      <div class="panel-container show">
          <div class="panel-content">
              <canvas id="barChart2"></canvas>
          </div>
      </div>
  </div>  
</div>


        <!-- HODAL VENTAS POR DOCUMENTO-->
        <div class="modal fade" id="modalDatosVenta" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-right" role="document">
                  <div class="modal-content">
                          <div class="modal-header">
                            <button class="btn bg-danger btn-round btn-sm text-white" data-dismiss="modal">
                              <i class="fal fa-arrow-left"></i>Aceptar
                            </button>
                          </div>
                      <div class="modal-body">
                          <h3 id="txtDiaSeleccionado">Ventas del Día</h3>
                            <di class="form-group">
                              <label>Buscar factura</label>
                              <input type="text" class="form-control col-6 border-primary shadow" placeholder="Escriba para buscar..." id="txtBuscarFactura">
                            </di>
                          
                          <div class="col-12">
                             
                              <div class="table-responsive">
                                
                                <table class="table table-striped table-bordered" id="tblListaDocumentos">
                                  <thead class="bg-trans-gradient text-white">
                                    <tr>
                                      <td>Factura</td>
                                      <td></td>
                                      <td>Cliente</td>
                                      <td>Costo</td>
                                      <td>Importe</td>
                                      <td>Utilidad</td>
                                    </tr>
                                  </thead>
                                  <tbody id="tblVentasDia">

                                  </tbody>
                                </table>

                              </div>
      
                              <hr class="sidebar-divider">
                              
      
                          </div>
                      </div>
      
                      <div class="modal-footer">
                        <button class="btn bg-danger btn-round btn-sm text-white" data-dismiss="modal">
                          <i class="fal fa-arrow-left"></i>Aceptar
                        </button>

                      </div>
                  </div>

          
              </div>
        </div>

        <!-- MODAL VENTAS POR PRODUCTO -->
        <div class="modal fade col-12" id="modalDatosProductos" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg modal-dialog-right" role="document">
              <div class="modal-content">
                      <div class="modal-header">
                        <button class="btn bg-info btn-round btn-sm text-white" data-dismiss="modal">
                          <i class="fal fa-arrow-left"></i>Aceptar
                        </button>
                      </div>
                  <div class="modal-body">
                      <div class="col-12">
                          <h3 id="txtDiaSeleccionadoProductos">Productos Vendidos</h3>
                          <div class="table-responsive">
                            <table class="table table-striped table-bordered">
                              <thead class="bg-trans-gradient text-white">
                                <tr>
                                  <td>Producto</td>
                                  <td>Unidades</td>
                                  <td>TotalCosto</td>
                                  <td>TotalPrecio</td>
                                  <td>Utilidad</td>
                                  <td>Márgen</td>
                                </tr>
                              </thead>
                              <tbody id="tblVentasDiaProductos">

                              </tbody>
                            </table>

                          </div>
  
                          <hr class="sidebar-divider">
                          
  
                      </div>
                  </div>
  
                  <div class="modal-footer">

                      <button class="btn bg-info btn-round btn-sm text-white" data-dismiss="modal">
                        <i class="fal fa-arrow-left"></i>Aceptar
                      </button>

                  </div>
              </div>

      
          </div>
        </div>

  `
  root.innerHTML = view;

}

async function initView(){
  getView();


   return;

    let cmbEmpresas = document.getElementById('cmbEmpresas');
    let cmbMeses = document.getElementById('cmbMeses');
    let cmbAnio = document.getElementById('cmbAnio');

    cmbMeses.innerHTML = funciones.ComboMeses();
    cmbAnio.innerHTML = funciones.ComboAnio();
    
    let f = new Date();
    cmbAnio.value = f.getFullYear().toString();
    cmbMeses.value = f.getMonth()+1;
    
    //EMPRESAS
    cmbEmpresas.addEventListener('change',async()=>{
        GlobalEmpnit = cmbEmpresas.value;
        await getVentasDia('tblVentas', 'cmbMeses', 'cmbAnio');    
        await getTotalCompras(GlobalEmpnit, 'cmbMeses', 'cmbAnio');
        await getComparativaDias();
    });
    //MES
    cmbMeses.addEventListener('change',async()=>{
        await getVentasDia('tblVentas', 'cmbMeses', 'cmbAnio');
        await getTotalCompras(GlobalEmpnit, 'cmbMeses', 'cmbAnio');
        await getComparativaDias();
    });
    
    //ANIO
    cmbAnio.addEventListener('change',async()=>{
        await getVentasDia('tblVentas', 'cmbMeses', 'cmbAnio');
        await getTotalCompras(GlobalEmpnit, 'cmbMeses', 'cmbAnio');
        await getComparativaDias();
    });

    //inicia la busqueda en la lista de documentos facturas
    document.getElementById('txtBuscarFactura').addEventListener('keyup',()=>{
      funciones.FiltrarTabla('tblListaDocumentos','txtBuscarFactura');
    })


    // INICIALES
    await getEmpresas();
    

    
};  


function getEmpresas(){

        let str = ''; //`<option value=''>Todas...</option>`;
        
        axios.get('/reports/empresas?token=' + GlobalToken)
        .then(async(response) => {
            const data = response.data;        
            data.recordset.map((rows)=>{
                str += `<option value=${rows.EMPNIT}>${rows.EMPRESA}</option>`;
            })
            let emp = document.getElementById('cmbEmpresas');
            emp.innerHTML= str;
            GlobalEmpnit = emp.value;
            
            await getVentasDia('tblVentas','cmbMeses','cmbAnio');
            await getTotalCompras(GlobalEmpnit,'cmbMeses','cmbAnio');
            await getComparativaDias();

        }, (error) => {
            console.log(error);
        });
    
    
};

async function getVentasDia(idcontenedor,idMes,idAnio){
    let container = document.getElementById(idcontenedor);

    let mes = document.getElementById(idMes).value;
    let anio = document.getElementById(idAnio).value;
    
    let totalventa =0;
    let totalUtilidad = 0;
    let totalcosto =0;
    let diasprom = 0;
    
    container.innerHTML = GlobalLoader;// '<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>'
    let str = ``;

    //para la grafica
    let labels = [];
    let dataset = [];

    axios.get(`/reports/ventasmesdia?token=${GlobalToken}&mes=${mes}&anio=${anio}&empnit=${GlobalEmpnit}`)
    .then((response) => {
        const data = response.data;        
        data.recordset.map((rows)=>{
            labels.push(rows.FECHA.replace('T00:00:00.000Z','').toString());
            dataset.push(rows.TOTALVENTAS);
            //suma el total venta
            totalventa += Number(rows.TOTALVENTAS);
            let costreal = 0; let utilreal =0;
            if(Number(rows.TOTALCOSTODOL)==0){costreal=Number(rows.TOTALCOSTO)}else{costreal=Number(rows.TOTALCOSTODOL)}
            utilreal = Number(rows.TOTALVENTAS) - costreal;
            totalcosto +=costreal;
            diasprom += 1;
            totalUtilidad += utilreal;//Number(rows.UTILIDAD);
            str += `<tr class="hand border-bottom">
                        <td>${rows.FECHA.replace('T00:00:00.000Z','')}</td>
                        <td>${funciones.setMoneda(costreal,'Q')}</td>
                        <td>${funciones.setMoneda(rows.TOTALVENTAS,'Q')}</td>
                        <td>${funciones.setMoneda(utilreal,'Q')}</td>
                        <td>${((utilreal/costreal*100).toFixed(2))} % </td>  
                        <td>
                            <button class="btn btn-icon btn-success btn-circle" onclick="getDataVentas('${rows.EMPNIT}','${rows.FECHA}');">
                                <li class="fal fa-tag"></li>
                            </button>
                        </td>
                        <td>
                        <button class="btn btn-icon btn-warning btn-circle" onclick="getDataProductos('${rows.EMPNIT}','${rows.FECHA}',${mes},${anio});">
                            <li class="fal fa-th-list"></li>
                        </button>
                    </td>
                    </tr>`;
        })
        container.innerHTML = str;
        document.getElementById('txtPromedioDia').innerText=funciones.setMoneda((totalventa/diasprom),'Q');
        document.getElementById('txtTotalMes').innerText=funciones.setMoneda(totalventa,'Q');
        document.getElementById('txtTotalUtilidades').innerHTML= `${funciones.setMoneda(totalUtilidad,'Q')}`;
        document.getElementById('txtTotalUtilidadesPorc').innerHTML= `${((totalUtilidad/totalcosto)*100).toFixed(1)}%`;

    // CARGANDO DATOS DE LA GRAFICA
    var datagraf = {
            labels: labels,
            datasets: [{
              label: 'Q',
              data: dataset,
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1,
              fill: false
            }]
          };

    var options = {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            },
            legend: {
              display: false
            },
            elements: {
              point: {
                radius: 0
              }
            }
    };

    var barChartCanvas = $("#barChart").get(0).getContext("2d");
    var barChart = new Chart(barChartCanvas, {type: 'line', data: datagraf, options: options});

    }, (error) => {
        //console.log(error);
        container.innerHTML = `<h1 class="text-danger">Error al cargar datos.. ${error}</h1>`
    });
};

function getDetalleFactura(feluddi){
  let infileurl = `https://report.feel.com.gt/ingfacereport/ingfacereport_documento?uuid=${feluddi}`
  window.open(infileurl);
};

async function getTotalCompras(empnit,idmes,idanio){
          
  let mes = document.getElementById(idmes).value;
  let anio = document.getElementById(idanio).value;

  document.getElementById('txtTotalCompras').innerText = "Q 0";

  axios.get(`/reports/totalcompras?empnit=${empnit}&mes=${mes}&anio=${anio}`)
  .then(async(response) => {
      const data = response.data;        
      data.recordset.map((rows)=>{
          document.getElementById('txtTotalCompras').innerText = funciones.setMoneda(rows.TOTALVENTA,'Q ')
      })
  }, (error) => {
          console.log(error);
          document.getElementById('txtTotalCompras').innerText = "Q 0";
  });
};

async function getDataVentas(empnit,dia){
    $('#modalDatosVenta').modal('show');

    document.getElementById('txtDiaSeleccionado').innerText = `Ventas del día ${dia.replace('T00:00:00.000Z','')}`;
    
    let container = document.getElementById('tblVentasDia');

    //container.innerHTML = '<h3 class="text-danger">Cargando ventas del día...</h3>';
    container.innerHTML ='<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>'
    let str ='';
    axios.get(`/reports/ventasdia?token=${GlobalToken}&empnit=${empnit}&dia=${dia}`)
    .then((response) => {
        const data = response.data;        
        data.recordset.map((rows)=>{
            let cost = 0; let util = 0;
            //verifica si costodol está en cero, y pone totalcosto
            if(Number(rows.COSTO2)==0){cost=Number(rows.COSTO)}else{cost=Number(rows.COSTO2)}
            //calcula la utilidad
            util = Number(rows.IMPORTE) - cost;
            str += `<tr class="hand border-bottom">
                        <td class="negrita">${rows.CODDOC}<br>${rows.CORRELATIVO}</td>
                        <td>
                           <button class="btn btn-sm btn-secondary btn-circle" onclick="getDetalleFactura('${rows.FELUDDI}')">
                              <i class="fal fa-download"></i>
                            </button>
                        </td>                     
                        <td>${rows.CLIENTE}</td>
                        <td>${funciones.setMoneda(cost,'Q')}</td>
                        <td>${funciones.setMoneda(rows.IMPORTE,'Q')}</td>
                        <td>${funciones.setMoneda(util,'Q')}
                        <br>
                            <small class="text-success negrita">${((util/cost)*100).toFixed(2)} %</small>
                        </td>                        
                    </tr>`;
        })
        container.innerHTML = str;
    }, (error) => {
        container.innerHTML = `<h5 class="text-danger">Error al cargar datos.. ${error}</h5>`
    });

};

async function getDataProductos(empnit,dia,mes,anio){
    $('#modalDatosProductos').modal('show');

    document.getElementById('txtDiaSeleccionadoProductos').innerText = `Productos vendidos el ${dia.replace('T00:00:00.000Z','')}`;
    
    let container = document.getElementById('tblVentasDiaProductos');
        
    container.innerHTML ='<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>'
    let str ='';
    axios.get(`/reports/ventasdiaproductos?token=${GlobalToken}&empnit=${empnit}&dia=${dia}&mes=${mes}&anio=${anio}`)
    .then((response) => {
        const data = response.data;        
        data.recordset.map((rows)=>{
            str += `<tr>
                        <td>${rows.DESPROD}
                            <br>
                            <small>${rows.CODPROD}</small>
                        </td>
                        <td>${rows.UNIDADES}</td>                     
                        <td>${funciones.setMoneda(rows.COSTO,'Q')}</td>
                        <td>${funciones.setMoneda(rows.VENTA,'Q')}</td>
                        <td>${funciones.setMoneda(rows.UTILIDAD,'Q')}
                        <td class="text-success">${((rows.UTILIDAD/rows.COSTO)*100).toFixed(2)}%</td>                        
                    </tr>`;
        })
        container.innerHTML = str;
    }, (error) => {
        container.innerHTML = `<h5 class="text-danger">Error al cargar datos.. ${error}</h5>`
    });
    
};

async function getComparativaDias(){

    let container = document.getElementById('barChart2');
    let totalventa = 0;
    let f = new Date();
    
    let anio = document.getElementById('cmbAnio').value;
    let dia = f.getDate();

    console.log('comparando dia ' + dia)
       
    container.innerHTML = GlobalLoader;
    
    //para la grafica
    let labels = [];
    let dataset = [];

    
    axios.get(`/reports/graficacomparativadias?token=${GlobalToken}&anio=${anio}&empnit=${GlobalEmpnit}&dia=${dia}`)
    .then((response) => {
        const data = response.data;        
        data.recordset.map((rows)=>{
            labels.push(rows.MES);
            dataset.push(rows.TOTALVENTAS);
            
            //suma el total venta
            totalventa += Number(rows.TOTALVENTAS);
            
        })
      
    // CARGANDO DATOS DE LA GRAFICA
    var datagraf = {
            labels: labels,
            datasets: [{
              label: 'Q',
              data: dataset,
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1,
              fill: false
            }]
          };

    var options = {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            },
            legend: {
              display: false
            },
            elements: {
              point: {
                radius: 0
              }
            }
    };

    var barChartCanvas = $("#barChart2").get(0).getContext("2d");
    var barChart = new Chart(barChartCanvas, {type: 'bar', data: datagraf, options: options});

    }, (error) => {
        //console.log(error);
        container.innerHTML = `<h1 class="text-danger">Error al cargar datos.. ${error}</h1>`
    });

};