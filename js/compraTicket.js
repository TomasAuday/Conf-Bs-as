const valorTicket = 200;


let descuentoEstudiante = 80;
let descuentoTrainee = 50;
let descuentoJunior = 15;

let nombre =document.getElementById("input-nombre");
let apellido =document.getElementById("input-apellido");
let email =document.getElementById("input-email");
let cantidad =document.getElementById("input-cantidad");
let categoria =document.getElementById("select-categoria");

function validar(){
    quitarClaseError();
    if(nombre.value === ""){
        nombre.classList.add("is-invalid");
        nombre.focus;
        return
    }
    if(apellido.value === ""){
        apellido.classList.add("is-invalid");
        apellido.focus;
        return
    }
    if(email.value === ""){
        email.classList.add("is-invalid");
        email.focus;
        return
    }
    const emailValido = mail =>{
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
    }
    if(!emailValido(email.value)){
        alert("Por favor, ingrese un correo electronico válido.")
        email.classList.add("is-invalid");
        email.focus;
        return
    }
    if(cantidad.value <= 0 || isNaN(cantidad.value)){
        alert("Por favor, ingrese correctamente la cantidad de tickets.")
        cantidad.classList.add("is-invalid");
        cantidad.focus;
        return
    }
    if(categoria.value == ""){
        alert("Por favor, ingresa una cantegoria válida.")
        categoria.classList.add("is-invalid");
        categoria.focus;
        return
    }

    let valorTotal =(cantidad.value) * valorTicket;

    switch(categoria.value) {
        case 0: break;
        case 1: 
            valorTotal = valorTotal - (descuentoEstudiante/100);
            break;
        
        case 2: 
            valorTotal = valorTotal - (descuentoTrainee/100);
            break;
        
        case 3: 
            valorTotal = valorTotal - (descuentoJunior/100);
            break;
        
    }
    if(categoria.value == 0){} 
    else if(categoria.value == 1){
        valorTotal = valorTotal * ((100-descuentoEstudiante)/100);
    }else if(categoria.value == 2){ 
        valorTotal = valorTotal * ((100-descuentoTrainee)/100);
    }else if(categoria.value == 3){
        valorTotal = valorTotal * ((100-descuentoJunior)/100);
    }

    total.innerHTML = valorTotal;
}
function reset_total(){
    quitarClaseError();
    total.innerHTML = ""; 
}
function quitarClaseError(){
    let x = document.querySelectorAll(".form-control",".form-select")
    for(i=0;i<x.length;i++){
        x[i].classList.remove('is-invalid');
    }
}

borrar.addEventListener('click', reset_total)
resumen.addEventListener('click',validar)




