const express = require("express");
const bodyParse = require("body-parser");
const morgan = require("morgan");
const config = require("./config");
const mongoose = require("mongoose");
const setupController = require("./api/controllers/setupController");
const todoController = require("./api/controllers/todoController");
const app =express();
let port = process.env.PORT || 3000;
mongoose.connect(config.getDbConnectionString());
app.use("/assets", express.static(__dirname + "/public"));
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended: true}));

app.use(morgan("dev"));

app.set("view engine", "ejs");
console.log(config.getDbConnectionString())

app.get("/", function(req,res){
    res.render("index");
});
setupController(app);
todoController(app);
app.listen(port, function(){
    console.log("App listening on port: ", port);
})