// function suma(numero1, numero2) {

//     let resultado = numero1 + numero2

//     return resultado
// }

// console.log(suma(12, 25))

// let carro = {
//   llantas: 4,
//   color: "Cafe",
//   motor: "16v",
//   luces: ["altas", "medias", "bajas"],
//   andar: function() {
//     return "rum rum";
//   },
//   pitar: function() {
//     return "Pi pi";
//   },
//   frenar: function() {
//     return "frenon";
//   },
//   encederLuces() {
//     return "Luces encendidas";
//   }
// };

// // console.log(carro.pitar())

// carro.acelerar = function() {
//   return "acelero";
// };

// // console.log(carro.acelerar());

// let misCarros = ["Mazda", "Chevrolet", "Ford", true, 1234, carro];
// let otrosCarros = ["Porshe", "Renault", "Sea", false, 1234];
// let otros = ["Porshe", "Renault", "Sea", false, 1234];

// misCarros[2];

// // GetShitDoneMedallo

// function mostrarCarros(arregloDeCarros) {
//   for (let index = 0; index < arregloDeCarros.length; index = index + 1) {
//     console.log(arregloDeCarros[index]);
//   }
// }

// mostrarCarros(misCarros)
// mostrarCarros(otros)
// mostrarCarros(otrosCarros)

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, {duration : 200,indicators:true});

});

// // Or with jQuery

// $(document).ready(function(){
//   $('.carousel').carousel();
// });
    