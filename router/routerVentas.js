const execute = require('../connection');
const express = require('express');
const router = express.Router();

router.post("/vendedores", async(req,res)=>{
    const {sucursal}  = req.body;

    let qry = '';
    qry = `SELECT CODVEN,NOMVEN FROM VENDEDORES
            WHERE  (EMP_NIT = '${sucursal}')`;

    execute.Query(res,qry);
});


router.post("/detalle_pedido", async(req,res)=>{
    const {sucursal,coddoc,correlativo}  = req.body;

    let qry = '';
    qry = `SELECT Docproductos.CODPROD, 
            Docproductos.DESCRIPCION AS DESPROD, 
            Docproductos.CODMEDIDA, 
            Docproductos.CANTIDAD, 
            Docproductos.PRECIO, 
            Docproductos.TOTALPRECIO AS IMPORTE, 
            Docproductos.COSTO, 
            Docproductos.DOC_ITEM, 
            Docproductos.TOTALCOSTO, 
            Docproductos.CANTIDADENVIADA,
            Docproductos.DOC_ANO AS ANIO, 
            Docproductos.DOC_MES AS MES
            FROM Docproductos
            WHERE  (Docproductos.EMP_NIT = '${sucursal}') 
            AND (Docproductos.CODDOC = '${coddoc}') 
            AND (Docproductos.DOC_NUMERO = '${correlativo}')`;

    execute.Query(res,qry);
});




//EDICION DEL PEDIDO
router.post('/loadpedido_edicion',async(req,res)=>{

    const {sucursal, coddoc, correlativo,usuario} = req.body;
    
    let qry='';
    
        qry = `
        SELECT Docproductos.EMP_NIT AS EMPNIT,
                Docproductos.CODPROD, Docproductos.DESCRIPCION AS DESPROD, 
                Docproductos.CODMEDIDA, 
                Docproductos.CANTIDAD, Docproductos.EQUIVALE, 
                Docproductos.CANTIDADINV AS TOTALUNIDADES, 
                Docproductos.COSTO, Docproductos.PRECIO, 
                Docproductos.TOTALCOSTO, Docproductos.TOTALPRECIO, 0 AS EXENTO, 
                '${usuario}' AS USUARIO, 
                Docproductos.TIPOCLIE AS TIPOPRECIO, 
                '${sucursal}' AS CODSUCURSAL, 
                0 AS EXISTENCIA
        FROM Docproductos LEFT OUTER JOIN
            Productos ON Docproductos.EMP_NIT = Productos.EMP_NIT AND Docproductos.CODPROD = Productos.CODPROD AND 
            Docproductos.EMP_NIT = Productos.EMP_NIT
        WHERE (Docproductos.EMP_NIT = '${sucursal}') 
            AND (Docproductos.CODDOC = '${coddoc}') 
            AND (Docproductos.DOC_NUMERO = '${correlativo}') 
    `

    execute.Query(res, qry);

});

router.post('/anular_pedido',async(req,res)=>{

    const {sucursal, coddoc, correlativo} = req.body;
    
    let qry='';
    
        qry = `UPDATE DOCUMENTOS SET DOC_ESTATUS='A' 
                WHERE EMP_NIT='${sucursal}' AND CODDOC='${coddoc}' AND DOC_NUMERO='${correlativo}' `

    execute.Query(res, qry);

})


router.post('/eliminarpedidocargado',async(req,res)=>{

    const {sucursal,coddoc,correlativo} = req.body;

    let qry = `DELETE FROM ME_DOCUMENTOS 
    WHERE CODSUCURSAL='${sucursal}' 
    AND CODDOC='${coddoc}' AND DOC_NUMERO='${correlativo}'
    AND DOC_ESTATUS='O'; `
    let qryprods = `DELETE FROM ME_DOCPRODUCTOS 
        WHERE CODSUCURSAL='${sucursal}' AND CODDOC='${coddoc}' 
        AND DOC_NUMERO='${correlativo}' ;`

    execute.Query(res, qry + qryprods);

})















// UNA FECHA (DIA)

