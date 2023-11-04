document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const studentName = urlParams.get("studentName");

    const welcomeMessage = document.getElementById("welcome-message");
    welcomeMessage.textContent = `Welcome, ${studentName}`;

    const radioButtons = document.querySelectorAll('input[type="radio"]');
    const continueButton = document.getElementById("continue-button");

    radioButtons.forEach((radioButton) => {
        radioButton.addEventListener("change", function() {
            if (document.querySelector('input[type="radio"]:checked')) {
                continueButton.removeAttribute("disabled");
            } else {
                continueButton.setAttribute("disabled", "disabled");
            }
        });
    });

    continueButton.addEventListener("click", function() {
        const selectedMajor = document.querySelector('input[type="radio"]:checked');
        if (selectedMajor) {
            if (selectedMajor.value === "Major 1" || selectedMajor.value === "Major 2" || selectedMajor.value === "Major 3" || selectedMajor.value === "Major 4") {
                window.location.assign("BreakingCodeYECProject.html");
            } else {
                window.location.assign("DifferentPage.html");
            }
        }
    });
});
