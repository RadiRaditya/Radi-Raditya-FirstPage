function setup() {
	createCanvas(1000,1000)

	noStroke();
	fill(0)
	
	

	//this is a for loop.
	for(var i = 0;i <100;i++) {

		var fromTop = random(height)
		var fromLeft = random(width)
		var size = random(50,100)
		circle(fromTop, fromLeft, size)
	}

}

function draw() {

  //noStroke();
	//fill(0,255,0)
	var circleSize = map(noise(frameCount*0.01),0,1,0,400);
	circle(350,200,circleSize);

	noFill();
	stroke(255,0,0)
	strokeWeight(4)

  push();
		translate(500,500)
		rotate(frameCount)
		//rect(0,0,200,50)
	pop();

  push ()
   translate(500,200)
   rotate (1)
    rect (0,30,200,50)
  
  pop ( )


}



function mousePressed() {
	saveCanvas("s1","png")
}