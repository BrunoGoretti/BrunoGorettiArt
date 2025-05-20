const backgroundImages = [
  'images/NomadsStance.jpg',
  'images/LSStreetGang.jpg',
  'images/TommyRun.jpg',
  'images/JB.jpg',
  'images/ShaoVsJade.jpg',
  'images/TheThingMonster.jpg',
  'images/Comics.jpg',
  'images/FnvSB.jpg',
  'images/OtherStyles.jpg'
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