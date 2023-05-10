const execute = require('../connection');
const express = require('express');
const router = express.Router();

router.post("/rpt_documentos_dia", async(req,res)=>{

    const {sucursal,fecha}  = req.body;
    
    let qry = '';
    qry = `
            SELECT  Documentos.CODDOC, 
                    Documentos.DOC_NUMERO AS CORRELATIVO, 
                    Documentos.DOC_NOMREF AS CLIENTE, 
                    Documentos.DOC_DIRENTREGA AS DIRECCION,
                    (Documentos.DOC_TOTALCOSTO * 1.12) AS COSTO, 
                    Documentos.DOC_TOTALVENTA AS IMPORTE, 
                    DOCUMENTOS.FIRMAELECTRONICA AS FELUDDI
            FROM Documentos LEFT OUTER JOIN
                Tipodocumentos ON Documentos.CODDOC = Tipodocumentos.CODDOC AND Documentos.EMP_NIT = Tipodocumentos.EMP_NIT
            WHERE  (Documentos.EMP_NIT = '${sucursal}') 
            AND (Tipodocumentos.TIPODOC = 'FAC')  
            AND (Documentos.DOC_ESTATUS <> 'A') 
            AND (Documentos.DOC_FECHA = '${fecha}')
    `

    console.log(qry);
    
    execute.Query(res,qry);

});

router.post("/rpt_productos_dia", async(req,res)=>{

    const {sucursal,fecha}  = req.body;
    
    let qry = '';
    qry = `
            SELECT Docproductos.CODPROD, 
                    Docproductos.DESCRIPCION AS DESPROD, 
                    Docproductos.CANTIDADINV AS TOTALUNIDADES, 
                    (Docproductos.TOTALCOSTO * 1.12) AS COSTO, 
                    Docproductos.TOTALPRECIO AS IMPORTE
                FROM  Documentos LEFT OUTER JOIN
                             Docproductos ON Documentos.DOC_NUMERO = Docproductos.DOC_NUMERO AND Documentos.CODDOC = Docproductos.CODDOC AND Documentos.EMP_NIT = Docproductos.EMP_NIT LEFT OUTER JOIN
                             Tipodocumentos ON Documentos.CODDOC = Tipodocumentos.CODDOC AND Documentos.EMP_NIT = Tipodocumentos.EMP_NIT
                WHERE (Documentos.EMP_NIT = '${sucursal}') 
                        AND (Documentos.DOC_ESTATUS <> 'A') 
                        AND (Tipodocumentos.TIPODOC = 'FAC') 
                        AND (Documentos.DOC_FECHA = '${fecha}')
                ORDER BY Docproductos.DESCRIPCION
                    `

    console.log(qry);
    
    execute.Query(res,qry);

});

router.post("/rpt_ventas_dia", async(req,res)=>{

    const {sucursal,mes,anio}  = req.body;
    
    let qry = '';
    qry = `
        SELECT Documentos.EMP_NIT,Documentos.DOC_FECHA AS FECHA, 
        SUM(Documentos.DOC_TOTALCOSTO * 1.12) AS TOTALCOSTO, 
        SUM(Documentos.DOC_TOTALVENTA) AS TOTALVENTA
        FROM  Documentos LEFT OUTER JOIN Tipodocumentos ON Documentos.CODDOC = Tipodocumentos.CODDOC AND Documentos.EMP_NIT = Tipodocumentos.EMP_NIT
        WHERE (Documentos.EMP_NIT = '${sucursal}') 
        AND (Tipodocumentos.TIPODOC = 'FAC') 
        AND (Documentos.DOC_ANO = ${anio}) 
        AND (Documentos.DOC_MES = ${mes}) 
        AND (Documentos.DOC_ESTATUS <> 'A')
        GROUP BY Documentos.EMP_NIT,Documentos.DOC_FECHA
    `
    
    execute.Query(res,qry);

});

router.post("/rpt_total_ventas", async(req,res)=>{

    const {sucursal,mes,anio}  = req.body;
    
    let qry = '';
    qry = `
    SELECT  SUM(Documentos.DOC_TOTALCOSTO*1.12) AS TOTALCOSTO, 
            SUM(Documentos.DOC_TOTALVENTA) AS TOTALVENTA
    FROM Documentos LEFT OUTER JOIN
            Tipodocumentos ON Documentos.CODDOC = Tipodocumentos.CODDOC AND Documentos.EMP_NIT = Tipodocumentos.EMP_NIT
    WHERE (Documentos.EMP_NIT = '${sucursal}') 
    AND (Tipodocumentos.TIPODOC = 'FAC') 
    AND (Documentos.DOC_ANO = ${anio})
    AND (Documentos.DOC_MES = ${mes}) 
    AND (Documentos.DOC_ESTATUS <> 'A')
    `
    
    execute.Query(res,qry);

});

