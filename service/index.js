var express = require('express');
var app = express();
/** express example */
app.get('/', function (req, res) {
  const notecard = { front: "This is the front.", back: "this is the back" };
  res.send(notecard);
})

var server = app.listen(4000, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})