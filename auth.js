document.addEventListener("DOMContentLoaded", function() { 
    const loginForm = document.getElementById("loginForm");
    const logoutBtn = document.getElementById("logoutBtn");
    const loginMessage = document.getElementById("loginMessage");
    const registerBtn = document.getElementById("register");
    
    const storedUser = localStorage.getItem("user");
    
    if (storedUser) {
		const user = JSON.parse(storedUser);
		displayWelcomeMessage(user.username);
    } else {
        logoutBtn.style.display = "none";
        loginForm.style.display = "block";
    }

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        
        const userData = { username: username, password: password };
        localStorage.setItem("user", JSON.stringify(userData));
        displayWelcomeMessage(username);
    });

    logoutBtn.addEventListener("click", function() {
        localStorage.removeItem("user");
        loginMessage.textContent = "";
        loginForm.style.display = "block";
        logoutBtn.style.display = "none";
    });

    function displayWelcomeMessage(username) {
        loginMessage.textContent = `Welcome, ${username}!`;
        logoutBtn.style.display = "block";
        loginForm.style.display = "none";
    }
});
