var express = require('express');
var app = express();

app.get('/calculator/:operation', function(req, res) {
    var calculate = req.params.operation
    var num1 = req.query.num1
    var num2 = req.query.num2
    var value = 0;
    var total = {
        "operator": calculate,
        "firstOperand": num1,
        "secondOperand": num2,
        "solution": value
    };

    if (calculate === 'add') {
        total.solution = +num1 + +num2;
    }
    else if (calculate === 'sub') {
        total.solution = +num1 - +num2;
    }
    else if (calculate === 'mult') {
        total.solution = +num1 * +num2;
    }
    else if (calculate === 'div') {
        total.solution = +num1 / +num2;
    }
    else {
        total.solution = "Error 400";
    }

    res.end(`<h1> ${JSON.stringify(total)} </h1>`);
});





/* YOU DON'T HAVE TO CHANGE ANYTHING BELOW THIS LINE :) */

// Boilerplate code to start up the web server
var server = app.listen(process.env.PORT, process.env.IP, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
