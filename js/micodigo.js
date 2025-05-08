alert("Mi Primer Script");    
function Mensaje(){
    alert("Diste click en el boton");
}

function Impuestos(){
    var salario=1000;
    var impuesto=50;
    var elemento;
    elemento=document.getElementById("Sal");
    elemento.innerHTML=salario;
    var elemento2=document.getElementById("imp");
    elemento2.innerHTML=impuesto;
    var to=salario-(salario*(impuesto/100));
    document.getElementById("Total").innerHTML=to;
}

var a, b, suma;
function Operaciones(){
    a=prompt("valor de A");
    b=prompt("valor de B");
    suma=parseFloat(a) + parseFloat(b);
    document.getElementById("Suma").innerHTML=suma;
} 

function grande(){
    var image;
    image=document.getElementById("imagen");
    image.style.width="400px";
}

function normal(){
    var image;
    image=document.getElementById("imagen");
    image.style.width="100px";
}