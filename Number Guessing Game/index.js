// Number guessing game

const min = 50;
const max = 100;

const answer = Math.floor(Math.random() * ( max - min + 1)) + min;

let attempts = 0;
let guess;
let running = true;

while(running){

    guess = window.prompt(`Guess a number between ${min} and ${max}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Please enter a valid number")
    }
    else if(guess < min || guess > max){
        window.alert("Please enter a valid number")
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert("too low, guess again please");
        }
        else if(guess > answer){
            window.alert("Too high, try again please")
        }
        else{
            window.alert(`Correct, the answer was ${answer}, it took you ${attempts} attempts`)
            running = false;
        }
    }
}