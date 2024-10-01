document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("assessment-form");
    const resultDiv = document.getElementById("result");
    const scoreDiv = document.getElementById("score");
    const timerElement = document.getElementById("time");
    const reviewPerformanceDiv = document.getElementById("review-performance-div");
    const reviewQuestionsDiv = document.getElementById("review-questions");
    const goBackToDashboardButton = document.getElementById("go-back-to-dashboard");
    const reviewPerformanceButton = document.getElementById("review-performance");

    // Timer variables
    let timeLeft = 600; // 10 minutes in seconds
    let timerId;

    // Start the timer
    function startTimer() {
        timerId = setInterval(() => {
            if (timeLeft <= 0) {
                clearInterval(timerId);
                alert("Time's up!");
                form.style.display = "none";
                resultDiv.style.display = "block";
                calculateScore();
            } else {
                timeLeft--;
                updateTimerDisplay();
            }
        }, 1000);
    }

    // Update timer display
    function updateTimerDisplay() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    // Calculate score based on answers
    function calculateScore() {
        let score = 0;
        const correctAnswers = {
            q1: "B",
            q2: "C",
            q3: "C",
            q4: "C",
            q5: "C",
            q6: "C",
            q7: "C",
            q8: "B",
            q9: "C",
            q10: "A",
        };

        const userAnswers = {};

        // Check and store answers safely
        for (let i = 1; i <= 10; i++) {
            const answer = document.querySelector(`input[name="q${i}"]:checked`);
            if (answer) {
                userAnswers[`q${i}`] = answer.value;
                if (answer.value === correctAnswers[`q${i}`]) {
                    score += 10; // Each question carries equal weight
                }
            } else {
                userAnswers[`q${i}`] = "Not answered";
            }
        }

        scoreDiv.textContent = `Your score is: ${score}/100`;

        // Store the user answers in a global variable
        window.userAnswers = userAnswers;
    }

    // Review performance
    function reviewPerformance() {
        reviewPerformanceDiv.style.display = "block";
        const questions = [
            {
                question: "What is the primary goal of a neural network in machine learning?",
                correctAnswer: "B",
                explanation: "The primary goal of a neural network in machine learning is to minimize the loss function.",
                userAnswer: window.userAnswers.q1
            },
            {
                question: "A team member is struggling to meet deadlines. How do you respond?",
                correctAnswer: "C",
                explanation: "Offering to help them with their tasks is the best way to respond to a team member who is struggling to meet deadlines.",
                userAnswer: window.userAnswers.q2
            },
            {
                question: "What is the difference between supervised and unsupervised learning?",
                correctAnswer: "C",
                explanation: "Supervised learning involves labeled data, while unsupervised learning involves unlabeled data.",
                userAnswer: window.userAnswers.q3
            },
            {
                question: "You are working on a project with a tight deadline. How do you prioritize your tasks?",
                correctAnswer: "C",
                explanation: "Focusing on the most critical tasks first and then moving on to less important ones is the best way to prioritize tasks when working on a project with a tight deadline.",
                userAnswer: window.userAnswers.q4
            },
            {
                question: "What is the purpose of a convolutional neural network (CNN) in image processing?",
                correctAnswer: "C",
                explanation: "The purpose of a convolutional neural network (CNN) in image processing is to extract features from images.",
                userAnswer: window.userAnswers.q5
            },
            {
                question: "A team member is experiencing burnout. How do you respond?",
                correctAnswer: "C",
                explanation: "Encouraging them to take a break and prioritize their well-being is the best way to respond to a team member who is experiencing burnout.",
                userAnswer: window.userAnswers.q6
            },
            {
                question: "What is the difference between a decision tree and a random forest?",
                correctAnswer: "C",
                explanation: "A decision tree is a single tree, while a random forest is an ensemble of multiple trees.",
                userAnswer: window.userAnswers.q7
            },
            {
                question: "You are working on a project with a team. How do you handle conflicts?",
                correctAnswer: "B",
                explanation: "Addressing the conflict directly and trying to resolve it through open communication is the best way to handle conflicts when working on a project with a team.",
                userAnswer: window.userAnswers.q8
            },
            {
                question: "What is the purpose of a recurrent neural network (RNN) in natural language processing?",
                correctAnswer: "C",
                explanation: "The purpose of a recurrent neural network (RNN) in natural language processing is to process sequential data such as text or speech.",
                userAnswer: window.userAnswers.q9
            },
            {
                question: "You are given a new project with a tight deadline. How do you approach it?",
                correctAnswer: "A",
                explanation: "Breaking down the project into smaller tasks and creating a schedule to ensure timely completion is the best way to approach a new project with a tight deadline.",
                userAnswer: window.userAnswers.q10
            },
        ];

        let reviewHtml = "";
        for (let i = 0; i < questions.length; i++) {
            const question = questions[i];
            reviewHtml += `<h3>Question ${i+1}: ${question.question}</h3>`;
            reviewHtml += `<p>Correct Answer: ${question.correctAnswer}</p>`;
            reviewHtml += `<p>Your Answer: ${question.userAnswer}</p>`;
            reviewHtml += `<p>Explanation: ${question.explanation}</p>`;
            if (question.userAnswer === question.correctAnswer) {
                reviewHtml += `<p style="color: green;">Correct!</p>`;
            } else {
                reviewHtml += `<p style="color: red;">Incorrect.</p>`;
            }
            reviewHtml += `<hr>`;
        }

        reviewQuestionsDiv.innerHTML = reviewHtml;
    }

    // Go back to dashboard
    goBackToDashboardButton.addEventListener("click", function() {
        window.location.href = 'dashboard.html'; // Adjust this path as needed
    });

    // Handle form submission
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission
        clearInterval(timerId); // Stop the timer
        calculateScore(); // Calculate and display score
        form.style.display = "none"; // Hide the form
        resultDiv.style.display = "block"; // Show the result
        reviewPerformanceButton.style.display = "block"; // Show the review performance button
    });

    // Start the timer when the page loads
    startTimer();

    // Add event listener to review performance button
    reviewPerformanceButton.addEventListener("click", reviewPerformance);
});
