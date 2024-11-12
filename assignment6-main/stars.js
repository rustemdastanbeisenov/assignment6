const stars = document.querySelectorAll('.star');
const ratingText = document.getElementById('rating-text');
const starSound = new Audio('star.wav');

const savedRating = localStorage.getItem('rating');
if (savedRating) {
    ratingText.textContent = `You rated: ${savedRating} star(s)`;
    for (let i = 0; i < savedRating; i++) {
        stars[i].src = 'star-filled.png';
    }
}

stars.forEach(star => {
    star.addEventListener('click', () => {
        const rating = star.getAttribute('data-value');
        ratingText.textContent = `You rated: ${rating} star(s)`;

        starSound.play();

        localStorage.setItem('rating', rating);

        stars.forEach(s => {
            s.src = 'star-empty.png';
            s.classList.remove('enlarged');
        });

        for (let i = 0; i < rating; i++) {
            stars[i].src = 'star-filled.png';
        }

        star.classList.add('enlarged');

        stars.forEach(star => {
            star.style.animation = 'starEffect 0.5s ease';
            star.addEventListener('animationend', () => {
                star.style.animation = '';
            });
        });

        star.addEventListener('animationend', () => {
            star.classList.remove('enlarged');
        });
    });
});
