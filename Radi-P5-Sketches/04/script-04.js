
function setup() {
  createCanvas(1000, 1000);

  noFill 
  stroke(246, 0, 250)

  var x = 0; //this is the value on the X axis of our sketch

  while(x < width){
    //console.log ("x is less than 1000")

    circle(random(height), random(height), 50)
    x++;
  }


}

function draw() {


  var randomRed = random (150,255)

  console.log(randomRed)
  noFill ()
  strokeWeight (2)
  stroke (randomRed,random(10),random(250))

  
  circle (mouseX,mouseY,mouseX/2,2)
  line (mouseX,mouseY,width, height)
  
  
}

function mousePressed() {
	//this is to save the image evertime you click with mous
saveCanvas("s1","png")
}

