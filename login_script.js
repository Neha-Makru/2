document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(event.target); // Create FormData object from the form
    const data = {};

    formData.forEach((value, key) => {
        data[key] = value; // Collect form data into a simple object
    });

    // Send data to the server for authentication
    const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // Convert data object to JSON
    });

    // Handle the response
    if (response.ok) {
        window.location.href = '/dashboard'; // Redirect to dashboard on successful login
    } else {
        const error = await response.json(); // Parse error response
        alert('Login failed: ' + error.message); // Show error message
    }
});
