// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();
var server = require('http').createServer(app); 
var io = require('socket.io')(server); 

var events = require('events');
var eventEmitter = new events.EventEmitter();

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

//start our web server and socket.io server listening
server.listen(3000, function(){
  console.log('listening on *:3000');
  wipe()
}); 

//const listener = app.listen(process.env.PORT, () => {  
//  console.log("Your app is listening on port " + listener.address().port);  
//});

//keep track of how times clients have clicked the button
var clickCount = 0;

function wipe() {
  setInterval(async() => {
     clickCount = 0;
  }, 600000)
}

//when a client connects, do this
io.on('connection', function(client) { 
	console.log('Client connected...'); 
	//when the server receives clicked message, do this
    client.on('clicked', function(data) {
    	  clickCount++;
		  //send a message to ALL connected clients
		  io.emit('buttonUpdate', clickCount);
    });
});

app.get("/listen", (request, response) => {
  response.sendFile(__dirname + "/views/listen.html");
});