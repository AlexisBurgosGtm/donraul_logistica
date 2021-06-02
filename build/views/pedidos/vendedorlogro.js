function getView(){
    let view ={
        encabezado : ()=>{
            return `
            <div class="row bg-trans-gradient text-white">
                <div class="col-5">
                    <h5>Seleccione un Mes y un Reporte</h5>
                </div>
                
                <div class="col-5 text-left">
                    <label>Total : </label>
                    <b><label id="lbTotal">Q 0.00</label></b>
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
                <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                    <div class="row">

                        <div class="col-4">
                            
                                <button class="btn btn-success btn-round" id="btnCargarDinero">
                                    <i class="fal fa-tag"></i>
                                    Dinero
                                </button>
                            
                        </div>
                        <div class="col-4">
                            
                                <button class="btn btn-success btn-round" id="btnCargarProductos">
                                    <i class="fal fa-cube"></i>
                                    Produc
                                </button>
                            
                        </div>
                        <div class="col-4">
                            
                                <button class="btn btn-success btn-round" id="btnCargarMarcas">
                                    <i class="fal fa-credit-card-front"></i>
                                    Marcas
                                </button>
                            
                        </div>

                    </div>
                </div>

                
            </div>
            `
        },
        listado: ()=>{
            return `
            <br>
            <div class="row card">
                <div class="table-responsive">
                    <table class="table table-responsive table-striped table-hover table-bordered" id="tblReport">
                        
                    </table>
                </div>
            </div>
            `
        }
    };

    root.innerHTML = view.encabezado() + view.listado()
};

function addListeners(){
    let f = new Date();
    let cmbMes = document.getElementById('cmbMes');
    cmbMes.innerHTML = funciones.ComboMeses();
    let cmbAnio = document.getElementById('cmbAnio');
    cmbAnio.innerHTML = funciones.ComboAnio();

    cmbMes.value = f.getMonth()+1;
    cmbAnio.value = f.getFullYear();

    let btnCargarDinero = document.getElementById('btnCargarDinero');
    btnCargarDinero.addEventListener('click',()=>{
        getRptDinero(cmbMes.value, cmbAnio.value);
    });
    let btnCargarProductos = document.getElementById('btnCargarProductos');
    btnCargarProductos.addEventListener('click',()=>{
        getRptProductos(cmbMes.value, cmbAnio.value);
    });
    let btnCargarMarcas = document.getElementById('btnCargarMarcas');
    btnCargarMarcas.addEventListener('click',()=>{
        getRptMarcas(cmbMes.value, cmbAnio.value);
    });
};

function inicializarVistaLogro(){
    getView();
    addListeners();
};


function getRptDinero(mes,anio){
    api.reporteDinero(GlobalCodSucursal,GlobalCodUsuario,anio,mes,'tblReport','lbTotal');
};
function getRptProductos(mes,anio){
    api.reporteProductos(GlobalCodSucursal,GlobalCodUsuario,anio,mes,'tblReport','lbTotal');
};
function getRptMarcas(mes,anio){
    api.reporteMarcas(GlobalCodSucursal,GlobalCodUsuario,anio,mes,'tblReport','lbTotal');
};
