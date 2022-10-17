const express = require("express");
const bodyParser = require("body-parser");
let port = 3000;

const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
    extended: true
}));

let items=["Milk","Bread"];
let WorkOutlist=["Bench","Squat"];

app.use(express.static("public"))




// app.get("/",function(req,res){
//     res.sendFile(__dirname+"/index.html")
// })

app.get("/", function (req, res) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursay", "Friday", "Saturday"]
    let daysOfTheWeek = new Date();
    let intDAy = daysOfTheWeek.getDay();
    let myday = days[intDAy]
    console.log(myday)

    res.render("list", {
        Fname:"Faeem",
        Day:myday,
        Date: daysOfTheWeek,
        newItems:items,
        workout:WorkOutlist

    })



})


app.post("/",function(req,res){
    item=req.body.newItem
    workoutItem=req.body.workoutItem;
    WorkOutlist.push(workoutItem)
    
    items.push(item)
    res.redirect("/")
})




app.listen(port, function () {
    console.log("server is running on: " + port)
})