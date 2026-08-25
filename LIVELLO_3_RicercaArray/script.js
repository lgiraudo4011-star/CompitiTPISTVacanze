let elencoCitta = ["Roma", "Milano", "Napoli", "Torino", "Firenze", "Venezia"];

function cercaCitta() {
    let input = document.getElementById("cittaInput").value.trim();
    let trovato = false;

    for (let i = 0; i < elencoCitta.length; i++) {
        if (elencoCitta[i].toLowerCase() === input.toLowerCase()) {
            trovato = true;
            break; 
        }
    }

    if (trovato) {
        document.getElementById("risultato").textContent = "La città '" + input + "' è PRESENTE nella lista!";
    } else {
        document.getElementById("risultato").textContent = "La città '" + input + "' NON è presente nella lista.";
    }
}