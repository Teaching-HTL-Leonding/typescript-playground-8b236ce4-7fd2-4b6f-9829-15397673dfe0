function setup() {
createCanvas(400,200);
    background("black");
    angleMode(DEGREES);
}

function mouseMoved() {
    background("black");
    noFill();
    stroke("white");

    ellipse(abs(width / 2), abs(height / 2), mouseX, mouseY);
}

noFill();
background("black");
stroke("white");
rect(abs(width * 0.25), abs(height / 4), mouseX, mouseY)


function mouseClicked() {
    fill("white")
    text(`area:${mouseX},${mouseY}`, 0, height * 0.9);
}







