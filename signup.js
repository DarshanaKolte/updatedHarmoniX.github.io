
        document.getElementById('signup-form').addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent the form from submitting
            // Perform form validation here
            let email = document.getElementById('email').value;
            let confirmEmail = document.getElementById('confirm-email').value;
            let password = document.getElementById('password').value;
            let confirmPassword = document.getElementById('confirm-password').value;
            let gender =document.getElementById('gender-container').value;
           
           
            // Simple validation example (you can add more complex validation as needed)
            if (email !== confirmEmail) {
                alert("Emails do not match.");
                return;
            }

            if (password !== confirmPassword) {
                alert("Passwords do not match.");
                return;
            }

            if (!gender) {
                alert("Please select a gender.");
                return;
            }

            window.location.href = "login.html";
        });
        let button =document.querySelector(".sign-up-btn");
        button.addEventListener('click', function() {
            window.location.href = 'login.html';
        });