//Elimina un pedido, desde el vendedor
router.post("/deletepedidovendedor",async(req,res)=>{
    const {sucursal,coddoc,correlativo} = req.body;

    let qry = `DELETE FROM DOCUMENTOS 
                    WHERE EMP_NIT='${sucursal}' AND CODDOC='${coddoc}' AND DOC_NUMERO='${correlativo}';`
    let qryprods = `DELETE FROM DOCPRODUCTOS 
                    WHERE EMP_NIT='${sucursal}' AND CODDOC='${coddoc}' AND DOC_NUMERO='${correlativo}' ;`
    execute.Query(res, qry + qryprods);

})




router.post("/lista_pedidos", async(req,res)=>{
    const {sucursal,coddoc,fecha}  = req.body;
    
    let qry = '';
    qry = `SELECT Documentos.CODDOC, 
            Documentos.DOC_NUMERO AS CORRELATIVO, 
            Documentos.NITCLIE AS CODCLIE, 
            Documentos.DOC_NIT AS NIT,
            Clientes.NOMFAC AS NEGOCIO, 
            Documentos.DOC_NOMREF AS NOMCLIE, 
                             Documentos.DOC_DIRENTREGA AS DIRCLIE, 
                             '' AS DESMUNI, 
                             ISNULL(Documentos.DOC_TOTALVENTA, 0) AS IMPORTE, 
                             Documentos.DOC_FECHA AS FECHA, 
                             Documentos.DOC_LATITUD AS LAT, 
                             Documentos.DOC_LONGITUD AS LONG, 
                             Documentos.DOC_OBS AS OBS, 
                             Documentos.DOC_MATSOLI AS DIRENTREGA, 
                             Documentos.DOC_ESTATUS AS ST,
                             Documentos.DOC_CONTADOCREDITO AS TIPO_PAGO,
                             Documentos.DOC_NUMORDEN AS TIPO_DOC,
                             Documentos.DOC_INTERESADO AS ENTREGA_CONTACTO,
                             Documentos.DOC_RECIBE AS ENTREGA_TELEFONO,
                             Documentos.DOC_MATSOLI AS ENTREGA_DIRECCION,
                             Documentos.DOC_OBS AS ENTREGA_REFERENCIA,
                             Documentos.DOC_LATITUD AS ENTREGA_LAT,
                             Documentos.DOC_LONGITUD AS ENTREGA_LONG,
                             '' AS DOMICILIO
                        FROM Documentos LEFT OUTER JOIN
                            Clientes ON Documentos.NITCLIE = Clientes.NITCLIE AND 
                            Documentos.EMP_NIT = Clientes.EMP_NIT
    WHERE        (Documentos.EMP_NIT = '${sucursal}') AND
    (Documentos.DOC_FECHA = '${fecha}') AND (Documentos.CODDOC = '${coddoc}') AND (Documentos.DOC_ESTATUS <> 'A')`

  
    execute.Query(res,qry);
});





