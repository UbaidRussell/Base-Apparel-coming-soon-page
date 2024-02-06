document.addEventListener('DOMContentLoaded', function () {
    // Wait for the DOM to be fully loaded

    const emailInput = document.getElementById('email');
    const errorMessage = document.querySelector('.error-message');

    document.querySelector('.enter-button').addEventListener('click', function () {
        // Handle the button click event

        const emailValue = emailInput.value.trim();

        if (!isValidEmail(emailValue)) {
            // If the email is not valid, show the error message
            errorMessage.style.display = 'block';
        } else {
            // If the email is valid, hide the error message
            errorMessage.style.display = 'none';
        }
    });

    function isValidEmail(email) {
        // Use a regular expression to check if the email is valid
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
