let e = 0;
let r = 0;
let angle =320
function setup (){
	createCanvas (1000,1000)
	angleMode (DEGREES)

	rectMode(CENTER);
	frameRate(10)
}

function draw () {
	background (0);
	translate (width/2,height/2)
	push ()
	for (let i =0; i<20; i++){
		rotate (e);
		e=e+QUARTER_PI;
		ellipse (200,200,20,20);

	}
	pop ()

	push()
	translate (150,200)
	rotate (angle)
	// r=r+QUARTER_PI;
	rect (0,0,40,250,30)
	pop ()
}

function mousePressed() {
	//this is to save the image evertime you click with mous
saveCanvas("s1","png")

}