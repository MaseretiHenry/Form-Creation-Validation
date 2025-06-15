document.addEventListener('DOMContentLoaded', function() {
    // Form Selection
    const form = document.getElementById('registration-form');
    // Feedback Division Selection
    const feedbackDiv = document.getElementById('form-feedback');

    // Form Submission Event Listener
    form.addEventListener('submit', function(event) {
        // Prevent the form from submitting
        event.preventDefault();

        // Retrieve User Inputs and Trimming
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Initialize Validation Variables
        let isValid = true;
        let messages = [];

        // Username Validation
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // Email Validation
        // A more robust regex validation is usually preferred, but for basic string methods:
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Please enter a valid email address (must contain @ and .).');
        }

        // Password Validation
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }

        // Displaying Feedback
        feedbackDiv.style.display = 'block'; // Make feedbackDiv visible

        if (isValid) {
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745';
            feedbackDiv.style.backgroundColor = '#d4edda'; // Light green background for success
        } else {
            feedbackDiv.innerHTML = messages.join('<br>'); // Use innerHTML to render <br>
            feedbackDiv.style.color = '#dc3545';
            feedbackDiv.style.backgroundColor = '#ffbaba'; // Light red background for errors
        }
    });
});
