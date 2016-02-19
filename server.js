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
	{
		name: 'First Video',
		url: 'https://www.youtube.com/embed/1RQ7J3QRVmM',
		title: 'Guenella Pass',
		desc: 'stuff and a description',
		votes: 0,
	},
	{
		name: 'Second Video',
		url: 'https://www.youtube.com/embed/WWW3_hTV7hc',
		title: 'Lower Chaos',
		desc: 'stuff and a description',
		votes: 0,
	},
	{
		name: 'Third Video',
		url: 'https://www.youtube.com/embed/FXKfah3nJTs',
		title: 'Upper Chaos',
		desc: 'stuff and a description',
		votes: 0,
	},
	{
		name: 'Fourth Video',
		url: 'https://www.youtube.com/embed/ZQs1YTZZhok',
		title: 'Flagstaff',
		desc: 'stuff and a description',
		votes: 0,
	},
	{
		name: 'Fifth Video',
		url: 'https://www.youtube.com/embed/CvVjuWMpHugk',
		title: 'Alpine Stuff',
		desc: 'stuff and a description',
		votes: 3,
	},
	{
		name: 'first video',
		url: 'https://www.youtube.com/embed/1RQ7J3QRVmM',
		title: 'some title',
		desc: 'stuff and a description',
		votes: 3,
	},
	{
		name: 'first video',
		url: 'https://www.youtube.com/embed/1RQ7J3QRVmM',
		title: 'some title',
		desc: 'stuff and a description',
		votes: 3,
	},
	{
		name: 'first video',
		url: 'https://www.youtube.com/embed/1RQ7J3QRVmM',
		title: 'some title',
		desc: 'stuff and a description',
		votes: 3,
	},
]

// Routes \\
app.get('/', function(req, res){
  res.sendFile('index.html', {root : __dirname+'/public'})
});

app.get('/api/videos', function(req, res){
	res.send(videos)
})
app.post('/api/videos', function(req, res){
	console.log('newVid body ->', req.body)
	videos.push({
		name: req.body.name,
		url: req.body.url,
		title: req.body.title,
		desc: req.body.desc,
		votes: req.body.votes || 0,
	})
	res.send(videos)
})


app.post('/api/votes', function(req, res){
	console.log('newVote body ->', req.body)
	videos.forEach(function(video){
		if(video.name == req.body.name){
			video.votes++
		}
	})
	res.send(videos)
	
})

// Creating Server and Listening for Connections \\
var port = 3333
app.listen(port, function(){
  console.log('Server running on port ' + port);

})

􏱙􏱦􏱆
