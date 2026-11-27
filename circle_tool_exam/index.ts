function setup() {
    createCanvas(400, 200);
    background("black");
    angleMode(DEGREES);
}
function mouseMoved() {

    noFill();
    background("black");
    stroke("white");
rect(abs(-height*0.5),abs(-height*0.25),mouseX,mouseY)
}


function mouseClicked() {
    text(`area:${mouseX},${mouseY}`,0,height*0.9);}



