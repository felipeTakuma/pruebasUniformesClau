function mostrarUniforme(src) {
  document.getElementById("imagen-ampliada").src = src;
  document.getElementById("vista-uniforme").style.display = "flex";
}

function cerrarVista() {
  document.getElementById("vista-uniforme").style.display = "none";
}
