document.addEventListener("DOMContentLoaded", () => {
    const textArea = document.querySelector("#textArea");
    const messageArea = document.querySelector("#messageArea");
    const btnEncriptar = document.querySelector("#btnEncriptar");
    const btnDesencriptar = document.querySelector("#btnDesencriptar");
    const btnCopiar = document.querySelector("#btnCopiar");
    

    //La letra "e" es convertida para "enter"//
    //La letra "i" es convertida para "imes"//
    //La letra "a" es convertida para "ai"//
    //La letra "o" es convertida para "ober"//
    //La letra "u" es convertida para "ufat"//

    function encriptar(text) {
        const matrix = { 'e': 'enter', 'i': 'imes', 'a': 'ai', 'o': 'ober', 'u': 'ufat' };
textArea.value = "";
        return text.replace(/[eioua]/g, match => matrix[match]);
    }

    function desencriptar(text) {
        const matrix = { 'enter': 'e', 'imes': 'i', 'ai': 'a', 'ober': 'o', 'ufat': 'u' };
        return text.replace(/enter|imes|ai|ober|ufat/g, match => matrix[match]);
    }

    btnEncriptar.addEventListener("click", () => {
        const text = textArea.value;
        const encryptedText = encriptar(text);
        messageArea.value = encryptedText;
        messageArea.classList.add("sin-imagen"); // Ocultar imagen de fondo
    });

    btnDesencriptar.addEventListener("click", () => {
        const text = messageArea.value;
        const decryptedText = desencriptar(text);
        messageArea.value = decryptedText;
        if (!decryptedText) {
            messageArea.classList.remove("sin-imagen"); // Mostrar imagen de fondo si el mensaje está vacío
        }
    });

    btnCopiar.addEventListener("click", () => {
        messageArea.select();
        document.execCommand("copy");
        alert("Texto copiado al portapapeles");
    });
});

    