const express = require('express');
const homeRouter = express.Router();

homeRouter.get('/', (req, res)=>{
    res.render('home', {test:'Ejs is working and waving 👋'});
});
module.exports = homeRouter;