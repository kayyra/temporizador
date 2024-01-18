let elementoSegundos = document.getElementById("tiempoElegido");
let elementoTextoAlarma = document.getElementById("textoAlarma");
let elementoAudioAlarma = document.getElementById("audioAlarma");

function comenzarTiempo(){
    setTimeout(tiempoCumplido, 1000 * elementoSegundos.value);
}

function tiempoCumplido(){
    elementoTextoAlarma.textContent = "Encendido";
    elementoTextoAlarma.style.color = "green";
    elementoAudioAlarma.play();
}

