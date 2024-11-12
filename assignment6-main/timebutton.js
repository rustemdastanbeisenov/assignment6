document.getElementById('showTimeBtn').addEventListener('click', function () {
	const currentTime = new Date().toLocaleTimeString();
	document.getElementById('timeDisplay').textContent = `Current Time: ${currentTime}`;
});