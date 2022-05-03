let angle=0;
function setup () {
  background (255)
  createCanvas(1000,1000)
 angleMode(DEGREES)
}

function draw () {

angle=angle+1;

translate (mouseX, mouseY)
rotate(angle)
stroke(255, 8, 169)
strokeWeight(3)
fill (220, 248, 1)
ellipse (500,500,100,100)

push ()
translate (520,500)
rotate (30)
rect (0,0,55,30,20,10,5,10)
pop ()

stroke(255, 8, 169)
strokeWeight(3)
fill (220, 248, 1)
ellipse (200,200,100,100)

push ()
translate (220,200)
rotate (30)
rect (0,0,55,30,20,10,5,10)
pop ()


}

function mousePressed () {
  saveCanvas("s1","png")
  
}