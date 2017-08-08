var database = firebase.database().ref();

// function setchoice(choice)
// {
//     console.log(this)
// }
function setChoice(choice)
{
    playerChoice= choice;
    console.log(playerChoice);
}
var cpuChoice = Math.random();
var playerChoice = ""; 
if (cpuChoice <= 0.34){
    cpuChoice = "scissors";}
    if (cpuChoice <= 0.67){
    cpuChoice = "paper";}
    if (cpuChoice >= 0.68){
    cpuChoice = "rock";}
console.log(cpuChoice);

function playRps(){//Player choose Rock
    
if (playerChoice == cpuChoice )
    {
        // console.log("CPU wins");
        $("body").append("<h1> It's a tie </h1>")
    }

if (playerChoice == "rock" && cpuChoice == "scissors")
    {
        // console.log("Rock wins");
        $("body").append("<h1> Player wins </h1>")
    }
if (playerChoice == "rock" && cpuChoice == "paper")
{
        $("body").append("<h1> Cpu Wins </h1>");
}


//Player choose Paper
if (playerChoice == "paper" && cpuChoice == "scissors")
    {
        // console.log("CPU wins");
        $("body").append("<h1>  CPU wins </h1>")
    }

if (playerChoice == "paper" && cpuChoice == "rock")
    {
        // console.log("Player wins");
        $("body").append("<h1>  Player wins </h1>")
    }


//Player choose Scissors
if (playerChoice == "scissors" && cpuChoice == "paper")
{
    // console.log("Player's Scissors beats CPU's Paper");
    $("body").append("<h1>  Player wins </h1>")
}

if (playerChoice == "scissors" && cpuChoice == "rock")
{
    // console.log("Player's Scissors beats CPU's Rock");
    $("body").append("<h1>  CPU wins </h1>")
}
}