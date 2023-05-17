function login() {
    var user, password

    user = document.getElementById("usuario").value;
    password = document.getElementById("contraseña").value;

    if( user == "prueba" && password == "1234"){
        alert ("iniciaste secion")
    } else {
        alert ("datos incorectos")
    }
}