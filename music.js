// Pomodoro timer variables
let timer;
let timeElapsed = 0; // Start at 0 seconds
let isRunning = false;
const fullCircle = 283; // Circumference of the circle (2 * PI * radius)
const totalDuration = 1500; // 25 minutes in seconds

// Start the Pomodoro timer
function startTimer() {
    if (isRunning) return;
    isRunning = true;

    timer = setInterval(() => {
        if (timeElapsed >= totalDuration) {
            clearInterval(timer);
            alert('Session Complete!');
            document.getElementById('pause-record-btn').style.display = 'none';
            document.getElementById('back-to-dashboard-btn').style.display = 'block';
            return;
        }
        timeElapsed++;
        displayTimeElapsed(timeElapsed);
        updateCircleProgress(timeElapsed);
    }, 1000);

    document.getElementById('pause-record-btn').style.display = 'block'; // Show "Pause and Record" button
}

// Pause the Pomodoro timer
function pauseTimer() {
    isRunning = false;
    clearInterval(timer);
}

// Display the elapsed time in minutes and seconds
function displayTimeElapsed(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const display = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    document.getElementById('time-elapsed').textContent = display;
}

// Update the circular progress based on elapsed time
function updateCircleProgress(seconds) {
    const progressCircle = document.querySelector('.progress-circle');
    const progress = (seconds / totalDuration) * fullCircle; // Percentage of the circle to be filled
    progressCircle.style.strokeDashoffset = fullCircle - progress; // Reduce the dashoffset gradually
}

// Generate Music Button Logic
document.getElementById('generate-music-btn').addEventListener('click', () => {
    // Placeholder for music generation logic
    alert('Music generation is currently under construction.');
});

// Start Measuring (Pomodoro) button logic
document.getElementById('start-timer-btn').addEventListener('click', () => {
    startTimer();
});

// Pause and Record button logic
document.getElementById('pause-record-btn').addEventListener('click', () => {
    pauseTimer();
    document.getElementById('back-to-dashboard-btn').style.display = 'block'; // Show "Go Back to Dashboard" button
});

// Go Back to Dashboard button logic
document.getElementById('back-to-dashboard-btn').addEventListener('click', () => {
    window.location.href = 'dashboard.html';
});

