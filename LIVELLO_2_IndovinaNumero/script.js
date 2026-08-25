let numeroSegreto = Math.floor(Math.random() * 20) + 1;

function indovina() {
    let num = parseFloat(document.getElementById("tentativo").value);
    let messaggio = "";
 
    if (num < 1 || num > 20) {
        messaggio = "Inserisci un numero compreso tra 1 e 20!";
    } 
    else if (num > numeroSegreto) {
        messaggio = "Troppo ALTO! Riprova.";
    } 
    else if (num < numeroSegreto) {
        messaggio = "Troppo BASSO! Riprova.";
    } 
    else {
        messaggio = "CORRETTO! Hai indovinato il numero!";
    }

    document.getElementById("risultato").textContent = messaggio;
}