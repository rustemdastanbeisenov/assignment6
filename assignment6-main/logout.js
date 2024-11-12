document.addEventListener('DOMContentLoaded', function () {
    const currentUser = localStorage.getItem('currentUser');
    
    const loginItem = document.getElementById('loginItem');
    const registerItem = document.getElementById('registerItem');
    const logoutItem = document.getElementById('logoutItem');
    const profileItem = document.getElementById('profileItem');
    const logoutLink = document.getElementById('logoutLink');

    if (currentUser) {
        loginItem.style.display = 'none';
        registerItem.style.display = 'none';
        profileItem.style.display = 'block';
        logoutItem.style.display = 'block';
    } else {
        loginItem.style.display = 'block';
        registerItem.style.display = 'block';
        profileItem.style.display = 'none';
        logoutItem.style.display = 'none';
    }

    logoutLink.addEventListener('click', function () {
        localStorage.removeItem('currentUser');
        alert('Logged out successfully');
        window.location.href = 'index.html';
    });
});