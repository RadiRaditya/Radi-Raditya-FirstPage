var qImg;
var lineStroke = 20;
var slipDistance = 50;
const Y_AXIS =1;
const X_AXIS = 2;
let  B1,B2;

function preload (){
	qImg = loadImage ('assets/Q.png');
}

function setup() {
	createCanvas(1000, 1000);
	//colorMode(RGB,100);
	b1 = color(146,187,233);
	b2 = color(238,174,202);
	noLoop();

	//framerate(60)
	setGradient(0, 0, width / 2, height, b1, b2, X_AXIS);
	setGradient(width / 2, 0, width / 2, height, b2, b1, X_AXIS);
	qImg.resize(300,600);

	image(qImg,500,500)
}
  
  function draw() {
	setGradient(0, 0, width / 2, height, b1, b2, X_AXIS);
	setGradient(width / 2, 0, width / 2, height, b2, b1, X_AXIS);


	push()
	translate(500, 500)
	//image(qImg,0,0)
	push()
	rotate(frameCount/30)
	translate(-500,-500)
	for (xPos = 0;xPos < width; xPos=xPos+10) {
		for(yPos=0;yPos < height;yPos=yPos+10) {
			newFill = qImg.get(xPos,yPos);

			
			fill(newFill)

			var circleSize = map(sin(frameCount/30),-1,1,5,10);

			circleSize = 4;

			if (newFill != [0,0,0,0]) {


				circle(xPos+map(noise(frameCount/10+40+yPos),0,1,-20,20),yPos+map(noise(frameCount/10+40+xPos),0,1,-10,10),circleSize);	
			}
			
		}
		

	}
	pop()
	pop()
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