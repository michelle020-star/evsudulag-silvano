document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let emailError = email.nextElementSibling;
    let passwordError = password.nextElementSibling;
    let loginMessage = document.getElementById("loginMessage");

    // Reset previous errors
    emailError.textContent = "";
    passwordError.textContent = "";
    loginMessage.textContent = "";

    let valid = true;

    // Email validation
    if (!email.value) {
        emailError.textContent = "Email is required.";
        valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email.value)) {
        emailError.textContent = "Invalid email format.";
        valid = false;
    }

    // Password validation
    if (!password.value) {
        passwordError.textContent = "Password is required.";
        valid = false;
    } else if (password.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
        valid = false;
    }

    if (valid) {
        loginMessage.style.color = "green";
        loginMessage.textContent = "Login successful!";
        // Here, you can add a redirect or API call
    }
});