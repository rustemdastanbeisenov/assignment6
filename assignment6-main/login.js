const audio = new Audio('notification.wav');

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const userData = localStorage.getItem(username);

    if (userData) {
        const user = JSON.parse(userData);

        if (user.password === password) {
			audio.play();
            alert('Login successful!');
            localStorage.setItem('currentUser', username);
            window.location.href = 'profile.html';
        } else {
            alert('Invalid username or password');
        }
    } else {
        alert('Invalid username or password');
    }
});
