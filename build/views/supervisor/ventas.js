function getView(){
    let view = {
        encabezado : ()=>{
            return `
                <div class="row">
                    <div class="card card-rounded shadow col-12">
                        <div class="card-body p-4">
                            
                            <h5 class="text-danger negrita">Reportes de Ventas (Pedidos levantados)</h5>

                            <div class="row">
                                <div class="col-6">
                                    <div class="form-group">
                                        <label>Mes</label>
                                        <select class="form-control" id="cmbMes">
                                        </select>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label>Año</label>
                                        <select class="form-control" id="cmbAnio">
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <br>
                            <div class="row">
                                <div class="col-4">
                                    <button class="btn btn-info shadow hand" id="btnVentasDia">
                                        Ventas del Día
                                    </button>
                                </div>
                                <div class="col-4">
                                    <button class="btn btn-success shadow hand" id="btnVentasMarca">
                                        Ventas Mes/Productos
                                    </button>
                                </div>
                                <div class="col-4">
                                    <button class="btn btn-warning shadow hand" id="btnVentasVendedor">
                                        Ventas Mes/Vendedor
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <hr class="solid">
            `
        },
        body:()=>{
            return `
                 <div class="col-12 p-0 shadow bg-white card-rounded">

                    <div class="tab-content" id="myTabHomeContent">
                        <div class="tab-pane fade show active" id="inicio" role="tabpanel" aria-labelledby="inicio-tab">    
                            ${view.dia()}
                        </div>
                        <div class="tab-pane fade" id="marcas" role="tabpanel" aria-labelledby="">
                            ${view.marcas_mes()}
                        </div>
                        <div class="tab-pane fade" id="vendedor" role="tabpanel" aria-labelledby="">  
                            ${view.vendedores_mes()}
                        </div>
                        <div class="tab-pane fade" id="reportes" role="tabpanel" aria-labelledby="">
                           
                        </div>
                    </div>
                    
                    <ul class="nav nav-tabs hidden" id="myTabHome" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active negrita text-success" id="tab-inicio" data-toggle="tab" href="#inicio" role="tab" aria-controls="profile" aria-selected="false">
                                <i class="fal fa-list"></i>Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-marcas" data-toggle="tab" href="#marcas" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i>Marcas</a>
                        </li> 
                        <li class="nav-item">
                            <a class="nav-link negrita text-info" id="tab-vendedor" data-toggle="tab" href="#vendedor" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-edit"></i>Vendedor</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link negrita text-warning" id="tab-reportes" data-toggle="tab" href="#reportes" role="tab" aria-controls="profile" aria-selected="false">
                                <i class="fal fa-chart-pie"></i>Reportes</a>
                        </li> 
                                
                    </ul>

                  

                </div>

                ${view.modal_productos_vendedor()}
               
            `
        },
        dia:()=>{
            return `  
                <div class="form-group p-4">
                    <label>Seleccione una fecha:</label>
                    <input type="date" class="form-control col-6" id="txtFecha">
                </div>

                <div class="row text-right">
                    <label>Total Venta:</label>
                    <h5 class="text-danger negrita" id="lbTotalVentadia">---</h5>
                </div>

                <table class="table table-responsive table-striped table-hover table-bordered">
                    <thead class="bg-trans-gradient text-white">
                        <tr>
                            <td>Vendedor</td>
                            <td>Venta</td>
                            <td>Pedidos</td>
                            <td>Promedio</td>
                            <td>Margen</td>
                        </tr>
                    </thead>
                    <tbody id="tblVtaDia"></tbody>
                </table>
                
                <hr class="solid">
                
                             

                `
        },
        marcas_mes: ()=>{
            return `
                    <div class="row">
                        <label>Total Venta:</label>
                        <h5 class="text-danger negrita" id="lbtotalMesMarcas">---</h5>
                    </div>

                    <table class="table table-responsive table-striped table-hover table-bordered">
                        <thead class="bg-trans-gradient text-white">
                        <tr>
                            <td>Producto</td>
                            <td>Unidades</td>
                            <td>TotalCosto</td>
                            <td>TotalVenta</td>
                            <td>Utilidad</td>
                            <td>Margen</td>
                        </tr>
                        </thead>
                        <tbody id="tblMesMarcas"></tbody>
                    </table>
            `
        },
        vendedores_mes: ()=>{
            return `
            <div class="row text-right">
                <label>Total Venta:</label>
                <h5 class="text-danger negrita" id="lbTotalVentaVendedoresMes">---</h5>
            </div>

            <table class="table table-responsive table-striped table-hover table-bordered">
                <thead class="bg-trans-gradient text-white">
                    <tr>
                        <td>Vendedor</td>
                        <td>Venta</td>
                        <td>Pedidos</td>
                        <td>Promedio</td>
                        <td>Margen</td>
                    </tr>
                </thead>
                <tbody id="tblVentasVendedoresMes"></tbody>
            </table>
            `
        },
        modal_productos_vendedor: ()=>{
            return `
            <div class="modal fade" id="modalProductosVendedor" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-right" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <label class="modal-title text-danger h3" id="">Productos Vendidos del Vendedor</label>
                        </div>

                        <div class="modal-body">
                           
                                <div class="row">
                                    <div class="col-6">
                                        <button class="btn btn-danger hand shadow btn-md" data-dismiss="modal">
                                            Cerrar(x)
                                        </button>
                                    </div>
                                    <div class="col-6">

                                        <label>Total Venta:</label>
                                        <h5 class="text-danger negrita" id="lbtotalMesMarcasV">---</h5>


                                    </div>

                                </div>

                                <table class="table table-responsive table-striped table-hover table-bordered">
                                    <thead class="bg-trans-gradient text-white">
                                    <tr>
                                        <td>Producto</td>
                                        <td>Unidades</td>
                                        <td>TotalCosto</td>
                                        <td>TotalVenta</td>
                                        <td>Utilidad</td>
                                        <td>Margen</td>
                                    </tr>
                                    </thead>
                                    <tbody id="tblMesMarcasV"></tbody>
                                </table>
                     

                        
                        </div>
                        
                    </div>
                </div>
            </div>
            `
        }
    }

    root .innerHTML = view.encabezado() + view.body();

};


