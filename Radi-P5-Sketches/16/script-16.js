let arm =[];
let popu = 1;
let angle;

function setup() {
	createCanvas (1000,1000)
	angleMode (degrees)
for(let i =0; i< popu;i++){
	arm.push(new waveMaker());
}

}

function draw (){
	background(0,10)
	for(let i =0; i< popu;i++){
		arm[i].update(i); 

}
}


function waveMaker (){
	this.size = 10;
	this.yoff=0;
	this.roff =0;


	this.update = function(_i){
		this.roff += 0.025;

		let xoff = 0;
		let yoff = this.yoff;

		push ();
		translate(width/2,height/2);
		rotate (this.roff+_i);
		strokeWeight (2);
		stroke (255,255);
		fill (0,255);
		beginShape ();
		for (let x =0; x < height/2; x+= this.size){
			let y = map( noise(xoff,yoff),0,1,-this.size*8,this.size*8);
			vertex(x,y);
			vertex (x+this.size.y);
			xoff += 0.05;
		}
		this.yoff += 0.01;


		endShape();
		pop ();

	
	}
}
	function mousePressed() {
		//this is to save the image evertime you click with mous
	saveCanvas("s1","png")
	
	}


