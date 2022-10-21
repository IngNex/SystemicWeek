function validaNumericos(event) {
    if(event.charCode >= 48 && event.charCode <= 57){
    return true;
    }
    return false;        
}
function soloLetras(e) {
var key = e.keyCode || e.which,
  tecla = String.fromCharCode(key).toLowerCase(),
  letras = " áéíóúabcdefghijklmnñopqrstuvwxyz",
  especiales = [8, 37, 39, 46],
  tecla_especial = false;
for (var i in especiales) {
  if (key == especiales[i]) {
    tecla_especial = true;
    break;
  }
}
if (letras.indexOf(tecla) == -1 && !tecla_especial) {
  return false;
}
}