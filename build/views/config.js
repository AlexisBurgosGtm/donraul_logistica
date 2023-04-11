function getView(){
    let view = {
        body:()=>{
            return `
                <div class="col-12 p-0 bg-white">
                    <div class="tab-content" id="myTabHomeContent">
                        <div class="tab-pane fade show active" id="uno" role="tabpanel" aria-labelledby="receta-tab">
                            ${view.vista_usuarios()}
                        </div>
                        <div class="tab-pane fade" id="dos" role="tabpanel" aria-labelledby="home-tab">
                           ${view.vista_nuevo_usuario()}
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
        vista_usuarios:()=>{
            return `
            <div class="card card-rounded shadow">
                <div class="card-body p-4">
                    <h5 class="negrita text-center text-naranja">Gestión de Usuarios de App</h5>
                </div>
            </div>
            
            <br>

            <div class="card card-rounded shadow">
                <div class="card-body p-2">
                    <div class="table-responsive col-12">
                        <table class="table table-responsive table-hover col-12">
                            <thead class="bg-naranja text-white">
                                <tr>
                                    <td>TIPO</td>
                                    <td>NOMBRE</td>
                                    <td>CLAVE</td>
                                    <td>VENDEDOR</td>
                                    <td>OBJETIVO</td>
                                    <td>PEDIDO</td>
                                    <td>COTIZACIÓN</td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody id="tblUsuarios">
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="">
                <button class="btn btn-success btn-xl btn-circle btn-bottom-r hand shadow" id="btnNuevoUsuario">
                    <i class="fal fa-plus"></i>
                </button>
            </div>
            `
        },
        vista_nuevo_usuario:()=>{
            return `

            <div class="card card-rounded shadow">
                <div class="card-body p-4">
                    <h5 class="negrita text-naranja">Nuevo Usuario de App</h5>
                    
                    
                    <div class="form-group">
                        <label class="negrita">NOMBRE USUARIO</label>
                        <input type="text" class="form-control" id="txtNombreU">
                    </div>
                    <div class="form-group">
                        <label class="negrita">CLAVE DE ACCESO</label>
                        <input type="text" class="form-control" id="txtClaveU">
                    </div>

                    <div class="row">
                        <div class="col-6">
                            <div class="form-group">
                                <label class="negrita">TIPO USUARIO:</label>
                                <select class="form-control" id="cmbTipoU">
                                    <option value="VEN">VENDEDOR (VEN)</option>
                                    <option value="SUP">SUPERVISOR (SUP)</option>
                                    <option value="CAJA">CAJERO (CAJA)</option>
                                    <option value="POS">PUNTO DE VENTA (POS)</option>
                                </select>
                            </div>    
                        </div>
                        <div class="col-6">
                            <div class="form-group">
                                <label class="negrita">VENDEDOR</label>
                                <select class="form-control" id="cmbVendedorU">
                                </select>
                            </div>
                        </div>
                    </div>
                    
                    <br>
                    
                    <div class="row">
                        <div class="col-6">
                            <div class="form-group">
                                <label class="negrita">SERIE PEDIDOS</label>
                                <select class="form-control" id="cmbCoddocPedU">
                                </select>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group">
                                <label class="negrita">SERIE COTIZACIONES</label>
                                <select class="form-control" id="cmbCoddocCotU">
                                </select>
                            </div>
                        </div>
                    </div>
                    
                    <br>
                    
                    <div class="form-group">
                        <label class="negrita">OBJETIVO VENTA</label>
                        <input type="number" class="negrita text-danger col-6 form-control" id="txtObjetivoU" value="0">
                    </div>

                    <div class="row">
                        <div class="col-6">
                        </div>
                        <div class="col-6 text-right">
                            <button class="btn btn-circle btn-info shadow hand btn-xl" id="btnGuardarU">
                                <i class="fal fa-save"></i>
                            </button>
                        </div>
                    </div>
                    

                </div>
            </div>
            
            <div id="fixed-btn3">
                    <button class="btn btn-secondary btn-xl btn-circle hand shadow" id="btnAtrasNuevoUsuario">
                        <i class="fal fa-arrow-left"></i>
                    </button>
            </div>
            `
        }
    }

    root.innerHTML = view.body();

};

function addListeners(){
    
    let btnNuevoUsuario = document.getElementById('btnNuevoUsuario');
    btnNuevoUsuario.addEventListener('click',()=>{
        document.getElementById('tab-dos').click();
    });

    document.getElementById('btnAtrasNuevoUsuario').addEventListener('click',()=>{
        document.getElementById('tab-uno').click();
    });

    let btnGuardarU = document.getElementById('btnGuardarU');
    btnGuardarU.addEventListener('click',()=>{
        let txtNombreU = document.getElementById('txtNombreU').value || '';
        let txtClaveU = document.getElementById('txtClaveU').value || '';
        let cmbTipoU = document.getElementById('cmbTipoU').value;
        let cmbVendedorU = document.getElementById('cmbVendedorU').value;
        let cmbCoddocPedU = document.getElementById('cmbCoddocPedU').value;
        let cmbCoddocCotU = document.getElementById('cmbCoddocCotU').value;
        let txtObjetivoU = document.getElementById('txtObjetivoU').value || '0';

        if(txtNombreU==''){funciones.AvisoError('Escriba un nombre de usuario'); return;}
        if(txtClaveU==''){funciones.AvisoError('Escriba una clave de usuario'); return;}
        
        funciones.Confirmacion('¿Está seguro que desea Crear este Nuevo Usuario?')
        .then((value)=>{
            if(value==true){

                btnGuardarU.innerHTML = '<i class="fal fa-save fa-spin"></i>';
                btnGuardarU.disabled = true;
                
                insert_usuario(cmbTipoU, txtNombreU, txtClaveU, cmbVendedorU, txtObjetivoU, cmbCoddocPedU, cmbCoddocCotU)
                .then(()=>{
                    funciones.Aviso('Usuario creado exitosamente!!');
                    document.getElementById('txtNombreU').value = '';
                    document.getElementById('txtClaveU').value = '';

                    btnGuardarU.innerHTML = '<i class="fal fa-save"></i>';
                    btnGuardarU.disabled = false;

                    document.getElementById('tab-uno').click();

                    rpt_usuarios();

                })
                .catch(()=>{
                    funciones.AvisoError('No se pudo Crear el Usuario');
                    btnGuardarU.innerHTML = '<i class="fal fa-save"></i>';
                    btnGuardarU.disabled = false;
                })


            }
        })


    });

    get_comboboxes();

    rpt_usuarios();

    funciones.slideAnimationTabs();
};

function initView(){

    getView();
    addListeners();

};

function get_comboboxes(){

    apigen.data_tipodocumentos(GlobalCodSucursal)
    .then((data)=>{
        let strPed = '';
        let strCot = '';
        data.recordset.map((r)=>{
            if(r.TIPODOC=='PED'){
                strPed += `<option value="${r.CODDOC}">${r.CODDOC}</option>`;
            }
            if(r.TIPODOC=='COT'){
                strCot += `<option value="${r.CODDOC}">${r.CODDOC}</option>`;
            }
        })
        document.getElementById('cmbCoddocPedU').innerHTML = strPed;
        document.getElementById('cmbCoddocCotU').innerHTML = strCot;
    })

    apigen.data_vendedores(GlobalCodSucursal)
    .then((data)=>{
        
        let str = '';

        data.recordset.map((r)=>{
            str += `
            <option value="${r.CODVEN}">${r.NOMVEN}</option>
            `
        })
        document.getElementById('cmbVendedorU').innerHTML = str;
    })


};

function delete_usuario(tipo,nombre,clave){

    return new Promise((resolve,reject)=>{
        axios.post('/reportes/usuarios_delete', {
            sucursal: GlobalCodSucursal,
            tipo:tipo,
            nombre:nombre,
            clave:clave
        })
        .then((response) => {
                const data = response.data;
                if(response.data.toString()=='error'){
                    reject();
                }else{
                    if(Number(data.rowsAffected[0])==0){
                        reject();             
                    }else{
                        resolve();
                    } 
                }
            }, (error) => {
                reject();
        });
    })

};

function eliminar_usuario(tipo,nombre,clave,idbtn){

    funciones.Confirmacion('¿Está seguro que desea ELIMINAR ESTE USUARIO?')
    .then((value)=>{
        if(value==true){

            let btn = document.getElementById(idbtn);
    
            btn.disabled = true;
            btn.innerHTML = '<i class="fal fa-trash fa-spin"></i>';
        
            delete_usuario(tipo,nombre,clave)
            .then(()=>{
               funciones.Aviso('Usuario eliminado exitosamente!!');
               rpt_usuarios();
            })
            .catch(()=>{
                btn.disabled = false;
                btn.innerHTML = '<i class="fal fa-trash"></i>';
            })

        }
    })

    
}

function insert_usuario(tipo,nombre,clave,codven,objetivo,coddoc_ped,coddoc_cot){

    return new Promise((resolve,reject)=>{
        axios.post('/reportes/usuarios_new', {
            sucursal: GlobalCodSucursal,
            tipo:tipo,
            nombre:nombre,
            clave:clave,
            codven:codven,
            objetivo:objetivo,
            ped:coddoc_ped,
            cot:coddoc_cot
        })
        .then((response) => {
                const data = response.data;
                if(response.data.toString()=='error'){
                    reject();
                }else{
                    if(Number(data.rowsAffected[0])==0){
                        reject();             
                    }else{
                        resolve();
                    } 
                }
            }, (error) => {
                reject();
        });
    })

};

function data_usuarios(){
    return new Promise((resolve,reject)=>{
        axios.post('/reportes/usuarios', {
            sucursal: GlobalCodSucursal
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

function rpt_usuarios(){
    
    let container = document.getElementById('tblUsuarios');
    container.innerHTML = GlobalLoader;
    let str = '';

    let i = 0;
    
    data_usuarios()
    .then((data)=>{
        data.map((r)=>{
            i += 1;
            let idbtn = `btnEliminar${i.toString()}`;
            str += `
            <tr>
                <td>${get_tipo_empleado(r.TIPO)}</td>
                <td>${r.USUARIO}</td>
                <td>${r.CLAVE}</td>
                <td>${r.NOMVEN}</td>
                <td>${r.OBJETIVO}</td>
                <td>${r.CODDOC}</td>
                <td>${r.CODDOC_COTIZ}</td>
                <td>
                    <button id="${idbtn}" class="btn btn-danger btn-circle hand shadow" onclick="eliminar_usuario('${r.TIPO}','${r.USUARIO}','${r.CLAVE}','${idbtn}')">
                        <i class="fal fa-trash"></i>
                    </button>
                </td>
            </tr>
            `
        })
        container.innerHTML = str;
    })
    .catch(()=>{
        container.innerHTML = 'No hay datos para mostrar...';
    })

};

function get_tipo_empleado(codtipo){
    
    let tipo = '';

    switch (codtipo.toString()) {
        case 'VEN':
            tipo =  'VENDEDOR (VEN)';
            break;
        case 'SUP':
            tipo = 'SUPERVISOR (SUP)';
            break;
        case 'CAJA':
            tipo = 'CAJERO (CAJA)';
            break;
        case 'POS':
            tipo = 'PUNTO DE VENTA (POS)';
            break;
    }

    return tipo;

};


