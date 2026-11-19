function setup() {
  createCanvas(600, 450);
  background("lightblue");
  
  }
 let clickPositions: string = "0/0";


function mouseClicked() {
  

   background("lightblue");

   colorMode(HSB)
  fill(67,100,70);
 clickPositions =` ${clickPositions}, ${mouseX}/${mouseY}`;
  circle(mouseX,mouseY,20);
text(clickPositions,5,5,-10-10);}