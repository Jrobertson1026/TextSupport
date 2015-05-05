var express = require('express')
var bodyParser = requires('body-parser')
var app = express();
var port = 3000
var Firebase = require('firebase')
var twilio = require('twilio')('AC65715c30bd3f13e82158fa717084e8fc', 'c987b2cc6df7f3938c3a01601cbdd577')
var myRootRef = new Firebase('https://textSupportApp.firebaseio.com/numbers')

app.use(express.static(__dirname + "/public"))
app.use(bodyParser.json());


app.post('/support/messages/', function(req, res) {
  var messages = {
    To: req.body.to,
    From: "8018372144"
    Body: req.body.messages
  };
  twilio.sendMessage(message, function(err, data) {
    if (!err) {
      ref.child('/' + req.body.to).psuh(message);
      res.status(200).end();
    }
  });
});

app.get("/support/resources/:resource_name", function(req, res) {


})


app.listen(port, function() {
  console.log('listening on port: ' + port)
})
