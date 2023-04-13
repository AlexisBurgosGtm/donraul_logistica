function getView(){
    let view = {
        body:()=>{
            return `
                <div class="col-12 p-0 bg-white">
                    <div class="tab-content" id="myTabHomeContent">
                        <div class="tab-pane fade show active" id="uno" role="tabpanel" aria-labelledby="receta-tab">
                            ${view.vista_listado()}
                        </div>
                        <div class="tab-pane fade" id="dos" role="tabpanel" aria-labelledby="home-tab">
                            ${view.vista_nuevo()}
                            
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
               
            `
        },
        vista_listado:()=>{
            return `
            <div class="card card-rounded border-naranja shadow">
                <div class="card-body p-4"> 
                    <h1 class="negrita text-naranja text-center">Lista de Clientes</h1>
                </div>
            </div>
            <br>
            <div class="card card-rounded border-naranja shadow">
                <div class="card-body p-4">
                    <div class="form-group">
                        <label>Buscar Cliente:</label>
                        <div class="input-group">
                            <input type="text" class="form-control negrita text-naranja" placeholder="Buscar por Nombre o NIT..." id="txtBuscar">
                            <button class="btn btn-naranja hand" id="btnBuscar">
                                <i class="fal fa-search"></i>
                            </button>
                        </div>
                        
                    </div>
                    <br>
                    <div class="table-responsive col-12">
                        <table class="table table-responsive table-hover">
                            <thead class="bg-naranja text-white">
                                <tr>
                                    <td>CLIENTE</td>
                                    <td>SALDO</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody id="tblClientes"></tbody>
                        </table>
                    </div>
                </div>
            </div>

            <button class="btn btn-xl btn-circle btn-bottom-r btn-success" id="btnNuevo">
                <i class="fal fa-plus"></i>
            </button>
            `
        },
        vista_nuevo:()=>{
            return `
            <div class="card card-rounded border-naranja shadow">
                <div class="card-body p-4"> 
                    <h1 class="negrita text-naranja text-center">Crear nuevo Cliente</h1>
                </div>
            </div>
            <br>
            <div class="card card-rounded border-naranja shadow">
                <div class="card-body p-4"> 
                    <div class="form-group">
                        <label class="negrita">NIT / DPI:</label>
                        <input type="text" class="form-control" id="txtNit">
                    </div>

                    <div class="form-group">
                        <label class="negrita">CLIENTE:</label>
                        <input type="text" class="form-control" id="txtNombre" placeholder="Nombre del cliente...">
                    </div>
                    <div class="form-group">
                        <label class="negrita">DIRECCIÓN:</label>
                        <input type="text" class="form-control" id="txtDireccion" value="CIUDAD">
                    </div>
                    <br>
                    <div class="row">
                        <div class="col-6">
                            <div class="form-group">
                                <label class="negrita">MUNICIPIO</label>
                                <select class="form-control" id="cmbMunicipio"></select>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group">
                                <label class="negrita">DEPARTAMENTO</label>
                                <select class="form-control" id="cmbDepartamento"></select>
                            </div>
                        </div>
                    </div>
                    
                    <br>
                    <div class="row">
                        <div class="col-6">
                            <div class="form-group">
                                <label class="negrita">TELÉFONO:</label>
                                <input type="number" class="form-control" id="txtTelefono">
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group">
                                <label class="negrita">EMAIL:</label>
                                <input type="text" class="form-control" id="txtEmail">
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="">
                    <button class="btn btn-secondary btn-circle btn-xl btn-bottom-left hand shadow" id="btnNuevoAtras">
                        <i class="fal fa-arrow-left"></i>
                    </button>
            </div>

            <div class="">
                <button class="btn btn-circle btn-info btn-xl btn-bottom-r hand shadow" id="btnGuardar">
                    <i class="fal fa-save"></i>
                </button>
            </div>
            
            `
        },
        vista_historial:()=>{

        }
    }

    root.innerHTML = view.body();

};

