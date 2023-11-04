function login() {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const errorMessage = document.getElementById("error-message");

    const username = usernameInput.value;
    const password = passwordInput.value;

    console.log(username, password);

    if (username === "Mehmet" && password === "12345") {
      
        const redirectURL = `major.html?studentName=${username}`;
        window.location.assign(redirectURL);
    } else {
        errorMessage.textContent = "Invalid username or password. Please try again.";
    }
}