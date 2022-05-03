
function setup() {
	createCanvas(1000,1000)
	background(26, 128, 50)


	ellipseMode(RADIUS);
	fill(240, 158, 193);
	stroke(218, 247, 166)
	strokeWeight (5)
	ellipse(300, 470, 500, 500); // Outer white ellipse
	ellipseMode(CENTER);
	fill(26, 128, 50);
	stroke(218, 247, 166)
	strokeWeight (5)
	ellipse(200, 350, 640, 630);


	fill(240, 158, 193);
	stroke(218, 247, 166)
	strokeWeight (5)
	rect(320, 420, 200, 200);

	fill(240, 158, 193);
	stroke(218, 247, 166)
	strokeWeight (5)
	rect(400, 500, 200, 200);

	fill(240, 158, 193);
	stroke(218, 247, 166)
	strokeWeight (5)
	rect(480, 580, 200, 200);
	
	fill(240, 158, 193);
	stroke(218, 247, 166)
	strokeWeight (5)
	rect(560, 660, 200, 200);

	fill(240, 158, 193);
	stroke(218, 247, 166)
	strokeWeight (5)
	rect(640, 740, 200, 200);

	fill(240, 158, 193);
	stroke(218, 247, 166)
	strokeWeight (5)
	rect(720, 820, 200, 200);

	fill(240, 158, 193);
	stroke(218, 247, 166)
	strokeWeight (5)
	rect(800, 900, 200, 200);
}



function mousePressed() {
	//this is to save the image evertime you click with mous
saveCanvas("s1","png")

}