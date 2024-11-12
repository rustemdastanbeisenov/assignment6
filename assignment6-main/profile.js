document.addEventListener('DOMContentLoaded', function() {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
        window.location.href = 'login.html';
        return;
    }

    const userData = JSON.parse(localStorage.getItem(currentUser));
    const foodPreference = localStorage.getItem('dishFilter');

    document.getElementById('profileUsername').value = userData.username;
    document.getElementById('profileEmail').value = userData.email;
    document.getElementById('foodPreference').value = foodPreference ? foodPreference : "Not set";

    document.getElementById('profileForm').addEventListener('submit', function(e) {
        e.preventDefault();

        const oldPassword = document.getElementById('profileOldPassword').value;
        const updatedEmail = document.getElementById('profileEmail').value;
        const updatedPassword = document.getElementById('profilePassword').value;

        if (oldPassword !== userData.password) {
            alert('Old password is incorrect. Please try again.');
            return;
        }

        if (updatedPassword) {
            userData.password = updatedPassword;
        }
        userData.email = updatedEmail;

        localStorage.setItem(currentUser, JSON.stringify(userData));

        alert('Profile updated successfully!');
    });
});