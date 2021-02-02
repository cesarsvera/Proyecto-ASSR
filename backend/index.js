const express = require('express');
const bodyparse = require('body-parser');
const dbConnection = require('./src/conexion.js');
const connection = dbConnection();
const cors = require("cors");
const app = express();
app.use(bodyparse.json());
app.use(bodyparse.urlencoded({extended:true}));
app.use(cors());
// respond with "hello world" when a GET request is made to the homepage
app.get('/hola', function(req, res) {
    res.send('hello world');
  });


  app.post('/form', async function(req, res) {
    console.log(req.body);
    const {apellido, nombre,  correo, provincia, ciudad, principal, secundaria, passwd} = req.body
    await connection.query(`INSERT INTO user(nombre, correo, provincia, ciudad, principal, secundaria, passwd) VALUES('${nombre} ${apellido}', '${correo}', '${provincia}','${ciudad}','${principal}','${secundaria}','${passwd}')`, (err,result)=>{
        
        if (result)    
            res.redirect("http://localhost:3000");
        else
            res.status(500).send(err);
    });

    
  });


app.post('/login', async function(req, res){
    console.log(req.body);
    const {correo, passwd} = req.body
    await connection.query(`select * from user where correo = '${correo}' and passwd = '${passwd}'`, (err,result) =>{
            
            if(result.length == 0){
                
                res.redirect("http://localhost:3000/secion")
                
            
            
            //res.json(result);
            }else
                console.log(result);
                res.redirect("http://localhost:3000/anomalia")
            
            
        });
        console.log(err);
    //console.log(cont);
});





app.listen(3001,()=>{
    console.log("servidro escuchando")
})


