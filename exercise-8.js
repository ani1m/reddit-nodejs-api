const pug = require('pug');
var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser')


app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({
    extended: false
}))

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
            response = response.slice(0,5);
            res.render('post-list', {
                posts: response
            });

        };
    });
});


/* YOU DON'T HAVE TO CHANGE ANYTHING BELOW THIS LINE :) */

// Boilerplate code to start up the web server
var server = app.listen(process.env.PORT, process.env.IP, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', process.env.IP, port);
});
