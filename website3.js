let username;
function signup() {
    let name = prompt("Name")
    let username = prompt("Username")
    let age = prompt("Age")
    let DOB = prompt("DOB")
    let password = prompt("Password")
    document.getElementById("b1").innerHTML = "Signed in";
    document.getElementById("h1").innerHTML = "Signed in";
    document.getElementById("b1").style.visibility = "hidden";
    document.getElementById("usernamehome").innerHTML = username;
    document.getElementById("menuone").style.visibility = "visible";
    document.getElementById("menuone").innerHTML = "Menu";
}
function menuopen() {
    document.getElementById("usernamehome").innerHTML = "";
    document.getElementById("menuone").style.visibility = "hidden";
    document.getElementById("b2").style.visibility = "visible";
    document.getElementById("b2").innerHTML = "Change username";
}

function changeusername() {
    let username = prompt("New username")
menuclose(username);

}
function menuclose(username) {
    document.getElementById("b1").innerHTML = "Signed in";
    document.getElementById("h1").innerHTML = "Signed in";
    document.getElementById("b1").style.visibility = "hidden";
    document.getElementById("usernamehome").innerHTML = username;
    document.getElementById("usernamehome").style.visibility = "visible";
    document.getElementById("menuone").style.visibility = "visible";
    document.getElementById("menuone").innerHTML = "Menu";
    document.getElementById("b2").style.visibility = "hidden";
}