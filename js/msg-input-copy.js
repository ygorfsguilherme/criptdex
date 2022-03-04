function copiaTexto() {
    let copia_texto = texto_codificado.value;

    if (!copia_texto == '') {
        navigator.clipboard.writeText(copia_texto)
        mensagemError(false)
    } else {
        mensagemError(true)
    }
};

function mensagemError(error) {
    let msg = document.querySelector("#msg-error");

    if (error) {
        msg.style.display = 'block'
    } else {
        msg.style.display = 'none'
    }
}

function limparEntrada() {
    texto_entrada.value = "";
    texto_entrada.focus();
};

function verificarCaracter(){
	texto_entrada.value = texto_entrada.value.replace(/([\u0300-\u036f]|[^a-zA-Z\s])/g, '').toLowerCase().split();
};

texto_entrada.addEventListener('keyup', function(){
    verificarCaracter()
}); 

texto_entrada.addEventListener("paste", function(){
	setTimeout(verificarCaracter, 100)
});




