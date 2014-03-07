var express = require('express');
var app = express();

app.use (function(req, res, next) {
    var data='';
    req.setEncoding('utf8');
    req.on('data', function(chunk) { 
       data += chunk;
    });

    req.on('end', function() {
        req.body = data;
        next();
    });
});

app.get('/articles', function(req, res){
	var body = 'Hello World';
	res.setHeader('Content-Type', 'application/json');
	res.setHeader('Content-Length', body.length);
	
	res.end(body);
});

app.listen( process.env.PORT || 3000);