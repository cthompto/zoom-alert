// client-side js, loaded by index.html
// run by the browser each time the page is loaded
console.log("Listening...");
       
var socket = io.connect();

socket.on('buttonUpdate', function(data){
				 console.log("Someone's Waiting!")
          dots()
			 });

function dots() {
  var item = document.getElementById("billboard")
  const context = item.getContext('2d');
  const x = item.width;
  const y = item.height;
  var radius = 10;
  
  let number = 0;
  while (number <= 2000) {
    if (number % 50 == 0) {
      let circle = new Path2D();  // <<< Declaration
      circle.arc((Math.random() * x), (Math.random() * y), radius, 0, 2 * Math.PI, false);
      context.fillStyle = 'blue';
      context.fill(circle); //   <<< pass circle to context
      number = number + 1;
    }
  }
}  
