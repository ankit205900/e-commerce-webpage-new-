const authWrapper =
    document.getElementById("authWrapper");


const registerTrigger =
    document.getElementById("registerTrigger");


const loginTrigger =
    document.getElementById("loginTrigger");


/* ==========================================
   OPEN REGISTER
========================================== */

registerTrigger.addEventListener("click", function (event) {

    event.preventDefault();

    authWrapper.classList.add("toggled");

});


/* ==========================================
   OPEN LOGIN
========================================== */

loginTrigger.addEventListener("click", function (event) {

    event.preventDefault();

    authWrapper.classList.remove("toggled");

});


/* ==========================================
   LOGIN FORM
========================================== */

const loginForm =
    document.getElementById("loginForm");


loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const username =
        document.getElementById("loginUsername").value.trim();

    const password =
        document.getElementById("loginPassword").value.trim();


    if (username === "" || password === "") {

        alert("Please enter Username and Password.");

        return;

    }


    alert(
        "Login Successful!\nWelcome " + username
    );

});


/* ==========================================
   REGISTER FORM
========================================== */

const registerForm =
    document.getElementById("registerForm");


registerForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const username =
        document.getElementById("registerUsername").value.trim();

    const email =
        document.getElementById("registerEmail").value.trim();

    const password =
        document.getElementById("registerPassword").value.trim();


    if (
        username === "" ||
        email === "" ||
        password === ""
    ) {

        alert("Please fill all fields.");

        return;

    }


    if (password.length < 6) {

        alert(
            "Password must be at least 6 characters."
        );

        return;

    }


    alert(
        "Registration Successful!\nWelcome "
        + username
    );


    /* Go back to Login */

    authWrapper.classList.remove("toggled");

});

document.getElementById("loginForm").addEventListener("submit", function (e) {

    e.preventDefault();

    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    if (username === "" || password === "") {
        alert("Please enter username and password");
        return;
    }

    alert("Login Successful! Welcome to NexaCart 🎉");

    window.location.href = "index.html";
});