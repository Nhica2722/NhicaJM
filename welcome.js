document.addEventListener('DOMContentLoaded', function() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    const welcomeMessageDiv = document.querySelector('.welcome-message');
    const loginIcon = document.getElementById('loginicon');

    if (loggedInUser) {
        welcomeMessageDiv.innerHTML = `<h1>Welcome, ${loggedInUser.firstName} ${loggedInUser.lastName}!</h1>`;
        
        loginIcon.addEventListener('click', function(event) {
            event.preventDefault();
            if (confirm('Do you want to sign out?')) {
                localStorage.removeItem('loggedInUser');
                welcomeMessageDiv.innerHTML = '';
                alert('You have been signed out.');
                window.location.href = './login.html';
            }
        });
    } else {
        loginIcon.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = './login.html';
        });
    }
});