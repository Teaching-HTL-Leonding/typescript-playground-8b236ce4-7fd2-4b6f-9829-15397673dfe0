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


let colorHue: number =0
let colorSaturation: number = 0
function mouseClicked() {
    fill(mouseX, mouseY, width);
    rect(0, height / 2, width, height / 2)
    fill(0);
    text(`H: ${mouseX}, S: ${mouseY}, B: 100`, 5, height - 5);
}
