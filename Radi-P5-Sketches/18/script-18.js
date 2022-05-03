// let circleSize=20;
let gap=20;
let rectSize = 20;
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
	// background (255)
	for( let i =0;i<n;i++){
		theta.push(random(0,2 *PI))
		r.push (random (50,380))
		c.push (createVector(500,500))
	
		b1 = color(214,210,255);
		b2 = color(254,177,160);
		// noLoop();
	
		//framerate(60)
		setGradient(0, 0, width / 2, height, b1, b2, X_AXIS);
		setGradient(width / 2, 0, width / 2, height, b2, b1, X_AXIS);
		
	}
	// strokeWeight (10);
	// stroke (255)
	// c = createVector (400,400)
	// angleMode(DEGREES)


}

function draw () {
// background (255)

push ()

	let angle1 = (320)
	angleMode (DEGREES);
	translate (485,height/2);
	rotate(angle1);
	angle = angle1+ map(mouseX,0,width,-0,5,0.5);
	//angle = angle+map(mouseX,0,width,-0.5,0.5);
	for (let i=0;i<n;i++){
		theta [i] =theta [i]+PI / 200;
		x = c[i].x + r[i]* cos(theta[i]);
		y = c[i].y + r[i]* sin (theta [i]);
	}
	fill (255);
	stroke (255);
	strokeWeight(2);
	// for(let i=0;i<15;i++){
		rect(0,0,25,450,40);
		// describe('white rect with black outline and round edges in mid-right of canvas')
	pop ()


push ()
for (let i=0;i<n;i++){
theta [i] =theta [i]+PI / 200;
x = c[i].x + r[i]* cos(theta[i]);
y = c[i].y + r[i]* sin (theta [i]);
noFill ();
stroke (255);
strokeWeight (2);
pop()
circle (c[i].x, c[i].y, 2*r [i]);
fill (214,210,255);
strokeWeight (10);
point (x,y)
}
pop ()



// theta = theta +PI/100
// x = c.x+r * cos (theta)
// y = c.y + r * sin (theta)
// point (x,y)

// push ()
// translate (width/2,height/2)
// noFill ()
// stroke(255)
// strokeWeight(2)
// for (let i=0;i<20;i++){
// 	circle(0,0,circleSize+gap*i,circleSize+gap*i)
// }
// pop ()

// translate (width/2,height/2)
// fill (144, 148, 151);
// for (let i;i<10;i++){
// ellipse (0,0,ellipseSize+gap*1,20)
	}

	function setGradient(x, y, w, h, c1, c2, axis) {
		noFill();
	  
		if (axis === Y_AXIS) {
		  // Top to bottom gradient
		  for (let i = y; i <= y + h; i++) {
			let inter = map(i, y, y + h, 0, 1);
			let c = lerpColor(c1, c2, inter);
			stroke(c);
			line(x, i, x + w, i);
		  }
		} else if (axis === X_AXIS) {
		  // Left to right gradient
		  for (let i = x; i <= x + w; i++) {
			let inter = map(i, x, x + w, 0, 1);
			let c = lerpColor(c1, c2, inter);
			stroke(c);
			line(i, y, i, y + h);
		  }
		}
	  }
	  function mousePressed() {
		//this is to save the image evertime you click with mous
	saveCanvas("s1","png")
	
	}