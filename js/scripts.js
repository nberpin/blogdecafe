/* //maneras de seleccionar elementos html

// queryselector
const textoHeading=document.querySelector(".header__texto h2")
console.log(textoHeading.innerHTML)
 */

//queryselectorAll
const linksNavegacion= document.querySelectorAll(".navegacion a");
console.log(linksNavegacion);
linksNavegacion[2].textContent="Contacto Prácticas"; 
linksNavegacion[2].href="http://www.google.com";
linksNavegacion[2].classList.add("rojo");
console.log(linksNavegacion[2].classList);
//getElementById


//creación de nuevos elementos

const nuevoEnlace=document.createElement("a");
nuevoEnlace.classList.add("navegacion__enlace");
nuevoEnlace.textContent="Nuevo Enlace";
nuevoEnlace.href="http://www.amazon.es";

const navegacion=document.querySelector(".navegacion");
navegacion.appendChild(nuevoEnlace);

//eventos en javascript

/*nwindow.addEventListener("scroll", function(e){
    console.log("haciendo scroll...");
    console.log(e);
});*/

// console.log("1");
// window.addEventListener("load", function(){
//     console.log("2");
// });

// window.onload=function(){
//     console.log("3");
// };

// document.addEventListener("DOMContentLoaded",function(){
//     console.log("4");
// })


//seleccionar un elemento y asociamos un evento
// const btnEnviar=document.querySelector(".boton--primario");
// btnEnviar.addEventListener("click", function(e){
//     e.preventDefault();
//     console.log(e.target);
// });

//eventos sobre inputs y textarea

// nombre.addEventListener("change", function(e){
//     console.log("escribiendo");
//     console.log(e.target.value);
// });

// nombre.addEventListener("input", function(e){
//     console.log(e.target.value);
// })
// email.addEventListener("input", function(e){
//     console.log(e.target.value);
// })
// mensaje.addEventListener("input", function(e){
//     console.log(e.target.value);
// })
const nombre=document.querySelector("#nombre");
const email=document.querySelector("#email");
const mensaje=document.querySelector("#mensaje");
const formulario=document.querySelector(".formulario");

const datos={
    nombre:"",
    email:"",
    mensaje:""
}


nombre.addEventListener("input", leerTexto);
email.addEventListener("input", leerTexto);
mensaje.addEventListener("input", leerTexto);

function leerTexto(e){
    datos[e.target.id]=e.target.value;
    console.log(e.target.id);
    console.log(datos);

}

formulario.addEventListener("submit", function(e){
    e.preventDefault();
    const {nombre,email,mensaje}=datos;
    if (nombre===""|email===""|mensaje===""){
        console.log("al menos un campo sigue vacío");
        mostrarError("Todos los campos deben estar rellenos")
        return;
    }
})

function mostrarError(mensaje){
    const alerta=document.createElement("p");
    alerta.textContent=mensaje;
    formulario.appendChild(alerta);
}