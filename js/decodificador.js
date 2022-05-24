var texto = document.querySelector("#input-entrada");
var saida = document.querySelector("#input-saida");
var criptografar = document.querySelector("#bt-cript");
var descriptografar = document.querySelector("#bt-descript");
 var copiar = document.querySelector("#bt-copy");

const regex = new RegExp("^[a-z 0-9\b]");

criptografar.addEventListener("click", (event) => {
  event.preventDefault();
  saida.textContent = validaTexto(criptografaTexto(texto.value));
  saida.value = saida.textContent;
  texto.value = "";
  console.log(descriptografaTexto(texto.value))
});

descriptografar.addEventListener("click", (event) => {
  event.preventDefault();
  saida.textContent = validaTexto(descriptografaTexto(texto.value));
  saida.value = saida.textContent;
  texto.value ="";

})

copiar.addEventListener("click", (event) =>{
  event.preventDefault();

  saida.select();

  document.execCommand("copy");
  texto.value = "";
})

function criptografaTexto(texto) {
  var textoCriptografado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat")
    .toLowerCase();

  return textoCriptografado;
}

function descriptografaTexto(texto){
  var textoDescriptografado = texto
    .replace(/ai/gi, "a")
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u")
    .toLowerCase();

  return textoDescriptografado;
}


function validaTexto(testeTexto) {
  if (!regex.test(testeTexto)) {
    return "ATENÇÃO: Digite apenas textos com letras minúsculas  e sem acento por favor.";
  } else {
    return testeTexto;
  }
}
