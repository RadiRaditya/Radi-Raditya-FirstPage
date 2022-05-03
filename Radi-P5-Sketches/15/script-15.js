// var font;

const Y_AXIS =1;
const X_AXIS = 2;
let  B1,B2;


let gap = 20;
let circNum = 40;
let cirSize = 20;
let angle;
let ptNum =10;

function setup() {
	createCanvas(1000, 1000);
	angleMode (degrees)
	//colorMode(RGB,100);
	// b1 = color(146,187,233);
	// b2 = color(238,174,202);
	// // noLoop();

	// //framerate(60)
	// setGradient(0, 0, width / 2, height, b1, b2, X_AXIS);
	// setGradient(width / 2, 0, width / 2, height, b2, b1, X_AXIS);
	
}
  
  function draw() {
	// setGradient(0, 0, width / 2, height, b1, b2, X_AXIS);
	// setGradient(width/ 2, 0, width / 2, height, b2, b1, X_AXIS);
	background (0)
	noCursor ();
	noStroke ();
	fill (255);
	circle(mouseX,mouseY,5);

push ()
	translate (width/2,height/2);
	rotate(angle);
	angle = map(mouseX,0,width,-0,1,0.1);
	// angle = angle+map(mouseX,0,width,-0.5,0.5);
	noFill();
	stroke(255);
	strokeWeight(2);
	

	//circle(width/2,height/2,50);

	for(let i=0;i<circNum;i++){
		arc(0,0,cirSize+gap*i,cirSize+gap*i,angle*i,45-angle/2);
	}
pop ()

push()
stroke(255);
strokeWeight();
for(let i=0; i<100;i++){
point (random(width),random(height));
  }
pop ();
	
	// circle(width/2,height/2,50);
	// circle(width/2,height/2,50+gap*1);
	// circle(width/2,height/2,50+gap*2);
	// circle(width/2,height/2,50+gap*3);
	// circle(width/2,height/2,50+gap*4);

	// circle(width/2,height/2,50+gap*15)
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
 
function keyPressed(){
	if (key == 's'){
	saveCanvas("sketch-22", "png");
	}
	mouseCheck();
	}