document.addEventListener("DOMContentLoaded", ()=>{
    let nome = document.getElementById("nome")
    let bottone = document.getElementById("bottone")
    function messaggio(){
        alert("Ciao " + nome.value + ", ci vediamo a fine agosto!")
    }
    bottone.addEventListener("click", messaggio)
})