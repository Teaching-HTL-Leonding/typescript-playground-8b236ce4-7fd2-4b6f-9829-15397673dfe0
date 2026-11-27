function setup() {
    createCanvas(400, 200);
    background("black");
    angleMode(DEGREES);
}

function mouseMoved() {
  background("black");
  noFill();
  stroke("white");
 
  ellipse(abs(width/2),abs(height/2),mouseX,mouseY);
}

function mouseClicked( ){
fill("white")
text(`area:${mouseX},${mouseY}`,0,height*0.9);
}








//text(`H: ${mouseX}, S: ${mouseY}, B: 100`, 5, height - 5);
