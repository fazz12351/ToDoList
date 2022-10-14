const express = require("express");
const bodyParser = require("body-parser");
let port = 3000;

const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public"))






app.get("/", function (req, res) {
    let days=["Sunday","Monday","Tuesday","Wednesday","Thursay","Friday"]
    let daysOfTheWeek=new Date();
    let intDAy=daysOfTheWeek.getDay();
    let currentDay=days[intDAy]
    console.log(intDAy)

    res.render("list",{Day:currentDay,
    Date:daysOfTheWeek})



})




app.listen(port, function () {
    console.log("server is running on: " + port)
})