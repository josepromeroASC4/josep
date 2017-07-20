function setup(){
createCanvas(1200,750);
background(225);

stroke(8);
text("PLEASE TYPE THE SENTENCES BELOW:", 100, 20);

stroke(5);
text("The Warriors blew a 3-1 lead.",100, 100);
text("FC Barcelona is the best football club ever.",100,190);
text("Seahawks should have ran the ball.",100,300);
}

function keyTyped(){
if(key=='c'){
    text("The Warriors blew a 3-1 lead.");
    text("FC Barcelona is the best football club ever.");
    text("Seahawks should have ran the ball.");

