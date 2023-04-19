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
                rootMenuFooter.innerHTML = '<b class="text-white"></b>';
                if(historial=='SI'){

                }else{
                    window.history.pushState({"page":0}, "login", GlobalUrl + '/login')
                }
                btnMenu.style = "visibility:hidden";
                
            })
        
            
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
                        <div class="col-12 card card-rounded hand shadow border-naranja" id="btnLogro">
                            <div class="card-body p-4 negrita text-naranja" style="font-size:180%">
                                <i class="fal fa-chart-pie"></i> Lista Pedidos
                            </div>
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <div class="col-12 card card-rounded hand shadow border-naranja" id="btnVenta">
                            <div class="card-body p-4 negrita text-naranja" style="font-size:180%">
                                <i class="fal fa-edit"></i> Nuevo Pedido
                            </div>
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <div class="col-12 card card-rounded hand shadow border-naranja" id="btnCliente">
                            <div class="card-body p-4 negrita text-naranja" style="font-size:180%">
                                <i class="fal fa-user"></i> Clientes
                            </div>
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <div class="col-12 card card-rounded hand shadow border-naranja" id="btnCotizaciones">
                            <div class="card-body p-4 negrita text-naranja" style="font-size:180%">
                                <i class="fal fa-dollar-sign"></i> Crear Cotización
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
            classNavegar.ventas('','CF','CONSUMIDOR FINAL', 'CIUDAD');
        });

        document.getElementById('btnCliente').addEventListener('click',()=>{
            hideMenuLateral();
            classNavegar.cliente()
        });

        document.getElementById('btnCotizaciones').addEventListener('click',()=>{
            hideMenuLateral();
            classNavegar.vendedor_cotizaciones('','CF','CONSUMIDOR FINAL', 'CIUDAD');
        });


        btnMenu.style = "visibility:visible";

        classNavegar.logrovendedor();
        //classNavegar.ventas('','CF','CONSUMIDOR FINAL', 'CIUDAD');
         
             
    },
    inicio_caja:async()=>{
        rootMenuLateral.innerHTML = `
            `;

        btnMenu.style = "visibility:hidden";

        classNavegar.caja_pedidos();
        
    },
    inicio_supervisor:async()=>{
        rootMenuLateral.innerHTML = `
                    <div class="row">
                        <div class="col-12 card card-rounded hand shadow border-naranja" id="btnDashboard">
                            <div class="card-body p-4 negrita text-naranja" style="font-size:180%">
                                <i class="fal fa-chart-pie"></i> Dashboard
                            </div>
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <div class="col-12 card card-rounded hand shadow border-naranja" id="btnLogro">
                            <div class="card-body p-4 negrita text-naranja" style="font-size:180%">
                                <i class="fal fa-user"></i> Logro Vendedores
                            </div>
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <div class="col-12 card card-rounded hand shadow border-naranja" id="btnUsuarios">
                            <div class="card-body p-4 negrita text-naranja" style="font-size:180%">
                                <i class="fal fa-user"></i> Usuarios App
                            </div>
                        </div>
                    </div>
            `;

        document.getElementById('btnDashboard').addEventListener('click',()=>{
            hideMenuLateral();
            classNavegar.supervisor_dashboard();
        });

        document.getElementById('btnLogro').addEventListener('click',()=>{
            hideMenuLateral();
            classNavegar.supervisor_logro();
        });

        document.getElementById('btnUsuarios').addEventListener('click',()=>{
            hideMenuLateral();
            classNavegar.config();
        });

        btnMenu.style = "visibility:visible";

        classNavegar.supervisor_logro();
        
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
    ventas: async(codigo,nit,nombre,direccion,st)=>{
        
            funciones.loadScript('./views/vendedor/facturacion.js','root')
            .then(()=>{
                GlobalSelectedForm ='VENTAS';
                iniciarVistaVentas(codigo,nit,nombre,direccion,st);
                window.history.pushState({"page":2}, "facturacion", GlobalUrl + '/facturacion')
            })
          
    },
    vendedor_cotizaciones: async(codigo,nit,nombre,direccion,st)=>{
        
        funciones.loadScript('./views/vendedor/cotizaciones.js','root')
        .then(()=>{
            GlobalSelectedForm ='COTIZACIONES';
            iniciarVistaVentas(codigo,nit,nombre,direccion,st);
            window.history.pushState({"page":2}, "cotizaciones", GlobalUrl + '/cotizaciones')
        })
      
    },
    cliente: async()=>{
        funciones.loadScript('./views/vendedor/cliente.js','root')
        .then(()=>{
            GlobalSelectedForm ='CLIENTE';
            initView();
        })
      
    },
    caja_pedidos: async()=>{
        funciones.loadScript('./views/caja/pedidos.js','root')
        .then(()=>{
            GlobalSelectedForm ='PEDIDOS_CAJA';
            initView();
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
    supervisor_logro:()=>{
        funciones.loadScript('./views/supervisor/logro_vendedores.js','root')
        .then(()=>{
            GlobalSelectedForm ='SUPERVISOR';
            initView();
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
    supervisor_dashboard:()=>{   
            funciones.loadScript('./views/supervisor/dashboard.js','root')
            .then(()=>{
                initView();
            })        
    },
    config:()=>{
        funciones.loadScript('./views/config.js','root')
        .then(()=>{
            GlobalSelectedForm ='CONFIG';
            initView();
            //window.history.pushState({"page":2}, "facturacion", GlobalUrl + '/facturacion')
        })
    }
}