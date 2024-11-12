function getRandomFood() {
    fetch('https://foodish-api.com/api/')
        .then(response => response.json())
        .then(data => {
            const imageUrl = data.image;
            document.getElementById('food-image-container').innerHTML = `<img src="${imageUrl}" alt="Random Food">`;
        })
        .catch(error => console.error('Error fetching random food:', error));
}