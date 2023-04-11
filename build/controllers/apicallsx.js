let apigen = {
    empleadosLogin : (sucursal,user,pass)=>{
        let f = new Date();
        return new Promise((resolve,reject)=>{
            axios.get(`/empleados/login?codsucursal=${sucursal}&user=${user}&pass=${pass}`)
            .then((response) => {
                const data = response.data.recordset;
                if(response.data.rowsAffected[0]==1){
                    data.map((rows)=>{
                        if(rows.USUARIO==user){
                            GlobalCodUsuario = rows.CODIGO;
                            GlobalUsuario = rows.USUARIO;
                            GlobalPassUsuario = pass;
                            GlobalTipoUsuario = rows.TIPO;
                            GlobalCoddoc= rows.CODDOC;
                            GlobalCotiz = rows.COTIZ;
                            GlobalCodSucursal = sucursal;
                            GlobalSistema = sucursal;
                            GlobalObjetivoVenta = Number(rows.OBJETIVO);
                            GlobalSelectedDiaUpdated = Number(f.getDate());
                            switch (GlobalTipoUsuario) {
                                case 'VEN':
                                    classNavegar.inicioVendedor();    
                                    break;
                                case 'SUP':
                                    classNavegar.inicio_supervisor();    
                                    break;
                                case 'CAJA':
                                    classNavegar.inicio_caja();
                                    break;
                                case 'POS':
                                    classNavegar.inicio_pos();
                                    break;
                           
                            }                               
                        }        
                    })
                    resolve();
                }else{
                    GlobalCodUsuario = 9999
                    GlobalUsuario = '';
                    GlobalTipoUsuario = '';
                    GlobalCoddoc= '';
                    GlobalObjetivoVenta =0;
                    GlobalSelectedDiaUpdated = 0;
                    funciones.AvisoError('Usuario o Contraseña incorrectos, intente seleccionando la sucursal a la que pertenece');
                    reject();
                }
            }, (error) => {
                funciones.AvisoError('Error en la solicitud');
                reject();
            });

        })
        

    },
    config_cambiar_clave: (sucursal,codven,nuevaclave)=>{
        return new Promise((resolve,reject)=>{
            axios.post('/usuarios/updatepass',{
               sucursal:sucursal,
               codven:codven,
               nuevaclave:nuevaclave
            })
            .then((response) => {
                let data = response.data;
                if(Number(data.rowsAffected[0])>0){
                    resolve(data);             
                }else{
                    reject();
                }             
            }, (error) => {
                reject();
            });
        })
    },
    data_tipodocumentos: (sucursal)=>{
        return new Promise((resolve,reject)=>{
            axios.post('/tipodocumentos/series',{
               sucursal:sucursal
            })
            .then((response) => {
                let data = response.data;
                if(Number(data.rowsAffected[0])>0){
                    resolve(data);             
                }else{
                    reject();
                }             
            }, (error) => {
                reject();
            });
        })
    },
    data_vendedores: (sucursal)=>{
        return new Promise((resolve,reject)=>{
            axios.post('/ventas/vendedores',{
               sucursal:sucursal
            })
            .then((response) => {
                console.log(response)
                let data = response.data;
                if(Number(data.rowsAffected[0])>0){
                    resolve(data);             
                }else{
                    reject();
                }             
            }, (error) => {
                reject();
            });
        })
    },
    clientesVendedor: async(sucursal,codven,dia,idContenedor,idContenedorVisitados)=>{
    
        let container = document.getElementById(idContenedor);
        container.innerHTML = GlobalLoader;

        let containerVisitados = document.getElementById(idContenedorVisitados);
        
        let strdata = ''; let strdataVisitados = '';

        selectCliente(dia)
        .then((response) => {
            const data = response;
            
            data.map((rows)=>{
                    let f = rows.LASTSALE.toString().replace('T00:00:00.000Z','');
                    let stClassClie = ''; let stNomStatus='';
                    if(f==funciones.getFecha()){
                        
                        switch (rows.STVISITA) {
                            case 'VENTA':
                                stClassClie='bg-success text-white card-rounded border-secondary';
                                stNomStatus= 'VENDIDO';
                                break;
                            case 'CERRADO':
                                stClassClie='bg-warning card-rounded border-secondary';
                                stNomStatus= 'CERRADO';        
                                break;
                            case 'NODINERO':
                                stClassClie='bg-secondary text-white card-rounded border-secondary';
                                stNomStatus= 'SIN DINERO';
                                break;
                        
                            default:
                                
                                break;
                        };

                        strdataVisitados = strdataVisitados + `
                    <tr class='${stClassClie}'>
                        <td>${rows.NEGOCIO} // ${rows.NOMCLIE}
                            <br>
                            <div class="row">
                                <div class="col-4">
                                    <small>Cod: ${rows.CODIGO} - St:${stNomStatus}</small>    
                                </div>
                                <div class="col-4">
                                    <small>Tel:${rows.TELEFONO}</small>
                                </div>
                                <div class="col-2">
                                    <button class="btn btn-danger btn-lg btn-circle hand shadow" onclick="getMenuCliente2('${rows.CODIGO}','${rows.NOMCLIE}','${rows.DIRCLIE}','${rows.TELEFONO}','${rows.LAT}','${rows.LONG}','${rows.NIT}');">
                                        <i class="fal fa-cog"></i>
                                    </button>
                                    
                                </div>
                                <div class="col-2">
                                    <button class="btn btn-warning btn-lg btn-circle hand shadow" onclick="getEditCliente('${rows.CODIGO}','${rows.NOMCLIE}','${rows.DIRCLIE}','${rows.TELEFONO}','${rows.LAT}','${rows.LONG}','${rows.NIT}','${rows.TIPONEGOCIO}','${rows.NEGOCIO}');">
                                        <i class="fal fa-edit"></i>
                                    </button>
                                </div>
                            </div>
                            
                            <small>${rows.DIRCLIE}, <b>${rows.DESMUNI}</b></small>
                            <br>
                            <small class="text-info">Ref:${rows.REFERENCIA}</small>

                            <div class="row">
                                <div class="col-4">
                                    <button class="btn btn-success btn-sm" onclick="funciones.gotoGoogleMaps('${rows.LAT}','${rows.LONG}');">
                                        <i class="fal fa-map-marker"></i>Ubicac
                                    </button>
                                </div>
                                <div class="col-4">
                                    <button class="btn btn-warning btn-sm" onclick="getHistorialCliente('${rows.CODIGO}','${rows.NIT}','${rows.NOMCLIE}');">
                                        <i class="fal fa-book"></i>Historial
                                    </button>
                                </div>
                                <div class="col-4">
                                    <button class="btn btn-info btn-sm" onclick="getMenuCliente('${rows.CODIGO}','${rows.NOMCLIE}','${rows.DIRCLIE}','${rows.TELEFONO}','${rows.LAT}','${rows.LONG}','${rows.NIT}');">
                                        <i class="fal fa-shopping-cart"></i>Vender
                                    </button>
                                </div>
                            </div>

                        </td>
                       
                    </tr>` 

                    }else{
                        strdata = strdata + `
                            <tr class='col-12 border-bottom border-info'>
                                <td>${rows.NEGOCIO} // ${rows.NOMCLIE}
                                    <br>
                                    <div class="row">
                                        <div class="col-4">
                                            <small>Cod: ${rows.CODIGO} - St:${stNomStatus}</small>    
                                        </div>
                                        <div class="col-4">
                                            <small>Tel:${rows.TELEFONO}</small>
                                        </div>
                                        <div class="col-2">
                                            <button class="btn btn-danger btn-lg btn-circle hand shadow" onclick="getMenuCliente2('${rows.CODIGO}','${rows.NOMCLIE}','${rows.DIRCLIE}','${rows.TELEFONO}','${rows.LAT}','${rows.LONG}','${rows.NIT}');">
                                                <i class="fal fa-cog"></i>
                                            </button>
                                            
                                        </div>
                                        <div class="col-2">
                                            <button class="btn btn-warning btn-lg btn-circle hand shadow" onclick="getEditCliente('${rows.CODIGO}','${rows.NOMCLIE}','${rows.DIRCLIE}','${rows.TELEFONO}','${rows.LAT}','${rows.LONG}','${rows.NIT}','${rows.TIPONEGOCIO}','${rows.NEGOCIO}');">
                                                <i class="fal fa-edit"></i>
                                            </button>
                                        </div>
                                    </div>
                                    
                                    <small>${rows.DIRCLIE}, <b>${rows.DESMUNI}</b></small>
                                    
                                    <br>
                                    <small class="text-info">Ref:${rows.REFERENCIA}</small>
                                    <div class="row">
                                        
                                        <div class="col-4">
                                            <button class="btn btn-outline-primary btn-sm shadow" onclick="funciones.gotoGoogleMaps('${rows.LAT}','${rows.LONG}');">
                                                <i class="fal fa-map-marker"></i>Ubicac
                                            </button>
                                        </div>  
                                        <div class="col-4">
                                            <button class="btn btn-outline-warning shadow btn-sm" onclick="getHistorialCliente('${rows.CODIGO}','${rows.NIT}','${rows.NOMCLIE}');">
                                                <i class="fal fa-book"></i>Historial
                                            </button>   
                                        </div>
                                    
                                        <div class="col-4">
                                            <button class="btn btn-info btn-sm" onclick="getMenuCliente('${rows.CODIGO}','${rows.NOMCLIE}','${rows.DIRCLIE}','${rows.TELEFONO}','${rows.LAT}','${rows.LONG}','${rows.NIT}');">
                                                <i class="fal fa-shopping-cart"></i>Vender
                                            </button>
                                        </div>
                                    </div>
                                </td>
                               `
                    }
                    
                    
            })
            container.innerHTML = strdata;
            containerVisitados.innerHTML = strdataVisitados;

        }, (error) => {
            funciones.AvisoError('Error en la solicitud');
            strdata = '';
            containerVisitados.innerHTML = 'No se pudo cargar la lista';
            container.innerHTML = 'No se pudo cargar la lista';
        });
        
        
    },
    clientesVendedorMapa: async(sucursal,codven,dia,idContenedor, lt, lg)=>{

        let container = document.getElementById(idContenedor);
        container.innerHTML = GlobalLoader;
        
        let tbl = `<div class="mapcontainer4" id="mapcontainer"></div>`;        
        
        container.innerHTML = tbl;
        
        let mapcargado = 0;
        var map;
        map = Lmap(lt, lg);

        selectCliente(dia)
        .then((response) => {
            const data = response;

            data.map((rows)=>{
                let f = rows.LASTSALE.toString().replace('T00:00:00.000Z','');
                if(f==funciones.getFecha()){}else{
                    L.marker([rows.LAT, rows.LONG])
                    .addTo(map)
                    .bindPopup(`${rows.NEGOCIO} - ${rows.NOMCLIE} <br><small>${rows.DIRCLIE}-Tel:${rows.TELEFONO}</small>`, {closeOnClick: true, autoClose: true})   
                    .on('click', function(e){
                        //console.log(e.sourceTarget._leaflet_id);
                        GlobalMarkerId = Number(e.sourceTarget._leaflet_id);
                        getMenuCliente(rows.CODIGO,rows.NOMCLIE,rows.DIRCLIE,rows.TELEFONO,rows.LAT,rows.LONG,rows.NIT);
                    })
                }
            })

            //RE-AJUSTA EL MAPA A LA PANTALLA
            setTimeout(function () {
                try {
                    map.invalidateSize();    
                } catch (error) {
                    
                }
            }, 500);

        }, (error) => {
            funciones.AvisoError('Error en la solicitud');
            container.innerHTML = '';
        });
           
    },
    clientesAjenosVendedor: async(sucursal,filtro,idContenedor)=>{
    
        let container = document.getElementById(idContenedor);
        container.innerHTML = GlobalLoader;
                
        let strdata = ''; 

        axios.post('/clientes/listaajenosvendedor', {
            app:GlobalSistema,
            sucursal: sucursal,
            filtro: filtro
        })
        .then((response) => {
            const data = response.data.recordset;
            
            data.map((rows)=>{                    
                        strdata = strdata + `
                    <tr class=''>
                        <td>${rows.NEGOCIO} // ${rows.NOMCLIE}
                            <br>
                            <div class="row">
                                <div class="col-6">
                                    <small>Cod: ${rows.CODIGO}</small>    
                                </div>
                                <div class="col-6">
                                    <small>Tel: ${rows.TELEFONO}</small>    
                                </div>
                            </div>
                            <small>${rows.DIRCLIE}, ${rows.DESMUNI}<b></b></small>
                            <br>
                            <small class="text-info">Ref:${rows.REFERENCIA}</small>
                            
                            <div class="row">
                                
                                <div class="col-4">
                                    <button class="btn btn-outline-primary btn-sm shadow" onclick="funciones.gotoGoogleMaps('${rows.LAT}','${rows.LONG}');">
                                        <i class="fal fa-map-marker"></i>Ubicac
                                    </button>
                                </div>
                                                                        
                                <div class="col-4">
                                    <button class="btn btn-outline-warning btn-sm shadow" onclick="getHistorialCliente('${rows.CODIGO}','${rows.NIT}','${rows.NOMCLIE}');">
                                        <i class="fal fa-book"></i>Historial
                                    </button>
                                </div>
                                
                                <div class="col-4">
                                    <button class="btn btn-info btn-sm shadow" onclick="getMenuCliente('${rows.CODIGO}','${rows.NOMCLIE}','${rows.DIRCLIE}','${rows.TELEFONO}','${rows.LAT}','${rows.LONG}','${rows.NIT}');">
                                        <i class="fal fa-shopping-cart"></i>Vender
                                    </button>
                                </div>
                                
                            </div>
                            
                        </td>
                    </tr>`    
                    
                    
                    
            })
            container.innerHTML = strdata;
            

        }, (error) => {
            funciones.AvisoError('Error en la solicitud');
            strdata = '';
            container.innerHTML = 'No se pudo cargar la lista';
        });
        
        
    },
    clientesSetReminder: async (codclie,nit,nombre, direccion,recordatorio,hora,minuto,fecha)=>{

        return new Promise((resolve,reject)=>{
            axios.post('/clientes/setreminder',{
                sucursal:GlobalCodSucursal,
                codclie:codclie,
                nit:nit,
                nombre:nombre,
                direccion:direccion,
                fecha:fecha,
                minuto:minuto,
                hora:hora,
                recordatorio:recordatorio,
                codven:GlobalCodUsuario
            })
            .then((response) => {
                let data = response.data;
                if(Number(data.rowsAffected[0])>0){
                    resolve();             
                }else{
                    reject();
                }     
            }, (error) => {
                reject();
            });

        })

    },
    vendedorHistorialCliente: async(codcliente,idContenedor)=>{
    
        let container = document.getElementById(idContenedor);
        container.innerHTML = GlobalLoader;
                
        let strdata = ''; 

        axios.post('/ventas/historialcliente', {
            sucursal:GlobalSistema,
            codcliente: codcliente
        })
        .then((response) => {
            const data = response.data.recordset;
            
            data.map((rows)=>{                    
                        strdata = strdata + `
                        <tr>
                        <td class="text-danger">${rows.FECHA.toString().replace('T00:00:00.000Z','')}</td>
                        <td>${rows.DESPROD}<br>
                            <small><b>${rows.CODMEDIDA} - ${rows.CANTIDAD}</b></small>
                        </td>
                        <td>${funciones.setMoneda(rows.TOTALPRECIO,'Q')}</td>
                        </tr>
                        `    
            })
            
            container.innerHTML = strdata;
            
        }, (error) => {
            funciones.AvisoError('Error en la solicitud');
            strdata = '';
            container.innerHTML = 'No se pudo cargar la lista';
        });
        
        
    },
    vendedorTotalDia: async(sucursal,codven,fecha,idLbTotal)=>{

        let lbTotal = document.getElementById(idLbTotal);
        lbTotal.innerText = '---';

        let strdata = '';
        
        axios.post('/ventas/totalventadia', {
            app:GlobalSistema,
            sucursal: sucursal,
            codven:codven,
            fecha:fecha   
        })
        .then((response) => {
            const data = response.data.recordset;
            data.map((rows)=>{
                    strdata = `Venta Día: ${funciones.setMoneda(rows.IMPORTE,'Q')} Pedidos: ${rows.PEDIDOS}`
            })
            
            lbTotal.innerText = strdata;
        }, (error) => {
            lbTotal.innerText = '--';
        });
           
    },
    deletePedidoVendedor: async(sucursal,codven,fecha,coddoc,correlativo)=>{
        return new Promise((resolve,reject)=>{
            axios.post('/ventas/deletepedidovendedor',{
               sucursal:sucursal,
               codven:codven,
               fecha:fecha,
               coddoc:coddoc,
               correlativo:correlativo
            })
            .then((response) => {
               resolve();             
            }, (error) => {
                reject();
            });
        })
    },
    vendedorDetallePedido: async(coddoc,correlativo,idContenedor,idLbTotal)=>{

        let container = document.getElementById(idContenedor);
        container.innerHTML = GlobalLoader;
        
        let lbTotal = document.getElementById(idLbTotal);
        lbTotal.innerText = '---';
        
        let strdata = '';

        GlobalSelectedCoddoc = coddoc;
        GlobalSelectedCorrelativo = correlativo;

        axios.post('/repartidor/detallepedido', {
            sucursal: GlobalCodSucursal,
            coddoc:coddoc,
            correlativo:correlativo
        })
        .then((response) => {
            const data = response.data.recordset;
            let total =0;
            data.map((rows)=>{
                    total = total + Number(rows.IMPORTE);
                    strdata = strdata + `
                            <tr id='${rows.DOC_ITEM}'>
                                <td>${rows.DESPROD}
                                    <br>
                                    <small class="text-danger">${rows.CODPROD} - ${rows.CODMEDIDA}</small>
                                </td>
                                <td>${rows.CANTIDAD}
                                    <br>
                                    <small>${rows.PRECIO}</small>
                                </td>
                                <td>${funciones.setMoneda(rows.IMPORTE,'Q')}</td>
                            </tr>
                            `
            })
            container.innerHTML = strdata;
            lbTotal.innerText = `${funciones.setMoneda(total,'Q')}`;
        }, (error) => {
            funciones.AvisoError('Error en la solicitud');
            strdata = '';
            container.innerHTML = '';
            lbTotal.innerText = 'Q0.00';
        });
           
    },
    gerenteStatusGpsVentas: async(idContenedor,tipoempleado)=>{

        let container = document.getElementById(idContenedor);
        container.innerHTML = GlobalLoader;
        
    
        let tbl = `<div class="mapcontainer2" id="mapcontainer"></div>`;        
        
        container.innerHTML = tbl;
        
        let mapcargado = 0;

        axios.post('/empleados/statusempleado', {
            sucursal: GlobalCodSucursal,
            tipoempleado:tipoempleado
        })
        .then((response) => {
            const data = response.data.recordset;
            data.map((rows)=>{
                    if(mapcargado==0){
                        map = Lmap(rows.LAT, rows.LONG, rows.VENDEDOR, rows.TELEFONO,rows.HORAMIN);
                        mapcargado = 1;
                    }else{
                        L.marker([rows.LAT, rows.LONG])
                        .addTo(map)
                        .bindPopup(`${rows.VENDEDOR} - <br>Tel:${rows.TELEFONO} - Updated:${rows.HORAMIN} hrs`, {closeOnClick: false, autoClose: false})
                        .openPopup()   
                    }
            })
          
        }, (error) => {
            funciones.AvisoError('Error en la solicitud');
            container.innerHTML = '';
        });
    },
    supervisorStatusGpsVentas: async(idContenedor)=>{

        let container = document.getElementById(idContenedor);
        container.innerHTML = GlobalLoader;
        
    
        let tbl = `<div class="mapcontainer2" id="mapcontainer"></div>`;        
        
        container.innerHTML = tbl;
        
        let mapcargado = 0;

        axios.post('/empleados/statusempleado', {
            sucursal: GlobalCodSucursal,
            tipoempleado:'VENDEDOR'
        })
        .then((response) => {
            const data = response.data.recordset;
            data.map((rows)=>{
                    if(mapcargado==0){
                        map = Lmap(rows.LAT, rows.LONG, rows.VENDEDOR, rows.TELEFONO,rows.HORAMIN,rows.FECHA);
                        mapcargado = 1;
                    }else{
                        L.marker([rows.LAT, rows.LONG])
                        .addTo(map)
                        .bindPopup(`${rows.VENDEDOR} - Updated:${funciones.convertDateNormal(rows.FECHA)} - ${rows.HORAMIN}`, {closeOnClick: false, autoClose: false})
                        .openPopup()   
                    }
            })
          
        }, (error) => {
            funciones.AvisoError('Error en la solicitud');
            container.innerHTML = '';
        });
    },
    get_detalle_pedido: async(coddoc,correlativo,idContenedor,idLbTotal)=>{

        let container = document.getElementById(idContenedor);
        container.innerHTML = GlobalLoader;
        
        let lbTotal = document.getElementById(idLbTotal);
        lbTotal.innerText = '---';
        
        let strdata = '';

        GlobalSelectedCoddoc = coddoc;
        GlobalSelectedCorrelativo = correlativo;

        axios.post('/ventas/detalle_pedido', {
            sucursal: GlobalCodSucursal,
            coddoc:coddoc,
            correlativo:correlativo
        })
        .then((response) => {
            const data = response.data.recordset;
            let total =0;
            data.map((rows)=>{
                    total = total + Number(rows.IMPORTE);
                    strdata = strdata + `
                            <tr id='${rows.DOC_ITEM}'>
                                <td colspan="3">${rows.DESPROD}
                                    <br>
                                    <small class="text-danger">${rows.CODPROD}</small>
                                    <br>
                                    <b class="text-info">${rows.CODMEDIDA}</b>-<b>Cant: ${rows.CANTIDAD}</b>
                                </td>
                                <td>${funciones.setMoneda(rows.PRECIO,"")}</td>
                                <td>${funciones.setMoneda(rows.IMPORTE,"")}
                                    <div class="row">
                                        <div class="col-6">
                                            <button class="btn btn-danger btn-md btn-circle"
                                                onclick="deleteProductoPedido('${rows.DOC_ITEM}','${GlobalSelectedCoddoc}','${GlobalSelectedCorrelativo}',${rows.IMPORTE},${rows.TOTALCOSTO})">
                                                <i class="fal fa-trash"></i>
                                            </button>              
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            `
            })
            container.innerHTML = strdata;
            lbTotal.innerText = `${funciones.setMoneda(total,'Q')}`;
        }, (error) => {
            funciones.AvisoError('Error en la solicitud');
            strdata = '';
            container.innerHTML = '';
            lbTotal.innerText = 'Q0.00';
        });
           
    },
    data_get_detalle_pedido: async(coddoc,correlativo)=>{

        GlobalSelectedCoddoc = coddoc;
        GlobalSelectedCorrelativo = correlativo;

        return new Promise((resolve,reject)=>{
            axios.post('/ventas/detalle_pedido', {
                sucursal: GlobalCodSucursal,
                coddoc:coddoc,
                correlativo:correlativo
            })
            .then((response) => {
                const data = response.data.recordset;
                    resolve(data);
                }, (error) => {
                    reject('')
                //funciones.AvisoError('Error en la solicitud');
            });
        })
        
           
    },
    digitadorDetallePedidoWhatsapp: async(fecha,coddoc,correlativo,numero)=>{


        
        let strEncabezado = `${GlobalEmpNombre} \n Recordatorio de Pedido \n --------------------------------- \n`;

        let strdata = '';

        let footer = '';
        let msg = '';

        GlobalSelectedCoddoc = coddoc;
        GlobalSelectedCorrelativo = correlativo;

        axios.post('/digitacion/detallepedido', {
            sucursal: GlobalCodSucursal,
            fecha:fecha,
            coddoc:coddoc,
            correlativo:correlativo
        })
        .then((response) => {
            const data = response.data.recordset;
            let total =0;
            data.map((rows)=>{
                    total = total + Number(rows.IMPORTE);
                    strdata += '* ' + rows.DESPROD + "-"  + rows.CODMEDIDA + " Cant: " + rows.CANTIDAD.toString() + " - " + funciones.setMoneda(rows.IMPORTE,'Q').toString() + "\n";
            })
            footer = `--------------------------------- \n Total a Pagar: ${funciones.setMoneda(total,'Q')}`
            msg = strEncabezado + strdata + footer;
            msg = encodeURIComponent(msg);
            //window.open('https://api.whatsapp.com/send?phone='+numero+'&text='+msg);
            window.open('https://wa.me/'+numero+'?text='+msg);
        }, (error) => {
            funciones.AvisoError('Error en la solicitud');
            strdata = '';
        });
           
    },
    updateCorrelativo:(correlativo)=>{
        return new Promise((resolve,reject)=>{
            axios.post('/ventas/updatecorrelativo',{
                sucursal:GlobalCodSucursal,
                coddoc:GlobalCoddoc,
                correlativo:correlativo
            })
            .then((response) => {   
                console.log(response)            
                resolve();             
            }, (error) => {
                reject();
            });
        });
    }
}
