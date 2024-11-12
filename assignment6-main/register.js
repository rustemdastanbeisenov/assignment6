const audio = new Audio('notification.wav');

document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (localStorage.getItem(username)) {
        alert('User already exists!');
        return;
    }

    const newUser = {
        username: username,
        email: email,
        password: password
    };

    localStorage.setItem(username, JSON.stringify(newUser));
	
    alert('Registration successful!');
    window.location.href = 'login.html';
});