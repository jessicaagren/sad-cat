import './style.css';
function handleButtonClick(isYesButton) {
    const imgElement = document.querySelector('.cat-img');
    if (isYesButton) {
        console.log('Yes button clicked');
        createHearts();
        const newImgElement = document.createElement('img');
        newImgElement.src = '/media/happy-cat.png';
        newImgElement.className = 'cat-img';
        newImgElement.width = 300;
        newImgElement.height = 300;
        imgElement.parentNode?.replaceChild(newImgElement, imgElement);
        const headingText = document.getElementById('heading-text');
        headingText.innerHTML = 'Yippeeee!!!';
        const buttonWrapper = document.querySelector('.button-wrapper');
        const nextButton = document.createElement('button');
        nextButton.id = 'nextBtn';
        nextButton.className = 'next-btn';
        nextButton.textContent = 'Klicka här';
        nextButton.onclick = () => {
            window.location.href = '/thirdPage.html';
        };
        buttonWrapper.innerHTML = '';
        buttonWrapper.appendChild(nextButton);
        const noButton = document.getElementById('noBtn');
        noButton.remove();
    }
    else {
        imgElement.src = '/media/sad-cat.png';
        triggerExplosion();
    }
}
window.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.getElementById('yesBtn');
    const noButton = document.getElementById('noBtn');
    yesButton.addEventListener('click', () => handleButtonClick(true));
    noButton.addEventListener('click', () => handleButtonClick(false));
    noButton.addEventListener('mouseover', moveNoButton);
});
function moveNoButton() {
    const noButton = document.getElementById('noBtn');
    const radius = 100;
    const randomAngle = Math.random() * 2 * Math.PI;
    const randomX = radius * Math.cos(randomAngle);
    const randomY = radius * Math.sin(randomAngle);
    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
}
function createHearts() {
    const heartContainer = document.getElementById('heartContainer');
    for (let i = 0; i < 200; i++) {
        const heart = document.createElement('img');
        heart.classList.add('heart');
        heart.src = '/media/pixel-heart.png';
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
function triggerExplosion() {
    const noButton = document.getElementById('noBtn');
    noButton.classList.add('explode');
    setTimeout(() => {
        noButton.remove();
    }, 500);
}
