const express = require('express');
const recordRouter = express.Router();


// //delete by id
// recordRouter.delete('/delete/:id', (req, res)=>{
//     let id = +req.params.id;
//     let index = data.findIndex((df)=>df.id === id);
//     if(index>=0){
//         data.splice(index, 2);  
//         res.status(201).send(`Data with ID:${index} is Deleted`);
//     }else{
//         res.status(404).send('ID not found');
//     }
// });
recordRouter.get('/', (req, res)=>{
    res.render('record', {test:'Ejs is working and waving 👋'});
});



module.exports = recordRouter;

