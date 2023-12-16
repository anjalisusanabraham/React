const express = require('express');
const path = require('path');
const router = express.Router();
const app = express();
const port = 4500;
router.get('/home',(req,res) =>{
    res.sendFile(path.join(__dirname+'/template/home.html'));
})
router.get('/about',(req,res) =>{
    res.sendFile(path.join(__dirname+'/template/about.html'));
})
router.get('/services',(req,res) =>{
    res.sendFile(path.join(__dirname+'/template/services.html'));
})
router.get('/contact',(req,res) =>{
    res.sendFile(path.join(__dirname+'/template/contact.html'));
})
router.get('/product',(req,res) =>{
    res.sendFile(path.join(__dirname+'/template/product.html'));
})
app.use('/',router);
app.listen(port, ()=>console.log("server is runing"));