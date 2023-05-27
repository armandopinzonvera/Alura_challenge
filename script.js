
var boton_encriptar = document.querySelector(".btn_encriptar");
var boton_desencriptar = document.querySelector(".btn_desencriptar");
var dibujo = document.querySelector(".frame_dibujo");
var contenedor = document.querySelector(".contenedor_parrafo");
var resultado = document.querySelector(".texto_resultado");

boton_encriptar.onclick = encriptar;
boton_desencriptar.onclick = desencriptar;

function encriptar(){
    ocultarDelante;
    var caja_texto = recuperarTexto;
    resultado.textContent = encriptarTexto(caja_texto)

}



function ocultarDelante(){
    dibujo.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function recuperarTexto(){
    var caja_texto = document.querySelector(".caja_texto")
    return caja_texto.value;

}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var texto_final = "";

    for(var i; i < texto.length; i++){
        if(texto[i] == "a"){
            texto_final = texto_final + "ai";
        }
        else if(texto[i] == "e"){
            texto_final = texto_final + "enter";
        }
        else if(texto[i] == "i"){
            texto_final = texto_final + "imes";
        }
        else if(texto[i] == "o"){
            texto_final = texto_final + "ober";
        }
        else if(texto[i] == "u"){
            texto_final = texto_final + "ufat";
        }
        else{
            texto_final = texto_final + texto[i]
        }
    }
    return texto_final
}


function desencriptar(){
    var texto = mensaje;
    var texto_final = "";

    for(var i; i < texto.length; i++){
        if(texto[i] == "a"){
            texto_final = texto_final + "a";
            i = i + 1;
        }
        else if(texto[i] == "e"){
            texto_final = texto_final + "e";
            i = i + 4;
        }
        else if(texto[i] == "i"){
            texto_final = texto_final + "i";
            i = i + 3;
        }
        else if(texto[i] == "o"){
            texto_final = texto_final + "o";
            i = i + 3;
        }
        else if(texto[i] == "u"){
            texto_final = texto_final + "u";
            i = i + 3;
        }
        else{
            texto_final = texto_final + texto[i]
        }
    }
    return texto_final

}




