document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.getElementById('newsletter-form');
    newsletterForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const emailInput = document.getElementById('newsletter-email');
        const email = emailInput.value;

        alert(`Thank you for signing up! Kindly check your email for verification.`);
        emailInput.value = '';
    });

const volunteerForm = document.getElementById('volunteer-form');
volunteerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const emailInput = document.getElementById('volunteer-email');
    const email = emailInput.value;

    alert(`Thank you for volunteering! Kindly check your email for verification.`);

    emailInput.value = '';
});
});
