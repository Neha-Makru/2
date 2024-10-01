// Function to show a notification for premium features
function showPremiumNotification() {
    alert("This is a premium feature. A nominal fee is required to access it.");
}

function log_out(){
    window.location.href = 'index.html';
}

//profile 
function profile(){ 
    window.location.href='profile.html'
}

// Open the Assessment page
function openAssessment() {
    window.location.href = 'assessment.html'; // Adjust this path as needed
}

// Function to navigate to Assessment Reports
function openAssessmentReports() {
    window.location.href = 'report.html'; // Adjust this path as needed
}


// Open the Study with Music page
function openMusicPage() {
    window.location.href = 'music.html';
}

// Function to toggle user menu visibility
document.addEventListener('DOMContentLoaded', () => {
    const userIcon = document.querySelector('.user-icon img');
    const userMenu = document.querySelector('.user-menu');

    userIcon.addEventListener('click', () => {
        userMenu.style.display = userMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Close the user menu when clicking outside of it
    window.addEventListener('click', (event) => {
        if (!userIcon.contains(event.target) && !userMenu.contains(event.target)) {
            userMenu.style.display = 'none';
        }
    });
});

