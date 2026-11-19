function setup() {
  createCanvas(200, 200);
  background("lightblue");
  
  }
 

function mouseClicked() {
  clickPositions = `${clickPositions}, ${mouseX}/${mouseY}`;

   background("lightblue");

   colorMode(HSB)
  fill(67,100,70)

  circle(0,0,20);
text(clickPositions,5,5,-10-10)}
