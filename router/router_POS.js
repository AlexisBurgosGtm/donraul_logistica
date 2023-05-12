const execute = require('../connection');
const express = require('express');
const router = express.Router();


router.post("/despacho_pedidos", async(req,res)=>{
   
    const { sucursal, codcla } = req.body;


    let clasif = '';

    if(codcla=='MC'){
        clasif = `'MC','HER','PER'`;
    }else{        
        clasif=`'FERRE','ELECT','HEE','HM','JAR','PINT','PL','SC1','TOR'`;
    }



    let qry = `
    SELECT  CODDOC, DOC_NUMERO, 
            DOC_FECHA AS FECHA, NITCLIE, 
            DOC_NIT AS NIT, DOC_NOMREF AS NOMCLIE, 
            DOC_DIRENTREGA AS DIRCLIE, COUNT(CODCLAUNO) AS CONTEO, 
            DOC_TOTALVENTA, 
            SUM(TOTALPRECIO) AS TOTALPRODUCTO
    FROM  W_DESPACHO_PRODUCTOS
    WHERE  (DOC_ESTATUS <> 'A') AND (DOC_NUMORDEN = 'POS') AND (CODCLAUNO IN(${clasif}))
    GROUP BY EMP_NIT, CODDOC, DOC_NUMERO, DOC_FECHA, NITCLIE, DOC_NIT, DOC_NOMREF, DOC_DIRENTREGA, DOC_TOTALVENTA
    HAVING        (EMP_NIT = '${sucursal}')
    `
    
    
  
    execute.Query(res,qry);
     
});

router.post("/despacho_pedido_detalle", async(req,res)=>{
   
    const { sucursal, codcla, coddoc, correlativo } = req.body;


    let clasif = '';

    if(codcla=='MC'){
        clasif = `'MC','HER','PER'`;
    }else{        
        clasif=`'FERRE','ELECT','HEE','HM','JAR','PINT','PL','SC1','TOR'`;
    }



    let qry = `
    SELECT        CODDOC, DOC_NUMERO, DOC_NOMREF AS NOMCLIE, DOC_DIRENTREGA AS DIRCLIE, CODPROD, DESPROD, CANTIDADINV, PRECIO,TOTALPRECIO, CANTIDADPED
FROM            W_DESPACHO_PRODUCTOS
WHERE        (DOC_ESTATUS <> 'A') AND (DOC_NUMORDEN = 'POS') AND (CODCLAUNO IN (${clasif}))
GROUP BY EMP_NIT, CODDOC, DOC_NUMERO, DOC_FECHA, NITCLIE, DOC_NIT, DOC_NOMREF, DOC_DIRENTREGA, CODPROD, DESPROD, CANTIDADINV, PRECIO,TOTALPRECIO, CANTIDADPED
HAVING        (EMP_NIT = '${sucursal}') AND (CODDOC = '${coddoc}') AND (DOC_NUMERO = '${correlativo}')

    `
    
    
  
    execute.Query(res,qry);
     
});



router.post("/claseuno", async(req,res)=>{
   
    const { sucursal } = req.body;

    let qry = `SELECT CODCLAUNO AS CODIGO, DESCLAUNO AS DESCRIPCION
                FROM CLASEUNO
                WHERE EMP_NIT='${sucursal}'`
    
    
  
    execute.Query(res,qry);
     
});

router.post("/productos_categoria", async(req,res)=>{
   
    const { sucursal, codigo } = req.body;

    let qry = `
        SELECT Productos.CODPROD, Productos.DESPROD, Productos.CODMARCA, Marcas.DESMARCA, 
                Precios.CODMEDIDA, Precios.EQUIVALE, Precios.COSTO, Precios.PRECIO
        FROM Productos LEFT OUTER JOIN
                             Marcas ON Productos.CODMARCA = Marcas.CODMARCA AND Productos.EMP_NIT = Marcas.EMP_NIT LEFT OUTER JOIN
                             Precios ON Productos.CODPROD = Precios.CODPROD AND Productos.EMP_NIT = Precios.EMP_NIT
        WHERE (Productos.EMP_NIT = '${sucursal}') 
                AND (Productos.CODCLAUNO = '${codigo}') 
                AND (Precios.CODMEDIDA IS NOT NULL)
                AND (Productos.NOHABILITADO=0)`
    
    
  
    execute.Query(res,qry);
     
});



