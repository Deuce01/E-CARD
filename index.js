// Get references to the HTML elements
const emailInput = document.querySelector('input[type="text"]');
const joinButton = document.querySelector('button');

// Function to handle the "Join newsletter" button click
function joinNewsletter() {
    const email = emailInput.value;

    if (isValidEmail(email)) {
        alert(`Thank you for joining the newsletter with email: ${email}`);
        // You can add further actions here, like sending the email to a server.
    } else {
        alert('Please enter a valid email address.');
    }
}

// Function to validate an email address using a simple regex
function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}

// Attach the "joinNewsletter" function to the button's click event
joinButton.addEventListener('click', joinNewsletter);
