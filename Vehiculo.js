//En este archivo se encuentran los dos archivos(1/2)

// Función constructora Vehiculo
function Vehiculo(marca) {
    this.marca = marca; // Propiedad marca del vehículo

    // Método para arrancar el vehículo
    this.arrancar = function() {
        console.log("El vehículo ha arrancado"); // Mensaje al arrancar
    };
}

// Función constructora Coche que hereda de Vehiculo
function Coche(marca, modelo) {
    // Llama al constructor de Vehiculo para inicializar la propiedad marca
    Vehiculo.call(this, marca);
    this.modelo = modelo; // Propiedad modelo del coche
}

// Establecer la herencia de Coche a Vehiculo
Coche.prototype = Object.create(Vehiculo.prototype);
Coche.prototype.constructor = Coche; // Asegura que el constructor de Coche sea correcto

// Método para mostrar información del coche
Coche.prototype.mostrarInfo = function() {
    console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`); // Imprime la marca y el modelo
};

// Ejemplo de uso
let miVehiculo = new Vehiculo("Toyota"); // Crear una instancia de Vehiculo
miVehiculo.arrancar(); // Llamar al método arrancar

let miCoche = new Coche("Honda", "Civic"); // Crear una instancia de Coche
miCoche.arrancar(); // Llamar al método arrancar (heredado)
miCoche.mostrarInfo(); // Llamar al método mostrarInfo para imprimir la información del coche   