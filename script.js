var wins =0;
var losses = 0;
var ties =0;

var option = ['S','P','R'];


function game() {
    var choice = prompt("What would you like to choose from Paper, Scissors and Rock? Please Enter P, S or R.");
    var compChoice = option[Math.floor(Math.random() * Math.floor(option.length))];
    choice = choice.toUpperCase();
    if (choice === compChoice)
    {
        ties++;
        window.alert("Computer choosed "+ compChoice +",It's a tie!")
    }
    else if (
        choice === 'P' && compChoice === 'R' ||
        choice === 'S' && compChoice === 'P' ||
        choice === 'R' && compChoice === 'S'
    )
    {
        wins++;
        window.alert("Computer choosed "+ compChoice +", You Won!");
    }
    else{
        losses++;
        window.alert("Computer choosed "+ compChoice +", You Lost!");
    }
    window.alert("Your score:\n Total Wins: "+wins+"\nTotal Lost: "+losses+"\nTotal ties: "+ties);
    if(window.confirm("Do you want to play again?")){
        game();
    }
} 

game();

window.alert("Your final score:\n Total Wins: "+wins+"\nTotal Lost: "+losses+"\nTotal ties: "+ties);




