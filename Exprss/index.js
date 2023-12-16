const express = require('express');
const path = require('path');
const router = express.Router();
const app = express();
const port = 4500;
app.set('view engine','ejs');
app.set('views',__dirname+'/views');
const products = [{name:'apple',price:200},{name:'orange',price:150},{name:'mango',price:100}];
router.get('/ejs',(req,res)=>{
    res.render('index',{title:'Anjali Abraham',product:products});
})
// app.get('/',(req,res)=>res.send(path.join(__dirname+'/template/home.html')));  
router.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname+'/template/home.html'));
})   
router.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname+'/template/about.html'));
})   
router.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname+'/template/contact.html'));
})   
router.get('/product',(req,res)=>{
    res.sendFile(path.join(__dirname+'/template/product.html'));
}) 
 router.get('/services',(req,res)=>{
    res.sendFile(path.join(__dirname+'/template/services.html'));
})  
// app.get('/home',(req,res)=>res.send('This is home')); 
// app.get('/aboutus',(req,res)=>res.send('This is about us'));       
// app.get('/productus',(req,res)=>res.send('This is product us'));       
// app.get('/contactus',(req,res)=>res.send('This is contact us'));      
app.use('/',router); 
app.listen(port,()=>console.log("Server is runing"));