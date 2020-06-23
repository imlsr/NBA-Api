const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
})

app.post("/",function(req,res){
  // console.log(req.body);
  request("https://www.balldontlie.io/api/v1/players?search=lebron", function(error , response , body){
    let data = JSON.parse(body);



  })
  console.log(data);
})










app.listen(3000,function(){
  console.log("Server Running");
})
