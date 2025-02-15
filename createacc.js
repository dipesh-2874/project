document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let number = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    if (name === "" || email === "" || password === "" || confirmPassword === "") {
        alert("All fields are required!")
        return;
    }
    if (number <= 999999999 || number >= 9999999999){
        alert("Invalid Number")
        return;
    }
    if (password !== confirmPassword) {
        alert("Passwords do not match!") 
        return;
    }
     alert("Sign-Up Successful! Redirecting...");

   
    window.location.href = "homepage.html";
}
);
