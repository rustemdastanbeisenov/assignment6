let currentFocus = 0;
const menuItems = document.querySelectorAll('#navMenu li');

document.addEventListener('keydown', (e) => {
	if (e.key === 'ArrowLeft') {
		menuItems[currentFocus].blur();
		currentFocus = (currentFocus + 1) % menuItems.length;
		menuItems[currentFocus].focus();
	} else if (e.key === 'ArrowRight') {
		menuItems[currentFocus].blur();
		currentFocus = (currentFocus - 1 + menuItems.length) % menuItems.length;
		menuItems[currentFocus].focus();
	}
});