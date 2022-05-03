//let angle=0;
function setup () {

  createCanvas(1000,1000)
 //angleMode(DEGREES)
}

function draw () {
background (0);
translate (200,200);
stroke (255);
strokeWeight (4);
noFill ();
let r = 150;
//circle(0,0,r*2)

//let increment = map (mouseX,0,width,0.01,PI)
let increment = 0.1;

beginShape ();
for (let a= 0;a < TWO_PI; a += increment){
let r1 = r+random(-50,10);
let x = r1* cos (a);
let y = r1* sin(a);
vertex(x,y);
}

endShape(CLOSE);

}