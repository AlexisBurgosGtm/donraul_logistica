const execute = require('../connection');
const express = require('express');
const router = express.Router();


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

    let qry = `
        SELECT Clientes.NITCLIE, Clientes.NITFACTURA AS NIT, Clientes.NOMCLIE, 
        Clientes.DIRCLIE, Clientes.TELCLIE, Clientesaldo.SALDOFINAL AS SALDO
        FROM Clientes LEFT OUTER JOIN
                         Clientesaldo ON Clientes.NITCLIE = Clientesaldo.NITCLIE AND Clientes.EMP_NIT = Clientesaldo.EMP_NIT
        WHERE 
            (Clientes.EMP_NIT = '${sucursal}') 
            AND (Clientesaldo.SALDO_ANO = year(getdate())) 
            AND (Clientesaldo.SALDO_MES = month(getdate()))
            AND (Clientes.NOMCLIE like '%${filtro}%')
                OR
            (Clientes.EMP_NIT = '${sucursal}') 
            AND (Clientesaldo.SALDO_ANO = year(getdate())) 
            AND (Clientesaldo.SALDO_MES = month(getdate()))
            AND (Clientes.NITCLIE ='${filtro}')
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

module.exports = router;