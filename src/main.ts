// Importera CSS
import './style.css';

// Funktion som körs när användaren klickar på "Ja"-knappen
function handleYesButtonClick(): void {
  alert('Vi saknar dig också!');
}

// Funktion som flyttar "Nej"-knappen till en slumpmässig position
function moveNoButton(): void {
  const noButton = document.getElementById('noBtn') as HTMLButtonElement;

  // Slumpmässiga positioner inom viewportens storlek
  const randomX = Math.floor(Math.random() * window.innerWidth * 0.8); // Max 80% av fönstrets bredd
  const randomY = Math.floor(Math.random() * window.innerHeight * 0.8); // Max 80% av fönstrets höjd

  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
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
