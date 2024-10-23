// EXERCISE 1: Guess the random number 
let gameNum = 5;
let  guessNumberGame = prompt("guess the right number :");

while( guessNumberGame != gameNum){
    guessNumberGame =  prompt("guess again");
    if(guessNumberGame < 5){
        console.log("Entered number is smaller than the game number")
    }
    else if(guessNumberGame > 5){
        console.log("Entered number is bigger than the game number")
    }

   
}


console.log("Congratulations you entered a right number");