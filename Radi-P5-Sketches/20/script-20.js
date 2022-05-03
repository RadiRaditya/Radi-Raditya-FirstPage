let img;
let cnv;

function preload (){
	img = loadImage ('assets/qimage.jpg');

}
function setup (){
	createCanvas (img.width, img.height)
	// print(img.width,img.height)
	
	for (let col =0; col<img.width; col += 10){
		for(let row = 0; row <img.height; row+=10){
		
		let c =img.get(col,row);

	
			fill (color(c));
			// strokeWeight(random(5))
			// point (xPos,yPos);
			rect (col,row,50,30);
			// strokeWeight (random(3));
			// stroke (color(c));
			// curve (xPos,yPos,sin(xPos)*random (60), cos(xPos)*sin(xPos)*random(90)),
			// random(10,random(80),cos(yPos)*sin(yPos)*random(140),cos(xPos)*sin(xPos)*50)
			// pop ();

		}
	}
}
//loop forever
// function draw (){
// 	background (220)

function mousePressed() {
	//this is to save the image evertime you click with mous
saveCanvas("s1","png")

}