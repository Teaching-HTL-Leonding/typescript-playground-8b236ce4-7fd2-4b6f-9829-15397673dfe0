function setup() {
    createCanvas(400, 200);
    background("black");
    angleMode(DEGREES);
}
function mouseMoved() {

    noFill();
    background("black");
    stroke("white");
rect(abs(width*0.25),abs(height/4),mouseX,mouseY)
}


function mouseClicked() {
    text(`area:${mouseX},${mouseY}`,0,height*0.9);}



