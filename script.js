document.addEventListener("DOMContentLoaded", () => {

    console.log("Shotfile Initialized");

    const startBtn = document.querySelector(".btn-primary");

    startBtn.addEventListener("click", () => {

        alert(
            "Welcome to Shotfile! 🚀\n\nRedirecting to Sign Up Page..."
        );

        // window.location.href = "signup.html";

    });

});