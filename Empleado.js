// Clase base Empleado
class Empleado {
    constructor(nombre, salario) {
        this.nombre = nombre; // Propiedad nombre del empleado
        this.salario = salario; // Propiedad salario del empleado
    }

    // Método para obtener detalles del empleado
    obtenerDetalles() {
        return `Nombre: ${this.nombre}, Salario: ${this.salario}`; // Retorna la información del empleado
    }
}

// Clase Gerente que hereda de Empleado
class Gerente extends Empleado {
    constructor(nombre, salario, departamento) {
        super(nombre, salario); // Llama al constructor de Empleado para inicializar nombre y salario
        this.departamento = departamento; // Propiedad departamento del gerente
    }

    // Sobrescritura del método obtenerDetalles()
    obtenerDetalles() {
        // Llama al método de la clase base y añade el departamento
        return `${super.obtenerDetalles()}, Departamento: ${this.departamento}`; 
    }
}

// Ejemplo de uso
let empleado1 = new Empleado("Juan", 3000); // Crear una instancia de Empleado
console.log(empleado1.obtenerDetalles()); // Imprimir detalles del empleado

let gerente1 = new Gerente("Ana", 5000, "Ventas"); // Crear una instancia de Gerente
console.log(gerente1.obtenerDetalles()); // Imprimir detalles del gerente