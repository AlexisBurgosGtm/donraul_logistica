var express = require("express");
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');

const axios = require('axios');

const execute = require('./connection');

var routerVentas = require('./router/routerVentas');
var routerTipoDocs = require('./router/routerTipoDocs');
var routerEmpleados = require('./router/routerEmpleados');
var routerClientes = require('./router/routerClientes');
var routerProductos = require('./router/routerProductos');
let routerReportes = require('./router/routerReportes');
let routerPos = require('./router/router_POS');
let routerUsuarios = require('./router/routerUsuarios');


var http = require('http').Server(app);
var io = require('socket.io')(http);

const PORT = process.env.PORT || 4600;


const cors = require('cors');
app.use(cors({
    origin: '*'
}));



app.use(bodyParser.json());

app.use(express.static('build'));

var path = __dirname + '/'

//manejador de rutas
router.use(function (req,res,next) {
 
      /*
          // Website you wish to allow to connect
          res.setHeader('Access-Control-Allow-Origin', '*');
          // Request methods you wish to allow
          res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            // Request headers you wish to allow
          res.setHeader('Access-Control-Allow-Headers', 'Content-Type,X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5,  Date, X-Api-Version, X-File-Name, pplication/json');
            // Set to true if you need the website to include cookies in the requests sent
          res.setHeader('Access-Control-Allow-Credentials', true);
      */

      next();

});

//--------------------------------------------------------------------------
//--------------------------------------------------------------------------
//--------------------------------------------------------------------------

const FEL_URL_LOGIN = "https://felcloud-instance-three.feel.com.gt/api/v2/servicios/externos/login";
const FEL_URL_CONSULTARECEPTORES = 'https://consultareceptores.feel.com.gt/rest/action';
const FEL_URL_CUI = "https://felcloud-instance-three.feel.com.gt/api/v2/servicios/externos/cui";

const Rounder = (value) => {
  return Math.round((+value + 0.00001) * 100) / 100
}

const returnError = (err, req, res, next) => {
  console.error(err)
  res.status(err.statusCode || 500).send(err)
}

const parseNit = (nit) => {
  let _nit = nit.replace('.', '')
  _nit = _nit.replace('-', '')
  _nit = _nit.replace('/', '')
  _nit = _nit.replace('.', '')
  return _nit.toUpperCase()
}

const parseSAT = (value) => {
  const _nombre = value.split(',')
  if (_nombre.length === 1 || _nombre.length === 2) {
    return Buffer.from(value,'utf-8').toString()
  } else {
    const _casada = (_nombre[2] !== '') ? ' DE ' + _nombre[2] : ''
    const final = _nombre[3] + ' ' + _nombre[4] + ' ' + _nombre[0] + ' ' + _nombre[1] + _casada
    return Buffer.from(final, 'utf-8').toString()   
	}
}

const fechaDiff = (fecha, fechaFinal) => {
  const fechaInicial = new Date(fecha)
  const fechaVence = new Date(fechaFinal)
  const diff = fechaVence.getTime() - fechaInicial.getTime()

  const fechaHoy = new Date()

  return new Date(fechaHoy.getTime() + diff)
}

const getDiff = (fecha) => {
  //const fecha = storage.getItem('token-vence')
  
  const date = new Date()
  const fechaVence = new Date(fecha)

  const diff = fechaVence.getTime() - date.getTime()

  return diff
}


const tokenInfile = async (fel_alias,fel_llave) => {
  try {
		const params = {
      prefijo: fel_alias,
      llave: fel_llave      
    }
		const postdata = new URLSearchParams(params)
		const { data, status } = await axios({
			url: FEL_URL_LOGIN,
			method: 'POST',
			data: postdata.toString(),
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		})
    if (status === 200) {
      const { token, fecha_de_vencimiento, fecha } = data
      const fechaVence = fechaDiff(fecha, fecha_de_vencimiento)
			//redis.set('token-infile', token)
      //redis.set('token-vence', fechaVence)
      console.log('renovando token ', fechaVence)
      return Promise.resolve({
        status,
        data,
        token,
        fechaVence
      })
    } else {
      console.log('Axios Error')
      console.log(status, data)
      console.log('----')
			//redis.set('token-infile', null)
      //redis.set('token-vence', null)
      return Promise.resolve({
        status,
        data
      })
    }
  } catch (error) {
		console.log('error tokenfile ', error)
    return Promise.reject(error)
  }
}

