var express = require('express');
var app = express();

// var bodyParser = require('body-parser');
// app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//check app.use
app.use(express.static(__dirname + '/www'));

app.listen(3000, function(){
    var d = new Date();
    var n = d.getHours();
    var m = d.getMinutes();
    console.log('Server has been startred at: '+ n + ' : ' +m )
})

app.get('/', function(req,res){
    res.sendFile(__dirname +"/www/form.html");
});

// route to check user credentials and report if valid
app.post('/api/login', function(req,res){
    // if there is no information from user/ just return error 
    if(!req.body){
        return res.sendStatus(400)
    } 
    var customer = {};
    customer.email = req.body.email;
    customer.upwd = req.body.upwd;
    if (req.body.email == "abc@com.au" && req.body.upwd =="123"){
        customer.valid = true;
    }else{
        customer.valid = false;
    }
    res.send(customer);
});

