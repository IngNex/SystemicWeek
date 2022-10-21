var boton = document.getElementById('getlink');
boton.addEventListener('click', function(e) {
if(boton.id == 'getlink'){
var aux = document.createElement('input');
aux.setAttribute('value', window.location.href.split('?')[0].split('#')[0]);
document.body.appendChild(aux);
aux.select();
try {
document.execCommand('copy');
var aviso = document.createElement('div');
aviso.setAttribute('id', 'aviso');
aviso.style.cssText = 'position:fixed; z-index: 9999999;color:#000; bottom: 10px;right: 10px;padding: 10px 20px; background: #f1c40f;border-radius: 10px;transition: .3s;';
aviso.innerHTML = 'Copiado al Portapeles';
document.body.appendChild(aviso);
document.load = setTimeout('document.body.removeChild(aviso)', 2000);
document.load = setTimeout('boton.id = "getlink"',2500);
boton.id = '';
} catch (e) {
alert('Tu navegador no soporta la función de copiar');
}
document.body.removeChild(aux);
}
});