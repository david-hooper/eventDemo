const cowBtn = document.querySelector('.cow');
const sheepBtn = document.querySelector('.sheep');
const pigBtn = document.querySelector('.pig');
const duckBtn = document.querySelector('.duck');
const dogBtn = document.querySelector('.dog');
const catBtn = document.querySelector('.cat');
const textInput = document.querySelector('#text-input');
const typewriterSound = new Audio('sounds/keypress.wav');

cowBtn.addEventListener('click', () => {
  playSound('cow');
});

sheepBtn.addEventListener('click', () => {
  playSound('sheep');
});

pigBtn.addEventListener('click', () => {
  playSound('pig');
});

duckBtn.addEventListener('click', () => {
  playSound('duck');
});

dogBtn.addEventListener('click', () => {
  playSound('dog');
});

catBtn.addEventListener('click', () => {
    playSound('cat');
  });
  

function playSound(animal) {
    const audio = new Audio(`sounds/${animal}.wav`);
    audio.play();
  }


textInput.addEventListener('input', () => {
  typewriterSound.currentTime = 0;
  typewriterSound.play();
});