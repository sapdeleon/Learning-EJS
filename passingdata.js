import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("passingdata.ejs");
});

app.post("/submit", (req, res) => {
    const data = {
        fName: req.body["fName"],
        lName: req.body["lName"],
        numLetters: req.body["fName"].length + req.body["lName"].length,
    };
    res.render("passingdata.ejs", data);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});