//--------------------------------------------------------------------------
//--------------------------------------------------------------------------
//--------------------------------------------------------------------------

app.get("/",function(req,res){
  execute.start();
	res.sendFile(path + 'index.html');
}); 

app.get("/login",function(req,res){
  res.redirect('/');
}); 


var fs = require('fs');

app.post("/pdf", function(req,res){

  const {sucursal,nit,cliente,direccion, coddoc, correlativo} = req.body;


      const pdf = require('html-pdf');

      execute.get_data(`SELECT CODPROD, DESCRIPCION AS DESPROD, CANTIDAD, ISNULL(PRECIO,0) AS PRECIO, ISNULL(TOTALPRECIO,0) AS TOTALPRECIO
                          FROM DOCPRODUCTOS 
                        WHERE EMP_NIT='${sucursal}' 
                        AND CODDOC='${coddoc}' 
                        AND DOC_NUMERO='${getCorrelativo(correlativo)}';
                        `)
      .then((result)=>{

          let data = result.recordset;

          let content = get_plantilla(nit,cliente,direccion,coddoc,correlativo,data);


          //nombre del archivo a crearse
          var filename = __dirname + `/pdf/${sucursal}${coddoc}${correlativo}.pdf`;
          //esta función crea el pdf como archivo
          pdf.create(content).toFile(filename, function(err, ress) {
              if (err){
                  //console.log(err);
                  //error al crear el pdf
                  res.send('error')
              } else {
                  console.log('Pdf creado');
                  
                  //esta función convierte el archivo creado en un string base64
                  const pdf2base64 = require('pdf-to-base64');
                  pdf2base64(filename)
                      .then((response) => {
                              //envia el string a la app
                              res.send(response);
                              //elimina el archivo en el servidor
                              fs.unlinkSync(filename);        
                      })
                      .catch((error) => {
                              //error al convertir el archivo a base64
                              console.log(error);
                              res.send('error');
                              
                      })
              }
          });

      })
      .catch(()=>{
          res.send('error');
      })


})


app.get("/datosnit", async function(req,res){
    
  const {nit, fel_alias, fel_llave} = req.query;
 
  console.log('consultando nit... ')
  console.dir(req.query);

   try {
     const _nit = parseNit(nit)
     const postdata = {
       emisor_codigo: `${fel_alias}`,
       emisor_clave: `${fel_llave}`,
       nit_consulta: `${_nit}`
     }
     const { data } = await axios({
       url: FEL_URL_CONSULTARECEPTORES,
       method: 'POST',
       data: postdata,
       headers: {
         'Content-Type': 'application/json'
       }
     })
     const { nombre } = data;
     console.log(data);
     res.send(nombre);
 
   } catch (e) {
     console.log(e);
     res.send('error:' + e.toString())
   }
   

}); 


app.get("/datosdpi", async function(req,res){
   
 const {dpi, fel_alias, fel_llave} = req.query;

  let cui = dpi;

  try {
   const { token } = await tokenInfile(fel_alias,fel_llave)
   let _token = token;
   
   //CONSULTA EL DPI

   const { data, status } = await axios({
     url: FEL_URL_CUI,
     method: 'POST',
     data: new URLSearchParams({ cui }).toString(),
     headers: {
       'Authorization': `Bearer ${_token}`,
       'Content-Type': 'application/x-www-form-urlencoded'
     }
   })    
   const nombre = (data.cui) ? data.cui.nombre : ''
   //return Promise.resolve(nombre.replace(',',''))
   res.send(nombre.replace(',',''))
  } catch (error) {
   console.log("🚀 ~ file: infileController.js:114 ~ error", error)
   //return Promise.reject(error)
   res.send('error: ' + error.toString());
 }
  

}); 


