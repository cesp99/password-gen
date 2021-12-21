var password=document.getElementById("password");
function generatore() {
    var e = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var x = document.getElementById('lunghezza').value;
    var password = "";
    for (var i = 0; i < x; i++) {
        var randomNumber = Math.floor(Math.random() * e.length);
        password += e.substring(randomNumber, randomNumber +1);
    }
    document.getElementById("password").value = password;

}