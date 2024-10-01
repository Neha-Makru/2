// Create Study Time Chart
const ctx1 = document.getElementById('studyTimeChart').getContext('2d');
const studyTimeChart = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
            label: 'Study Hours',
            data: [10, 15, 20, 25], // Sample data
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Create Focus Areas Chart
const ctx2 = document.getElementById('focusAreasChart').getContext('2d');
const focusAreasChart = new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: ['AI', 'Data Science', 'Web Development'],
        datasets: [{
            label: 'Focus Areas',
            data: [40, 30, 30], // Sample data
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    }
});

// Create Career Progress Chart
const ctx3 = document.getElementById('careerProgressChart').getContext('2d');
const careerProgressChart = new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: ['Communication', 'Technical Skills', 'Problem Solving', 'Leadership'],
        datasets: [{
            label: 'Career Progress',
            data: [80, 90, 75, 85], // Sample data
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Create Assessment Results Chart
const ctx4 = document.getElementById('assessmentResultsChart').getContext('2d');
const assessmentResultsChart = new Chart(ctx4, {
    type: 'radar',
    data: {
        labels: ['Aptitude', 'Technical Skills', 'Domain Knowledge', 'Emotional Intelligence'],
        datasets: [{
            label: 'Assessment Results',
            data: [75, 85, 80, 70], // Sample data
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1
        }]
    }
});

// Function to navigate back to the dashboard
function goBack() {
    window.location.href = 'dashboard.html';
}
