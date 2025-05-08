function fondo1() {
  var cuerpo=document.getElementsByTagName("body");
  cuerpo[0].style.backgroundColor="grey";
}

function fondo2() {
  var cuerpo=document.getElementsByTagName("body");
  cuerpo[0].style.backgroundColor="brown";
}

function fondo3() {
  var cuerpo=document.getElementsByTagName("body");
  cuerpo[0].style.backgroundColor="green";
}

function Scalar(id) {
var im=document.getElementById(id);
  im.style.transform = "scale(1.2)";
}

function Salir(id) {
var im=document.getElementById(id);
  im.style.transform="scale(1)";
}

function link(id,link) {
  var im=document.getElementById(id);
  var enlace=document.createElement("a");
  enlace.href=link;
  enlace.target="_blank";
  im.parentNode.insertBefore(enlace, im);
  enlace.appendChild(im);
}
  var tam = 12; // Tamaño base inicial

  function aumentar() {
    var seccion = document.querySelector('.section_acercade');
    tam += 1;
    seccion.style.fontSize = tam + 'px';
  }

  function disminuir() {
    var seccion = document.querySelector('.section_acercade');
    tam -= 1;
    seccion.style.fontSize = tam + 'px';
  }
