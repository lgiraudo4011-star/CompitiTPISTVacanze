let secondi = 0;
let timer = null; 

function avvia() {

    if (timer !== null) return;

    let input = document.getElementById("secondiInput").value;

    if (secondi === 0) {
        secondi = parseInt(input);

        if (isNaN(secondi) || secondi <= 0) {
            document.getElementById("messaggio").textContent = "Inserisci un numero valido di secondi!";
            secondi = 0;
            return;
        }
    }

    document.getElementById("messaggio").textContent = "";
    document.getElementById("tempo").textContent = secondi;

    timer = setInterval(function() {
        secondi--;
        document.getElementById("tempo").textContent = secondi;

        if (secondi <= 0) {
            clearInterval(timer); 
            timer = null;
            document.getElementById("messaggio").textContent = "⏰ Tempo scaduto!";
        }
    }, 1000);
}

function ferma() {
    clearInterval(timer);
    timer = null;
}

function azzera() {
    ferma();
    secondi = 0;
    document.getElementById("secondiInput").value = "";
    document.getElementById("tempo").textContent = "0";
    document.getElementById("messaggio").textContent = "";
}