app.use('/ventas', routerVentas);
app.use('/tipodocumentos', routerTipoDocs);
app.use('/empleados', routerEmpleados);
app.use('/clientes', routerClientes);
app.use('/productos', routerProductos);
app.use('/reportes', routerReportes);
app.use('/pos', routerPos);
app.use('/usuarios', routerUsuarios);
app.use("/",router);


app.use("*",function(req,res){
    res.redirect('/');
});


// SOCKET HANDLER
io.on('connection', function(socket){
  
  
  socket.on('nuevo_pedido', (tipo,msn)=>{
    io.emit('nuevo_pedido', tipo, msn);
  });



  
});

http.listen(PORT, function(){
  console.log('listening on *:' + PORT);
});





function get_plantilla(nit,cliente,direccion,coddoc,correlativo,data){

  let totalventa = 0;

      let plantilla = `
          <html xmlns:v="urn:schemas-microsoft-com:vml"
              xmlns:o="urn:schemas-microsoft-com:office:office"
              xmlns:w="urn:schemas-microsoft-com:office:word"
              xmlns:m="http://schemas.microsoft.com/office/2004/12/omml"
              xmlns="http://www.w3.org/TR/REC-html40">

              <head>
              <meta http-equiv=Content-Type content="text/html; charset=utf-8">
              <meta name=ProgId content=Word.Document>
              <meta name=Generator content="Microsoft Word 15">
              <meta name=Originator content="Microsoft Word 15">

              <link rel=File-List
              href="CONSTRUMATERIALES%20EL%20CAMPESINO_archivos/filelist.xml">
              <link rel=Edit-Time-Data
              href="CONSTRUMATERIALES%20EL%20CAMPESINO_archivos/editdata.mso">
              <link rel=themeData
              href="CONSTRUMATERIALES%20EL%20CAMPESINO_archivos/themedata.thmx">
              <link rel=colorSchemeMapping
              href="CONSTRUMATERIALES%20EL%20CAMPESINO_archivos/colorschememapping.xml">

              <style>
              /* Font Definitions */
              @font-face
                {font-family:"Cambria Math";
                panose-1:2 4 5 3 5 4 6 3 2 4;
                mso-font-charset:0;
                mso-generic-font-family:roman;
                mso-font-pitch:variable;
                mso-font-signature:3 0 0 0 1 0;}
              @font-face
                {font-family:Calibri;
                panose-1:2 15 5 2 2 2 4 3 2 4;
                mso-font-charset:0;
                mso-generic-font-family:swiss;
                mso-font-pitch:variable;
                mso-font-signature:-469750017 -1073732485 9 0 511 0;}
              /* Style Definitions */
              p.MsoNormal, li.MsoNormal, div.MsoNormal
                {mso-style-unhide:no;
                mso-style-qformat:yes;
                mso-style-parent:"";
                margin-top:0cm;
                margin-right:0cm;
                margin-bottom:8.0pt;
                margin-left:0cm;
                line-height:106%;
                mso-pagination:widow-orphan;
                font-size:11.0pt;
                font-family:"Calibri",sans-serif;
                mso-ascii-font-family:Calibri;
                mso-ascii-theme-font:minor-latin;
                mso-fareast-font-family:Calibri;
                mso-fareast-theme-font:minor-latin;
                mso-hansi-font-family:Calibri;
                mso-hansi-theme-font:minor-latin;
                mso-bidi-font-family:"Times New Roman";
                mso-bidi-theme-font:minor-bidi;
                mso-font-kerning:1.0pt;
                mso-ligatures:standardcontextual;
                mso-fareast-language:EN-US;}
              p.msonormal0, li.msonormal0, div.msonormal0
                {mso-style-name:msonormal;
                mso-style-unhide:no;
                mso-margin-top-alt:auto;
                margin-right:0cm;
                mso-margin-bottom-alt:auto;
                margin-left:0cm;
                mso-pagination:widow-orphan;
                font-size:12.0pt;
                font-family:"Times New Roman",serif;
                mso-fareast-font-family:"Times New Roman";
                mso-fareast-theme-font:minor-fareast;}
              .MsoChpDefault
                {mso-style-type:export-only;
                mso-default-props:yes;
                font-size:10.0pt;
                mso-ansi-font-size:10.0pt;
                mso-bidi-font-size:10.0pt;
                font-family:"Calibri",sans-serif;
                mso-ascii-font-family:Calibri;
                mso-ascii-theme-font:minor-latin;
                mso-fareast-font-family:Calibri;
                mso-fareast-theme-font:minor-latin;
                mso-hansi-font-family:Calibri;
                mso-hansi-theme-font:minor-latin;
                mso-bidi-font-family:"Times New Roman";
                mso-bidi-theme-font:minor-bidi;
                mso-font-kerning:0pt;
                mso-ligatures:none;
                mso-fareast-language:EN-US;}
              @page WordSection1
                {size:612.0pt 792.0pt;
                margin:42.55pt 3.0cm 70.85pt 3.0cm;
                mso-header-margin:35.4pt;
                mso-footer-margin:35.4pt;
                mso-paper-source:0;}
              div.WordSection1
                {page:WordSection1;}

              </style>
              </head>

              <body lang=ES-GT style='tab-interval:35.4pt;word-wrap:break-word;margin-top:20pt'>

              <div class=WordSection1>

              <p class=MsoNormal style='margin-left:7.1pt'>

              <img width=136 height=136
              src="./favicon.png" align=left
              hspace=12 v:shapes="Imagen_x0020_1">

              <b><span style='font-size:14.0pt;
              line-height:106%'><o:p></o:p></span></b></p>

              <p class=MsoNormal><b><span style='font-size:14.0pt;line-height:106%;margin-left:15pt'>CONSTRUMATERIALES
              EL CAMPESINO<o:p></o:p></span></b></p>

              <p class=MsoNormal style='margin-left:141.6pt'>Cotización de Productos<br>
              Kilómetro 181.4 zona 0, San Sebastián, Retalhuleu<br>
              PBX: 7772-2556</p>

              <p class=MsoNormal><o:p>&nbsp;</o:p></p>

              <p class=MsoNormal style='text-indent:35.4pt'>No. Documento: ${coddoc}-${correlativo}</p>

              <p class=MsoNormal><o:p>&nbsp;</o:p></p>

              <p class=MsoNormal style='margin-left:35.4pt'>Estimado cliente ${cliente}, reciba nuestros
              cordiales saludos y buenos deseos. <br>
              A continuación, le presentamos los precios de los productos cotizados por su
              persona o encargado/a:</p>

              <p class=MsoNormal><o:p>&nbsp;</o:p></p>

              <table class=MsoNormalTable border=1 cellspacing=0 cellpadding=0 width=614
              style='width:460.45pt;margin-left:35.6pt;border-collapse:collapse;border:none;
              mso-border-alt:solid windowtext .5pt;mso-yfti-tbllook:1184;mso-padding-alt:
              0cm 5.4pt 0cm 5.4pt'> 
              
              <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes'>
                    <td width=85 valign=top style='width:63.55pt;border:solid windowtext 1.0pt;
                    mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal style='margin-bottom:0cm;line-height:normal'>CANTIDAD</p>
                    </td>
                    <td width=85 valign=top style='width:63.8pt;border:solid windowtext 1.0pt;
                    border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
                    solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal style='margin-bottom:0cm;line-height:normal'>CODIGO</p>
                    </td>
                    <td width=236 valign=top style='width:177.2pt;border:solid windowtext 1.0pt;
                    border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
                    solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal style='margin-bottom:0cm;line-height:normal'>DESCRIPCION</p>
                    </td>
                    <td width=94 valign=top style='width:70.85pt;border:solid windowtext 1.0pt;
                    border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
                    solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal style='margin-bottom:0cm;line-height:normal'>PRECIO</p>
                    </td>
                    <td width=113 valign=top style='width:3.0cm;border:solid windowtext 1.0pt;
                    border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
                    solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal style='margin-bottom:0cm;line-height:normal'>SUBTOTAL</p>
                    </td>
              </tr>`
          
              +

              data.map((r)=>{
                totalventa += Number(r.TOTALPRECIO);
                  return `
                  <tr style='mso-yfti-irow:1'>
                      <td width=85 valign=top style='width:63.55pt;border:solid windowtext 1.0pt;
                      border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
                      padding:0cm 5.4pt 0cm 5.4pt'>
                      <p class=MsoNormal style='margin-bottom:0cm;line-height:normal'>${r.CANTIDAD}</p>
                      </td>
                      <td width=85 valign=top style='width:63.8pt;border-top:none;border-left:none;
                      border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
                      mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
                      mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt'>
                      <p class=MsoNormal style='margin-bottom:0cm;line-height:normal'>${r.CODPROD}</p>
                      </td>
                      <td width=236 valign=top style='width:177.2pt;border-top:none;border-left:
                      none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
                      mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
                      mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt'>
                      <p class=MsoNormal style='margin-bottom:0cm;line-height:normal'>${r.DESPROD.replace("'","").replace('"',"")}</p>
                      </td>
                      <td width=94 valign=top style='width:70.85pt;border-top:none;border-left:
                      none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
                      mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
                      mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt'>
                      <p class=MsoNormal align=right style='margin-bottom:0cm;text-align:right;
                      line-height:normal'>Q${r.PRECIO.toFixed(2)}</p>
                      </td>
                      <td width=113 valign=top style='width:3.0cm;border-top:none;border-left:none;
                      border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
                      mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
                      mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt'>
                      <p class=MsoNormal align=right style='margin-bottom:0cm;text-align:right;
                      line-height:normal'>Q${r.TOTALPRECIO.toFixed(2)}</p>
                      </td>
                  </tr>
                  `
              }).join() 
          
              +

              `        
              </table>
              <p class=MsoNormal><o:p>&nbsp;</o:p></p>
              <p class=MsoNormal><o:p>&nbsp;</o:p></p>
              <p class=MsoNormal style='text-indent:35.4pt'>* TOTAL A PAGAR</p>
              <p class=MsoNormal style='margin-left:430.8pt'><b><span style='font-size:14.0pt;
              line-height:110%'>Q ${totalventa.toFixed(2)}</span></b></p>
            </div>
            <br><br><br>
            <p>* Precios sujetos a cambios sin previo aviso</p>
          </body>
        </html>


        `
    return plantilla;
};

function getCorrelativo(correlativo){
  let numdoc = '';

  switch (correlativo.toString().length) {
      case 1:
          numdoc = '         ' + correlativo;
      break;
      case 2:
          numdoc = '        ' + correlativo;
      break;
      case 3:
          numdoc = '       ' + correlativo;
      break;
      case 4:
          numdoc = '      ' + correlativo;
          break;
      case 5:
          numdoc = '     ' + correlativo;
          break;
      case 6:
          numdoc = '    ' + correlativo;
          break;
      case 7:
          numdoc = '   ' + correlativo;
          break;
      case 8:
          numdoc = '  ' + correlativo;
      break;
      case 9:
          numdoc = ' ' + correlativo;
      break;
      case 10:
          numdoc = correlativo;
      break;
      default:
          break;
  };

  return numdoc;

};
