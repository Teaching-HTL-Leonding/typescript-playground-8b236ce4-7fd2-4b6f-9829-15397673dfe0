colorMode(RGB)
function setup() {
    createCanvas(400, 200);
    background("black");
    noStroke();
    fill(200, 111, 20);
    rect(0, 0, width / 3, height * 0.8);
    fill(20, 199, 240);
    rect(width / 3, 0, width / 3, height * 0.8);
    fill(80, 211, 50);
    rect(width * (2 / 3), 0, width / 3, height * 0.8);
    fill(90, 111, 150)
    rect(0, height * 0.8, width, height / 5)




}




let message: string = "";




function mouseClicked() {
    if (mouseX === width / 3) { message = ; }
    else { message = "yellow" };
    fill("blue");
    text(message, 20, 20);




}

