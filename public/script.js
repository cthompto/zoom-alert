// client-side js, loaded by index.html
// run by the browser each time the page is loaded

console.log("hello world :o");
       
var socket = io.connect();
       
//button function
function buttonClicked(){
  console.log("clicked")
	socket.emit('clicked');
}
			 
//when we receive buttonUpdate, do this
socket.on('buttonUpdate', function(data){
				 document.getElementById("buttonCount").innerHTML = 'The button has been clicked ' + data + ' times.';
			 });