function setup() {
  createCanvas(600,450);
  background("lightblue");
}

function mouseMoved() {
  const snap: number = 40; // marker must snap every 40 pixels
  const markerSize: number = 10; // size of marker

  background("lightblue");
const x:number= round(mouseX/snap)*snap;
const y:number= round(mouseY/snap)*snap;
line(x,y+snap,x,y+snap);
line()












}
