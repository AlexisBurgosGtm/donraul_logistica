const execute = require('../connection');
const express = require('express');
const router = express.Router();

router.get("/login",async(req,res)=>{

    const {codsucursal,user,pass} = req.query;

    

            let qry ='';
            qry = `SELECT CODVEN AS CODIGO, USUARIO, TIPO, CODDOC, CODDOC_COTIZ AS COTIZ, 
                    EMP_NIT AS CODSUCURSAL, ISNULL(OBJETIVO,100000) AS OBJETIVO 
                    FROM WEB_USUARIOS 
                    WHERE EMP_NIT='${codsucursal}' AND USUARIO='${user}' AND CLAVE='${pass}' `;

    execute.Query(res,qry);
});

// ACTUALIZA LA UBICACIÓN GPS DEL USUARIO PARA REVISARLO EN UN MAPA
router.put("/location",async(req,res)=>{

    const {sucursal,codven,lat,long,horamin,fecha} = req.body;
    
    let qry ='';
    qry = `UPDATE ME_USUARIOS SET LAT=${lat}, LONG=${long}, HORAMIN='${horamin}', FECHA='${fecha}'
     WHERE CODSUCURSAL='${sucursal}' AND CODUSUARIO=${codven}`;
    
    execute.Query(res,qry);
});



// OBTIENE LA LISTA DE VENDEDORES DISPONIBLES DE LA LISTA DE USUARIOS
router.post("/vendedores", async(req,res)=>{
    
    const {sucursal} = req.body;
        
    let qry =''; 
    qry = `SELECT CODVEN AS CODIGO, 
            NOMVEN AS NOMBRE
                FROM VENDEDORES 
                WHERE EMP_NIT='${sucursal}'
                AND NOHABILITADOVEN=0 
                ORDER BY NOMVEN`;     
    
    
    execute.Query(res,qry);

});



module.exports = router;
