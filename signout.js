document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to the login icon
    document.getElementById('loginIcon').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor behavior
    
        const user = JSON.parse(localStorage.getItem('loggedInUser'));
        
        if (user) {
            const confirmLogout = confirm('Do you want to sign out?');
            if (confirmLogout) {
                localStorage.removeItem('loggedInUser');
                alert('You have been signed out.');
                window.location.href = 'login.html';
            }
        } else {
            window.location.href = 'login.html';
        }
    });
});
