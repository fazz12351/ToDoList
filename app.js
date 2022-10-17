const express = require("express");
const bodyParser = require("body-parser");
let port = 3000;

const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public"))

var item="";




app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")
})

app.post("/", function (req, res) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursay", "Friday", "Saturday"]
    let daysOfTheWeek = new Date();
    let intDAy = daysOfTheWeek.getDay();
    let myday = days[intDAy]
    console.log(myday)

    res.render("list", {
        Fname:req.body.Fname,
        Day:myday,
        Date: daysOfTheWeek,
        newListItem:item
    })

    // let name=req.body.Fname

    // let today=new Date();
    // let format={weekday:"long",year:"numeric",month:"long",day:"numeric"};
    // let Day=today.toLocaleDateString("en-US",format)


    // res.render("list",{
    //     Day:Day,
    //     Fname:name
    // })




})

app.post("/addItem",function(req,res){
    let item=req.body.name
    res.redirect("/")

})




app.listen(port, function () {
    console.log("server is running on: " + port)
})