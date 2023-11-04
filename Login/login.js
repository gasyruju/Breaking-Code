function login() {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const errorMessage = document.getElementById("error-message");

    const username = usernameInput.value;
    const password = passwordInput.value;

    console.log(username, password);

    if (username === "Mehmet" && password === "12345") {
        window.location.assign("BreakingCodeYECProject.html");
    } else {
        errorMessage.textContent = "Invalid username or password. Please try again.";
    }
}
