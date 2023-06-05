
// var piso = document.querySelector(".foot")
// piso.addEventListener("hover", function (elemento) {
   
// var elem = piso.style.background = "red"
// return elem    }
//    )

// var proyectos = document.querySelector(".texto-descripcion");
// proyectos.addEventListener('click', function(elemento)
// {    var nuevoDiv = elemento.target;
//      nuevoDiv.style.background = "yellow"
// })
// var foto = document.querySelector('#foto')
// foto.addEventListener('click', function(elemento){
//      var nuevaFoto = elemento.taget;
//      nuevaFoto.src="./snoopy-typing.gif";
// })
//aplicaciones recientes

//Snoopy Typea
function changeScr() {
     document.getElementById("foto").src="snoopy3.gif";
     }
function returnFoto() {
     document.getElementById("foto").src="./ariel garcia-rogel.jpeg" ;
     }

     
//convertir UVA

// $("convertir").click((e) =>{ console.log(e)})

let uva = document.getElementsByClassName("convertir").value 
let precioactual = 177;
let boton = document.querySelector(".boton2")
boton.addEventListener("click", convert)

function convert(uva, precioactual){
if(typeof uva !== Number) return "Debe ser un valor numérico"
let resultado = uva * precioactual;
let res= document.body.createElement("div")
      res.textContent("<p> Usted tiene ${resultado}</p>")
      res.class= "resultados"
      document.body.appendChild(res)
      documento.body.res.appendChild( `<p> Precio actual: ${precioactual}</p>`)
      console.log(resultado)
}

