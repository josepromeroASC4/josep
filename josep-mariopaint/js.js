function setup(){
    createCanvas(1000,1000);
    background(225);
}

function mouseDragged(){
    ellipse(random(1000), random(1000),50,50);
    fill(random(255),random(255),random(255));
    rect(random(1000), random(1000),50,50);
    fill(random(255),random(255),random(255));
    noStroke();
   // Stroke(random(255),random(255),random(255));


}
