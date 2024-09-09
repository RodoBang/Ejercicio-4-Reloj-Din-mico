function actualizarReloj() {
    const reloj = document.getElementById("clock");
    const fecha = new Date();
    const hora = fecha.toLocaleTimeString();
    reloj.textContent = hora;
}   
setInterval(actualizarReloj, 1000);

actualizarReloj();