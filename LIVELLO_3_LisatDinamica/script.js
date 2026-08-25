function aggiungiElemento() {
    let input = document.getElementById("testoInput");
    let testo = input.value;

    if (testo === "") {
        alert("Inserisci del testo prima di aggiungere!");
    } else {
        let nuovoLi = document.createElement("li");

        nuovoLi.textContent = testo;

        document.getElementById("lista").appendChild(nuovoLi);

        input.value = "";
    }
}