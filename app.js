// variable declaration

let scores,roundScore,activePlayer,gamePlay;
let lastDice;
inIt();



document.querySelector('.btn-roll').addEventListener('click', function(){

    if (gamePlay) {
        
    
    //1 get a random number between 1 -6

    let dice1=Math.floor(Math.random()*6)+1;
    let dice2=Math.floor(Math.random()*6)+1;
    //2 display result 

    document.getElementById('dice-1').style.display='block';
    document.getElementById('dice-1').style.display='block';
    
    document.getElementById('dice-1').src='dice-'+ dice1 + '.png';
    document.getElementById('dice-2').src='dice-'+ dice2 + '.png';

    //3 Update the round score IF the Score is not 1

    if(dice1 !== 1 && dice2 !== 1 ){
        //add score to current
        roundScore+=dice1 +dice2;
        document.querySelector('#current-' + activePlayer).textContent=roundScore;

    } else{
        
        nextPlayer();
    }
    /*
    if (dice===6 && lastDice ===6) {
        scores[activePlayer]=0;
        document.querySelector('#score-' +activePlayer).textContent='0';
        nextPlayer();
    }
    else if(dice !== 1){
        //add score to current
        roundScore+=dice;
        document.querySelector('#current-' + activePlayer).textContent=roundScore;
 
    } else{
        
        nextPlayer();
    }

    lastDice=dice;
    */
}

});

document.querySelector('.btn-hold').addEventListener('click' , function(){

    if (gamePlay) {
        
    
    //add current score to Global Score
    scores[activePlayer] +=roundScore;

    //Update the Ui 
    document.querySelector('#score-' + activePlayer).textContent=scores[activePlayer];

        let input=document.querySelector('#score2').value;
        let winningScore;

        if (input) {
            winningScore=input;
        }else{
            winningScore=100;
        }
        
    //check if the Player Won the game 
    if (scores[activePlayer] >= winningScore) {
        document.querySelector('#name-' + activePlayer).textContent='winner';
        document.getElementById('dice-1').style.display='none';
        document.getElementById('dice-1').style.display='none';
        document.querySelector('.player-'+activePlayer +'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer +'-panel').classList.remove('active');
        gamePlay=false;

    }else{
        //if hold click then pass it to next player
        nextPlayer();

    }
}
    
});

function nextPlayer(){

    activePlayer ===0 ? activePlayer =1 : activePlayer =0;
    roundScore =0;

    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.getElementById('dice-1').style.display='none';
    document.getElementById('dice-1').style.display='none';
}

document.querySelector('.btn-new').addEventListener('click',inIt);

function inIt(){
    scores=[0,0];
    activePlayer=0;
    roundScore=0;
    gamePlay=true;

    document.getElementById('dice-1').style.display='none';
    document.getElementById('dice-1').style.display='none';

    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.getElementById('name-0').textContent='player-1';
    document.getElementById('name-1').textContent='player-2';

    
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

