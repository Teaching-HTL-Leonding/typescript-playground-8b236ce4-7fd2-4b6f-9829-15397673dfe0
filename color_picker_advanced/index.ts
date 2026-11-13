function setup() {
    createCanvas(360, 200);
    colorMode(HSB);
    background(78, 92, 100);
    noStroke();
}

function mouseMoved() {
    fill(mouseX, mouseY, width);
    rect(0, height * 0, width, height / 2);
}


let colorHue: number = min(360, mouseX);
const colorSoturationc: number = min(100, mouseY);
function mouseClicked() {
    fill(mouseX, mouseY, width);
    rect(0, height / 2, width, height / 2)
    fill(0);
    text("H: 208, S: 92, B: 100", 0, height * 0.9);
}
