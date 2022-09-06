const express = require('express');
const aboutRouter = express.Router();

aboutRouter.get('/', (req, res)=>{
    res.render('about', {test:'Ejs is working and waving 👋'});
});
module.exports = aboutRouter;