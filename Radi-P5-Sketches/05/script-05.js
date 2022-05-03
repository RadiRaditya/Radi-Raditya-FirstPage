function setup() {
  createCanvas(1000,1000)





  frameRate(10);
  rectMode(CENTER);
}

function draw() {
  background(255);
   //noStroke();
	//fill(0,255,0)
	var circleSize = map(noise(frameCount*0.01),0,1,0,400);
	circle(450,250,circleSize);

	noFill();
	stroke(255,0,0)
	strokeWeight(4)

  push();
		translate(500,500)
		rotate(frameCount)
		//rect(0,0,200,50)
	pop();

 push()
  let step = frameCount % 20;
  let angle = map(step, 0, 20, -PI / 4, PI / 4);
  //background(255);
  translate(50, 50);
  fill (255,0,0)
  // equivalent to shearX(angle);
  let shear_factor = 1 / tan(PI / 2 - angle);
  applyMatrix(1, 0, shear_factor, 1, 0, 0);
  rect(350, 200, 20, 320);
pop()


}
function mousePressed() {
	//this is to save the image evertime you click with mous
saveCanvas("s1","png")
}
