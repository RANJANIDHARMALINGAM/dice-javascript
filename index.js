var imageArray=[
'images/dice1.png',
'images/dice2.png',
'images/dice3.png',
'images/dice4.png',
'images/dice5.png',
'images/dice6.png'
    ];
function changeImage() {
      var imageElement = document.getElementsByClassName('img1');
      var randomIndex1 = Math.floor(Math.random() * imageArray.length);
      imageElement[0].setAttribute('src', imageArray[randomIndex1]);
 return randomIndex1;
    }

var randomIndex1=changeImage();

function changeImage2() {
      var imageElement = document.getElementsByClassName('img2');
      var randomIndex2 = Math.floor(Math.random() * imageArray.length);
      imageElement[0].setAttribute('src', imageArray[randomIndex2]);
return randomIndex2;
    }
var randomIndex2=changeImage2();

 if (randomIndex1  > randomIndex2 ) {
    document.querySelector('h1').textContent = 'Player 1 Wins!';
  } else if (randomIndex1  < randomIndex2 ) {
    document.querySelector('h1').textContent = 'Player 2 Wins!';
  } else {
    document.querySelector('h1').textContent = 'It\'s a Draw!';
  }

