const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const ejs = require("ejs");

const app = express();

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

app.get("/",function(req,res){
  res.render('index');
})

app.post("/",function(req,res){
  let PlayerName = req.body.player;
  let Urlmain = "https://www.balldontlie.io/api/v1/players?search=";
  request(Urlmain + PlayerName, function(error , response , body){
    let d = JSON.parse(body);
    res.render('result',{
      FirstName :d.data[0].first_name,
      LastName :d.data[0].last_name,
      HeightFeet:d.data[0].height_feet,
      HeightInches:d.data[0].height_inches,
      Team: d.data[0].team.full_name,
      Weight:d.data[0].weight_pounds,
      Position:d.data[0].position

    })

  })

})










app.listen(3000,function(){
  console.log("Server Running");
})
