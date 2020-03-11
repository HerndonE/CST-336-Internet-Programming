/*EJS: Embedded JavaScript
Template HTML file allows to code in HTML/JS in the same time

1. NodeJS looks for ejs files in "views"
2. ejs files end with .ejs
3. Have to let NodeJS engine know that we are using ejs


*/


var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(express.static("css"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");

app.get("/", function(req,res){
   // res.send("HELLO WORLD");
   res.render("home");
});

var friendList = ["Vincent", "Lidia", "Grant", "Tony", "Vitor"]
app.get("/friends", function(req,res){
    res.render("friends", {friends: friendList});
})

app.post("/addfriend",function(req,res){
  var newfriend = req.body.newfriend;
  friendList.push(newfriend);
  res.redirect("/friends");
});


app.post("/removefriend",function(req,res){
  var oldfriend = req.body.oldfriend;
  friendList.pop(oldfriend);
  res.redirect("/friends");
});

app.get("*", function(req,res){
    res.send("Page Not Found");
    res.render("error");
});


app.listen(process.env.PORT,function(){
    console.log("Server up and running");
});