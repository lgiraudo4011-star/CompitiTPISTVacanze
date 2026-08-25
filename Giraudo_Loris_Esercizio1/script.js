document.addEventListener("DOMContentLoaded", ()=>{
 initFormContatti()
})


function initFormContatti(){
    let form = document.getElementById("form")
    if(!form){
        return
    }
    let nome = document.getElementById("nome")
    let email = document.getElementById("email")
    let motivo = document.getElementById("motivo")

    form.addEventListener("submit", ()=>{
        let formValido = form.checkValidity()
        form.classList.add("was-validated")   

    })
}