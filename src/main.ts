import './style.css';

function handleButtonClick(isYesButton: boolean): void {
  const imgElement = document.querySelector('img') as HTMLImageElement;

  if (isYesButton) {
    createHearts();
    imgElement.src = 'media/happy-cat.png';
  } else {
    imgElement.src = 'media/sad-cat.png';
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const yesButton = document.getElementById('yesBtn') as HTMLButtonElement;
  const noButton = document.getElementById('noBtn') as HTMLButtonElement;

  yesButton.addEventListener('click', () => handleButtonClick(true));

  noButton.addEventListener('click', () => handleButtonClick(false));
  noButton.addEventListener('mouseover', moveNoButton);
});

function moveNoButton(): void {
  const noButton = document.getElementById('noBtn') as HTMLButtonElement;
  const radius = 100;
  const randomAngle = Math.random() * 2 * Math.PI;
  const randomX = radius * Math.cos(randomAngle);
  const randomY = radius * Math.sin(randomAngle);
  noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

function createHearts(): void {
  const heartContainer = document.getElementById('heartContainer') as HTMLDivElement;

  for (let i = 0; i < 200; i++) {
    const heart = document.createElement('img');
    heart.classList.add('heart');
    heart.src = '../media/pixel-heart.png';
    heart.alt = 'Heart';
    const randomX = Math.random() * window.innerWidth;
    const randomSize = Math.random() * 30 + 20;
    const duration = Math.random() * 3 + 2;
    const startY = Math.random() * -100 - 50;

    heart.style.left = `${randomX}px`;
    heart.style.width = `${randomSize}px`;
    heart.style.height = `${randomSize}px`;
    heart.style.animationDuration = `${duration}s`;
    heart.style.top = `${startY}px`;

    heart.style.animationName = Math.random() > 0.5 ? 'fallLeft' : 'fallRight';

    heartContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, duration * 1000);
  }
}
