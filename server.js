const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let lifestyleData = null;

// POST from website
app.post("/api/lifestyle", (req, res) => {
    lifestyleData = req.body;
    console.log("Data received:", lifestyleData);

    res.json({ status: "success" });
});

// GET for Unity
app.get("/api/lifestyle", (req, res) => {
    res.json(lifestyleData);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});
