let angle=0;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  frameRate (10)
}

function draw() {
background (255);
 translate(mouseX,mouseY);
 rotate (angle);
  smiley(0, 0, 80);
  print (pmouseX = '->')

}
function smiley(x, y, diameter) {
  // Face
  rotate(angle);
  angle=angle+0.01
  fill(254, 212, 17);                  //fills the face with yellow color
  stroke(0);                          //outline in black color 
  strokeWeight(4); 
  //outline weight set to 2
  ellipse(x, y, diameter, diameter);  //creates the outer circle

  // Smile
  var startAngle = 0.1 / PI;          //start angle of the arc
  var endAngle = 1 * PI;            //end angle
  var smilediameter = 0.7 * diameter;  
  arc(x, y, smilediameter, smilediameter, startAngle, endAngle);

  // Eyes
  var offset = 0.2 * diameter;
  var eyediameter = 0.07 * diameter;
  fill(0);
  ellipse(x - offset, y - offset, eyediameter, eyediameter);
  ellipse(x + offset, y - offset, eyediameter, eyediameter);
}
