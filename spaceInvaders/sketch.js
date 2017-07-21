function enemy(color, point, rowz){

   this.point = point;
    this.color = color;
    this.rowz = rowz
}

var square = new enemy ("red", 25, 0);
var circle = new enemy ("Black", 50, 1);
function setup(){
    createCanvas(800,800);
    background("Black");
}


// var playgrid = [ 
//         [true, true, true, true, true, true, true, true, true, true, true], 
//         [true, true, true, true, true, true, true, true, true, true, true], 
//         [true, true, true, true, true, true, true, true, true, true, true], 
//         [true, true, true, true, true, true, true, true, true, true, true], 
//         [true, true, true, true, true, true, true, true, true, true, true], 
//         [true, true, true, true, true, true, true, true, true, true, true], 
//         [true, true, true, true, true, true, true, true, true, true, true], 
//         [true, true, true, true, true, true, true, true, true, true, true],


//  ];
var row = prompt("How many rows would you like? ");
var column = prompt("How many columns would you like? ");

var playgrid = [];

var rowd = []

// for (plug = 0; plug < row; plug++){   
//     for (jam = 0; jam < column; jam++){
//         rowd.push(true);
//     }

//     playgrid.push(rowd);

//     rowd = [];
// }

for (jam = 0; jam < column; jam++){    //these 'for' loops would make a boolean matrix (?) named playgrid like above;
     rowd.push(true);
     }
for (plug = 0; plug < row; plug++){
    playgrid.push(rowd);
}


var a = 25; //x coordinate of first square
var b = 25; //y coodrinate of first square
var c = 1;  //x increment
var d = 1; //y increment (decrement?)
var s = 10; //size of squares
var xCoord = 400; //Protagonist

function draw(){

   createCanvas(600,450);
    background("White");
    rect(xCoord,400,40,15);
    
    
    
    

   var phtml = []; //this will make the squares
    for (ro = 0; ro < playgrid.length; ro ++){                
       for (colum = 0; colum < playgrid[0].length; colum++){
            if (playgrid[ro][colum] == true){  
                                       //these conditionals are to help change the color of the squares by associating (?)    
            //    if (ro == square.rowz){          //the parameter for fill() with the boolean matrix (?) made by the loops above
            //     fill(square.color);
            //     phtml.push(rect(a + 2*s*(colum), b + 2 *s* (ro), s, s)); //the coordinates of the squares will be based on
            //     }                                                           //the very first one
            
            //    else if (ro == circle.rowz){          
            //    fill(circle.color);
            //     phtml.push(ellipse(a + 2*s*(colum), b + 2 *s* (ro), s, s));
            //     }

               phtml.push(rect(a + 2*s*(colum), b + 2 *s* (ro), s, s));                                                                  
            }
        }
  
   }

   if (a == 100){          //these conditionals will change the location of the very first square only
                            //once it reaches a certain x-coordinate (400)
            b = b + d;      //the y-coordinate will go down by "b" which is set to 10
            c = -1;         //this changes the x-direction by which the first square will move
                        //since the locations of the other squares are based on the very first they will move too

       }

   else if (a == 10){
        b = b + d;
        c = 1;
    }
    
   a = a + c              //this line changes the location of the very first square
                        //since the locations of the other squares are based on the very first they will move too

}

//adding later
//a checking array to compare the x,y positions of the enemies and the moving bullet
//a break when a certain point is reached
//should link enemies to boolean table even further so that if it's false it won't draw the enemy instead of making it black

function keyPressed(){
       if (keyIsDown(LEFT_ARROW)) {
            if (xCoord > 0) {
                xCoord -= 5;
            }
        }

     if (keyIsDown(RIGHT_ARROW)) {
            if (xCoord + 50 < width) {
                xCoord += 5;
            }
        }
}