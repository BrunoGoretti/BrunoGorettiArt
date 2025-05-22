const backgroundImages = [
  'images/TurboBlonde.jpg',
  'images/TheThingMonster.jpg',
  'images/AlienVsTheThing.jpg',
  'images/AlienInvasion.jpg',
  'images/NomadsStance.jpg',
  'images/GingerGlow.jpg',
  'images/VicAndPhil.jpg',
  'images/FerrariF40.jpg',
  'images/Agnello.jpg',
  'images/LuciaAndJason.jpg',
];

backgroundImages.forEach((src) => {
  const img = new Image();
  img.src = src;
});

let currentImageIndex = 0;
let currentLayer = 0;

const layers = [
  document.querySelector('.background-layer-1'),
  document.querySelector('.background-layer-2')
];

function showBackground(index) {
  const nextLayer = (currentLayer + 1) % 2;

  layers[nextLayer].style.backgroundImage = `url(${backgroundImages[index]})`;
  layers[nextLayer].classList.add('show');
  layers[currentLayer].classList.remove('show');

  currentLayer = nextLayer;
}

function nextBackground() {
  currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
  showBackground(currentImageIndex);
}

function prevBackground() {
  currentImageIndex = (currentImageIndex - 1 + backgroundImages.length) % backgroundImages.length;
  showBackground(currentImageIndex);
}

showBackground(currentImageIndex);
let slideshowInterval = setInterval(nextBackground, 5000);

document.getElementById('next-background').addEventListener('click', () => {
  nextBackground();
  resetInterval();
});

document.getElementById('prev-background').addEventListener('click', () => {
  prevBackground();
  resetInterval();
});

function resetInterval() {
  clearInterval(slideshowInterval);
  slideshowInterval = setInterval(nextBackground, 5000);
}