function getView(){
      let view = {
        body:()=>{
          return `
              ${view.parametros()}
              <br>
              <div class="col-12 p-0 bg-white">
                  <div class="tab-content" id="myTabHomeContent">
                      <div class="tab-pane fade show active" id="uno" role="tabpanel" aria-labelledby="receta-tab">
                          ${view.panel_resumenes()}
                      </div>
                      <div class="tab-pane fade" id="dos" role="tabpanel" aria-labelledby="home-tab">
                          ${view.panel_dias() + view.modal_documentos() + view.modal_productos()}
                      </div>
                      <div class="tab-pane fade" id="tres" role="tabpanel" aria-labelledby="home-tab">
                          ${view.graficas1()}                      
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
              <div class="row">
                  <button class="btn waves-effect btn-bottom-l btn-naranja btn-circle btn-xl hand shadow" id="btnTotales">
                      <i class=""></i>T
                  </button>  
                  <button class="btn waves-effect btn-bottom-middle btn-warning btn-circle btn-xl hand shadow" id="btnDias">
                      <i class=""></i>D
                  </button> 
                  <button class="btn waves-effect btn-bottom-r btn-info btn-circle btn-xl hand shadow" id="btnGraficas">
                      <i class=""></i>G
                  </button> 
              </div>   

          `
        },
        parametros:()=>{
          return `
        <div class="row">
          <div class="card card-rounded border-naranja col-12 shadow">
            <div class="row p-4">
              <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div class="form-group" id="empresasContainer">
                  <label>Empresa:</label>
                  <select id="cmbEmpresas" class="form-control negrita">
                      <option value="">Todas...</option>                                      
                  </select>
                </div>
              </div>
              <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 text-right">
                <div class="form-group">
                  <label>Mes y Año</label>
                  <div class="input-group">
                    <select class="form-control negrita" id="cmbMeses">
                      <option value="10">Octubre</option>
                    </select>
                    <select class="form-control negrita" id="cmbAnio">
                      <option value="2018">2018</option>  
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
                      <option value="2031">2031</option>
                      <option value="2032">2032</option>
                      <option value="2033">2033</option>
                      <option value="2034">2034</option>
                      <option value="2035">2035</option>
                      <option value="2036">2036</option>
                      <option value="2037">2037</option>
                      <option value="2038">2038</option>
                      <option value="2039">2039</option>
                      <option value="2040">2040</option>
                    </select>
                  </div>
                </div>                            
              </div>
            </div>
          </div>
        </div>
          `
        },
        panel_resumenes:()=>{
          return `
              <div class="row "> 
                <div id="panel-2" class="panel col-12 card card-rounded border-naranja">
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
                            <div class="p-3 bg-naranja rounded overflow-hidden position-relative text-white mb-g shadow">
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
          `
        },
        panel_dias:()=>{
          return `
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
          `
        },
        modal_documentos:()=>{
          return `
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

          `
        },
        modal_productos:()=>{
          return `
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
        },
        graficas1:()=>{
          return `
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
          `
        }    
      }

      root.innerHTML = view.body();

}

async function initView(){
    

    getView();

    document.getElementById('btnTotales').addEventListener('click',()=>{
        document.getElementById('tab-uno').click();
    });
    document.getElementById('btnDias').addEventListener('click',()=>{
      document.getElementById('tab-dos').click();
    });
    document.getElementById('btnGraficas').addEventListener('click',()=>{
      document.getElementById('tab-tres').click();
    });


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
        let empnit = cmbEmpresas.value;
        await get_tbl_dias(empnit,'tblVentas', 'cmbMeses', 'cmbAnio')
        await getTotalVentas(empnit, 'cmbMeses', 'cmbAnio');
        await getTotalCompras(empnit, 'cmbMeses', 'cmbAnio');
        //await getComparativaDias();
    });
    //MES
    cmbMeses.addEventListener('change',async()=>{
      let empnit = cmbEmpresas.value;
        await get_tbl_dias(empnit,'tblVentas', 'cmbMeses', 'cmbAnio')
        await getTotalVentas(empnit, 'cmbMeses', 'cmbAnio');
        await getTotalCompras(empnit, 'cmbMeses', 'cmbAnio');
        //await getComparativaDias();
    });
    
    //ANIO
    cmbAnio.addEventListener('change',async()=>{
        let empnit = cmbEmpresas.value;
        await get_tbl_dias(empnit,'tblVentas', 'cmbMeses', 'cmbAnio')
        await getTotalVentas(empnit, 'cmbMeses', 'cmbAnio');
        await getTotalCompras(empnit, 'cmbMeses', 'cmbAnio');
        //await getComparativaDias();
    });

    //inicia la busqueda en la lista de documentos facturas
    document.getElementById('txtBuscarFactura').addEventListener('keyup',()=>{
      funciones.FiltrarTabla('tblListaDocumentos','txtBuscarFactura');
    })


      // INICIALES
      getEmpresas();

      let empnit = cmbEmpresas.value;
      get_tbl_dias(empnit,'tblVentas', 'cmbMeses', 'cmbAnio')
      getTotalVentas(empnit, 'cmbMeses', 'cmbAnio');
      getTotalCompras(empnit, 'cmbMeses', 'cmbAnio');

      funciones.slideAnimationTabs();

    
};  


function getEmpresas(){        
        document.getElementById('cmbEmpresas').innerHTML = funciones.getComboSucursales()
};


async function getVentasDia(empnit,idcontenedor,idMes,idAnio){
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

    axios.post('/reportes/rpt_ventas_dia',{sucursal:empnit,anio:anio,mes:mes})
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




function getTotalCompras(empnit,idmes,idanio){
          
  let mes = document.getElementById(idmes).value;
  let anio = document.getElementById(idanio).value;

  document.getElementById('txtTotalCompras').innerText = "Q 0";

  axios.post('/reportes/rpt_total_compras',{sucursal:empnit,anio:anio,mes:mes})
  .then((response) => {
      const data = response.data;        
      data.recordset.map((rows)=>{
          document.getElementById('txtTotalCompras').innerText = funciones.setMoneda(rows.TOTALVENTA,'Q ')
      })
  }, (error) => {
          console.log(error);
          document.getElementById('txtTotalCompras').innerText = "Q 0";
  });
};

function getTotalVentas(empnit,idmes,idanio){
          
  let mes = document.getElementById(idmes).value;
  let anio = document.getElementById(idanio).value;

  document.getElementById('txtTotalMes').innerText = "Q 0";
  document.getElementById('txtTotalUtilidades').innerHTML= "Q 0";
  document.getElementById('txtTotalUtilidadesPorc').innerHTML= "0 %";


  axios.post('/reportes/rpt_total_ventas',{sucursal:empnit,anio:anio,mes:mes})
  .then((response) => {
      const data = response.data;        
      data.recordset.map((rows)=>{
          document.getElementById('txtTotalMes').innerText = funciones.setMoneda(rows.TOTALVENTA,'Q ');
          document.getElementById('txtTotalUtilidades').innerHTML= funciones.setMoneda(Number(rows.TOTALVENTA)-Number(rows.TOTALCOSTO),'Q ');
          document.getElementById('txtTotalUtilidadesPorc').innerHTML= (((Number(rows.TOTALVENTA)-Number(rows.TOTALCOSTO))/Number(rows.TOTALVENTA))*100).toFixed(2).toString() + '%';
        
      })
  }, (error) => {
          console.log(error);
          document.getElementById('txtTotalMes').innerText = "Q 0";
  });
};

function get_tbl_dias(empnit,idcontenedor,idMes,idAnio){
  
      let container = document.getElementById(idcontenedor);

      let mes = document.getElementById(idMes).value;
      let anio = document.getElementById(idAnio).value;
      
      let totalventa =0;
      let diasprom = 0;
      
      container.innerHTML = GlobalLoader;
      
      let str = ``;

      axios.post('/reportes/rpt_ventas_dia',{sucursal:empnit,anio:anio,mes:mes})
      .then((response) => {
          const data = response.data;        
          data.recordset.map((rows)=>{
              totalventa += Number(rows.TOTALVENTA);
              diasprom += 1;
              str += `<tr class="hand border-bottom">
                          <td>${funciones.convertDateNormal(rows.FECHA)}</td>
                          <td>${funciones.setMoneda(rows.TOTALCOSTO,'Q')}</td>
                          <td>${funciones.setMoneda(rows.TOTALVENTA,'Q')}</td>
                          <td>${funciones.setMoneda((Number(rows.TOTALVENTA)-Number(rows.TOTALCOSTO)),'Q')}</td>
                          <td>${(((Number(rows.TOTALVENTA)-Number(rows.TOTALCOSTO))/Number(rows.TOTALVENTA))*100).toFixed(2)} % </td>  
                          <td>
                              <button class="btn btn-icon btn-success btn-circle" onclick="getDataVentas('${rows.EMP_NIT}','${rows.FECHA}');">
                                  <li class="fal fa-tag"></li>
                              </button>
                          </td>
                          <td>
                          <button class="btn btn-icon btn-warning btn-circle" onclick="getDataProductos('${rows.EMP_NIT}','${rows.FECHA}');">
                              <li class="fal fa-th-list"></li>
                          </button>
                      </td>
                      </tr>`;
          })
          container.innerHTML = str;
          document.getElementById('txtPromedioDia').innerText=funciones.setMoneda((totalventa/diasprom),'Q');
      }, (error) => {
          container.innerHTML = `<h1 class="text-danger">Error al cargar datos.. ${error}</h1>`
      });
};

function getDataVentas(empnit,dia){

      $('#modalDatosVenta').modal('show');

      document.getElementById('txtDiaSeleccionado').innerText = `Ventas del día ${funciones.convertDateNormal(dia)}`;
      
      let container = document.getElementById('tblVentasDia');
      container.innerHTML =GlobalLoader;

      let str ='';
      axios.post('/reportes/rpt_documentos_dia',{sucursal:empnit,fecha:dia.replace('T00:00:00.000Z', '')})
      .then((response) => {
          const data = response.data;        
          data.recordset.map((rows)=>{
              let cost = Number(rows.COSTO); let util = 0;
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

function getDataProductos(empnit,dia){

        $('#modalDatosProductos').modal('show');

        document.getElementById('txtDiaSeleccionadoProductos').innerText = `Productos vendidos el ${funciones.convertDateNormal(dia)}`;
        
        let container = document.getElementById('tblVentasDiaProductos');    
        container.innerHTML =GlobalLoader;

        let str ='';
        axios.post(`/reportes/rpt_productos_dia`,{sucursal:empnit,fecha:dia.replace('T00:00:00.000Z', '')})
        .then((response) => {
            const data = response.data;        
            data.recordset.map((rows)=>{
                str += `<tr>
                            <td>${rows.DESPROD} (Cód:${rows.CODPROD})
                                <br>
                                <small class="negrita">Cantidad: ${rows.TOTALUNIDADES}</small>
                                <br>
                                <div class="row">
                                      <div class="col-4">
                                          <small>Costo:</small>
                                      </div>
                                      <div class="col-4">
                                          <small>Venta:</small>
                                      </div>
                                      <div class="col-4">
                                          <small class="negrita text-naranja">${funciones.setMoneda((Number(rows.IMPORTE)-Number(rows.COSTO)),'Q')}</small>
                                      </div>
                                </div>
                                <div class="row">
                                      <div class="col-4">
                                          <small class="negrita">${funciones.setMoneda(rows.COSTO,'Q')}</small>
                                      </div>
                                      <div class="col-4">
                                          <small class="negrita text-info">${funciones.setMoneda(rows.IMPORTE,'Q')}</small>
                                      </div>
                                      <div class="col-4">
                                          <small class="negrita text-danger">${(((Number(rows.IMPORTE)-Number(rows.COSTO))/Number(rows.IMPORTE))*100).toFixed(2)}%</small>
                                      </div>
                                </div>
                            </td>                        
                        </tr>`;
            })
            container.innerHTML = str;
        }, (error) => {
            container.innerHTML = `<h5 class="text-danger">Error al cargar datos.. ${error}</h5>`
        });
  
};
