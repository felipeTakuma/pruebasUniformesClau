function mostrarUniforme(src) {
  document.getElementById("imagen-ampliada").src = src;
  document.getElementById("vista-uniforme").style.display = "flex";
}

function cerrarVista() {
  document.getElementById("vista-uniforme").style.display = "none";
}
function enviarWhatsApp(imagenURL){
  const mensaje = encodeURIComponent( //Codifica el mensaje para que sea válido en una URL
    //window.location.origin obtiene el dominio actual (por ejemplo: https://uniformesclau.com)
    `Hola, estoy interesado en este uniforme: \n${window.location.origin}${imagenURL}`
  );
  window.open(`https://wa.me/573203341083?text=${mensaje}`, "_blank")
}