// INSERTA UN PEDIDO EN LAS TABLAS DE DOCUMENTOS Y DOCPRODUCTOS
router.post("/insertventa", async (req,res)=>{
    
    const {jsondocproductos,codsucursal,empnit,anio,mes,dia,coddoc,correl,fecha,fechaentrega,formaentrega,codcliente,nomclie,codbodega,totalcosto,
        totalprecio,nitclie,dirclie,obs,direntrega,usuario,codven,lat,long,hora,
        tipo_pago,tipo_doc,entrega_contacto,entrega_telefono,entrega_direccion,entrega_referencia,entrega_lat,entrega_long,domicilio} = req.body;
  
    let app = codsucursal;
  
    let tblDocproductos = JSON.parse(jsondocproductos);
   
    let qry = ''; // inserta los datos en la tabla documentos
    let qrydoc = ''; // inserta los datos de la tabla docproductos
    let qrycorrelativo = ''; //actualiza el correlativo del documento

    let correlativo = correl;
      //carga los espacios en blanco en el correlativo actual
      correlativo = getCorrelativo(correlativo);

    tblDocproductos.map((p)=>{
        qrydoc = qrydoc + `INSERT INTO DOCPRODUCTOS 
        (EMP_NIT,DOC_ANO,DOC_MES,CODDOC,DOC_NUMERO,
        DOC_ITEM,CODPROD,CODMEDIDA,CANTIDAD,EQUIVALE,
        CANTIDADINV,COSTO,PRECIO,TOTALCOSTO,TOTALPRECIO,
        BODEGAENTRADA,BODEGASALIDA,SUBTOTAL,DESCUENTOPROD,PORDESCUPROD,
        DESCUENTOFAC,PORDESCUFAC,TOTALDESCUENTO,DESCRIPCION,SUBTOTALPROD,
        TIPOCAMBIO,PRODPRECIO,CANTIDADENVIADA,CODFAC,NUMFAC,
        ITEMFAC,NOAFECTAINV, DOCPESO,COSTOINV,FLETE,TOTALPRECIOFIN,PRECIOFIN,TOTALCOSTOINV,CANTIDADBONI,CODOPR,NUMOPR,
        ITEMOPR,CODINV,NUMINV,ITEMINV,TIPOCLIE,LISTA,PORIVA,VALORIVA,NOLOTE,VALORIMPU1,DESEMPAQUE,
        SALDOINVANTCOM,NCUENTAMESA,CUENTACERRADA,COSTODOL,COSTOINVDOL,TOTALCOSTODOL,TOTALCOSTOINVDOL,
        IMPCOMBUSTIBLE,CODVENPROD,COMIVEN,SOBREPRECIO,CODREG,NUMREG,ITEMREG,CANTIDADORIGINAL,CANTIDADMODIFICADA,NSERIETARJETA,
        CODOC,NUMOC,PORTIMBREPRENSA,VALORTIMBREPRENSA,CODTIPODESCU,TOTALPUNTOS,ITEMOC,CODPRODORIGEN,CODMEDIDAORIGEN,
        CANTIDADDEVUELTA,CODARANCEL,CODPRODLEECODIGO) 
        VALUES ('${p.EMPNIT}',${anio},${mes},'${coddoc}','${correlativo}',
        ${p.ID},'${p.CODPROD}','${p.CODMEDIDA}',${p.CANTIDAD},${p.EQUIVALE},
        ${p.TOTALUNIDADES},${p.COSTO},${p.PRECIO},${p.TOTALCOSTO},${p.TOTALPRECIO},
        '','${codbodega}',${p.TOTALPRECIO},0,0,
        0,0,0,'${p.DESPROD}',${p.TOTALPRECIO},
        1,${p.PRECIO},0,'','',
        0,0,0,${p.COSTO},0,${p.TOTALPRECIO},
        ${p.PRECIO},${p.TOTALCOSTO},0,'','',0,'','',0,'P','',
         0,0,'SN',0,'',0,'',0,0,${p.COSTO},0,${p.TOTALCOSTO},0,0,0,0,'','',0,0,0,'','','',
         0,0,'',0,0,'','',0,'','${p.CODPROD}' 
        );`
    });


    //obtiene el número del correlativo actual para actualizar luego
    let ncorrelativo = correl;


    //variables sin asignar
    let concre = tipo_pago;//'CON';
    let abono = totalprecio; 
    let saldo = 0;
    let pagotarjeta = 0; let recargotarjeta = 0;
    let codrep = 0;
    let totalexento=0;

  
    let nuevocorrelativo = Number(ncorrelativo) + 1;

            qry = `INSERT INTO DOCUMENTOS (
                EMP_NIT, DOC_ANO, DOC_MES, CODDOC, DOC_NUMERO, 
                CODCAJA, DOC_FECHA, DOC_NUMREF, DOC_NOMREF, BODEGAENTRADA,
                BODEGASALIDA, USUARIO, DOC_ESTATUS, DOC_TOTALCOSTO, DOC_TOTALVENTA,
                DOC_HORA, DOC_FVENCE, DOC_DIASCREDITO, DOC_CONTADOCREDITO, DOC_DESCUENTOTOTAL,
                DOC_DESCUENTOPROD, DOC_PORDESCUTOTAL, DOC_IVA, DOC_SUBTOTALIVA, DOC_SUBTOTAL,
                NITCLIE, DOC_PORDESCUFAC, CODVEN, DOC_ABONOS, DOC_SALDO,
                DOC_VUELTO, DOC_NIT, DOC_PAGO, DOC_CODREF, DOC_TIPOCAMBIO,
                DOC_PARCIAL, DOC_ANTICIPO, ANT_CODDOC, ANT_DOCNUMERO, DOC_OBS,
                DOC_PORCENTAJEIVA, DOC_ENVIO, DOC_CUOTAS, DOC_TIPOCUOTA, 
                DIVA_NUMINT, FRT_CODIGO, TRANSPORTE, DOC_REFPEDIDO, DOC_REFFACTURA,
                CODPROV, DOC_TOTALOTROS, DOC_RECIBO, DOC_MATSOLI, DOC_REFERENCIA, 
                DOC_LUGAR, DOC_ANOMBREDE, DOC_IVAEXO, DOC_VALOREXO, DOC_SECTOR,
                DOC_DIRENTREGA, DOC_CANTENV, DOC_EXP, DOC_FECHAENT, TIPOPRODUCCION,
                DOC_TOTCOSINV, DOC_TOTALFIN, USUARIOENUSO, DOC_IMPUESTO1, DOC_TOTALIMPU1,
                DOC_PORCOMI, DOC_DOLARES, CODMESA, DOC_TIPOOPE, USUARIOAUTORIZA, 
                NUMAUTORIZA, DOC_TEMPORADA, DOC_INGUAT,
                CODVENBOD,
                CODHABI, DOC_SERIE,
                CTABAN, NUMINTBAN, 
                CODVENEMP,
                DOC_TOTCOSDOL, DOC_TOTCOSINVDOL, CODUNIDAD,
                TOTCOMBUSTIBLE, DOC_CODCONTRA, DOC_NUMCONTRA, INTERES, ABONOINTERES,
                SALDOINTERES, NUMEROCORTE, DOC_PORLOCAL, DOC_NUMORDEN, DOC_FENTREGA,
                DOC_INTERESADO, DOC_RECIBE, NUMEROROLLO, COD_CENTRO, GENCUOTA,
                DOC_PORINGUAT, DOC_INGUATEXENTO, DOC_TIPOTRANIVA, DOC_PORTIMBREPRE, DOC_TIMBREPRENSA,
                ABONOSANTICIPO, SALDOANTICIPO, DOC_PRODEXENTO, PUNTOSGANADOS, PUNTOSUSADOS,
                APL_ANTICIPO, COD_DEPARTA, FIRMAELECTRONICA, DOC_CODDOCRETENCION, DOC_SERIERETENCION,
                DOC_NUMRETENCION, FIRMAISC, ISCENVIADO, DOC_LATITUD, DOC_LONGITUD
                ) 
                VALUES (
                '${empnit}', ${anio}, ${mes}, '${coddoc}', '${correlativo}',
                '', '${fecha}', '', '${nomclie}', '',
                '${codbodega}', '${usuario}', 'I', ${totalcosto}, ${totalprecio},
                '${hora}', '${fecha}', 0, '${concre}', 0,
                0, 0, 0, ${totalprecio}, ${totalprecio},
                '${codcliente}', 0, '${codven}', 0, ${saldo}, 
                0, '${nitclie}', 0, '', 1, 
                0, 0, '', '', 'T:${tipo_doc} - V:${usuario} - O:${obs}',
                0, 0, 0, 0, 
                0, '', '${formaentrega}', '', '',
                '', 0, 0, '${entrega_direccion}', '', 
                '', '', '', 0, '', 
                '${dirclie}', '', '', '${fechaentrega}', '',
                ${totalcosto}, 0, '', 0, 0,
                0, 0, '', 0,'',
                0, 0, 0,
                0,
                '', '', 
                0, 0, 
                0,
                0, 0, '',
                0, '', '', 0, 0, 
                0, 0, 0, '${tipo_doc}','NO',
                '${entrega_contacto}', '${entrega_telefono}', 0, '', '',
                0, 'N', 'C', 0, 0,
                0, 0, 0, 0, 0,
                '', '', '', '', '',
                '', '', 0, ${lat},${long}
                );`
                   
                qrycorrelativo =`   UPDATE TIPODOCUMENTOS 
                                        SET CORRELATIVO=${nuevocorrelativo} 
                                        WHERE EMP_NIT='${codsucursal}' AND CODDOC='${coddoc}';
                                   `
      
    execute.Query(res, qrycorrelativo + qry + qrydoc);
    
});





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



module.exports = router;