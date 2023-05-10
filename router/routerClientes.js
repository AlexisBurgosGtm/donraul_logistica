const execute = require('../connection');
const express = require('express');
const router = express.Router();



router.post("/solicitud_cambios_cliente", async(req,res)=>{

    const{sucursal,codclie,nitclie,tiponegocio,negocio,nomclie,dirclie,lat,long} = req.body;

    let qry = `INSERT INTO ME_CENSO_SOLICITUDES (
            CODSUCURSAL, CODCLIE,NITCLIE,TIPONEGOCIO,NEGOCIO,NOMCLIE,DIRCLIE,LAT,LONG)
    VALUES ('${sucursal}',${codclie},'${nitclie}','${tiponegocio}','${negocio}','${nomclie}','${dirclie}',${lat},${long});`
    
 
    
     execute.Query(res,qry);
     
});



// BUSCA CLIENTE POR NOMBRE
router.get("/buscarcliente", async(req,res)=>{
    const {empnit,filtro} = req.query;
        
    let qry ='';

    qry = `SELECT TOP 50
            Clientes.NITCLIE AS CODCLIE, 
            Clientes.NITFACTURA AS NIT, 
            Clientes.NOMCLIE, Clientes.DIRCLIE, 
            Clientes.CODMUNI AS CODMUNICIPIO, 
            Municipios.DESMUNI AS DESMUNICIPIO, 
            Clientes.CODDEPTO, Departamentos.DESDEPTO, 
            Clientes.LISTA AS PRECIO, 0 AS SALDO, 
            ISNULL(Clientes.LATITUD, 0) AS LAT, 
            ISNULL(Clientes.LONGITUD, 0) AS LONG
            FROM Clientes LEFT OUTER JOIN
            Municipios ON Clientes.EMP_NIT = Municipios.EMP_NIT AND 
            Clientes.CODMUNI = Municipios.CODMUNI LEFT OUTER JOIN
            Departamentos ON Clientes.EMP_NIT = Departamentos.EMP_NIT AND 
            Clientes.CODDEPTO = Departamentos.CODDEPTO
        WHERE (Clientes.EMP_NIT = '${empnit}') 
        AND (Clientes.NOMCLIE LIKE '%${filtro}%')
            OR
            (Clientes.EMP_NIT = '${empnit}') 
        AND (Clientes.NITFACTURA LIKE '%${filtro}%')
        `     
    
    execute.Query(res,qry);

});

