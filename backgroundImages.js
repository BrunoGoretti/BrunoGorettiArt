const backgroundImages = [
  'images/TurboBlonde.jpg',
  'images/NomadsStance.jpg',
  'images/GingerGlow.jpg',
  'images/VicAndPhil.jpg',
  'images/FerrariF40.jpg',
  'images/Agnello.jpg',
  'images/TheThingMonster.jpg',
  'images/AlienVsTheThing.jpg',
  'images/AlienInvasion.jpg',
  'images/LuciaAndJason.jpg',
  'images/TommyRun.jpg',
 
];

let currentImageIndex = 0;
const backgroundDiv = document.querySelector('.background-slideshow');

function showBackground(index) {
  backgroundDiv.style.backgroundImage = `url(${backgroundImages[index]})`;
}

function nextBackground() {
  currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
  showBackground(currentImageIndex);
}

function prevBackground() {
  currentImageIndex =
    (currentImageIndex - 1 + backgroundImages.length) % backgroundImages.length;
  showBackground(currentImageIndex);
}

// Initial display
showBackground(currentImageIndex);

// Auto change every 5 seconds
let slideshowInterval = setInterval(nextBackground, 5000);

// Button controls
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