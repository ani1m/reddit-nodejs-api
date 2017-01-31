
/*
//exercise 2a

var express = require('express');
var app = express();

app.get(`/hello`, function (req, res) {
    console.log(req.query.name);
    var name = req.query.name
    
    
  res.send('<h1>Hello, ' + name +'!' +'</h1>');
});

*/



/* YOU DON'T HAVE TO CHANGE ANYTHING BELOW THIS LINE :) */
/*
// Boilerplate code to start up the web server
var server = app.listen(process.env.PORT, process.env.IP, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

*/

//exercise 2b

var express = require('express');
var app = express();

app.get(`/hello/:nameId`, function (req, res) {
    console.log(req.params.nameId);
    var name = req.params.nameId
    
    
  res.send('<h1>Hello, ' + name +'!' +'</h1>');
});





/* YOU DON'T HAVE TO CHANGE ANYTHING BELOW THIS LINE :) */

// Boilerplate code to start up the web server
var server = app.listen(process.env.PORT, process.env.IP, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

