const express = require('express');
const galleryRouter = express.Router();

let data = [
    {id:1, imgSrc:"https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg", name:"Marko", company:"KodeGo", jobDesrciption: "Software Eng"},
    {id:2, imgSrc:"https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg",name:"Arvi", company:"KodeGo", jobDesrciption: "Mobile Dev"},
    {id:3, imgSrc:"https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg",name:"Rhay", company:"KodeGo", jobDesrciption: "Web Dev"},
    {id:4, imgSrc:"https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg",name:"Buboy", company:"KodeGo", jobDesrciption: "Full Stack Dev"},
    {id:5, imgSrc:"https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg",name:"Jann", company:"KodeGo", jobDesrciption: "UI/UX Eng"}
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
        res.render('record', {records: check});
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
    res.redirect('/gallery');
});

//delete by id
galleryRouter.delete('/:id', (req, res)=>{
    let id = +req.params.id;
    let index = data.findIndex((df)=>parseInt(df.id) === parseInt(id));
    if(index>=0){
        data.splice(index, 1);  
        res.redirect('/gallery');
    }else{
        res.status(404).send('ID not found');
    }
});

//update
galleryRouter.get('/update/:id',(req, res)=>{
    let check = data.find((item)=>{
        return parseInt(item.id) === parseInt(req.params.id)
    });
    if(check){
        res.render('edit', {records: check});
    }else{
        res.status(404).send('ID not found!');
    }
});

galleryRouter.put('/update/:id',(req, res)=>{
    let id = +req.params.id;
    let body = req.body;
    let index = data.findIndex((df)=>parseInt(df.id) === parseInt(id));

    if(index >=0){
        let updateData = {id:id, ...body};
        data[index] =  updateData;
        res.redirect('/gallery');
    }else{
    res.status(404).send('Id does not exist');
    }
    
});

module.exports = galleryRouter;