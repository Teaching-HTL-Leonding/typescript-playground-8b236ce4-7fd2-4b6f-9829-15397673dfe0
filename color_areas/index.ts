
function setup() {
    createCanvas(400, 200);
    background("black");
noStroke();



}




let message: string = "";




function mouseClicked() {
    fill(200, 111, 20);
    rect(0, 0, width / 3, height * 0.8);
    fill(20, 199, 240);
    rect(width / 3, 0, width / 3, height * 0.8);
    fill(80, 211, 50);
    rect(width * (2 / 3), 0, width / 3, height * 0.8);
    fill(90, 111, 150);
    rect(0, height * 0.8, width, height / 5);
    fill("black")
    text("gray", width * 0.5, height * 0.9)

    if (mouseX <= width / 3) { message = "brown"; }
    else if (mouseX <= width * 2 / 3) { message = "lightblue"; }
    else { message = "green"; }
    fill("black");
    text(message,width*0.3 ,height*0.9);



}

