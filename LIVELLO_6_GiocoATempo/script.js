let contenitore = document.getElementById("griglia");

contenitore.style.display = "grid";
contenitore.style.gridTemplateColumns = "repeat(5, 50px)";
contenitore.style.gap = "5px";

let celleSpeciali = [3, 7, 12, 20];

let tempo = 30;
let trovate = 0;
let timer = null;

function inizializzaGioco() {

    clearInterval(timer);
    timer = null;
    tempo = 30;
    trovate = 0;

    document.getElementById("tempo").textContent = tempo;
    document.getElementById("trovate").textContent = trovate;
    document.getElementById("risultato").textContent = "Clicca su una cella per far partire il timer!";
    contenitore.innerHTML = "";

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

                if (timer === null && tempo === 30) {
                    avviaTimer();
                }

                if (celleSpeciali.includes(idAttuale)) {
                    cella.style.backgroundColor = "gold";
                    trovate++;
                    document.getElementById("trovate").textContent = trovate;

                    if (trovate === celleSpeciali.length) {
                        bloccaGioco("🎉 VITTORIA! Hai trovato tutte le celle speciali in tempo!");
                    }
                } else {
                    cella.style.backgroundColor = "white";
                }

                cella.style.cursor = "default";
                cella.onclick = null;
            };

            contenitore.appendChild(cella);
            numeroCella++;
        }
    }
}

function avviaTimer() {
    timer = setInterval(function() {
        tempo--;
        document.getElementById("tempo").textContent = tempo;

        if (tempo <= 0) {
            bloccaGioco("⏰ TEMPO SCADUTO! Celle trovate: " + trovate + " su " + celleSpeciali.length);
        }
    }, 1000);
}

function bloccaGioco(messaggioFinale) {
    clearInterval(timer);
    document.getElementById("risultato").textContent = messaggioFinale;

    let tutteLeCelle = contenitore.children;
    for (let i = 0; i < tutteLeCelle.length; i++) {
        tutteLeCelle[i].onclick = null;
        tutteLeCelle[i].style.cursor = "default";
    }
}

inizializzaGioco();