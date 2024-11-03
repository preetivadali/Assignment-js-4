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

// EXERCISE 3: Calculate the sum of even numbers in the array 


function sumEvenNumbers (arr){

    let sum = 0;
    for(let i = 0; i<arr.length ; i++){
    if(arr [i]% 2 == 0){

        sum += sum + arr[i];
    }
    }
 return sum;
}
let number =[1,2,3,4,5,6,7,8,9,10];

console.log(sumEvenNumbers(number));

