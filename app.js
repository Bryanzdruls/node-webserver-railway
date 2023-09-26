const express =require('express');
const app = express()
const hbs = require('hbs');
require('dotenv').config();
const port = process.env.PORT;
//HandleBars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname +'/views/partials', (e) => {})

//servir contenido estatico
app.use(express.static('./public'))
app.get('/', (req, res) => {
  res.render('home',{
    nombre: 'Brian Torres',
    titulo: 'Curso-Node',
  });
})

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/views/home.hbs');
})
app.get('/generic',(req,res)=>{
    res.render('generic',{
        nombre: 'Brian Torres',
        titulo: 'Curso-Node',
      });
})

app.get('/elements',(req,res)=>{
    res.render('elements',{
        nombre: 'Brian Torres',
        titulo: 'Curso-Node',
      });
})

app.get('*',(req,res)=>{
    res.sendFile(__dirname+'/public/404.html');
})
app.listen(port)
console.log('corriendo en: '+ port);