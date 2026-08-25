let contenitore = document.getElementById("griglia");

contenitore.style.display = "grid";
contenitore.style.gridTemplateColumns = "repeat(5, 50px)";
contenitore.style.gap = "5px";

let celleSpeciali = [3, 7, 12, 20];

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

            if (celleSpeciali.includes(idAttuale)) {
                cella.style.backgroundColor = "gold"; 
                document.getElementById("risultato").textContent = "Cella " + idAttuale + ": Hai trovato una cella SPECIALE! 🎉";
            } else {
                cella.style.backgroundColor = "white"; 
                document.getElementById("risultato").textContent = "Cella " + idAttuale + ": Cella normale.";
            }

            cella.style.cursor = "default";
            cella.onclick = null;
        };

        contenitore.appendChild(cella);
        numeroCella++;
    }
}