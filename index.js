const express = require("express");
const app = express();

//function(req, res)   == (req,res) =>

//Express js get request.
app.get("/", (req, res) => {
  res.send("Hello World: from Root");
});
//app.listen(5050);

app.get("/about", (req, res) => {
  res.send("Hello from About");
});

//Express js POST request
//app.post or app.put

const bodyparser = require("body-parser");
app.use(bodyparser.text());
app.post("/", (req, res) => {
  //POST request at root page
  console.log("Request received at URL of root");
  console.log(req.body);
  res.send("data receided");
});
app.post("/about", (req, res) => {
  console.log("Request received at URL of about");
  console.log(req.body);
  res.send("Data Received");
});
app.listen(5050);
