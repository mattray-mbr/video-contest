// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

var videos = [
	// {
	// 	name: 'first video',
	// 	url: 'https://www.youtube.com/embed/1RQ7J3QRVmM',
	// 	title: 'some title',
	// 	desc: 'stuff and a description',
	// },
]

// Routes \\
app.get('/', function(req, res){
  res.sendFile('index.html', {root : __dirname+'/public'})
});

// app.get('/api/videos', function(req, res){
// 	res.send(videos)
// })

// app.post('/api/videos', function(req, res){
// 	console.log('body ->', req.body)
// 	videos.push({
// 		name: req.body.name,
// 		url: req.body.url,
// 		title: req.body.title,
// 		desc: req.body.desc,
// 	})
// 	res.send(videos)
// })

// app.put('/api/videos', function(req, res){
// 	videos.push({
// 		rating: req.body.rating,
// 	})
// 	res.send(videos)
// })

// Creating Server and Listening for Connections \\
var port = 3333
app.listen(port, function(){
  console.log('Server running on port ' + port);

})

􏱙􏱦􏱆