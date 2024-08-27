const llaves = [
    ["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"]
];
function encriptaMensaje(){
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

let letra;
