let classNavegar = {
    login : async(historial)=>{
        divUsuario.innerText = 'DESCONECTADO';
        lbTipo.innerText = "Inicie sesión";
        rootMenu.innerHTML = '';
        GlobalCoddoc = '';
        GlobalCodUsuario=99999;
        GlobalUsuario = '';
        GlobalPassUsuario = '';
        GlobalTipoUsuario ='';
            funciones.loadScript('../views/login/index.js','root')
            .then(()=>{
                GlobalSelectedForm='LOGIN';
                InicializarVista();
                rootMenuFooter.innerHTML = '<b class="text-white">Mercados Efectivos</b>';
                if(historial=='SI'){

                }else{
                    window.history.pushState({"page":0}, "login", GlobalUrl + '/login')
                }
                
            })
        
            
    },
    inicio : async(tipousuario)=>{
        divUsuario.innerText = GlobalUsuario;
        lbTipo.innerText = GlobalTipoUsuario;

        switch (tipousuario) {
            case 'VENDEDOR':
                classNavegar.inicioVendedor();
                break;
            default:
                funciones.AvisoError('Esta aplicación es solo para VENTAS');
                break;
        };
    },
    inicioProgramador: ()=>{
        funciones.loadScript('../views/programador.js','root')
        .then(async()=>{
            GlobalSelectedForm='DEVELOPER';
            InicializarVista();
        })
    },
    inicioVendedor : async ()=>{
        
        rootMenuLateral.innerHTML = `
                <div class="row">
                    <div class="col-6">
                        <div class="card card-rounded hand shadow border-naranja" id="btnLogro">
                            <div class="card-body p-4 negrita text-naranja" style="font-size:180%">
                                <i class="fal fa-chart-pie"></i> Lista Pedidos
                            </div>
                        </div>
                        
                    </div>
                    <div class="col-6">
                        <div class="card card-rounded hand shadow border-naranja" id="btnVenta">
                            <div class="card-body p-4 negrita text-naranja" style="font-size:180%">
                                <i class="fal fa-edit"></i> Crear Pedido
                            </div>
                        </div>
                    </div>
                </div>
                <br>
                <div class="row">
                    <div class="col-6">
                        <div class="card card-rounded hand shadow border-naranja">
                            <div class="card-body p-4 negrita text-naranja" style="font-size:180%">
                                <i class="fal fa-list"></i> Lista Precios
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="card card-rounded hand shadow border-naranja">
                            <div class="card-body p-4 negrita text-naranja" style="font-size:180%">
                                <i class="fal fa-dollar-sign"></i> Crear Cotización
                            </div>
                        </div>
                    </div>
                </div>
        `;

        document.getElementById('btnLogro').addEventListener('click',()=>{
            hideMenuLateral();
            classNavegar.logrovendedor();
        });

        document.getElementById('btnVenta').addEventListener('click',()=>{
            hideMenuLateral();
            classNavegar.ventas('CF','CONSUMIDOR FINAL', 'CIUDAD');
        });

        btnMenu.style = "visibility:visible";

        classNavegar.ventas('CF','CONSUMIDOR FINAL', 'CIUDAD');

        let btnMConfig = document.getElementById('btnMConfig');
        btnMConfig.addEventListener('click',()=>{
                if(GlobalSelectedForm=='LOGIN'){
                    funciones.AvisoError('Debe iniciar sesión para ver esta sección');
                    return;
                };
                classNavegar.ConfigVendedor();
        });          
             
    },
    inicioVendedorListado :async ()=>{
        funciones.loadScript('../views/vendedor/vendedor.js','root')
        .then(async()=>{
            GlobalSelectedForm='INICIO';
            InicializarVista();
            window.history.pushState({"page":1}, "clientes", '/clientes');
        })
    },
    ventas: async(nit,nombre,direccion,st)=>{
        
            funciones.loadScript('./views/vendedor/facturacion.js','root')
            .then(()=>{
                GlobalSelectedForm ='VENTAS';
                iniciarVistaVentas(nit,nombre,direccion,st);
                window.history.pushState({"page":2}, "facturacion", GlobalUrl + '/facturacion')
            })
          
    },
    vendedorCenso: async()=>{
        
        funciones.loadScript('./views/vendedor/censo.js','root')
        .then(()=>{
            GlobalSelectedForm ='VENDEDORCENSO';
            iniciarVistaVendedorCenso();
        })
      
    },
    ventasMapaClientes: async(historial)=>{
        funciones.loadScript('./views/vendedor/mapaclientes.js','root')
        .then(()=>{
            GlobalSelectedForm ='VENDEDORMAPACLIENTES';
            iniciarVistaVendedorMapaClientes();
            if(historial=='SI'){

            }else{
            window.history.pushState({"page":3}, "mapaclientes", GlobalUrl + '/mapaclientes')
            }
        })
    },
    vendedorReparto: async()=>{
        
        funciones.loadScript('./views/vendedor/reparto.js','root')
        .then(()=>{
            GlobalSelectedForm ='VENDEDORREPARTO';
            iniciarVistaVendedorReparto();
        })
      
    },
    pedidos: async (historial)=>{
        funciones.loadScript('../views/pedidos/vendedor.js','root')
        .then(()=>{
            GlobalSelectedForm='PEDIDOS';
            inicializarVistaPedidos();
            if(historial=='SI'){

            }else{
            window.history.pushState({"page":4}, "logro", GlobalUrl + '/logro')
            }
        })             
    },
    logrovendedor: (historial)=>{
        funciones.loadScript('../views/vendedor/objetivo.js','root')
            .then(()=>{
                GlobalSelectedForm='LOGROVENDEDOR';
                inicializarVistaLogro();
                if(historial=='SI'){

                }else{
                window.history.pushState({"page":5}, "logromes", GlobalUrl + '/logromes')
                }
        })
    },
    despacho: async()=>{
        funciones.loadView('../views/despacho/index.html','root')
        .then(()=>{
            funciones.loadScript('./views/despacho/controller.js','root')
            .then(()=>{
                GlobalSelectedForm ='DESPACHO';
                controllerdespacho.iniciarVistaDespacho();

            })
        })
    },
    ConfigVendedor: ()=>{
        funciones.loadScript('../views/config.js','root')
        .then(()=>{
            GlobalSelectedForm='CONFIG';
            initView();
        })
    },
    inicio_supervisor : async ()=>{
        let strFooter =    `<button class="btn btn-sm "  id="btnMenu2SuperMapa">
                                <i class="fal fa-map"></i>
                                Mapa vendedores
                            </button> 
                            <button class="btn btn-sm "  id="btnMenu2SuperVentas">
                                <i class="fal fa-shopping-cart"></i>
                                Reportes de Ventas
                            </button>
                          
                         
                    
                            `

                    rootMenuFooter.innerHTML = strFooter;
                                                 
                            
              
                 
                    let btnMenu2SuperMapa = document.getElementById('btnMenu2SuperMapa');
                    btnMenu2SuperMapa.addEventListener('click',()=>{

                            classNavegar.supervisor_mapa();

                    });

                    let btnMenu2SuperVentas = document.getElementById('btnMenu2SuperVentas');
                    btnMenu2SuperVentas.addEventListener('click',()=>{

                            classNavegar.supervisor_ventas();

                    });

                
                 
                    //actualiza la ubicación del empleado
                    await classEmpleados.updateMyLocation();

                    //actualiza las credenciales
                    updateDateDownload();

                    classNavegar.supervisor_ventas();

                  
             
    },
    supervisor_ventas:()=>{
        funciones.loadScript('./views/supervisor/ventas.js','root')
        .then(()=>{
            GlobalSelectedForm ='SUPERVISOR';
            initView();
            //window.history.pushState({"page":2}, "facturacion", GlobalUrl + '/facturacion')
        })
    },
    supervisor_mapa:()=>{
        funciones.loadScript('./views/supervisor/mapa.js','root')
        .then(()=>{
            GlobalSelectedForm ='SUPERVISORMAPA';
            initView();
            //window.history.pushState({"page":2}, "facturacion", GlobalUrl + '/facturacion')
        })
    },
    inicio_digitador:()=>{
        funciones.loadScript('./views/digitador/inicio.js','root')
        .then(()=>{
            GlobalSelectedForm ='DIGITADOR';
            iniciarVistaDigitador();
        })
    }
}