router.post("/rpt_total_compras", async(req,res)=>{

    const {sucursal,mes,anio}  = req.body;
    
    let qry = '';
    qry = `
    SELECT  SUM(Documentos.DOC_TOTALCOSTO*1.12) AS TOTALCOSTO, 
            SUM(Documentos.DOC_TOTALVENTA) AS TOTALVENTA
    FROM Documentos LEFT OUTER JOIN
            Tipodocumentos ON Documentos.CODDOC = Tipodocumentos.CODDOC AND Documentos.EMP_NIT = Tipodocumentos.EMP_NIT
    WHERE (Documentos.EMP_NIT = '${sucursal}') 
    AND (Tipodocumentos.TIPODOC = 'COM') 
    AND (Documentos.DOC_ANO = ${anio})
    AND (Documentos.DOC_MES = ${mes}) 
    AND (Documentos.DOC_ESTATUS <> 'A')
    `
    
    execute.Query(res,qry);

});

router.post("/rpt_inventarios", async(req,res)=>{

    const {sucursal,filtro}  = req.body;
    
    let qry = '';
    qry = `
        SELECT CODPROD, DESPROD, PRECIO, CODMEDIDA, EQUIVALE, 
        (ISNULL(COSTO,0)*1.12) AS COSTO, 
        (ISNULL(PROMEDIO,0)*1.12) AS PROMEDIO, 
        (ISNULL(ULTIMO,0)*1.12) AS ULTIMO, 
        SALDOFINAL AS EXISTENCIA
        FROM WEB_PRECIOS
        WHERE EMP_NIT='${sucursal}'
            AND DESPROD LIKE '%${filtro}%' 
            AND CODBODEGA='B001'
        OR
            EMP_NIT='${sucursal}'
            AND CODPROD ='${filtro}'
            AND CODBODEGA='B001'

    `
    
    execute.Query(res,qry);

});





router.post("/usuarios", async(req,res)=>{

    const {sucursal}  = req.body;
    
    let qry = '';
    qry = `
        SELECT WEB_USUARIOS.TIPO, WEB_USUARIOS.USUARIO, 
        WEB_USUARIOS.CLAVE, WEB_USUARIOS.OBJETIVO, 
        WEB_USUARIOS.CODVEN, Vendedores.NOMVEN, 
        WEB_USUARIOS.CODDOC, WEB_USUARIOS.CODDOC_COTIZ,
        ISNULL(WEB_USUARIOS.CODCLAUNO,'SN') AS CODCLAUNO
        FROM WEB_USUARIOS LEFT OUTER JOIN Vendedores ON WEB_USUARIOS.CODVEN = Vendedores.CODVEN AND WEB_USUARIOS.EMP_NIT = Vendedores.EMP_NIT
        WHERE (WEB_USUARIOS.EMP_NIT = '${sucursal}')
        ORDER BY WEB_USUARIOS.TIPO
    `
    
    execute.Query(res,qry);

});

