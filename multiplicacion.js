let pantalla = document.getElementById("Pantalla");

function agregar(dato){
    pantalla.value += dato
}

function eliminar(){
    pantalla.value = "";
}

function calcular(){
    pantalla.value = eval(pantalla.value);
}