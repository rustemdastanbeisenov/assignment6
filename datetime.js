function updateDateTime() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit'};
    document.getElementById('currentDateTime').textContent = now.toLocaleDateString('en-US', options);
}

setInterval(updateDateTime, 1000);
updateDateTime();