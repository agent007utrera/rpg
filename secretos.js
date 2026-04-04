// Este archivo contiene la lógica de validación fuera del HTML principal
function checkPass() {
    const pass = document.getElementById('passInput').value;
    const soundCorrecto = document.getElementById('soundCorrecto');
    const soundError = document.getElementById('soundError');

    // La contraseña sigue siendo 1234, pero ya no está a la vista en el HTML
    if (pass === "1724") {
        // Reproduce sonido de éxito
        if (soundCorrecto) soundCorrecto.play();
        
        // Redirección tras un breve retraso para escuchar el audio
        setTimeout(function() {
            window.location.href = "enc_biblioteca.html";
        }, 500);
        
    } else {
        // Reproduce sonido de error
        if (soundError) soundError.play();
        
        document.getElementById('modalStatus').innerText = "ERROR ARCANO";
        document.getElementById('modalMsg').innerText = "La clave es errónea. Los Antiguos están observando tu fracaso.";
        document.getElementById('inputArea').style.display = "none";
        document.getElementById('errorArea').style.display = "block";
    }
}