class Persona {
    constructor(nombre, apellido, edad, sexo) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.sexo = sexo
    };
    correr() {
        return "run run";
    }
    comer() {
        return "ñam ñam"
    }
}

class Persona2 {
    constructor(nombre, apellido, edad, sexo) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.sexo = sexo
    };
    correr() {
        return "run run";
    }
    comer() {
        return "ñam ñam"
    }
}


module.exports = { Persona };