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
const nombre=document.querySelector("#nombre");
console.log(nombre);
