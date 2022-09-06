const express = require('express');
const recordRouter = express.Router();

// //update
// recordRouter.put('/update/:id',(req, res)=>{
//     let id = +req.params.id;
//     let body = req.body;
//     let index = data.findIndex((df)=>df.id === id);
//     if(index >=0){
//         let updateData = {id:id, ...body};
//         data[index] =  updateData;
//         res.json(updateData);
//         console.log(updateData);
//     }else{
//         res.status(404).send('Id does not exist');
//     }
// });

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

module.exports = recordRouter;

