const express = require("express");
const apiRouter = require("./routes/api");

const port = 3000;
const app = express(); 

app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.set("views", (__dirname + "/public"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.listen(port, () => {
    console.log("Server listening on port: " + port);
});

app.use("/api", apiRouter);

app.get("/:Universal", (req, res) => {
    res.render("index.html");
})