var cpuChoice = Math.random();
var prompt = require('prompt-sync')();
var playerChoice = prompt("Do you choose","rock, paper or scissors: ");

// function setchoice()
// {
//     if(playerChoice == "rock")
//         {

//         }
// }

var scissors = cpuChoice < 0.34;
var paper = cpuChoice < 0.67;
var rock = cpuChoice > 0.68;

//Player choose Rock
if (playerChoice == "rock" && cpuChoice == paper)
    {
        // console.log("CPU wins");
        $("body").append("<h1>  CPU wins </h1>")
    }

if (playerChoice == "rock" && cpuChoice == scissors)
    {
        // console.log("Rock wins");
        $("body").append("<h1> Player wins </h1>")
    }

if (playerChoice == scissors || playerChoice == paper || playerChoice == rock)
    {
        // console.log("It's a tie");
        $("body").append("<h1>  It's a tie </h1>")
    }

//Player choose Paper
if (playerChoice == "paper" && cpuChoice == scissors)
    {
        // console.log("CPU wins");
        $("body").append("<h1>  CPU wins </h1>")
    }

if (playerChoice == "paper" && cpuChoice == rock)
    {
        // console.log("Player wins");
        $("body").append("<h1>  Player wins </h1>")
    }


//Player choose Scissors
if (playerChoice == "s" && cpuChoice == paper)
{
    // console.log("Player's Scissors beats CPU's Paper");
    $("body").append("<h1>  Player wins </h1>")
}

if (playerChoice == "s" && cpuChoice == rock)
{
    // console.log("Player's Scissors beats CPU's Rock");
    $("body").append("<h1>  CPU wins </h1>")
}