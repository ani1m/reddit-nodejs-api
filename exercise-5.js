var express = require('express');
var app = express();

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





/* YOU DON'T HAVE TO CHANGE ANYTHING BELOW THIS LINE :) */

// Boilerplate code to start up the web server
var server = app.listen(process.env.PORT, process.env.IP, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
