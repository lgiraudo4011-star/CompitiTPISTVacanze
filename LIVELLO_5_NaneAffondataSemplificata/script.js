let contenitore = document.getElementById("griglia");

contenitore.style.display = "grid";
contenitore.style.gridTemplateColumns = "repeat(4, 50px)";
contenitore.style.gap = "5px";

let nave = [5, 6, 7];

let colpiAsegno = [];

function inizializzaGioco() {

    contenitore.innerHTML = "";
    colpiAsegno = [];
    document.getElementById("risultato").textContent = "Clicca sulle celle per cercare la nave.";

    let numeroCella = 1;

    for (let r = 0; r < 4; r++) {
        for (let c = 0; c < 4; c++) {

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
                if (nave.includes(idAttuale)) {
                    cella.style.backgroundColor = "red";
                    colpiAsegno.push(idAttuale);

                    if (colpiAsegno.length === nave.length) {
                        document.getElementById("risultato").textContent = "Nave affondata!";
                    } else {
                        document.getElementById("risultato").textContent = "Colpito! (" + colpiAsegno.length + "/3)";
                    }
                } else {
                    cella.style.backgroundColor = "lightblue";
                    document.getElementById("risultato").textContent = "Acqua!";
                }

                cella.style.cursor = "default";
                cella.onclick = null;
            };

            contenitore.appendChild(cella);
            numeroCella++;
        }
    }
}

inizializzaGioco();