router.post("/usuarios_new", async(req,res)=>{

    const {sucursal,tipo,nombre,clave,codven,objetivo,ped,cot,codclauno}  = req.body;

    let qry = '';
    qry = `
        INSERT INTO WEB_USUARIOS 
        (EMP_NIT,TIPO,USUARIO,CLAVE,OBJETIVO,CODVEN,CODDOC,CODDOC_COTIZ,CODCLAUNO)  
        SELECT '${sucursal}' AS EMP_NIT, '${tipo}' AS TIPO, 
        '${nombre}' AS USUARIO, '${clave}' AS CLAVE, ${objetivo} AS OBJETIVO,
        ${codven} AS CODVEN, '${ped}' AS CODDOC, '${cot}' AS CODDOC_COTIZ, '${codclauno}' AS CODCLAUNO
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

    const {sucursal,fecha,fechaf,tipodoc}  = req.body;
    let tipo = '';
    if(tipodoc=='FAC'){tipo=`FAC','ENF`}else{tipo=tipodoc};

    let qry = '';
    qry = `
    SELECT Documentos.CODVEN,
            ISNULL(WEB_USUARIOS.USUARIO,'SN') AS NOMVEN, 
            COUNT(Documentos.DOC_NUMERO) AS PEDIDOS, 
            SUM(Documentos.DOC_TOTALCOSTO*1.12) AS COSTO, 
            SUM(Documentos.DOC_TOTALVENTA) AS IMPORTE
        FROM Documentos LEFT OUTER JOIN
            WEB_USUARIOS ON Documentos.CODVEN = WEB_USUARIOS.CODVEN AND Documentos.EMP_NIT = WEB_USUARIOS.EMP_NIT LEFT OUTER JOIN
            Tipodocumentos ON Documentos.CODDOC = Tipodocumentos.CODDOC AND Documentos.EMP_NIT = Tipodocumentos.EMP_NIT
    WHERE (Documentos.EMP_NIT = '${sucursal}') 
            AND (Documentos.DOC_FECHA BETWEEN '${fecha}' AND '${fechaf}') 
            AND (Tipodocumentos.TIPODOC IN('${tipo}'))
            AND (Documentos.DOC_ESTATUS<>'A')
            AND (WEB_USUARIOS.TIPO='VEN')
    GROUP BY Documentos.CODVEN,WEB_USUARIOS.USUARIO
    ORDER BY WEB_USUARIOS.USUARIO
    `

    
    execute.Query(res,qry);

});


router.post("/vendedores_dia_documentos", async(req,res)=>{

    const {sucursal,codven,fecha,fechaf,tipodoc}  = req.body;
    let tipo = '';
    if(tipodoc=='FAC'){tipo=`FAC','ENF`}else{tipo=tipodoc};

    let qry = '';
    qry = `
    SELECT Documentos.CODDOC,Documentos.DOC_NUMERO, 
        (Documentos.DOC_TOTALCOSTO*1.12) AS COSTO, 
        Documentos.DOC_TOTALVENTA AS IMPORTE
        FROM Documentos LEFT OUTER JOIN
            Vendedores ON Documentos.CODVEN = Vendedores.CODVEN AND Documentos.EMP_NIT = Vendedores.EMP_NIT LEFT OUTER JOIN
            Tipodocumentos ON Documentos.CODDOC = Tipodocumentos.CODDOC AND Documentos.EMP_NIT = Tipodocumentos.EMP_NIT
    WHERE (Documentos.EMP_NIT = '${sucursal}') 
            AND (Documentos.DOC_FECHA  BETWEEN '${fecha}' AND '${fechaf}') 
            AND (Tipodocumentos.TIPODOC IN('${tipo}'))
            AND (Documentos.CODVEN=${codven})
            AND (Documentos.DOC_ESTATUS<>'A')
    ORDER BY Documentos.CODDOC, Documentos.DOC_NUMERO
    `
    
    execute.Query(res,qry);

});

router.post("/productos_dia", async(req,res)=>{

    const {sucursal,fecha,fechaf,tipodoc}  = req.body;
    
    let tipo = '';
    if(tipodoc=='FAC'){tipo=`FAC','ENF`}else{tipo=tipodoc}; 

    let qry = `
    SELECT        Docproductos.CODPROD, Docproductos.DESCRIPCION AS DESPROD, SUM(Docproductos.CANTIDADINV) AS TOTALUNIDADES, SUM(Docproductos.TOTALCOSTO * 1.12) AS COSTO, SUM(Docproductos.TOTALPRECIO) 
                         AS IMPORTE
FROM            Documentos LEFT OUTER JOIN
                         WEB_USUARIOS ON Documentos.CODVEN = WEB_USUARIOS.CODVEN AND Documentos.EMP_NIT = WEB_USUARIOS.EMP_NIT LEFT OUTER JOIN
                         Docproductos ON Documentos.DOC_NUMERO = Docproductos.DOC_NUMERO AND Documentos.CODDOC = Docproductos.CODDOC AND Documentos.EMP_NIT = Docproductos.EMP_NIT LEFT OUTER JOIN
                         Tipodocumentos ON Documentos.CODDOC = Tipodocumentos.CODDOC AND Documentos.EMP_NIT = Tipodocumentos.EMP_NIT
WHERE        (Documentos.EMP_NIT = '${sucursal}') 
            AND (Documentos.DOC_FECHA BETWEEN '${fecha}' AND '${fechaf}') 
            AND (Documentos.DOC_ESTATUS <> 'A') AND (Tipodocumentos.TIPODOC IN('${tipo}')) AND 
                         (Docproductos.CODPROD IS NOT NULL) 
                         AND (WEB_USUARIOS.TIPO='VEN')
GROUP BY Docproductos.DESCRIPCION, Docproductos.CODPROD
ORDER BY Docproductos.DESCRIPCION
    `;

    execute.Query(res,qry);

});

router.post("/productos_vendedor_dia", async(req,res)=>{

    const {sucursal,codven,fecha,fechaf,tipodoc}  = req.body;
    let tipo = '';
    if(tipodoc=='FAC'){tipo=`FAC','ENF`}else{tipo=tipodoc};

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
        AND (Documentos.DOC_FECHA  BETWEEN '${fecha}' AND '${fechaf}')
        AND (Documentos.CODVEN = ${codven}) 
        AND (Documentos.DOC_ESTATUS <> 'A') 
        AND (Tipodocumentos.TIPODOC IN('${tipo}'))
        AND (Docproductos.CODPROD IS NOT NULL)
        GROUP BY Docproductos.DESCRIPCION, Docproductos.CODPROD
        ORDER BY Docproductos.DESCRIPCION
    `
    
    execute.Query(res,qry);

});



module.exports = router;