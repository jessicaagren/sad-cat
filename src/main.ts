// Importera CSS
import './style.css';

// Funktion som körs när användaren klickar på "Ja"-knappen
function handleYesButtonClick(): void {
  // Skapa hjärtan
  createHearts();

  // Byt ut bilden till happy-cat
  const imgElement = document.querySelector('img') as HTMLImageElement;
  imgElement.src = 'media/happy-cat.png'; // Sökväg till den nya bilden
}

function moveNoButton(): void {
  const noButton = document.getElementById('noBtn') as HTMLButtonElement;

  // Radie för slumpmässig rörelse
  const radius = 100;

  // Slumpmässig vinkel för att beräkna position på cirkeln
  const randomAngle = Math.random() * 2 * Math.PI;

  // Beräkna nya koordinater relativt till föräldern (buttonWrapper)
  const randomX = radius * Math.cos(randomAngle); // X-position
  const randomY = radius * Math.sin(randomAngle); // Y-position

  // Uppdatera knappen med nya positioner
  noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

// Funktion för att skapa hjärtan med emoji
function createHearts(): void {
  const heartContainer = document.getElementById('heartContainer') as HTMLDivElement;

  for (let i = 0; i < 30; i++) {
    const heart = document.createElement('img');
    heart.classList.add('heart');
    heart.src = '../media/pixel-heart.png';
    heart.alt = 'Heart';
    heart.width = 24;
    heart.height = 24;

    const randomX = Math.random() * window.innerWidth;
    const randomSize = Math.random() * 1.5 + 0.8;
    const duration = Math.random() * 2 + 3;

    heart.style.left = `${randomX}px`;
    heart.style.fontSize = `scale(${randomSize})`;
    heart.style.animationDuration = `${duration}s`;

    // Lägg till hjärtat i DOM
    heartContainer.appendChild(heart);

    // Ta bort hjärtat efter animationen är klar
    setTimeout(() => {
      heart.remove();
    }, duration * 1000);
  }
}

// Lägger till eventlyssnare när sidan är laddad
window.addEventListener('DOMContentLoaded', () => {
  const yesButton = document.getElementById('yesBtn') as HTMLButtonElement;
  const noButton = document.getElementById('noBtn') as HTMLButtonElement;

  // Event för "Ja"-knappen
  yesButton.addEventListener('click', handleYesButtonClick);

  // Event för "Nej"-knappen
  noButton.addEventListener('mouseover', moveNoButton);
});
