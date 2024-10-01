document.getElementById('educatorForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(event.target); // Create FormData object from the form

    // Send data to the server
    const response = await fetch('/api/educator_signup', {
        method: 'POST',
        body: formData, // Use FormData to send files and other data
    });

    // Handle the response
    if (response.ok) {
        const result = await response.json(); // Parse JSON response
        alert(result.message); // Show success message
        document.getElementById('educatorForm').reset(); // Reset the form after submission
    } else {
        const error = await response.json(); // Parse error response
        alert('Failed to register educator: ' + error.message); // Show error message
    }
});
