function getView(){
    let view = {
        body:()=>{
            return `
                <div class="col-12 p-0 bg-white">
                    <div class="tab-content" id="myTabHomeContent">
                        <div class="tab-pane fade show active" id="empresas" role="tabpanel" aria-labelledby="receta-tab">

                       
                        </div>
                        <div class="tab-pane fade" id="usuario" role="tabpanel" aria-labelledby="home-tab">
                          
                        </div>    
                    </div>

                    <ul class="nav nav-tabs hidden" id="myTabHome" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active negrita text-success" id="tab-dia" data-toggle="tab" href="#empresas" role="tab" aria-controls="profile" aria-selected="false">
                                <i class="fal fa-list"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-mes" data-toggle="tab" href="#usuario" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i></a>
                        </li>         
                    </ul>

                </div>
               
            `
        },
        login : ()=>{
            return `
        <div class="row">
     
            <div class="col-md-4 col-sm-12 col-lg-4 col-lx-4">
                
            </div>

            <div class="col-md-4 col-sm-12 col-lg-4 col-lx-4">
   
                <div class="card shadow p-2 border-top-rounded border-bottom-rounded">

                    <div class="card-header text-center bg-white">
                        <div class="row">
                            <div class="col-4">

                            </div>
                            <div class="col-4">
                                <img src="./favicon.png" width="100" height="100">                            
                            </div>
                            <div class="col-4" align="right">
                              
                            </div>    
                        </div>
                        
                    </div>
                    <div class="card-body">
                        <form class="" id="frmLogin" autocomplete="off">
                            <div class="form-group">
                                <select class="negrita form-control border-naranja border-top-0 border-right-0 border-left-0" id="cmbSucursal">
                                    <option value="101792069">CONSTRUMATERIALES EL CAMPESINO</option>
                                </select>
                                
                            </div>
                            <div class="form-group">
                                
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">
                                            <i class="fal fa-user"></i>
                                        </span>
                                    </div>
                                    <input class="form-control border-naranja border-top-0 border-right-0 border-left-0" type="text" id="txtUser" placeholder="Escriba su usuario" required="true">
                                </div>
                                
                            </div>
                            <div class="form-group">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">
                                            <i class="fal fa-lock"></i>
                                        </span>
                                    </div>
                                    <input class="form-control border-naranja border-top-0 border-right-0 border-left-0" type="password" id="txtPass" placeholder="Escriba su contraseña" required="true">
                                </div>
                                        
                            </div>
                            <br>
                            <div class="form-group" align="center">
                                <button class="btn btn-naranja hand btn-xl btn-circle shadow waves-effect"  type="submit" id="btnIniciar">
                                    <i class="fal fa-unlock"></i>
                                </button>
                            </div>
                            <div class="form-group" align="right">
                                
                                <small class="text-secondary">Update: 11.04.2023</small>
                                <br>
                                <small>
                                    <a href="https://apigen.whatsapp.com/send?phone=50257255092&text=Ayudame%20con%20la%20app%20de%20don%20Eraul_logistica...%20">
                                        por Alexis Burgos
                                    </a>
                                </small>
                            </div>
                        </form>
                    </div>

                
    

                </div>
            </div>

            <div class="col-md-4 col-sm-12 col-lg-4 col-lx-4"></div>

            
     
            `
        }
    };

    root.innerHTML = view.login();
};



function addListeners(){
    
    console.log('iniciando login... ');
    
    let frmLogin = document.getElementById('frmLogin');
    let btnIniciar = document.getElementById('btnIniciar');
    frmLogin.addEventListener('submit',(e)=>{
        e.preventDefault();

        almacenarCredenciales();

        btnIniciar.innerHTML = '<i class="fal fa-unlock fa-spin"></i>';
        btnIniciar.disabled = true;
        apigen.empleadosLogin(frmLogin.cmbSucursal.value,frmLogin.txtUser.value,frmLogin.txtPass.value)
        .then(()=>{
            GlobalEmpnit = frmLogin.cmbSucursal.value;
            //document.body.requestFullscreen();
            //por lo visto se deshabilitan las scroll bars en fullscreen
            //selectDateDownload();
        })
        .catch(()=>{
            btnIniciar.disabled = false;
            btnIniciar.innerHTML = '<i class="fal fa-unlock"></i>'
        });
    });


    //carga las sucursales directamente desde código
    document.getElementById('cmbSucursal').innerHTML = funciones.getComboSucursales();

    selectDateDownload() //carga la info inicial
    .then(()=>{
        try {
            //document.getElementById('cmbSucursal').value = GlobalCodSucursal;
            //console.log(GlobalCodSucursal);
        } catch (error) {
            //console.log('error al cargar sucursal')
            //console.log(error)
        }
    })
   
  
};


function InicializarVista(){
   getView();
   addListeners();

   //getCredenciales();
 

};


async function almacenarCredenciales(){
    const cred = new PasswordCredential({
        id: document.getElementById('txtUser').value,
        name: document.getElementById('cmbSucursal').value,
        password: document.getElementById('txtPass').value
    })

    await navigator.credentials.store(cred)

};

function getCredenciales(){
   if ('credentials' in navigator) {
  navigator.credentials.get({password: true})
  .then(function(creds) {

      console.log(creds);
    //Do something with the credentials.
    document.getElementById('txtUser').value = creds.id;
    document.getElementById('cmbSucursal').value = creds.name;
    document.getElementById('txtPass').value = creds.password;

  });
    } else {
    //Handle sign-in the way you did before.
    };
}