router.post("/productos_filtro", async(req,res)=>{
   
    const { sucursal, filtro } = req.body;

    let qry = `
    SELECT TOP (70) Productos.CODPROD, Productos.DESPROD, Productos.CODMARCA, Marcas.DESMARCA, Precios.CODMEDIDA, Precios.EQUIVALE, 
    Precios.COSTO, Precios.PRECIO, Invsaldo.SALDOFINAL AS EXISTENCIA, Invsaldo.ENTRADAS, 
                             Invsaldo.SALIDAS
    FROM            Productos LEFT OUTER JOIN
                             Invsaldo ON Productos.CODPROD = Invsaldo.CODPROD AND Productos.EMP_NIT = Invsaldo.EMP_NIT LEFT OUTER JOIN
                             Marcas ON Productos.CODMARCA = Marcas.CODMARCA AND Productos.EMP_NIT = Marcas.EMP_NIT LEFT OUTER JOIN
                             Precios ON Productos.CODPROD = Precios.CODPROD AND Productos.EMP_NIT = Precios.EMP_NIT
    WHERE        
        (Productos.EMP_NIT = '${sucursal}') AND (Productos.DESPROD LIKE '%${filtro}%') AND (Precios.CODMEDIDA IS NOT NULL) 
        AND (Productos.NOHABILITADO = 0) 
        AND (Invsaldo.INV_ANO = year(getdate())) 
        AND (Invsaldo.INV_MES = month(getdate()))
        AND (Invsaldo.CODBODEGA='B001') 
            OR
        (Productos.EMP_NIT = '${sucursal}') 
        AND (Precios.CODMEDIDA IS NOT NULL) 
        AND (Productos.CODPROD = '${filtro}')
        AND (Productos.NOHABILITADO = 0) 
        AND (Invsaldo.INV_ANO = year(getdate())) 
        AND (Invsaldo.INV_MES = month(getdate()))
        AND (Invsaldo.CODBODEGA='B001')
            `
    

    execute.Query(res,qry);
     
});


router.post("/buscar_cliente", async(req,res)=>{
   
    const { sucursal, filtro } = req.body;

    let xqry = `
    SELECT        Empresas.EMP_MES, Empresas.EMP_ANO, Clientes.EMP_NIT, 
    Clientes.NITCLIE, Clientes.CODCLIE, Clientes.NOMCLIE, 
    Clientes.DIRCLIE, Clientes.ZONACLIE, 
    Clientes.CODDEPTO, Clientes.CODMUNI, Clientes.FAXCLIE, 
    Clientes.TELCLIE, Clientes.EMAILCLIE, Clientes.TIPOCLIE, 
    Clientes.ACEPTACHEQUE, Clientes.FECHAINGRESO, Clientes.NITFACTURA AS NIT, 
    Clientes.CODVEN, Clientes.LIMITECREDITO, Clientes.DIASCREDITO, Clientes.CODPAIS, 
    Clientes.NOMFAC, Clientes.CODBODEGA, Clientes.CEDULA, Clientes.DESCUENTO, 
    Clientes.LISTA, Clientes.CODTIPOCLIE, Clientes.COLONIA, Clientes.COMISION, Clientes.IMPUESTO1, Clientes.NUMEROREG, 
    Clientes.TEMPORADACREDITO, Clientes.TEMPORADADIAS, Clientes.FORMATOCONTA, Clientes.VENTADOLARES, Clientes.VENTAEXPORTA, Clientes.MONTOIVARET, Clientes.PORIVARET, Clientes.CODTIPOFP, 
    Clientes.UTILIZAPUNTOS, Clientes.TIPOPUNTOS, Clientes.CODPOSTAL, Clientes.NCUOTAS, Clientes.VARIASLISTAS, Clientes.DIASPRIMERCUOTA, Clientes.DIASCUOTAS, Clientes.CALCULOCUOTAS, Clientes.CLIE_CARGOAUT, 
    Clientes.TIPO_CARGOAUT, Clientes.LATITUDCLIE, Clientes.LONGITUDCLIE, 
    Clientesaldo.SALDOFINAL AS SALDO
FROM            Empresas LEFT OUTER JOIN
    Clientesaldo ON Empresas.EMP_MES = Clientesaldo.SALDO_MES AND Empresas.EMP_ANO = Clientesaldo.SALDO_ANO AND Empresas.EMP_NIT = Clientesaldo.EMP_NIT LEFT OUTER JOIN
    Clientes ON Clientesaldo.NITCLIE = Clientes.NITCLIE AND Clientesaldo.EMP_NIT = Clientes.EMP_NIT
WHERE  (NOT (Clientes.EMP_NIT IS NULL) AND Empresas.EMP_NIT='${sucursal}' AND Clientes.NOMCLIE like '%${filtro}%'
    OR
    (NOT (Clientes.EMP_NIT IS NULL) AND Empresas.EMP_NIT='${sucursal}' AND Clientes.NITFACTURA ='${filtro}'
    `
    
    let qry = `
    SELECT Clientes.NITCLIE, Clientes.NITFACTURA AS NIT, Clientes.NOMCLIE, 
        Clientes.DIRCLIE, Clientes.TELCLIE, 0 AS SALDO
        FROM Clientes
        WHERE 
            (Clientes.EMP_NIT = '${sucursal}') 
            AND (Clientes.NOMCLIE like '%${filtro}%')
                OR
            (Clientes.EMP_NIT = '${sucursal}') 
            AND (Clientes.NITCLIE ='${filtro}')
    `

    execute.Query(res,qry);
     
});


