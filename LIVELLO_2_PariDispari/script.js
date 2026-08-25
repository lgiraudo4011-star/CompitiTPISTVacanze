function ControlloNumero(){
    let num = parseFloat(document.getElementById("numero").value);
    let messaggio = ""

    if(num % 2 == 0){
        messaggio = "Il numero è pari"
    }
    else{
        messaggio = "Il numero è disapri"
    }

    document.getElementById("risultato").textContent = messaggio
}