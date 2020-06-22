var express = require('express');
const upload = require('../utils/upload');
var router = express.Router();
const fs = require("fs")

/* GET home page. */





router.get('/', function (req, res, next) {
  
  res.render('index', { title: 'Express' });
});


router.post("/upload", function (req, res, next) {
  upload(req, res, function (err) {
    if (err)
      return res.render("index", { error: err.message })
    if (!req.file)
      return res.render("index", { error: "you need to upload a file" })
    let data = [...JSON.parse(fs.readFileSync("data.json").toString()), req.file]
    const dataJSON = JSON.stringify(data)
    fs.writeFileSync("data.json", dataJSON)
    res.redirect("/originals")

    res.send("okee")
  })
})








module.exports = router;