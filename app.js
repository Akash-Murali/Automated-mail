const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require('nodemailer');
const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html")
});
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'makashbbl@gmail.com',
    pass: 'illuminatidan11'
  }
});
app.post("/", function(req, res) {
      const firstName = req.body.f;
      const lastName = req.body.l;
      const email = req.body.e;
      console.log(firstName, lastName, email);
      var mailOptions = {
  from: 'makashbbl@gmail.com',
  to: email,
  subject: 'Thank you for subscribing '+firstName,
  text: 'Welcome! You have succesfully signed up'
};
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
      });
    app.listen(3000, function() {
      console.log("Server is running");
    });
