function BasketballPlayer(name, team, height, position, number, netWorth, isGood, pastTeams){
    this.name = name;
    this.team = team;
    this.height = height;
    this.position = position;
    this.number = number;
    this.netWorth= netWorth
    this.isGood = isGood;
    this.pastTeams = pastTeams;

}

var shaq = new BasketballPlayer("Shaquille O'neal", "Celtics", "7'1\"", "Center", 36, 100000000000, true, ["Magic", "Lakers", "Heat", "Suns", "Cavs"]);
var kobe = new BasketballPlayer("Kobe Bryant", "Lakers", "6'8\"", "Small Forward", 24, 1000000000, true, ["none"])
console.log(shaq);
console.log(kobe);