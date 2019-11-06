function generateDice()
{
  var diceFace1=Math.floor(Math.random()*6)+1;   //at least 1  and at most 6
  var diceFace2=Math.floor(Math.random()*6)+1;   //at least 1  and at most 6
  assignImg(diceFace1,0);
  assignImg(diceFace2,1);
  getScore(diceFace1,diceFace2);
}

function assignImg(diceFace,counter){
  switch(diceFace)
  {case 1:
    document.querySelectorAll('img')[counter].src='1.png';
    break;

   case 2:
   document.querySelectorAll('img')[counter].src='2.png';
    break;

   case 3:
   document.querySelectorAll('img')[counter].src='3.png';
    break;

   case 4:
   document.querySelectorAll('img')[counter].src='4.png';
    break;

    case 5:
    document.querySelectorAll('img')[counter].src='5.png';
     break;

    case 6:
    document.querySelectorAll('img')[counter].src='6.png';
     break;

    default:
    alert('noFaceDice');
     break;


  }
}

function getScore(diceFace1,diceFace2)
{
if(diceFace1>diceFace2)
{
  document.querySelector('#result').innerHTML="player 1 is the winner";
}
else if(diceFace1<diceFace2)
{
  document.querySelector('#result').innerHTML="player 2 is the winner";
}
else{
  document.querySelector('#result').innerHTML="two players are draw";
}
}
