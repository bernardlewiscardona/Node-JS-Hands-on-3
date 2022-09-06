//Import or Initalization
const express = require('express');
const bodyParser = require('body-parser');
const recordRouter = require('./routes/record');
const homeRouter = require('./routes/home');
const aboutRouter = require('./routes/about');
const galleryRouter = require('./routes/gallery');
const app = express();

//static file s
app.use(express.static('public'));
app.use('/style', express.static(__dirname+'public/css'));
app.use('/js', express.static(__dirname+'public/js'));
app.use('/img', express.static(__dirname+'public/img'));

//middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//routes
app.use('/record',recordRouter);
app.use('/home',homeRouter);
app.use('/about',aboutRouter);
app.use('/gallery',galleryRouter);
app.get('/', (req, res)=>{
    res.render('home', {test:'Ejs is working and waving 👋'});
});

//frontend setup
app.set('views', './views');
app.set('view engine', 'ejs');

//check connection
const port = 8080;
app.listen(port,()=>{
console.log(`You are running on port ${port}`);
});