function setup(){
    createCanvas(800,600);
    background(150);

    fill("LightCoral");
    rect(50,25,150,50);

    fill("CornflowerBlue");
    rect(600,400,150,50);

    fill("black");
    textSize(20);
    text(String(charizard.name), 55, 24);
    text(String(charizard.HP), 55, 50);
    text(String(pikachu.name), 605, 395);
    text(String(pikachu.HP), 605, 425);

textSize(20);

    //button 1
    fill("Yellow");
    rect(20,530,150,50);
    fill("Black");
    text("Flamethrower", 32,545,150,50);

    //button 2
    fill("Yellow");
    rect(200,530,150,50);
    fill("Black");
    text("Fly", 270,545,150,50);

    //button 3
    fill("Yellow");
    rect(370,530,150,50);
    fill("Black");
    text("Slash", 410,545,150,50);

    //button 4
    fill("Yellow");
    rect(530,530,150,50);
    fill("Black");
    text("Ember", 570,545,150,50);

}
function Pokemon(name, hp, moves){
    this.name=name;
    this.hp=hp;
    this.moves = moves;
}

function Move(name, dmg){
    this.name=name;
    this.dmg=dmg;
}

var p1= [];
var comp= [];

var charizard= new Pokemon ("charizard ", 100, []);
var pikachu = new Pokemon ("pikachu ", 100, []);

p1.push(charizard);
comp.push(pikachu);

//charizard moves
var flamethrower= new Move("flamethrower", 25);
var fly= new Move("fly", 15);
var slash= new Move("slash",10);
var ember= new Move("ember", 5);

//pikachu moves
var thunderbolt = new Move("thunderbolt" , 25);
var electroBall = new Move("electroBall" , 30);
var ironTail = new Move("ironTail" , 20);
var tackle = new Move("tackle" , 10);

var charmovelist=[flamethrower,fly, slash, ember];
var pikamovelist=[thunderbolt, electroBall, ironTail, tackle];

charizard.moves.push(charmovelist);
pikachu.moves.push(pikamovelist);

console.log(p1);
console.log(comp);

comp[0].hp= comp[0].hp - p1[0].moves[0][1].dmg;
console.log(p1[0].name, "used", p1[0].moves[0][1].name, "on", comp[0].name);
console.log(comp[0]);

function keyPressed(){
    
   var cm = Math.round(Math.random() * 2);

   check = true;
    if (check == true){
        p1[0].HP = p1[0].HP - comp[0].moves[0][cm+1].dmg;
    }
    

   b = key;
    comp[0].HP = comp[0].HP - p1[0].moves[0][b-1].dmg;
    clear()

   createCanvas(800, 600);
    background(150);

  fill("LightCoral");
    rect(50,25,150,50);

  fill("CornflowerBlue");
    rect(600,400,150,50);

    //button 1
   textSize(20);
    fill("Yellow");
    rect(20,530,150,50);
    fill("Black");
    text("Flamethrower", 32,545,150,50);

    //button 2
    fill("Yellow");
    rect(200,530,150,50);
    fill("Black");
    text("Fly", 270,545,150,50);

    //button 3
    fill("Yellow");
    rect(370,530,150,50);
    fill("Black");
    text("Slash", 410,545,150,50);

    //button 4
    fill("Yellow");
    rect(530,530,150,50);
    fill("Black");
    text("Ember", 570,545,150,50);

   text(String(charizard.name), 55, 24);
    text(String(charizard.HP), 55, 50);
    text(String(pikachu.name), 605, 395);
    text(String(pikachu.HP), 605, 425);
  
  
    

   return false
}