function pageDirect() {
    window.location.href = "login.html";
}

document.getElementById('submit').addEventListener('click', function() {
    var x = document.getElementById('name').value;
    var y = document.getElementById('pass').value;
    if (x.length > 0 && y.length > 0) {
        window.location.href = "https://www.facebook.com/";
    } else {
        alert('Login failed. Please check your username and password.');
    }
});