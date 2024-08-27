//Encriptador
let textoAEncriptar = "";

//Aquí la función del primer botón "ENCRIPTAR"
function encriptarTexto(){

     //Llamo el valor que me dan en input 
     textoAEncriptar = document.getElementById("textoUsuario").value;
       console.log(textoAEncriptar);

    //ahora evitamos que el usuario capture mayusculas y caracteres especiales
    if (/[^a-z\s]/.test(textoAEncriptar)) {
        alert("El mensaje a encriptar no debe contener letras mayúsculas ni caracteres especiales.");
        return;
    }

    
// Reemplazar las vocales según lo especificado
let encriptar = textoAEncriptar
                .replace(/a/g, "1a")
                .replace(/e/g, "2e")
                .replace(/i/g, "3i")
                .replace(/o/g, "4o")
                .replace(/u/g, "5u")
                .replace(/1a/g, "ai")
                .replace(/2e/g, "enter")
                .replace(/3i/g, "imes")
                .replace(/4o/g, "ober")
                .replace(/5u/g, "ufat");

   // Muestra el párrafo modificado
   document.getElementById("salidaTextoEncriptado").innerText = encriptar;
   document.getElementById("botonCopiar").style.display = "block";
   document.getElementById("botonDesencriptar").style.display = "block";
   document.getElementById("imagenNula").style.display = "none";
   document.getElementById("mensajeNulo").style.display = "none";
}





function copiarTexto() {
    // Copiar el párrafo modificado al portapapeles
    let encriptar = document.getElementById("salidaTextoEncriptado").innerText;
    navigator.clipboard.writeText(encriptar);
        console.log(encriptar);

        document.getElementById("imagenNula").style.display = "block";
        document.getElementById("mensajeNulo").style.display = "block";
        document.getElementById("salidaTextoEncriptado").style.display = "none";
        document.getElementById("botonCopiar").style.display = "none"; 

   }





function desencriptarTexto(){

//Llamo el valor que me dan en input 
textoDesencriptar = document.getElementById("textoUsuario").value;
console.log(textoDesencriptar);

//ahora evitamos que el usuario capture mayusculas y caracteres especiales
if (/[^a-z\s]/.test(textoDesencriptar)) {
 //alert("El mensaje a encriptar no debe contener letras mayúsculas ni caracteres especiales.");
 return;
}

// Reemplazar las vocales según lo especificado
let desencriptar = textoDesencriptar
                .replace(/ufat/g, "u")
                .replace(/ober/g, "o")
                .replace(/imes/g, "i")
                .replace(/enter/g, "e")
                .replace(/ai/g, "a");

// Muestra el párrafo modificado
document.getElementById("salidaTextoEncriptado").innerText = desencriptar;
document.getElementById("salidaTextoEncriptado").style.display = "block";
document.getElementById("botonCopiar").style.display = "block";
document.getElementById("botonEncriptar").style.display = "block";
document.getElementById("imagenNula").style.display = "none";
document.getElementById("mensajeNulo").style.display = "none";
}





   

