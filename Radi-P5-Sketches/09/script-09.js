let message = 'Q',
  font,
  bounds, // holds x, y, w, h of the text's bounding box
  fontsize = 500,
  x;
  y; // x and y coordinates of the text

function preload() {
  font = loadFont('assets/BubbleBobble-rg3rx.ttf');
}

function setup() {
  createCanvas(1000, 1000);

  // set up the font
  textFont(font);
  textSize(fontsize);

  // get the width and height of the text so we can center it initially
  bounds = font.textBounds(message, 0, 0, fontsize);
  x = width/2 - bounds.w;
  y = height - bounds.h ;
}

function draw() {
  background(204, 241, 8 );

  // write the text in black and get its bounding box
  
  fill(0);
  text(message, x, y);
  bounds = font.textBounds(message, x, y, fontsize);

  // check if the mouse is inside the bounding box and tickle if so
  if (
    mouseX >= bounds.x &&
    mouseX <= bounds.x + bounds.w &&
    mouseY >= bounds.y &&
    mouseY <= bounds.y + bounds.h
  ) {
    x += random(-5, 5);
    y += random(-5, 5);
  }
}


function mousePressed() {
	//this is to save the image evertime you click with mous
saveCanvas("s1","png")
}
