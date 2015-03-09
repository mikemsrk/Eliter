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
	
	});
	res.end();
});

app.get('/goals',function(req,res){
	//get the list of goals from db and return it
	redisdb.lrange('goals',0,-1,function(err,data){
		data = data.map(JSON.parse);	
		console.log(data);
	});
});

app.listen(8000,function(){
	console.log('Server listening on port 8000');
});
