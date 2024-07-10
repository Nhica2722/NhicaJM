document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const firstName = document.getElementById('inputFirstName').value;
    const lastName = document.getElementById('inputLastName').value;
    const age = document.getElementById('inputAge').value;
    const email = document.getElementById('inputEmail').value;
    const password = document.getElementById('inputPassword').value;
    const confirmPassword = document.getElementById('inputConfirmPassword').value;
    const address = document.getElementById('inputAddress2').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return; 
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        alert('Email already exists');
        return; 
    }

    const newUser = { firstName, lastName, age, email, password, address };

    users.push(newUser);

    localStorage.setItem('users', JSON.stringify(users));

    window.location.href = 'login.html';
});
