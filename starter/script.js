'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore=0;

const displayMessage = function(mssg){
    document.querySelector('.message').textContent = mssg;
}
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);//.value is applied on input types fields and always returns value in string type,that's why converting it to number format
    //when there is no input
    if (!guess && document.querySelector('.guess').value == '') {
        displayMessage('⛔ No number!');
    }
    else {
        //when player wins
        if (number == guess) {
            displayMessage('🎉 Correct Number!');
            document.querySelector('.number').textContent = number;//.textContent is applied on html elements other than input types and can have number or string or any other type value;
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
            if(score>highscore){
                highscore=score;
                document.querySelector('.highscore').textContent = highscore;
            }

        }
        //when guess is wrong
        else if(guess!=number){
            if (score > 1) {
                displayMessage(guess < number ? '📉 Too low!' : '📈 Too high!');
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                displayMessage('💥 You lost the game!');
                document.querySelector('.score').textContent = 0;
            }
            document.querySelector('body').style.backgroundColor = '#222';
        }
        // //when guess is too low
        // else if (guess < number) {
        //     if (score > 1) {
        //         displayMessage('📉 Too low!');
        //         score--;
        //         document.querySelector('.score').textContent = score;
        //     } else {
        //         displayMessage('💥 You lost the game!');
        //         document.querySelector('.score').textContent = 0;
        //     }
        //     document.querySelector('body').style.backgroundColor = '#222';
        // }
        // //when guess is too high
        // else {
        //     if (score > 1) {
        //         displayMessage('📈 Too high!');
        //         score--
        //         document.querySelector('.score').textContent = score;
        //     }
        //     else {
        //         displayMessage('💥 You lost the game!');
        //         document.querySelector('.score').textContent = 0;
        //     }
        //     document.querySelector('body').style.backgroundColor = '#222';
        // }
    }
});

function reset() {
    number = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.score').textContent = score;
    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
}
document.querySelector('.again').addEventListener('click', reset);