function addListeners(){

    let f = new Date();
    let cmbMes = document.getElementById('cmbMes');
    cmbMes.innerHTML = funciones.ComboMeses();
    let cmbAnio = document.getElementById('cmbAnio');
    cmbAnio.innerHTML = funciones.ComboAnio();

    cmbMes.value = f.getMonth()+1;
    cmbAnio.value = f.getFullYear();

    cmbMes.addEventListener('change',()=>{
        //apigen.supervisor_marcasmes(cmbMes.value,cmbAnio.value, 'tblMesMarcas','lbtotalMesMarcas');
        apigen.supervisor_vendedores_mes(cmbMes.value,cmbAnio.value, 'tblVentasVendedoresMes','lbTotalVentaVendedoresMes');
        apigen.supervisor_productosmes(cmbMes.value,cmbAnio.value, 'tblMesMarcas','lbtotalMesMarcas')
    });

    cmbAnio.addEventListener('change',()=>{
        //apigen.supervisor_marcasmes(cmbMes.value,cmbAnio.value, 'tblMesMarcas','lbtotalMesMarcas');
        apigen.supervisor_vendedores_mes(cmbMes.value,cmbAnio.value, 'tblVentasVendedoresMes','lbTotalVentaVendedoresMes');
        apigen.supervisor_productosmes(cmbMes.value,cmbAnio.value, 'tblMesMarcas','lbtotalMesMarcas')
    });
    


    document.getElementById('txtFecha').addEventListener('change',()=>{
        //btnVentasDia.click();
        apigen.supervisor_ventadia(funciones.devuelveFecha('txtFecha'), 'tblVtaDia','lbTotalVentadia');
        //apigen.supervisor_marcas_dia(funciones.devuelveFecha('txtFecha'), 'tblVtaDiaMarcas','lbTotalVentadiaMarcas')
        
    })

    document.getElementById('txtFecha').value = funciones.getFecha();


    let btnVentasDia = document.getElementById('btnVentasDia');
    btnVentasDia.addEventListener('click',()=>{

        document.getElementById('tab-inicio').click();
        
        apigen.supervisor_ventadia(funciones.devuelveFecha('txtFecha'), 'tblVtaDia','lbTotalVentadia')

    });

    let btnVentasMarca = document.getElementById('btnVentasMarca');
    btnVentasMarca.addEventListener('click',()=>{

        document.getElementById('tab-marcas').click();

        apigen.supervisor_productosmes(cmbMes.value,cmbAnio.value, 'tblMesMarcas','lbtotalMesMarcas')
    })

    
    let btnVentasVendedor = document.getElementById('btnVentasVendedor');
    btnVentasVendedor.addEventListener('click',()=>{

        document.getElementById('tab-vendedor').click();

        apigen.supervisor_vendedores_mes(cmbMes.value,cmbAnio.value, 'tblVentasVendedoresMes','lbTotalVentaVendedoresMes')
    
    });



    //iniciarles DEL
    apigen.supervisor_ventadia(funciones.devuelveFecha('txtFecha'), 'tblVtaDia','lbTotalVentadia');
    //apigen.supervisor_marcas_dia(funciones.devuelveFecha('txtFecha'), 'tblVtaDiaMarcas','lbTotalVentadiaMarcas');

    funciones.slideAnimationTabs();

};


function initView(){
    getView();
    addListeners();

};



function getDetalleProductos(codven){

    $('#modalProductosVendedor').modal('show');
    apigen.supervisor_productosfechaven(codven,funciones.devuelveFecha('txtFecha'), 'tblMesMarcasV','lbtotalMesMarcasV');

}


function getDetalleProductosMes(codven){

    $('#modalProductosVendedor').modal('show');
    apigen.supervisor_productos_mes(codven,cmbMes.value,cmbAnio.value, 'tblMesMarcasV','lbtotalMesMarcasV');

}
