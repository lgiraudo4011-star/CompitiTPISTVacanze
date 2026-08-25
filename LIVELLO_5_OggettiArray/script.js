let contenitoreGriglia = document.getElementById("griglia");

contenitoreGriglia.style.display = "grid";
contenitoreGriglia.style.gridTemplateColumns = "repeat(5, 50px)";
contenitoreGriglia.style.gap = "5px";

let navi = [
    { nome: "Cacciatorpediniere", posizione: 4, colpita: false },
    { nome: "Sottomarino", posizione: 12, colpita: false },
    { nome: "Nave da battaglia", posizione: 21, colpita: false }
];

function aggiornaListaNavi() {
    let lista = document.getElementById("elencoNavi");
    lista.innerHTML = ""; 

    for (let i = 0; i < navi.length; i++) {
        let li = document.createElement("li");

        let statoTesto = navi[i].colpita ? "COLPITA!" : "In navigazione";
        li.textContent = navi[i].nome + " (Posizione " + navi[i].posizione + ") - Stato: " + statoTesto;
        
        lista.appendChild(li);
    }
}

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
            let naveTrovata = null;

            for (let i = 0; i < navi.length; i++) {
                if (navi[i].posizione === idAttuale) {
                    naveTrovata = navi[i];
                    break;
                }
            }

            if (naveTrovata) {
                naveTrovata.colpita = true; 
                cella.style.backgroundColor = "red";
                document.getElementById("risultato").textContent = "Affondata! Hai colpito la nave: " + naveTrovata.nome;
            } else {
                cella.style.backgroundColor = "lightblue";
                document.getElementById("risultato").textContent = "Acqua!";
            }

            aggiornaListaNavi();

            cella.style.cursor = "default";
            cella.onclick = null;
        };

        contenitoreGriglia.appendChild(cella);
        numeroCella++;
    }
}

aggiornaListaNavi();