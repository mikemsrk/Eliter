var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended:true
}));

var redis = require('redis');
var redisdb = redis.createClient();

redisdb.on('error',function(err){
	console.log("Error " + err);
});


app.use(express.static('public'));

app.post('/goals',function(req,res){
	//add to redis db
	var jsonMsg = JSON.stringify(req.body);
	redisdb.lpush('goals',jsonMsg,function(err,reply){
		console.log(err);
		console.log(reply);
	});
	console.log(req.body);
	res.end();
});


app.listen(8000,function(){
	console.log('Server listening on port 8000');
});
