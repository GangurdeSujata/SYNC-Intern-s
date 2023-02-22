 
function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username!=null && password!=null) {
        alert("Login successfully");
        window.location = "quiz.html"; 
        return false;
    } 
}