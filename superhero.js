function Superhero(realName, ability, gender, archEnemy, age, weakness){
this.realName = realName;
this.ability = ability;
this.gender = gender;
this.archEnemy = archEnemy;
this.age = age;
this.weakness = weakness;

this.talk = function(){
    console.log("Yo! My name is " + realName);
}


this.callforHelp = function(call){
console.log(call);

}
}


var superMan = new Superhero("Clark Kent", "Dat Money", "Male", "Lex Luthor", 30, "Kryponite");
var wonderWoman = new Superhero("Diana Prince", "Super Strength", "Female", "Hillary Clinton", 20, "Guns");
var Spiderman = new Superhero("Peter Parker", "Web slinging", "Male", "Venom", 15, "Poison" )

superMan.ability = "Laser Vision";
// console.log(superMan);
wonderWoman.archEnemy = superMan.realName

wonderWoman.callforHelp("Wonder Woman: I'm booling out!");

superMan.callforHelp("Superman: I'm on my way!");

Spiderman.callforHelp("Spiderman: I'll use my Spidey Senses to Help you guys!")