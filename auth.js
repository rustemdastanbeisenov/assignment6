document.addEventListener("DOMContentLoaded", function() {
    const user = JSON.parse(localStorage.getItem("user"));
    const loginForm = document.getElementById("loginForm");
    const logoutBtn = document.getElementById("logoutBtn");
    const loginMessage = document.getElementById("loginMessage");

    if (user) {
        displayWelcomeMessage(user.username);
    }

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const userData = { username: username };
        localStorage.setItem("user", JSON.stringify(userData));
        displayWelcomeMessage(username);
    });

    logoutBtn.addEventListener("click", function() {
        localStorage.removeItem("user");
        loginMessage.textContent = "";
        logoutBtn.style.display = "none";
        loginForm.style.display = "block";
    });

    function displayWelcomeMessage(username) {
        loginMessage.textContent = `Welcome, ${username}!`;
        logoutBtn.style.display = "block";
        loginForm.style.display = "none";
    }
});
