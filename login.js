document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);
    
    if (user) {
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        window.location.href = 'index.html';
    } else {
        if (confirm("Account does not exist. Would you like to sign up?")) {
            window.location.href = 'signup.html';
        }
    }
});
