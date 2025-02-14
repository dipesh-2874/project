function func(){
    var email = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (email == '01dipeshdas@gmail.com' && password == '12345'){
        alert("Successfully logged in")
        window.location.assign("homepage.html")
    }
    else{
        alert("Invalid Entry")
        window.location.assign("signinpage.html")
    }

}