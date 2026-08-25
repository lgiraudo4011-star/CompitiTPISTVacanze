let contenitore = document.getElementById("griglia");

contenitore.style.display = "grid";
contenitore.style.gridTemplateColumns = "repeat(5, 50px)";
contenitore.style.gap = "5px";

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

            cella.style.backgroundColor = "lightblue";

            cella.style.cursor = "default";

            document.getElementById("risultato").textContent = "Cella " + idAttuale + " attivata!";

            cella.onclick = null;
        };

        contenitore.appendChild(cella);
        numeroCella++;
    }
}