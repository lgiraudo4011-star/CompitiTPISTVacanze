function invia() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let messaggio = document.getElementById("messaggio").value;

    if (nome === "" || email === "" || messaggio === "") {
        document.getElementById("risultato").textContent = "Errore: devi compilare tutti i campi!";
    } else {
        document.getElementById("risultato").textContent = "Dati inviati correttamente!";
    }
}