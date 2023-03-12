const express = require('express')
const bodyparser = require("body-parser")
const date = require(__dirname + "/date.js")
const app = express()

app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static("public"))


const items = [];

app.get("/", function (req, res) {
    let day = date.getDate();
    res.render("list", { kindOfDay: day, newListItems: items })
})

app.post("/", function (req, res) {
    var item = req.body.newItem;
    items.push(item);
    res.redirect("/");
})
app.listen(3000, function () {
    console.log("Server is running in 3000")
})