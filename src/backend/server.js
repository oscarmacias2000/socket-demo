import express from 'express';
import http from 'http'; 

const app = express();
const port = 3000;
const host = `http:/localhost:${port}`;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

http.createServer(function (req,res){
   res.writeHead("head",{'content-type': 'text/plain'});
   res.write("Hello world");
   res.end();


   app.get('/alls', (req,res,next)=>{
        res.send("estas obteniendo todas las rutas!");
        next();
   });


   app.post('/addUsers', (req,res,next)=>{
       const newUser = req.body;
       console.log('cuerpo recibido', newUser);
       res.send("ejecutado");     
       next();
})
}).listen(console.log(`el servidor esta corriendo en el puerto ${host}`));