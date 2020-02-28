// variable declaration

let scores,roundScore,activePlayer;

//inIt();

scores=[0,0];
activePlayer=0;
roundScore=0;

document.querySelector('.dice').style.display='none';

document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';


document.querySelector('.btn-roll').addEventListener('click', function(){
//1 get a random number between 1 -6

let dice=Math.floor(Math.random()*6)+1;
//2 display result 

var diceDom=document.querySelector('.dice');
diceDom.style.display='block';
diceDom.src='dice-'+ dice + '.png';

//3 Update the round score IF the Score is not 1

if(dice !== 1){
    //add score to current
    roundScore+=dice;
    document.querySelector('#current-' + activePlayer).textContent=roundScore;
   
    

} else{
    
    nextPlayer();
}


});

document.querySelector('.btn-hold').addEventListener('click', function(){

    //add current score to Global Score
    scores[activePlayer] +=roundScore;

    // change the UI 
    document.querySelector('#score-' +activePlayer).textContent=scores[activePlayer];


    //nextPalyer 
    nextPlayer();
});

function nextPlayer(){

    activePlayer ===0 ? activePlayer =1 : activePlayer =0;
    roundScore =0;

    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';

    //document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display='none';
}

