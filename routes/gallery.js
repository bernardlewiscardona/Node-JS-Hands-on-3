const express = require('express');
const galleryRouter = express.Router();

let data = [
    {id:1, name:"Marko", company:"KodeGo", jobDesrciption: "Software Eng"},
    {id:2, name:"Arvi", company:"KodeGo", jobDesrciption: "Mobile Dev"},
    {id:3, name:"Rhay", company:"KodeGo", jobDesrciption: "Web Dev"},
    {id:4, name:"Buboy", company:"KodeGo", jobDesrciption: "Full Stack Dev"},
    {id:5, name:"Jann", company:"KodeGo", jobDesrciption: "UI/UX Eng"}
];

galleryRouter.get('/', (req, res)=>{
    res.render('gallery', {data: data});
    //res.status(201).json(dataRecord);
});

//get data by id 
galleryRouter.get('/:id',(req, res)=>{
    //find items by id
    let check = data.find((item)=>{
        return item.id === parseInt(req.params.id);
    });
    //verify the data by id
    if(check){
        res.render('view', {records: check});
    }else{
        res.status(404).send('ID not found!');
    }
});

//add
galleryRouter.post('/',(req, res)=>{
    let body = req.body;
    //let param = req.params
    console.log(`Data from the client: ${body}`);
    data.push(body);
    console.log(data);
    //data.push(param);
    res.redirect('gallery');
});



module.exports = galleryRouter;