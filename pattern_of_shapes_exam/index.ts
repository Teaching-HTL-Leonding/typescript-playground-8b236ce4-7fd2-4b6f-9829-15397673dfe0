function setup() {
  createCanvas(200, 400);
  background("white");
}

function mouseMoved() {
  const smallerSide:number= min(width,height);
  background("white");
  fill("gold")
  rect(width*0.1,height/10,width/5,height*0.2);
  rect(width*0.1,height*0.7,width/5,height*0.2);
  rect(width*0.7,height*0.1,width/5,height*0.2);
  rect(width*0.7,height*0.7,width/5,height/5);
  fill("tomato");
  circle(width*0.2,height/2,smallerSide/5);
  circle(width/2,height/5,smallerSide/5);
  circle(width*0.8,height/2,smallerSide/5);
  circle(width/2,height*0.8,smallerSide/5);
  fill("lightblue");
  rect(width*0.3,height*0.3,width*0.4,height*0.4);
  fill("white");
  circle(width/2,height*0.5,height*0.4);
fill("tomato")
circle(mouseX,mouseY,smallerSide/10);


}
