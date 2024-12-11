// Importera CSS direkt i TypeScript-filen
import './style.css';

// Funktion som körs när användaren klickar på knapparna
function answer(response: string): void {
  alert(`Du valde: ${response}`);
}

// Funktion som flyttar "Nej"-knappen när användaren rör över den
function moveNoButton(): void {
  const noButton = document.getElementById('noBtn') as HTMLButtonElement;

  const randomX = Math.floor(Math.random() * 300) - 150;
  const randomY = Math.floor(Math.random() * 300) - 150;

  noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

// Lägg till eventlyssnare för knapparna när sidan är laddad
window.addEventListener('DOMContentLoaded', () => {
  const yesButton = document.getElementById('yesBtn') as HTMLButtonElement;
  const noButton = document.getElementById('noBtn') as HTMLButtonElement;

  yesButton.addEventListener('click', () => {
    answer('Ja');
  });

  noButton.addEventListener('mouseover', moveNoButton);
});
