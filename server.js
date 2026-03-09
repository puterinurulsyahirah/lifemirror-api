const express = require("express");

const app = express();

app.use(express.json());

let latestData = null;

// POST from website
app.post("/api/lifestyle", (req, res) => {

    latestData = req.body;

    console.log("Lifestyle data received:");
    console.log(latestData);

    res.json({ status: "saved" });

});

// Unity fetch data
app.get("/api/lifestyle", (req, res) => {

    res.json(latestData);

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log("Server running on port " + PORT);

});