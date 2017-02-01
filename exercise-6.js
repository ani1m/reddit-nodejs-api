var bodyParser = require('body-parser')
var express = require('express');
var app = express();

// load the mysql library
var mysql = require('mysql');

// create a connection to our Cloud9 server
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'ani1m', // CHANGE THIS :)
    password: '',
    database: 'reddit'
});

// load our API and pass it the connection
var reddit = require('./reddit');
var redditAPI = reddit(connection);




// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/json
app.use(bodyParser.json())



app.get(`/createContent`, function(req, res) {
    var document =
        `<form action="/createContent" method="POST"> 
    <div>
         <input type="text" name="url" placeholder="Enter a URL to content">
    </div>
    <div>
         <input type="text" name="title" placeholder="Enter the title of your content">
    </div>
         <button type="submit">Create!</button>
</form>`

    res.send(document);
});

app.post(`/createContent`, function(req, res) {
    console.log(req.body)

    redditAPI.createPost({
        userId: 1,
        title: req.body.title,
        url: req.body.url
    }, function(err, response) {
        if (err) {
            console.log(err)
        }
        else {
            console.log(response);
            
        }
    })

    // option 1
    // res.send("OK!") 

    // option 2
    //res.send(req.body)   

    // option 3
        res.redirect(`/posts`) 
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

})






/* YOU DON'T HAVE TO CHANGE ANYTHING BELOW THIS LINE :) */

// Boilerplate code to start up the web server
var server = app.listen(process.env.PORT, process.env.IP, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
