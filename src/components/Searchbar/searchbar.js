var capturando = "";

function capturar() {
    capturando = document.getElementById('txtBusca').value; 
    document.getElementById('txtBusca').innerHTML = capturando;
}