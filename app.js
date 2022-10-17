const express = require("express");
const bodyParser = require("body-parser");
let port = 3000;

const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
    extended: true
}));

let items = ["Milk", "Bread"];
let WorkOutlist = ["Bench", "Squat"];

app.use(express.static("public"))


let deleteitem = ""



// app.get("/",function(req,res){
//     res.sendFile(__dirname+"/index.html")
// })

app.get("/", function (req, res) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursay", "Friday", "Saturday"]
    let daysOfTheWeek = new Date();
    let intDAy = daysOfTheWeek.getDay();
    let myday = days[intDAy]




    res.render("list", {
        Fname: "Faeem",
        Day: myday,
        Date: daysOfTheWeek,
        newItems: items,
        workout: WorkOutlist

    })



})


app.post("/", function (req, res) {
    deleteitem = req.body.deleteWorkout
    deleteitem1=req.body.deleteItem;
    item = req.body.newItem
    workoutItem = req.body.workoutItem;

    addItem(WorkOutlist, workoutItem);
    addItem(items,item)
   

    deleteitems(WorkOutlist, deleteitem);
    deleteitems(items,deleteitem1)


    res.redirect("/")
})







function addItem(array, item) {
    array.push(item)
}


function deleteitems(array, item) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === item) {
            array.splice(i, 1)
        }
    }

}




app.listen(port, function () {
    console.log("server is running on: " + port)
})