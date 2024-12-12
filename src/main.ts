// Importera CSS
import './style.css';

// Funktion som körs när användaren klickar på "Ja"-knappen
function handleYesButtonClick(): void {
  createHearts();
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
    // heart.textContent = '❤️'; // Använd emoji som hjärta
    heart.src = '../media/pixel-heart.png'; // Replace with your actual image path
    heart.alt = 'Heart'; // Optional: Accessibility description
    heart.width = 24; // Optional: Set the width (adjust as needed)
    heart.height = 24; // Optional: Set the height (adjust as needed)

    // Slumpmässig startposition för hjärtan inom fönstret
    const randomX = Math.random() * (window.innerWidth - 30); // Håll hjärtan inom fönstret
    const randomSize = Math.random() * 1.5 + 0.8; // Fontstorlek mellan 0.8em och 2.3em
    const duration = Math.random() * 2 + 3; // Mellan 3 och 5 sekunder

    // Tilldela slumpmässig position och storlek
    heart.style.left = `${randomX}px`;
    heart.style.fontSize = `${randomSize}em`;
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
