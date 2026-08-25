// Array di esempio contenente "acqua" e "colpito"
let griglia = ["acqua", "colpito", "acqua", "colpito", "colpito", "acqua"];

function contaColpito() {
    let contatore = 0;

    for (let i = 0; i < griglia.length; i++) {
        if (griglia[i] === "colpito") {
            contatore++;
        }
    }

    document.getElementById("risultato").textContent = "I colpi andati a segno sono: " + contatore;
}