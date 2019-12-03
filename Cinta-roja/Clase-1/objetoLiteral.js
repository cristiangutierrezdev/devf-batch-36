const { Persona } = require("./Persona")

let computador = {
    marca: "mac",
    color: "blanco",
    peso: 1,
    valor: 4000000,
    laptop: true,
    encender: function() {
        return "Estoy encendido";
    },
    apagar(valor) {
        return valor
    }
}

computador.calcularDuracionBateria = function(amperaje) {
        let horas = amperaje / 1000
        return horas;
    }
    // console.log(computador)

let daniel = new Persona("Daniel", "Arenas", 25, "M")

console.log(daniel)