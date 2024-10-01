// Check if the user is logged in (this is a placeholder for a real authentication system)
function isLoggedIn() {
    return localStorage.getItem('loggedIn') === 'true';
}

// Redirect to the AI test page
function redirectToTestPage() {
    window.location.href = "career_test.html";  // Ensure this matches your file structure
}


// Redirect to the respective feature page
function redirectToFeature(feature) {
    if (isLoggedIn()) {
        // If the user is logged in, proceed to the selected feature
        window.location.href = feature + ".html";
    } else {
        // If not logged in, alert the user and redirect to login page
        alert("You need to log in first to access this feature.");
        window.location.href = "login.html";
    }
}

// Function to redirect to the AI test page
function submitCareerTest() {
    const form = document.getElementById('career-test-form');
    const formData = new FormData(form);
    let answers = {};

    // Collect all responses
    for (const [key, value] of formData.entries()) {
        if (Array.isArray(answers[key])) {
            answers[key].push(value);
        } else {
            answers[key] = [value];
        }
    }

    // Initialize an array to store suggestions
    let suggestions = [];

    // Expanded suggestion logic
    if (answers['skills'].includes('Technical Skills') && answers['interests'].includes('Technology')) {
        suggestions.push("Software Developer");
    }
    if (answers['skills'].includes('Creativity') && answers['interests'].includes('Arts and Design')) {
        suggestions.push("Graphic Designer");
    }
    if (answers['strengths'].includes('Leadership') && answers['work_environment'] === 'Team-based') {
        suggestions.push("Project Manager");
    }
    if (answers['motivation'].includes('Helping Others') && answers['interests'].includes('Healthcare')) {
        suggestions.push("Healthcare Professional");
    }
    if (answers['motivation'].includes('Creativity and Innovation') && answers['values'].includes('Collaboration')) {
        suggestions.push("Marketing Specialist");
    }
    if (answers['strengths'].includes('Analytical Thinking') && answers['interests'].includes('Science')) {
        suggestions.push("Data Analyst");
    }
    if (answers['skills'].includes('Problem Solving') && answers['interests'].includes('Business and Finance')) {
        suggestions.push("Business Consultant");
    }
    if (answers['work_environment'].includes('Flexible') && answers['motivation'].includes('Personal Growth')) {
        suggestions.push("Freelancer/Entrepreneur");
    }

    // Check for diversity in interests and add more suggestions
    if (answers['interests'].includes('Technology') && answers['values'].includes('Innovation')) {
        suggestions.push("Product Manager");
    }
    
    // Add more suggestions based on your criteria...

    // Prepare the output
    const suggestionOutput = suggestions.length > 0 
        ? "Based on your responses, we suggest the following careers:<br><br>" + suggestions.join('<br>')
        : "No specific career suggestions based on your responses.";

    // Store suggestions in localStorage
    localStorage.setItem('careerSuggestions', suggestionOutput);
    
    // Redirect to results page
    window.location.href = "results.html";
}
