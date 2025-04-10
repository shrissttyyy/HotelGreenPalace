const express = require("express");
const connectDatabase = require("./database");
const app = express();

connectDatabase()
//creating simple get api

app.get("/",(req, res) => {
    res.send("Welcome to Hotel Green Palace");
});

app.get("/blog",(req, res) => {
    res.status(200).json({
        msg: "Welcome to Blog Page..."
    });
});


app.post("/blog",(req, res) => {
    res.status(200).json({
        msg: "Blog api hit successfully..."
    });
});

app.listen(3000, () => {
    console.log("NodeJS project start on port [3000]");
});