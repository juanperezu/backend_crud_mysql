const express = require('express');//tabNIne
const router = express.Router();
const mysqlConnection =require('../db/db');

/// contenido y configuraciones
router.get('/',(req,res)=>{
mysqlConnection.query('SELECT * FROM modulos',(err,rows,fields)=>{
    // si no hay un error
    if(!err){
     // verdadero
     res.json(rows);  // traer las filas con los datos   
    }else{ // sino  
    // entonces hay un error
    console.log(err);
    } // fin si
});// fin conexion
});//  router.get fin de mostrar todos datos de la tabla modulos

router.get('/modulo/:id',(req,res)=>{
const { id } = req.params; // params´id
mysqlConnection.query('SELECT * FROM modulos WHERE id =?',[id],
(err,rows,fields)=>{

if(!err){
res.json(rows[0]); // traiga los otros campos
}else{
    console.log(err);
}
})// fin conexion
});
 // Borrar probar desde de postman
router.delete('/borrar/:id',(req,res)=>{
    const { id } = req.params; // params´id
    mysqlConnection.query('DELETE FROM modulos WHERE id =?',[id],
    (err,rows,fields)=>{
    
    if(!err){
    res.json({message: 'Módulo '+ id + 'Borrado'}); // traiga los otros campos
    }else{
        console.log(err);
    }})// fin conexion
    });
// exportar
module.exports = router;