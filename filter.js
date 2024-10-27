document.addEventListener('DOMContentLoaded', function() {
    const filterSelect = document.getElementById('dishType');
    const cards = document.querySelectorAll('.card');

    const savedFilter = localStorage.getItem('dishFilter');
    if (savedFilter) {
        filterSelect.value = savedFilter;
        filterDishes(savedFilter);
    }

    filterSelect.addEventListener('change', function() {
        const filterValue = this.value;
        localStorage.setItem('dishFilter', filterValue);
        filterDishes(filterValue);
    });

    function filterDishes(filter) {
        cards.forEach(card => {
            const cardTitle = card.querySelector('.card-title').innerText.toLowerCase();
            if (filter === '' || cardTitle.includes(filter.toLowerCase())) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
});