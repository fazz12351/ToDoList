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
    let daysOfTheWeek=new Date();
    let intDAy=daysOfTheWeek.getDay();
    console.log(intDAy)

})




app.listen(port, function () {
    console.log("server is running on: " + port)
})