router.post("/buscar_cliente_nit", async(req,res)=>{
   
    const { sucursal, nit } = req.body;

    let qry = `
        SELECT Clientes.NITCLIE, 
        Clientes.NITFACTURA AS NIT, 
        Clientes.NOMCLIE, 
        Clientes.DIRCLIE, 
        Clientes.TELCLIE, Clientesaldo.SALDOFINAL AS SALDO
        FROM Clientes LEFT OUTER JOIN
                         Clientesaldo ON Clientes.NITCLIE = Clientesaldo.NITCLIE AND Clientes.EMP_NIT = Clientesaldo.EMP_NIT
        WHERE 
            (Clientes.EMP_NIT = '${sucursal}') 
            AND (Clientesaldo.SALDO_ANO = year(getdate())) 
            AND (Clientesaldo.SALDO_MES = month(getdate()))
            AND (Clientes.NITFACTURA ='${nit}')
            `
    

    execute.Query(res,qry);
     
});


router.post("/lista_documentos_tipo", async(req,res)=>{
    
    const {sucursal,tipo,fecha}  = req.body;
    
    let qry = '';
    qry = `SELECT  Documentos.CODDOC, Documentos.DOC_NUMERO AS CORRELATIVO, Documentos.NITCLIE AS CODCLIE, Documentos.DOC_NIT AS NIT, Clientes.NOMFAC AS NEGOCIO, Documentos.DOC_NOMREF AS NOMCLIE, 
    Documentos.DOC_DIRENTREGA AS DIRCLIE, '' AS DESMUNI, ISNULL(Documentos.DOC_TOTALVENTA, 0) AS IMPORTE, Documentos.DOC_FECHA AS FECHA, Documentos.DOC_LATITUD AS LAT, 
    Documentos.DOC_LONGITUD AS LONG, Documentos.DOC_OBS AS OBS, Documentos.DOC_MATSOLI AS DIRENTREGA, Documentos.DOC_ESTATUS AS ST, Documentos.DOC_CONTADOCREDITO AS TIPO_PAGO, 
    Documentos.DOC_NUMORDEN AS TIPO_DOC, Documentos.DOC_INTERESADO AS ENTREGA_CONTACTO, Documentos.DOC_RECIBE AS ENTREGA_TELEFONO, Documentos.DOC_MATSOLI AS ENTREGA_DIRECCION, 
    Documentos.DOC_OBS AS ENTREGA_REFERENCIA, Documentos.DOC_LATITUD AS ENTREGA_LAT, Documentos.DOC_LONGITUD AS ENTREGA_LONG, '' AS DOMICILIO
            FROM Documentos LEFT OUTER JOIN
    Tipodocumentos ON Documentos.CODDOC = Tipodocumentos.CODDOC AND Documentos.EMP_NIT = Tipodocumentos.EMP_NIT LEFT OUTER JOIN
    Clientes ON Documentos.NITCLIE = Clientes.NITCLIE AND Documentos.EMP_NIT = Clientes.EMP_NIT
            WHERE (Documentos.EMP_NIT = '${sucursal}') 
            AND (Documentos.DOC_FECHA = '${fecha}') 
            AND (Documentos.DOC_ESTATUS <> 'A') 
            AND (Tipodocumentos.TIPODOC = '${tipo}')`

  
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
                0, 0, 0, 'POS','NO',
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