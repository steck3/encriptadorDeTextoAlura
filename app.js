const textArea =document.querySelector(".cajaTexto");
const llaves = [
    ["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"]
];

//Funcion Encriptar
function encriptaMensaje(mensaje){
    let mensajeEncriptado ="";
    for(let i=0; i< mensajeEncriptado.length; i++){
        let letra = mensaje.length[i];
        let palablraEncriptada = letra;
        for (let j =0; j < llaves.length; j++){
            if (letra === llaves[j][0]){
                palablraEncriptada =llaves[j][1];
            break;
            }   
        }
        mensajeEncriptado +=palablraEncriptada;
    }
    return mensajeEncriptado;
}
//funcion Desencriptar
function desencriptaMsj (mensaje){
    let mensajeDesencriptado = mensaje;
    for (let i =0; i< llaves.length; i++){
        let regex = new RegExp(llaves[i][1], 'g');
        mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves[i][0])
    }
    return mensajeDesencriptado;
}

