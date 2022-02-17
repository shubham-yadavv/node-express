const express = require("express")
const path = require('path')
const app = express();
const hostname = '127.0.0.1';
const port = 80;

app.use('/static', express.static('static')) // serrving static files

app.set('view engine', 'pug')  // set template engine as pug

app.set('views', path.join(__dirname, 'views'))

app.get('/demo', function (req, res) {
    res.status(200).render('demo', { title: 'Hey shubh', message: 'Hello there!' })
  })

  app.get('/', function(req, res) {
    res.status(200).render('index.pug');
  });

app.get("/about", (req, res)=>{
    res.send("about get page express app");
})

app.post("/about", (req, res)=>{
    res.send("about post page express app");
})

app.listen(port,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
})