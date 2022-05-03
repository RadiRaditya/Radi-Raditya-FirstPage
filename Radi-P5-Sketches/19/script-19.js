// let circleSize=20;
let gap=20;
let rectSize = 20;
let dir =[];
// let circleNum=40;
// let angle;
// let ellipseSize =20;
let theta = [];
let r =[];
let c = [];
let n= 10;
const Y_AXIS =1;
const X_AXIS = 2;
let  B1,B2;

function setup (){
	createCanvas (1000,1000)
	background (255)
	strokeWeight (5)
	for (let i =0;i<n;i++){
		theta.push (random,(0,2 *PI))
		dir.push ([-1,1][round(random(1))])
		r.push (random (30,380))
		c.push(createVector(400,400))

	}
	// b1 = color(214,210,255);
	// b2 = color(254,177,160);
	// // noLoop();
	
	// //framerate(60)
	// setGradient(0, 0, width / 2, height, b1, b2, X_AXIS);
	// setGradient(width / 2, 0, width / 2, height, b2, b1, X_AXIS);
	
	



}

function draw () {
// background (255)

push ()

	// let angle1 = (320)
	// angleMode (DEGREES);
	// translate (485,height/2);
	// rotate(angle1);
	// angle = angle1+ map(mouseX,0,width,-0,5,0.5);
	// //angle = angle+map(mouseX,0,width,-0.5,0.5);
	// for (let i=0;i<n;i++){
	// 	theta [i] =theta [i]+PI / 200;
	// 	x = c[i].x + r[i]* cos(theta[i]);
	// 	y = c[i].y + r[i]* sin (theta [i]);
	// }
	// pop ()

	fill (204,255,255,25);
	rect(mouseX,mouseY,300,50)
	for (let i= 0;i<n; i++){
		theta [i]= theta [i]+PI/100 *dir [i]
		x = c[i].x+r[i] * cos(theta[i])
		y= c [i].y + r [i] *sin (theta [i])
		point (x,y)
	}

}
	
function mousePressed() {
	//this is to save the image evertime you click with mous
saveCanvas("s1","png")

}
	  