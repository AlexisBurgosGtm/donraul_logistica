const execute = require('./connection');
const express = require('express');
const router = express.Router();








router.post("/usuarios", async(req,res)=>{

    const {sucursal}  = req.body;
    
    let qry = '';
    qry = `
        SELECT WEB_USUARIOS.TIPO, WEB_USUARIOS.USUARIO, WEB_USUARIOS.CLAVE, WEB_USUARIOS.OBJETIVO, WEB_USUARIOS.CODVEN, Vendedores.NOMVEN, WEB_USUARIOS.CODDOC, WEB_USUARIOS.CODDOC_COTIZ
        FROM WEB_USUARIOS LEFT OUTER JOIN Vendedores ON WEB_USUARIOS.CODVEN = Vendedores.CODVEN AND WEB_USUARIOS.EMP_NIT = Vendedores.EMP_NIT
        WHERE (WEB_USUARIOS.EMP_NIT = '${sucursal}')
        ORDER BY WEB_USUARIOS.TIPO
    `
    
    execute.Query(res,qry);

});

router.post("/usuarios_new", async(req,res)=>{

    const {sucursal,tipo,nombre,clave,codven,objetivo,ped,cot}  = req.body;

    let qry = '';
    qry = `
        INSERT INTO WEB_USUARIOS 
        (EMP_NIT,TIPO,USUARIO,CLAVE,OBJETIVO,CODVEN,CODDOC,CODDOC_COTIZ)  
        SELECT '${sucursal}' AS EMP_NIT, '${tipo}' AS TIPO, 
        '${nombre}' AS USUARIO, '${clave}' AS CLAVE, ${objetivo} AS OBJETIVO,
        ${codven} AS CODVEN, '${ped}' AS CODDOC, '${cot}' AS CODDOC_COTIZ
    `
    
    execute.Query(res,qry);

});


router.post("/usuarios_delete", async(req,res)=>{

    const {sucursal,tipo,nombre,clave}  = req.body;

    let qry = '';
    qry = `
            DELETE FROM WEB_USUARIOS
            WHERE EMP_NIT='${sucursal}' AND TIPO='${tipo}' 
            AND USUARIO='${nombre}' AND CLAVE='${clave}';  `
    
    execute.Query(res,qry);

});



router.post("/vendedores_dia", async(req,res)=>{

    const {sucursal,fecha,tipodoc}  = req.body;
    
    let qry = '';
    qry = `
    SELECT Documentos.CODVEN,Vendedores.NOMVEN, 
            COUNT(Documentos.DOC_NUMERO) AS PEDIDOS, 
            SUM(Documentos.DOC_TOTALCOSTO*1.12) AS COSTO, 
            SUM(Documentos.DOC_TOTALVENTA) AS IMPORTE
        FROM Documentos LEFT OUTER JOIN
            Vendedores ON Documentos.CODVEN = Vendedores.CODVEN AND Documentos.EMP_NIT = Vendedores.EMP_NIT LEFT OUTER JOIN
            Tipodocumentos ON Documentos.CODDOC = Tipodocumentos.CODDOC AND Documentos.EMP_NIT = Tipodocumentos.EMP_NIT
    WHERE (Documentos.EMP_NIT = '${sucursal}') 
            AND (Documentos.DOC_FECHA = '${fecha}') 
            AND (Tipodocumentos.TIPODOC IN('${tipodoc}'))
            AND (Documentos.DOC_ESTATUS<>'A')
    GROUP BY Documentos.CODVEN,Vendedores.NOMVEN
    ORDER BY Vendedores.NOMVEN
    `
    
    execute.Query(res,qry);

});


