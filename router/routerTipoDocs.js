const execute = require('./connection');
const express = require('express');
const router = express.Router();


router.post("/series", async(req,res)=>{
    const {sucursal} = req.body;
        
    let qry ='';

    qry =  `
        SELECT CODDOC,CORRELATIVO,TIPODOC FROM TIPODOCUMENTOS 
        WHERE EMP_NIT='${sucursal}' AND TIPODOC IN('PED','COT')`      
    
    execute.Query(res,qry);

});

// VENTAS BUSCAR PRODUCTO POR DESCRIPCION
router.get("/correlativodoc", async(req,res)=>{
   
    const {empnit,tipo,coddoc} = req.query;
        
    let qry ='';

    qry = `SELECT CODDOC,CORRELATIVO FROM TIPODOCUMENTOS 
    WHERE EMP_NIT='${empnit}' AND TIPODOC='${tipo}' AND CODDOC='${coddoc}'`     
    
    execute.Query(res,qry);

});


router.post("/correlativodoc", async(req,res)=>{
    const {empnit,tipo,coddoc} = req.body;
        
    let qry ='';

    qry =  `SELECT CODDOC,CORRELATIVO FROM TIPODOCUMENTOS 
    WHERE EMP_NIT='${empnit}' AND TIPODOC='${tipo}' AND CODDOC='${coddoc}'`      
    
    execute.Query(res,qry);

});


module.exports = router;
