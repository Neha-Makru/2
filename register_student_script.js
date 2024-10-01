document.getElementById('signupForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(event.target);
    const data = {};
    
    formData.forEach((value, key) => {
        if (key === "tech") {
            if (!data[key]) {
                data[key] = [];
            }
            data[key].push(value);
        } else {
            data[key] = value;
        }
    });

    const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (response.ok) {
        alert('User registered successfully!');
        window.location.href = 'dashboard.html'; // Redirect to the dashboard
    } else {
        alert('User Profile Created Successfully.');
        window.location.href = 'dashboard.html';
    }
});  
