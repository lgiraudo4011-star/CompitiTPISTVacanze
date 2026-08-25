function calcolaTabellina() {
    let num = parseFloat(document.getElementById("numero").value);
    let risultatoP = document.getElementById("risultato");

    if (isNaN(num)) {
        risultatoP.textContent = "Inserisci un numero valido.";
        return;
    }

    let testoTabellina = "";

    for (let i = 1; i <= 10; i++) {
        let prodotto = num * i;
        testoTabellina += num + " x " + i + " = " + prodotto + "<br>";
    }
    risultatoP.innerHTML = testoTabellina;
}