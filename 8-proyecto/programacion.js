function login() {
    var user, password

    user = document.getElementById("usuario").value;
    password = document.getElementById("contraseña").value;

    if( user == "prueba" && password == "1234"){
        // alert ("iniciaste secion")
        window.location = "index2.html";
    } else {
        alert ("datos incorectos")
    }
}