router.post("/vendedores_dia_documentos", async(req,res)=>{

    const {sucursal,codven,fecha,tipodoc}  = req.body;
    
    let qry = '';
    qry = `
    SELECT Documentos.CODDOC,Documentos.DOC_NUMERO, 
        (Documentos.DOC_TOTALCOSTO*1.12) AS COSTO, 
        Documentos.DOC_TOTALVENTA AS IMPORTE
        FROM Documentos LEFT OUTER JOIN
            Vendedores ON Documentos.CODVEN = Vendedores.CODVEN AND Documentos.EMP_NIT = Vendedores.EMP_NIT LEFT OUTER JOIN
            Tipodocumentos ON Documentos.CODDOC = Tipodocumentos.CODDOC AND Documentos.EMP_NIT = Tipodocumentos.EMP_NIT
    WHERE (Documentos.EMP_NIT = '${sucursal}') 
            AND (Documentos.DOC_FECHA = '${fecha}') 
            AND (Tipodocumentos.TIPODOC IN('${tipodoc}'))
            AND (Documentos.CODVEN=${codven})
            AND (Documentos.DOC_ESTATUS<>'A')
    ORDER BY Documentos.CODDOC, Documentos.DOC_NUMERO
    `
    
    execute.Query(res,qry);

});

router.post("/productos_dia", async(req,res)=>{

    const {sucursal,fecha,tipodoc}  = req.body;
    
    let qry = '';
    qry = `
        SELECT Docproductos.CODPROD, 
        Docproductos.DESCRIPCION AS DESPROD, 
        SUM(Docproductos.CANTIDADINV) AS TOTALUNIDADES, 
        SUM(Docproductos.TOTALCOSTO*1.12) AS COSTO, SUM(Docproductos.TOTALPRECIO) AS IMPORTE
        FROM  Documentos LEFT OUTER JOIN
            Docproductos ON Documentos.DOC_NUMERO = Docproductos.DOC_NUMERO AND Documentos.CODDOC = Docproductos.CODDOC AND Documentos.EMP_NIT = Docproductos.EMP_NIT LEFT OUTER JOIN
            Tipodocumentos ON Documentos.CODDOC = Tipodocumentos.CODDOC AND Documentos.EMP_NIT = Tipodocumentos.EMP_NIT
        WHERE (Documentos.EMP_NIT = '${sucursal}') AND (Documentos.DOC_FECHA = '${fecha}') 
            AND (Documentos.DOC_ESTATUS <> 'A') 
            AND (Tipodocumentos.TIPODOC = '${tipodoc}')
            AND (Docproductos.CODPROD IS NOT NULL)
        GROUP BY Docproductos.DESCRIPCION, Docproductos.CODPROD
    `
    
    execute.Query(res,qry);

});

router.post("/productos_vendedor_dia", async(req,res)=>{

    const {sucursal,codven,fecha,tipodoc}  = req.body;
    
    let qry = '';
    qry = `
        SELECT Docproductos.CODPROD, 
        Docproductos.DESCRIPCION AS DESPROD, 
        SUM(Docproductos.CANTIDADINV) AS TOTALUNIDADES, 
        SUM(Docproductos.TOTALCOSTO*1.12) AS COSTO, 
        SUM(Docproductos.TOTALPRECIO) AS IMPORTE
        FROM  Documentos LEFT OUTER JOIN
            Docproductos ON Documentos.DOC_NUMERO = Docproductos.DOC_NUMERO AND Documentos.CODDOC = Docproductos.CODDOC AND Documentos.EMP_NIT = Docproductos.EMP_NIT LEFT OUTER JOIN
            Tipodocumentos ON Documentos.CODDOC = Tipodocumentos.CODDOC AND Documentos.EMP_NIT = Tipodocumentos.EMP_NIT
        WHERE (Documentos.EMP_NIT = '${sucursal}') 
        AND (Documentos.DOC_FECHA = '${fecha}')
        AND (Documentos.CODVEN = ${codven}) 
        AND (Documentos.DOC_ESTATUS <> 'A') 
        AND (Tipodocumentos.TIPODOC = '${tipodoc}')
        AND (Docproductos.CODPROD IS NOT NULL)
        GROUP BY Docproductos.DESCRIPCION, Docproductos.CODPROD
    `
    
    execute.Query(res,qry);

});


module.exports = router;