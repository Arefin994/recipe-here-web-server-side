const express = require('express');
const cors = require("cors");
const app = express();


const allItems = require("./data.json");
app.use(cors());
app.get("/",(req ,res) => {
    res.json({message: "Server is running" })
});

app.get("/allData" , (req, res) =>{
    res.json({allItems})
});

app.listen(5000, ()=>{
    console.log("server running")
});