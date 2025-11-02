const letter = document.getElementById('letter');
const overlay = document.getElementById('overlay');
const flap = document.querySelector('.flap');


function openLetter() {
  flap.style.transform = 'rotateX(180deg)';
  letter.classList.add('active');
  overlay.classList.add('active');
  createHearts();
}

function closeLetter() {
  flap.style.transform = 'rotateX(0deg)';
  letter.classList.remove('active');
  overlay.classList.remove('active');
  clearHearts();
}


const flowerContainer = document.querySelector('.flower-container');
const flowers = ['🌸','🌺','💮','🌼','🌷'];

for(let i=0; i<30; i++){
  const flower = document.createElement('div');
  flower.classList.add('flower');
  flower.style.left = Math.random() * 100 + 'vw';
  flower.style.animationDuration = 3 + Math.random()*5 + 's';
  flower.style.fontSize = 12 + Math.random()*24 + 'px';
  flower.innerText = flowers[Math.floor(Math.random() * flowers.length)];
  flowerContainer.appendChild(flower);
}


function createHearts(){
  const heartsContainer = document.querySelector('.hearts-container');
  for(let i=0; i<20; i++){
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 90 + '%';
    heart.style.fontSize = 12 + Math.random()*20 + 'px';
    heart.innerText = '❤️';
    heartsContainer.appendChild(heart);
  }
}

function clearHearts(){
  document.querySelector('.hearts-container').innerHTML = '';
}


