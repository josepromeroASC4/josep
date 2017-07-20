function setup(){
    createCanvas(1100,800);
    background(150);


//Vertical Grid Lines:

line(0,0,1,800);
line(100,0,100,800);
line(200,0,200,800);
line(300,0,300,800);
line(400,0,400,800);
line(500,0,500,800);
line(600,0,600,800);
line(700,0,700,800);
line(800,0,800,800);

//Horizontal Grid Lines:
line(0,0,800,0);
//Bottom line VVVV
line(0,799,799,799);
//Horizontal Grid Lines:
line(0,100,800,100);
line(0,200,800,200);
line(0,300,800,300);
line(0,400,800,400);
line(0,500,800,500);
line(0,600,800,600);
line(0,700,800,700);
line(0,800,800,800);

fill("Yellow");
stroke(24);
text("BATTLESHIP", 900,400);


fill("Yellow");

//Ship 1
ellipse(50,50,20,20);

//Ship 2
ellipse(650,650,20,20);

//Ship 3
ellipse(250,750,20,20)

//Ship 4
ellipse(50,450,20,20);

}