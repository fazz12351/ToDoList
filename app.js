const express = require("express");
const bodyParser = require("body-parser");
const prompt = require('prompt-sync')();

let port = 3000;
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"))

let deleteitem = ""
let items = ["Milk", "Bread", "Chocolate"];
let WorkOutlist = ["Bench", "Squat"];



app.get("/", function (req, res) {
    FirstUIScript(req, res);



})
app.post("/HomeView", function (req, res) {
    FirstUIScript(req, res);
})

app.get("/HomeView", function (req, res) {
    FirstUIScript(req, res);
})




app.post("/", function (req, res) {
    deleteitem = req.body.deleteWorkout
    deleteitem1 = req.body.deleteItem;
    item = req.body.newItem
    workoutItem = req.body.workoutItem;

    addItem(WorkOutlist, workoutItem);
    addItem(items, item)


    deleteitems(WorkOutlist, deleteitem);
    deleteitems(items, deleteitem1)


    res.redirect("/")
})


app.get("/View", function (req, res) {
    SecondUIScript(req, res)

})

app.post("/View", function (req, res) {
    SecondUIScript(req, res)



})

app.post("/Views", function (req, res) {
    let item = req.body.items;
    let workoutItems = req.body.workoutitems;
    let deleteditem = req.body.deleteditem;
    let deltedWorkOutItems = req.body.deleteditem;

    deleteitems(items, deleteditem)
    deleteitems(WorkOutlist, deltedWorkOutItems)


    WorkOutlist.push(workoutItems)
    items.push(item)
    res.redirect("/View")

})












function FirstUIScript(req, res) {
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
}

function SecondUIScript(req, res) {
    res.render("list2", {
        WorkOutlist: WorkOutlist,
        items: items
    })
}

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