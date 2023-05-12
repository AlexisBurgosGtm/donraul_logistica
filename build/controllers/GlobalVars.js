let versionapp = 'Versión 09.2022';

let root = document.getElementById('root');
let rootMenu = document.getElementById('rootMenu');
let rootMenuFooter = document.getElementById('rootMenuFooter');

let lbMenuTitulo = document.getElementById('lbMenuTitulo');
let rootMenuLateral = document.getElementById('rootMenuLateral');
const showMenuLateral =(titulo)=>{ $("#modalMenu").modal('show'); };
const hideMenuLateral =()=>{ $("#modalMenu").modal('hide'); };

let divUsuario = document.getElementById('divUsuario');
let lbTipo = document.getElementById('lbTipo');

divUsuario.innerText = "DESCONECTADO";
lbTipo.innerText = "Inicie sesión";


let GlobalSelectedDiaUpdated  = 0;
let GlobalObjetivoVenta = 0;
let GlobalCodUsuario = 99999;
let GlobalUsuario = 'MERCADOSEFECTIVOS';
let GlobalPassUsuario = '';
let GlobalNivelUser = 0;
let GlobalTipoUsuario ='';
let GlobalSelectedDia ='';
let GlobalBool = false;
let GlobalSelectedDomicilio = 'NO';

let GlobalSelectedForm = '';

let map; //mapa de leaflet
let GlobalGpsLat = 0;
let GlobalGpsLong = 0;
let GlobalSelectedLat = ''; let GlobalSelectedLong='';
let GlobalMarkerId = 0;
let GlobalSelectedId;
let GlobalSelectedCodigo;
let GlobalSelectedFecha;
let GlobalCoddoc = 'PED01';
let GlobalCotiz = '';
let GlobalTotalDocumento = 0;
let GlobalTotalCostoDocumento = 0;
let GlobalCodCla = '';

let GlobalTipoCobro = 'TERMINAR';

let GlobalSelectedCodven = 0;

let Selected_id, Selected_codprod, Selected_desprod, Selected_codmedida, Selected_equivale, Selected_costo, Selected_precio;


let GlobalSelectedCodCliente;
let GlobalSelectedNitClie;
let GlobalSelectedNomCliente;
let GlobalSelectedDirCliente;


let Global_tipo_pago ='';
let Global_tipo_doc ='';
let Global_entrega_contacto ='';
let Global_entrega_telefono ='';
let Global_entrega_direccion ='';
let Global_entrega_referencia ='';
let Global_entrega_lat ='';
let Global_entrega_long ='';
let Global_domicilio ='';


// global vars para cantidad producto
let GlobalSelectedCodprod = '';
let GlobalSelectedDesprod = '';
let GlobalSelectedCodmedida = '';
let GlobalSelectedEquivale = 0;
let GlobalSelectedCantidad = 0;
let GlobalSelectedExento = 0;
let GlobalSelectedCosto = 0;
let GlobalSelectedPrecio = 0;
let GlobalSelectedExistencia = 0;
let varPedidoTotalCosto = 0;
let varPedidoTotalPrecio = 0;
let varPedidoAnio = 0;
let varPedidoMes = 0;

// global vars para cantidad producto

let GlobalSelectedCodEmbarque ='';
let GlobalSelectedStatus=0;
let GlobalSelectedSt = 'O';
let GlobalSelectedCoddoc = '';
let GlobalSelectedCorrelativo = '';

let GlobalSelectedApp = '';

let GlobalSistema = 'ISC';


let GlobalLoaderMini = `<div class="spinner-border text-primary" role="status"><span class="sr-only">Loading...</span></div>`;

let GlobalLoader = `
                <div>
                    <div class="spinner-border text-primary" role="status"><span class="sr-only">Loading...</span></div>
                    <div class="spinner-grow text-info" role="status"><span class="sr-only">Loading...</span></div>
                    <div class="spinner-grow text-danger" role="status"><span class="sr-only">Loading...</span></div>
                    <div class="spinner-grow text-warning" role="status"><span class="sr-only">Loading...</span></div>
                </div>
                `

//'<div class="spinner-grow text-info" role="status"><span class="sr-only">Loading...</span></div>'


//'<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>';

let GlobalUrl = document.location.origin.toString();

let nowhatsapp = '50257255092';


function showWaitForm(){
    $('#modalWait').modal('show');
};


function hideWaitForm(){
    //esta linea ayuda a que las modales cierren
    if ($('.modal-backdrop').is(':visible')) {
        $('body').removeClass('modal-open'); 
        $('.modal-backdrop').remove(); 
    };

    //$('#modalWait').modal('hide');
    document.getElementById('btnCerrarModalWait').click();

};


//elimina los mensajes de console (  logger.disableLogger()  )
var logger = function()
{
    var oldConsoleLog = null;
    var pub = {};

    pub.enableLogger =  function enableLogger() 
                        {
                            if(oldConsoleLog == null)
                                return;

                            window['console']['log'] = oldConsoleLog;
                        };

    pub.disableLogger = function disableLogger()
                        {
                            oldConsoleLog = console.log;
                            window['console']['log'] = function() {};
                        };

    return pub;
}();