// AGREGA UN NUEVO CLIENTE
router.post("/clientes_nuevo", async(req,res)=>{
    const {fecha,codven,empnit,nitclie,nomclie,dirclie,coddepto,codmunicipio,telclie,emailclie,lat,long} = req.body;
    
          let qry = `
            INSERT INTO CLIENTES (
                EMP_NIT, NITCLIE, CODCLIE, NOMCLIE, DIRCLIE, CODDEPTO,
                CODMUNI, TELCLIE, EMAILCLIE, TIPOCLIE, ACEPTACHEQUE, FECHAINGRESO,
                NITFACTURA, CODVEN, LIMITECREDITO, DIASCREDITO, CODPAIS, NOMFAC, CODBODEGA, DESCUENTO, CODTIPOCLIE, COMISION, IMPUESTO1, TEMPORADACREDITO, TEMPORADADIAS,
                VENTADOLARES, VENTAEXPORTA, MONTOIVARET, PORIVARET, CODTIPOFP, UTILIZAPUNTOS,
                TIPOPUNTOS, CODPOSTAL, NCUOTAS, VARIASLISTAS, DIASPRIMERCUOTA, DIASCUOTAS,
                CALCULOCUOTAS, CLIE_CARGOAUT, TIPO_CARGOAUT, LATITUDCLIE, LONGITUDCLIE,
                LATITUD, LONGITUD, CLIE_BONIPROD, CLIE_CALCULOBONIPROD, MEMBRESIA, CLIE_INTERCONSUMO
                ) 
                SELECT '${empnit}' AS EMP_NIT, 
                '${nitclie}' AS NITCLIE, 
                0 AS CODCLIE, 
                '${nomclie}' AS NOMCLIE, '${dirclie}' AS DIRCLIE, 
                '${coddepto}' AS CODDEPTO,
                '${codmunicipio}' AS CODMUNI, 
                '${telclie}' AS TELCLIE, 
                '' AS EMAILCLIE, 'P' AS TIPOCLIE, 0 AS ACEPTACHEQUE, 
                '${fecha}' AS FECHAINGRESO,
                '${nitclie}' AS NITFACTURA, ${codven} AS CODVEN, 1 AS LIMITECREDITO, 
                0 AS DIASCREDITO, 'GT' AS CODPAIS, 
                '${nomclie}' AS NOMFAC, 'B001' AS CODBODEGA,
                0 AS DESCUENTO, 'A' AS CODTIPOCLIE, 0 AS COMISION, 0 AS IMPUESTO1, 
                0 AS TEMPORADACREDITO, 0 AS TEMPORADADIAS,
                0 AS VENTADOLARES, 0 AS VENTAEXPORTA, 0 AS MONTOIVARET, 0 AS PORIVARET, 
                0 AS CODTIPOFP, 0 AS UTILIZAPUNTOS,
                'NUNCA' AS TIPOPUNTOS, '1001' AS CODPOSTAL, 0 AS NCUOTAS, 0 AS VARIASLISTAS, 
                0 AS DIASPRIMERCUOTA, 0 AS DIASCUOTAS,
                0 AS CALCULOCUOTAS, 0 AS CLIE_CARGOAUT, 0 AS TIPO_CARGOAUT, 
                ${lat} AS LATITUDCLI, ${long} AS LONGITUDCLIE,
                '${lat}' AS LATITUD, '${long}' AS LONGITUD,
                0 AS CLIE_BONIPROD, 'D' AS CLIE_CALCULOBONIPROD, 0 AS MEMBRESIA, 
                0 AS CLIE_INTERCONSUMO                
            `         
  
            console.log(qry);
            
    execute.Query(res,qry);

});

router.post("/clientes_historial", async(req,res)=>{
   
        const {sucursal,codigo} = req.body;
    
          let qry = `
          SELECT        Documentos.DOC_FECHA AS FECHA, Documentos.DOC_NOMREF AS NOMCLIE, Docproductos.CODPROD, 
          Docproductos.DESCRIPCION AS DESPROD, 
          Docproductos.CANTIDADINV AS CANTIDAD, ISNULL(Docproductos.PRECIO,0) AS PRECIO, 
          ISNULL(Docproductos.TOTALPRECIO,0) AS TOTALPRECIO
          FROM            Documentos LEFT OUTER JOIN
                                   Tipodocumentos ON Documentos.CODDOC = Tipodocumentos.CODDOC AND Documentos.EMP_NIT = Tipodocumentos.EMP_NIT LEFT OUTER JOIN
                                   Docproductos ON Documentos.DOC_NUMERO = Docproductos.DOC_NUMERO AND Documentos.CODDOC = Docproductos.CODDOC AND Documentos.EMP_NIT = Docproductos.EMP_NIT
          WHERE        (Documentos.NITCLIE = '${codigo}') AND (Documentos.DOC_ESTATUS <> 'A') AND (Documentos.EMP_NIT = '${sucursal}') AND (Tipodocumentos.TIPODOC = 'FAC')
          ORDER BY DOCUMENTOS.DOC_FECHA DESC
            `         
  
    execute.Query(res,qry);

});

//LISTADO DE MUNICIPIOS EN EL SISTEMA
router.get("/municipios", async(req,res)=>{
    const {empnit} = req.query;
    let qry ='';

    qry = `SELECT CODMUNI AS CODMUNICIPIO, DESMUNI AS DESMUNICIPIO 
    FROM MUNICIPIOS WHERE EMP_NIT='${empnit}' 
    ORDER BY DESMUNI`         

    execute.Query(res,qry);
});

//LISTADO DE MUNICIPIOS EN EL SISTEMA
router.get("/departamentos", async(req,res)=>{
    const {empnit} = req.query;
    let qry ='';

    qry = `SELECT CODDEPTO, DESDEPTO 
        FROM DEPARTAMENTOS 
        WHERE EMP_NIT='${empnit}' 
        ORDER BY DESDEPTO DESC`         

    execute.Query(res,qry);
    
});



module.exports = router;
