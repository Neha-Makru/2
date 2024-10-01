document.getElementById('alumniForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(event.target); // Create FormData object from the form
    const data = {};
    
    // Collect form data
    formData.forEach((value, key) => {
        data[key] = value; // Store each value in an object
    });

    // Send data to the server
    const response = await fetch('/api/alumni_signup', {
        method: 'POST',
        body: formData, // Use FormData to send files and other data
    });

    // Handle the response
    if (response.ok) {
        const result = await response.json(); // Parse JSON response
        alert(result.message); // Show success message
        // Optionally redirect or reset the form here
        document.getElementById('alumniForm').reset(); // Reset the form after submission
    } else {
        const error = await response.json(); // Parse error response
        alert('Failed to register alumni: ' + error.message); // Show error message
    }
});
