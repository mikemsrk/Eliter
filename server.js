var express = require('express');
var app = express();
var redis = require('redis');
var redisdb = redis.createClient();

redisdb.on('error',function(err){
	console.log("Error " + err);
});


app.use(express.static('public'));

app.get('/goals',function(req,res){
	//get redis data

});


app.listen(8000,function(){
	console.log('Server listening on port 8000');
});
