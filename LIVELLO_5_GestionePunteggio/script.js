let contenitore = document.getElementById("griglia");

contenitore.style.display = "grid";
contenitore.style.gridTemplateColumns = "repeat(5, 50px)";
contenitore.style.gap = "5px";

let puntiCelle = {
    3: 10,
    7: 5,
    12: 20,
    18: 15,
    22: 10
};

let punteggioTotale = 0;
let numeroCella = 1;

for (let r = 0; r < 5; r++) {
    for (let c = 0; c < 5; c++) {

        let cella = document.createElement("div");

        cella.style.width = "50px";
        cella.style.height = "50px";
        cella.style.border = "1px solid black";
        cella.style.backgroundColor = "lightgray";
        cella.style.textAlign = "center";
        cella.style.lineHeight = "50px";
        cella.style.cursor = "pointer";

        cella.textContent = numeroCella;

        let idAttuale = numeroCella;

        cella.onclick = function() {

            let puntiOttenuti = puntiCelle[idAttuale] || 0;

            punteggioTotale += puntiOttenuti;

            document.getElementById("punteggio").textContent = punteggioTotale;

            if (puntiOttenuti > 0) {
                cella.style.backgroundColor = "lightgreen";
                document.getElementById("risultato").textContent = "Cella " + idAttuale + ": Hai trovato +" + puntiOttenuti + " punti!";
            } else {
                cella.style.backgroundColor = "white";
                document.getElementById("risultato").textContent = "Cella " + idAttuale + ": 0 punti.";
            }

            cella.style.cursor = "default";
            cella.onclick = null;
        };

        contenitore.appendChild(cella);
        numeroCella++;
    }
}