function setup() {
    createCanvas(650, 450);

    background(156, 140, 86);
    circle(width / 2, height * 0.5, 20);


}

function mouseMoved() { }
let colorhue: number = 0;
let clickPositions: string = "0/0";
  let smallerside: number = min(mouseX, mouseY);

function mouseClicked()
 {
    clickPositions=`${clickPositions},${mouseX}/${mouseY}`;
    text(clickPositions,10,10,10-10)

}













