function setup() {
  createCanvas(500, 500);
  background("lightblue");
}

function mouseMoved() {
  const snap: number = 40; // marker must snap every 40 pixels
  const markerSize: number = 10; // size of marker
//67
  background("lightblue");

line(mouseX-snap,mouseY,mouseX+snap,mouseY);
line(mouseX,mouseY-snap,mouseX,mouseY+snap);
const x:number= round(mouseX/snap)*snap;
const y:number= round(mouseY/snap)*snap;

















}
