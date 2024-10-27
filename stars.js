const stars = document.querySelectorAll('.star');
const ratingText = document.getElementById('rating-text');

stars.forEach(star => {
	star.addEventListener('click', () => {
		const rating = star.getAttribute('data-value');
		ratingText.textContent = `You rated: ${rating} star(s)`;
		stars.forEach(s => s.style.color = 'black');
		star.style.color = 'red';
	});
});