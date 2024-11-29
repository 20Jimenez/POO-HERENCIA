// Definición de la clase Animal
class Animal {
    constructor(nombre, edad) {
        this.nombre = nombre;  // Propiedad nombre
        this.edad = edad;      // Propiedad edad
    }

    hacerSonido() {
        console.log("El animal hace un sonido.");  // Método hacerSonido
    }
}

// Definición de la clase Perro que hereda de Animal
class Perro extends Animal {
    constructor(nombre, edad, raza) {
        super(nombre, edad); // Llama al constructor de la clase padre (Animal)
        this.raza = raza;    // Propiedad adicional raza
    }

    hacerSonido() {
        console.log("El perro ladra: ¡Guau!");   // Sobrescritura del método hacerSonido
    }
    mostrarInformacion() {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad} años, Raza: ${this.raza}`);
    }
}

//Creación de instancias y prueba de los métodos
let miAnimal = new Animal("Genérico", 5);
miAnimal.hacerSonido(); // Imprime: El animal hace un sonido.

let miPerro = new Perro("Rex", 3, "Labrador");
miPerro.hacerSonido(); // Imprime: El perro ladra: ¡Guau!
miPerro.mostrarInformacion(); // Imprime: Nombre: Rex, Edad: 3, Raza: Labrado!