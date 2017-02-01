var express = require('express');
var app = express();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'ani1m', // CHANGE THIS :)
  password: '',
  database: 'reddit'
});

// load our API and pass it the connection
var reddit = require('./reddit');
var redditAPI = reddit(connection);




app.get(`/posts`, function(req, res) {
  redditAPI.getAllPosts(function(err, response) {
    if (err) {
      res.send(err)
    }
    else {
      response.length = 5;
      var output = "";
      output += '<h1> List of contents </h1>'
      output += '<ul>';

      response.forEach(function(element) {

        output += '<li>';
        output += '<a href="' + element.url + '">'
        output += element.title;
        output += '</a>'
        output += '<span>' + element.user.username + '</span>'
        output += '<span>' + element.user.createdAt + '</span>'
        output += '</li>';

      });

    }

    output += '</ul>';

    res.send(output);
  })

});


/* YOU DON'T HAVE TO CHANGE ANYTHING BELOW THIS LINE :) */

// Boilerplate code to start up the web server
var server = app.listen(process.env.PORT, process.env.IP, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', process.env.IP, port);
});
