const foodItems = [
    { name: "Pasta Pépito", category: "pasta", description: "Our signature dish: Pasta Pépito." },
    { name: "Risotto", category: "risotto", description: "Risotto with fresh tomatoes." },
    { name: "Marinated Meat", category: "meat", description: "Meat marinated in honey, mustard, garlic, and onion with buckwheat." },
    { name: "Fried Pasta", category: "pasta", description: "Crispy and delicious fried pasta." },
    { name: "Pasta à la Italian", category: "pasta", description: "Classic Italian pasta with fresh herbs." },
    { name: "Minnesotan Soup", category: "misc", description: "A rich, creamy soup with a meaty base." },
];

document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const foodList = document.getElementById('foodList');

    const savedSearchTerm = localStorage.getItem('searchTerm') || '';
    const savedCategory = localStorage.getItem('category') || '';

    searchInput.value = savedSearchTerm;
    categoryFilter.value = savedCategory;

    function displayFoodItems(filteredFood) {
        foodList.innerHTML = '';
        filteredFood.forEach(item => {
            const foodItemElement = document.createElement('div');
            foodItemElement.classList.add('food-item', 'mb-3');
            foodItemElement.innerHTML = `
                <h5>${item.name}</h5>
                <p><strong>Category:</strong> ${item.category}</p>
                <p>${item.description}</p>
            `;
            foodList.appendChild(foodItemElement);
        });
    }

    function filterFoodItems() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedCategory = categoryFilter.value;

        localStorage.setItem('searchTerm', searchTerm);
        localStorage.setItem('category', selectedCategory);

        const filteredFood = foodItems.filter(item => {
            const matchesCategory = selectedCategory ? item.category === selectedCategory : true;
            const matchesSearchTerm = item.name.toLowerCase().includes(searchTerm) || item.description.toLowerCase().includes(searchTerm);
            return matchesCategory && matchesSearchTerm;
        });

        displayFoodItems(filteredFood);
    }

    searchInput.addEventListener('input', filterFoodItems);
    categoryFilter.addEventListener('change', filterFoodItems);

    filterFoodItems();
});