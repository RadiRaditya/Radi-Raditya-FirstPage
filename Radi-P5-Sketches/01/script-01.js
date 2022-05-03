
function setup() {
	createCanvas(1000,1000)
	background(164, 117, 187)

	fill(254, 26, 191)
	noStroke ()
	circle(250,100,100)

}

function draw() {

	//this variable is based on the X position 
	//mouseX =x-coordinate of the mouse
	//mouseY =y-coordinate of the mouse
	//circleRadius = custom variable I made up
	fill(164,117,187)
	stroke(254, 26, 191)

	var circleRadius = 50+mouseX/2
circle(mouseX, mouseY,circleRadius)

}

function mousePressed() {
	//this is to save the image evertime you click with mous
saveCanvas("s1","png")

}