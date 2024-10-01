// Display the career suggestions on the results page
document.addEventListener('DOMContentLoaded', function() {
    const suggestionsDiv = document.getElementById('suggestions');
    const suggestions = localStorage.getItem('careerSuggestions');
    
    if (suggestions) {
        suggestionsDiv.innerHTML = suggestions;
    } else {
        suggestionsDiv.innerHTML = 'No suggestions available.';
    }
});

// Function to go back to the career test
function goBack() {
    window.location.href = 'career_test.html';
}

// Function to go back to the home page
function goToHomePage() {
    window.location.href = 'index.html';  // Adjust this if your home page has a different name
}

// Function to submit feedback
function submitFeedback() {
    const form = document.getElementById('feedback-form');
    const satisfaction = form.satisfaction.value; // Get selected satisfaction
    const otherSuggestions = document.getElementById('other-suggestions').value; // Get other suggestions

    // Store feedback in localStorage or send it to a server
    localStorage.setItem('userFeedback', JSON.stringify({ satisfaction, otherSuggestions }));
    
    // Display a thank-you message after submission
    const thankYouMessage = document.getElementById('thank-you-message');
    thankYouMessage.style.display = 'block'; // Show thank-you message

    // Optionally clear the form
    form.reset();
}


