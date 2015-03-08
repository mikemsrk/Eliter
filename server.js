var express = require('express');
var app = express();
var redis = require('redis');
var redisdb = redis.createClient();

redisdb.on('error',function(err){
	console.log("Error " + err);
});


app.use(express.static('public'));

app.post('/goals',function(req,res){
	//add to redis db
});


app.listen(8000,function(){
	console.log('Server listening on port 8000');
});
