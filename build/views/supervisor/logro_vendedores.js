function getView(){
    let view = {
        body:()=>{
            return `
                <div class="col-12 p-0 bg-white">
                    <div class="tab-content" id="myTabHomeContent">
                        <div class="tab-pane fade show active" id="uno" role="tabpanel" aria-labelledby="receta-tab">
                            ${view.rpt_vendedores_dia()}
                        </div>
                        <div class="tab-pane fade" id="dos" role="tabpanel" aria-labelledby="home-tab">
                           
                            
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
        rpt_vendedores_dia:()=>{
            return `
            <div class="card card-rounded shadow">
                <div class="card-body p-2">
                    <h5 class="text-center negrita text-naranja">Pedidos por Vendedor</h5>
                    <div class="row">
                        <div class="col-6">
                            <div class="form-group">
                                <label>Seleccione la Fecha</label>
                                <input type="date" class="form-control" id="txtFecha">
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group">
                                <label>Total Importe:</label>
                                <h1 class="negrita text-naranja" id="lbTotalImporte">---</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br>

            <div class="card card-rounded shadow">
                <div class="card-body p-2">
                    
                    <div class="table-responsive col-12">
                        <table class="table table-responsive table-hover col-12">
                            <thead class="bg-naranja text-white">
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
                            <tbody id="tblVendedores">
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            `
        },
        rpt_listado_documentos:()=>{
            
        },
        rpt_listado_productos:()=>{

        }
    }

    root.innerHTML = view.body();

};

function addListeners(){

    document.getElementById('txtFecha').value = funciones.getFecha();

    document.getElementById('txtFecha').addEventListener('change',()=>{
        rtp_vendedores_dia();
    });


    rtp_vendedores_dia();


};

function initView(){

    getView();
    addListeners();

};


function data_rpt_vendedores_dia(fecha){
    return new Promise((resolve,reject)=>{
        axios.post('/reportes/vendedores_dia', {
            sucursal: GlobalCodSucursal,
            fecha:fecha
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

    let fecha = funciones.devuelveFecha('txtFecha');
    let str = ''; let total = 0;

    data_rpt_vendedores_dia(fecha)
    .then((data)=>{
        data.map((r)=>{
            total += Number(r.IMPORTE);
            str += `
            <tr>
                <td>${r.NOMVEN}</td>
                <td>${r.PEDIDOS}</td>
                <td>${funciones.setMoneda(r.COSTO,'Q')}</td>
                <td>${funciones.setMoneda(r.IMPORTE,'Q')}</td>
                <td>${funciones.setMoneda((Number(r.IMPORTE)-Number(r.COSTO)),'Q')}</td>
                <td class="negrita">${funciones.setMoneda(((Number(r.IMPORTE)-Number(r.COSTO))/Number(r.IMPORTE))*100,'')} %
                <td>
                    <button class="btn btn-circle btn-lg btn-info hand shadow">
                        <i class="fal fa-list"></i>
                    </button>
                </td>
                <td>
                    <button class="btn btn-circle btn-lg btn-secondary hand shadow">
                        <i class="fal fa-box"></i>
                    </button>
                </td>
            </tr>
            `
        })
        container.innerHTML = str;
        lbTotal.innerText = funciones.setMoneda(total,'Q');
    })
    .catch(()=>{
        container.innerHTML = 'No hay datos....';
        lbTotal.innerText = '---';
    })

};