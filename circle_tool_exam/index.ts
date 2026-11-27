function setup() {
    createCanvas(400, 200);
    background("black");
    angleMode(DEGREES);
}

function mouseMoved() {
  background("black");
  noFill();
  stroke("white")
  ellipse(width/2,height/2,mouseX,mouseY);
}

function mouseClicked( ){
fill("white")
text(`area:${mouseX},${mouseY}`,width*0.1,height*0.9);
}








//text(`H: ${mouseX}, S: ${mouseY}, B: 100`, 5, height - 5);
