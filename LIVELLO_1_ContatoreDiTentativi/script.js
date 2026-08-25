document.addEventListener("DOMContentLoaded", ()=>{
    let bottone = document.getElementById("bottone")
    let contatorePag = document.getElementById("contatore")
    let contatoreJs = 0
    bottone.addEventListener("click", ()=>{
        contatoreJs = contatoreJs + 1
        contatorePag.textContent = contatoreJs
    })
})