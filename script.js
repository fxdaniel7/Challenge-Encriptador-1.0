const textInput = document.querySelector(".text-input");
const panelMensaje = document.querySelector(".panelRigth");
const copia = document.querySelector(".copiar");

let textoEscrito = document.getElementById("text-input");


function btnEncriptar() {
    const textoEncriptado = encriptar(textInput.value)
    panelMensaje.value = textoEncriptado
    panelMensaje.style.backgroundImage = "none"
    textInput.value = "";
    copia.style.display = "block"
}

// Rutina para detectar si esta activado el Bloq Mayus del teclado, para que lo desactiven
textoEscrito.addEventListener("keyup", (event) => {
    if (event.getModifierState("CapsLock")) {
        alert("Solo se puede escribir texto en letra minúscula");
        location.reload();
    }
});


// Llaves de la Encriptación de los textos con las vocales:

//`La letra "e" es convertida en "enter"`
//`La letra "o" es convertida en "ober"`
//`La letra "i" es convertida en "imes"`
//`La letra "a" es convertida en "ai"`
//`La letra "u" es convertida en "ufat"`

// Funcion que encripta el mensaje que se escriba dentro del panel de text-input

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["o", "ober"], ["i", "imes"], ["a", "ai"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }
    return stringEncriptada
}

// Funcion para seleccionar mensaje en el panelRigth para desencripatarlo pulsando el boton Desencriptar de la interfaz de usuario

function btnDesencriptar() {
    const textoEncriptado = desencriptar(textInput.value)
    panelMensaje.value = textoEncriptado
    textInput.value = "";

}

// Funcion que desencripta el mensaje que se copea desde el panel el panelRigth
function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["o", "ober"], ["i", "imes"], ["a", "ai"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

        }

    }
    return stringDesencriptada
}


// Permisos de para la Navegacion en el portapapeles
navigator.permissions.query({name: "clipboard-write"}).then((result) => {
    if (result.state === "granted" || result.state === "prompt") {
      /* write to the clipboard now */
    }
  });



  

