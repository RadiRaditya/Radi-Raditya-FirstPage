function setup() {
	createCanvas(1000, 1000, WEBGL);
  }
  
  function draw() {
	background(255);
  
	translate(-100, -50, 0);
	normalMaterial();
  
	translate(150, 0, 0);
	push();
	rotateZ(frameCount * 0.01);
	rotateX(frameCount * 0.01);
	rotateY(frameCount * 0.01);
	torus(200, 60);
	pop();
  
	translate(150, 5, 10);
	push();
	rotateZ(frameCount * 0.01);
	rotateX(frameCount * 0.01);
	rotateY(frameCount * 0.01);
	cylinder(100,150);
	pop();

  }

function mousePressed() {
	//this is to save the image evertime you click with mous
saveCanvas("s1","png")
}
  