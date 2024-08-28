const textArea = document.querySelector(".cajaTexto");
const imagenMonito = document.querySelector(".monito");
const botonEncriptar = document.querySelector(".btnEncriptar");
const botonDesEncriptar = document.querySelector(".btnDesencriptar");
const botonCopiar = document.querySelector(".btnCopiar");
const textoResultado = document.querySelector(".textoResultado");
const tituloResultado = document.querySelector(".resultadoVacio");
const llaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

// Función Encriptar
function encriptaMensaje(mensaje) {
    let mensajeEncriptado = "";
    for (let i = 0; i < mensaje.length; i++) {
        let letra = mensaje[i];
        let palabraEncriptada = letra;
        for (let j = 0; j < llaves.length; j++) {
            if (letra === llaves[j][0]) {
                palabraEncriptada = llaves[j][1];
                break;
            }
        }
        mensajeEncriptado += palabraEncriptada;
    }
    return mensajeEncriptado;
}

// Función Desencriptar
function desencriptaMsj(mensaje) {
    let mensajeDesencriptado = mensaje;
    for (let i = 0; i < llaves.length; i++) {
        let regex = new RegExp(llaves[i][1], 'g');
        mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves[i][0]);
    }
    return mensajeDesencriptado;
}
textArea.addEventListener("input", (e) => {
    imagenMonito.style.display = "none";
    console.log(e.target.value);
});
//funcion boton encriptar
botonEncriptar.addEventListener("click", (e) => {
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeEncriptado = encriptaMensaje(mensaje);
    tituloResultado.textContent ="Tu mensaje encriptado es..."
    textoResultado.textContent = mensajeEncriptado;
    botonCopiar.classList.remove("hidden");
});
//funcion boton desencriptar
    botonDesEncriptar.addEventListener("click", (e) => {
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeDesEncriptado = desencriptaMsj(mensaje);
    textoResultado.textContent = mensajeDesEncriptado;
    botonCopiar.classList.remove("hidden");
});

botonCopiar.addEventListener("click",()=>{
    let textoCopiado = textoResultado.textContent;
    navigator.clipboard.writeText(textoCopiado).then(()=>{
        console.log(`Se copio el texto: ${textoCopiado}`);
         tituloResultado.textContent ="Se ha copiado tu mensaje al portapapeles..."
        imagenMonito.style.display= "block";
        botonCopiar.classList.add("hidden");
        textoResultado.textContent="";
    })

})