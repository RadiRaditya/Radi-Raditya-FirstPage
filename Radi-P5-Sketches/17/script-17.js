let x =0;
let y =0;
let spacing = 50;
let gap = 30;
let circNum = 40;
let cirSize = 20;
let rectSize = 20;
let angle;
let ptNum =10;
let checkbox, button, colBG, colFill;


function setup () {

	createCanvas (1000,1000)
	// background (0);
	button = createButton('Colorize if loop()');
	button.position(0, 120);
	button.mousePressed(changeBG);
  
	checkbox = createCheckbox('loop()', true);
	checkbox.changed(checkLoop);
  
	colBG = color(0);
	colFill = color(255);
  }
  
  function changeBG() {
	if (isLooping()) {
	  colBG = color(random(255), random(255), random(255));
	  colFill = color(random(255), random(255), random(255));
	}
  }
  
  function checkLoop() {
	if (this.checked()) {
	  loop();
	} else {
	  noLoop();
	}
  }
	

function draw () {
	// stroke (255);
	// if (random (1)< 0.5){
	// 	line (x,y,x+10,y+10);
	// } else {
	// 	line (x,y+10,x+10,y);
	// }

	// x=x+ spacing;
	// if (x > width) {
	// 	x = 0;
	// 	y = y+spacing
	// }
	background (colBG);
	push ()
	translate (width/2,height/2);
	 rotate(angle);
	// angle = map(mouseX,0,width,-0,1,0.1);
	 angle = angle+map(mouseX,0,width,-1,1);
	noFill();
	stroke(255);
	strokeWeight(2);
	for(let i=0;i<20;i++){
		// circle(0,0,cirSize+gap*i,cirSize+gap*i)
		arc(0,0,cirSize+gap*i,cirSize+gap*i,angle*i,45-angle/2);
	}
	pop ()

	push ()
	let angle1 = (320)
	angleMode (DEGREES);
	translate (485,height/2);
	rotate(angle1);
	angle = angle1+map(mouseX,0,width,-0,5,0.5);
	//angle = angle+map(mouseX,0,width,-0.5,0.5);
	noFill ();
	stroke (255);
	strokeWeight(2);
	for(let i=0;i<11;i++){
		rect(0,0,20,rectSize+gap*i,40);
		// describe('white rect with black outline and round edges in mid-right of canvas')
	}
	pop ()

}
// function mousePressed() {
// 	//this is to save the image evertime you click with mous
// saveCanvas("s1","png")
// }
function mousePressed() {
	//this is to save the image evertime you click with mous
saveCanvas("s1","png")

}