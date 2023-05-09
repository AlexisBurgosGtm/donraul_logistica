function getView(){
    let view = {
        body:()=>{
            return `
            <div class="col-12 p-0 bg-white">
                <div class="tab-content" id="myTabHomeContent">
                    <div class="tab-pane fade show active" id="uno" role="tabpanel" aria-labelledby="receta-tab">
                        ${view.lista_pedidos_pendientes()}
                    </div>
                    <div class="tab-pane fade" id="dos" role="tabpanel" aria-labelledby="home-tab">
                       ${view.detalle_pedido()}
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
        lista_pedidos_pendientes:()=>{
            return `
            <div class="row">
                <div class="card col-12 card-rounded shadow hand border-naranja">
                    <div class="card-body p-4 text-center">
                        <h1 class="text-naranja">PEDIDOS PENDIENTES DE DESPACHO</h1>
                    </div>
                </div>
            </div>

            <br>

            <div class="row">
                <div class="card col-12 card-rounded shadow hand border-naranja">
                    <div class="card-body p-4">
                            <div class="form-group">
                                <label>Tipo material</label>
                                <select class="form-control negrita" id="cmbClaUno">
                                    <option value='MC'>MATERIAL DE CONSTRUCCIÓN</option>
                                    <option value='FERRE'>FERRETERÍA</option>
                                </select>
                            </div>
                            <br>
                            <table class="table table-responsive table-bordered" id="tblDespacho">
                                <thead class="bg-naranja text-white">
                                    <tr>
                                        <td>PEDIDO</td>
                                        <td>CLIENTE</td>
                                        <td>TOTAL PEDIDO</td>
                                        <td>TOTAL BODEGA</td>
                                    </tr>
                                </thead>
                                <tbody id="tblDataDespacho"></tbody>
                            </table>
                    </div>
                </div>
            </div>
            `
        },
        detalle_pedido:()=>{
            return `
            <div class="row">
                <div class="card col-12 card-rounded shadow hand border-naranja">
                    <div class="card-body p-4 text-center">
                        <h1 class="text-naranja" id="lbCliente">CONSUMIDOR FINAL</h1>
                    </div>
                </div>
            </div>
            <br>
            <div class="row">
                <div class="card col-12 card-rounded shadow hand border-naranja">
                    <div class="card-body p-4 text-center">
                        <h1 class="text-naranja">PEDIDOS PENDIENTES DE DESPACHO</h1>
                    </div>
                </div>
            </div>
            `
        }
    }

    root.innerHTML = view.body();
};

function addListeners(){

    let cmbClaUno = document.getElementById('cmbClaUno');
    get_tbl_despacho(cmbClaUno.value);

    cmbClaUno.addEventListener('change',()=>{
        get_tbl_despacho(cmbClaUno.value);
    })

};

function initView(){
    
    getView();
    addListeners();

};


function get_tbl_despacho(codclauno){

    let container = document.getElementById('tblDataDespacho');
    container.innerHTML = GlobalLoader;

    let str = '';

    axios.post('/pos/despacho_pedidos', {
        sucursal: GlobalCodSucursal,
        codcla:codclauno
    })
    .then((response) => {        
        if(response=='error'){
            funciones.AvisoError('Error en la solicitud');
            container.innerHTML = 'No day datos....';
        }else{
            const data = response.data.recordset;
            data.map((r)=>{
                str += `
                <tr>
                    <td>
                        ${r.CODDOC}-${r.DOC_NUMERO}
                        <br>
                        <small class="negrita text-naranja">${funciones.convertDateNormal(r.FECHA)}</small>
                    </td>
                    <td>
                        ${r.NOMCLIE}
                        <br>
                        <small>${r.DIRCLIE}</small>
                    </td>
                    <td>
                        ${funciones.setMoneda(r.DOC_TOTALVENTA, 'Q')}
                    </td>
                    <td>
                        ${funciones.setMoneda(r.TOTALPRODUCTO,'Q')}
                        <br>
                        <small>Productos: ${r.CONTEO}</small>
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