function addListeners(){

    document.getElementById('btnNuevo').addEventListener('click',()=>{
        clean_data_cliente();
        document.getElementById('tab-dos').click();
    });


    document.getElementById('txtBuscar').addEventListener('keyup',(e)=>{
        if(e.code=='Enter'){
            buscar_cliente('txtBuscar','tblClientes');
        };
        if(e.code=='NumpadEnter'){
            buscar_cliente('txtBuscar','tblClientes');
        };
    });

    document.getElementById('btnBuscar').addEventListener('click',()=>{
        buscar_cliente('txtBuscar','tblClientes');
    });


    document.getElementById('btnNuevoAtras').addEventListener('click',()=>{
        document.getElementById('tab-uno').click();
    });


    let txtNit = document.getElementById('txtNit');
    txtNit.addEventListener('focusout',(e)=>{
      
        let nit = txtNit.value || 'CF';
        if(nit=='CF'){
            funciones.AvisoError('No puede usar CF para crear Clientes nuevos');
            txtNit.value = '';
            return;   
        }else{

            document.getElementById('txtNombre').value = 'VERIFICANDO, ESPERE POR FAVOR.....';
            document.getElementById('txtDireccion').value = 'VERIFICANDO......';  

            funciones.GetDataNit(nit)
            .then((json)=>{
                
                document.getElementById('txtNombre').value = json.toUpperCase();
                document.getElementById('txtDireccion').value = "CIUDAD";    
            })
            .catch(()=>{
                funciones.showToast('NIT / DPI no existe o no se pudo verificar');
            })
        }
    });

    get_municipio('cmbMunicipio');
    get_departamentos('cmbDepartamento');


    let btnGuardar = document.getElementById('btnGuardar');
    btnGuardar.addEventListener('click',()=>{
        funciones.Confirmacion('¿Está seguro que desea CREAR este NUEVO CLIENTE?')
        .then((value)=>{
            if(value==true){
                
                btnGuardar.disabled = true;
                btnGuardar.innerHTML = '<i class="fal fa-save fa-spin"></i>';

                let nit = document.getElementById('txtNit').value || '';
                let nombre = document.getElementById('txtNombre').value || '';
                let direccion = document.getElementById('txtDireccion').value || 'CIUDAD';
                let telefono = document.getElementById('txtTelefono').value || '0';
                let email = document.getElementById('txtEmail').value || 'SN';
                let codMun = document.getElementById('cmbMunicipio').value;
                let codDep = document.getElementById('cmbDepartamento').value;
                    
                if(nit==''){
                    funciones.AvisoError('Escriba un NIT/DPI');
                    btnGuardar.disabled = false;
                    btnGuardar.innerHTML = '<i class="fal fa-save"></i>';
                    return;
                };
                if(nombre==''){
                    funciones.AvisoError('Escriba un nombre válido');
                    btnGuardar.disabled = false;
                    btnGuardar.innerHTML = '<i class="fal fa-save"></i>';
                    return;
                };

                let datos = {
                    fecha:funciones.getFecha(),
                    codven:GlobalCodUsuario,
                    empnit:GlobalCodSucursal,
                    nitclie:nit,
                    nomclie:nombre,
                    dirclie:direccion,
                    coddepto:codDep,
                    codmunicipio:codMun,
                    telclie:telefono,
                    emailclie:email,
                    lat:0,
                    long:0
                }

                apigen.clientes_data_nuevo(datos)
                .then(()=>{
                    btnGuardar.disabled = false;
                    btnGuardar.innerHTML = '<i class="fal fa-save"></i>';

                    funciones.Aviso('Cliente creado exitosamente!!');
                    document.getElementById('txtBuscar').value = nit;
                    document.getElementById('btnBuscar').click();
                    document.getElementById('tab-uno');
                
                })
                .catch(()=>{
                    funciones.AvisoError('No se pudo crear el cliente. Verifique si este NIT/DPI ya existe');
                    btnGuardar.disabled = false;
                    btnGuardar.innerHTML = '<i class="fal fa-save"></i>';
                })


                
            }
        })
    });

    funciones.slideAnimationTabs();

};

function initView(){

    getView();
    addListeners();

};

function buscar_cliente(idFiltro,idTablaResultado){
    
    let filtro = document.getElementById(idFiltro).value;
    let tabla = document.getElementById(idTablaResultado);
    tabla.innerHTML = GlobalLoader;


    let str = ""; 
    axios.get('/clientes/buscarcliente?empnit=' + GlobalCodSucursal + '&filtro=' + filtro)
    .then((response) => {
        const data = response.data;        
        data.recordset.map((rows)=>{
            str += `<tr id="${rows.CODCLIE}">
                        <td>
                            ${rows.NOMCLIE}
                            <br>
                            <small class="negrita text-naranja">Código: ${rows.CODCLIE} / Nit: ${rows.NIT}</small>
                            <br>
                            <small>${rows.DIRCLIE},${rows.DESMUNICIPIO}</small>
                        </td>
                        <td>
                            Q 0.00
                        </td>
                        <td>
                            <button class="btn btn-md btn-warning hand"> 
                                <i class="fal fa-list"></i> Historial
                            </button>
                        </td> 
                        <td>
                            <button class="btn btn-md btn-info hand" onclick="classNavegar.ventas('${rows.CODCLIE}','${rows.NIT}','${rows.NOMCLIE}', '${rows.DIRCLIE}');"> 
                                <i class="fal fa-shopping-cart"></i> Vender
                            </button>
                        </td>
                    </tr>`
        })
        tabla.innerHTML= str;
        
    }, (error) => {
        console.log(error);
    });

};



function clean_data_cliente(){
    document.getElementById('txtNit').value = '';
    document.getElementById('txtNombre').value = '';
    document.getElementById('txtDireccion').value = 'CIUDAD';
    document.getElementById('txtTelefono').value = '';
    document.getElementById('txtEmail').value = 'SN';
};

function get_municipio(idContainer){
    let container = document.getElementById(idContainer);
    container.innerHTML = GlobalLoader;

    let str = ""; 
    axios.get('/clientes/municipios?empnit=' + GlobalEmpnit)
    .then((response) => {
        const data = response.data;        
        data.recordset.map((rows)=>{
            str += `<option value='${rows.CODMUNICIPIO}'>${rows.DESMUNICIPIO}</option>`
        })
        container.innerHTML= str;
        
    }, (error) => {
        console.log(error);
        container.innerHTML = '';
    });
};

function get_departamentos(idContainer){
    let container = document.getElementById(idContainer);
    container.innerHTML = GlobalLoader;

    let str = ""; 
    axios.get('/clientes/departamentos?empnit=' + GlobalEmpnit)
    .then((response) => {
        const data = response.data;        
        data.recordset.map((rows)=>{
            str += `<option value='${rows.CODDEPTO}'>${rows.DESDEPTO}</option>`
        })
        container.innerHTML= str;
        
    }, (error) => {
        console.log(error);
        container.innerHTML = '';
    });
};




