const express = require('express');
const path = require('path');
const router = express.Router();
const app = express();
const port = 4500;
app.set('view engine','ejs');
app.set('views',__dirname+'/template');
router.get('/',(req,res) => {
    var data = {title:'student data',student_data:[
        {
            name : 'Arun',
            class : 'Plus one',
            stream : 'science',
            mark : 90,
            grade : 'A plus'
        },
        {
            name : 'Anu',
            class : 'Plus one',
            stream : 'science',
            mark : 80,
            grade : 'B plus'
        },
        {
            name : 'Bindhu',
            class : 'Plus one',
            stream : 'science',
            mark : 91,
            grade : 'A '
        },
        {
            name : 'Mini',
            class : 'Plus one',
            stream : 'science',
            mark : 95,
            grade : 'A plus'
        },
        {
            name : 'Vinsha',
            class : 'Plus one',
            stream : 'science',
            mark : 99,
            grade : 'A plus'
        },
        {
            name : 'Nayana',
            class : 'Plus one',
            stream : 'science',
            mark : 87,
            grade : ' A'
        },
        {
            name : 'Fidha',
            class : 'Plus one',
            stream : 'science',
            mark : 75,
            grade : 'B'
        },
        {
            name : 'Shiji',
            class : 'Plus one',
            stream : 'science',
            mark : 91,
            grade : 'A plus'
        },
        {
            name : 'Vibin',
            class : 'Plus one',
            stream : 'science',
            mark : 95,
            grade : 'A plus'
        },
        {
            name : 'Athul',
            class : 'Plus one',
            stream : 'science',
            mark : 70,
            grade : 'c plus'
        }
    ]};
    res.render('index',data);
});

app.use(express.static(__dirname+'/public'));
app.use('/',router);
app.listen(port,()=>console.log('server is runing'));