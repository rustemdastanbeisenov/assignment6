document.addEventListener("DOMContentLoaded", function() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
        displayWelcomeMessage(user.username);
    }

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "user" && password === "password") {
            const userData = { username: username };
            localStorage.setItem("user", JSON.stringify(userData));
            displayWelcomeMessage(username);
        } else {
            loginMessage.textContent = "Invalid username or password.";
        }
    });

    logoutBtn.addEventListener("click", function() {
        localStorage.removeItem("user");
        loginMessage.textContent = "";
        logoutBtn.style.display = "none";
    });

    function displayWelcomeMessage(username) {
        loginMessage.textContent = `Welcome, ${username}!`;
        logoutBtn.style.display = "block";
        loginForm.style.display = "none";
    }
});