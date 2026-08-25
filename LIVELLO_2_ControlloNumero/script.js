function controllaNumero() {
    let num = parseFloat(document.getElementById("numero").value);
    let messaggio = "";

    if (num > 0) {
        messaggio = "Il numero è POSITIVO.";
    } 
    else if (num < 0) {
        messaggio = "Il numero è NEGATIVO.";
    } 
    else {
        messaggio = "Il numero è UGUALE A ZERO.";
    }

    document.getElementById("risultato").textContent = messaggio;
}