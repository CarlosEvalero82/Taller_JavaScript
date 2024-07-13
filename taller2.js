/* jshint esversion: 6 */

// Ejercicio 1:
let numero1 = 10;
let numero2 = 5;

if (numero1 > numero2) {
    console.log(`${numero1} es mayor que ${numero2}`);
} else {
    console.log(`${numero1} no es mayor que ${numero2}`);
}

// Ejercicio 2:
numero1 = 15;
numero2 = 15;

if (numero1 === numero2) {
    console.log('Los números son iguales');
} else {
    console.log('Los números son diferentes');
}

// Ejercicio 3:
numero1 = 10;
numero2 = 15;

if (numero1 > numero2) {
    console.log(`${numero1} es mayor que ${numero2}`);
} else if (numero1 < numero2) {
    console.log(`${numero2} es mayor que ${numero1}`);
} else {
    console.log('Ambos números son iguales');
}

// Ejercicio 4: Determinar cuál de los tres números es el más chico
numero1 = 10;
numero2 = 5;
let numero3 = 15;

if (numero1 <= numero2 && numero1 <= numero3) {
    console.log(`${numero1} es el más chico`);
} else if (numero2 <= numero1 && numero2 <= numero3) {
    console.log(`${numero2} es el más chico`);
} else {
    console.log(`${numero3} es el más chico`);
}

// Ejercicio 5: Comparar dos objetos y determinar cuál persona es más alta y cuál es de mayor edad
let persona1 = {
    nombre: 'carlos',
    edad: 41,
    altura: 168
};

let persona2 = {
    nombre: 'carolaine',
    edad: 30,
    altura: 160
};

if (persona1.altura > persona2.altura) {
    console.log(`${persona1.nombre} es más alta que ${persona2.nombre}`);
} else if (persona1.altura < persona2.altura) {
    console.log(`${persona2.nombre} es más alta que ${persona1.nombre}`);
} else {
    console.log(`${persona1.nombre} y ${persona2.nombre} tienen la misma altura`);
}

if (persona1.edad > persona2.edad) {
    console.log(`${persona1.nombre} es mayor que ${persona2.nombre}`);
} else if (persona1.edad < persona2.edad) {
    console.log(`${persona2.nombre} es mayor que ${persona1.nombre}`);
} else {
    console.log(`${persona1.nombre} y ${persona2.nombre} tienen la misma edad`);
}

// Ejercicio 6: Determinar si una persona está capacitada para conducir
let nombre = 'Carlos';
let edad = 41;
let altura = 168;
let vision = 8;

if (edad >= 18 && altura > 150 && vision >= 8) {
    console.log(`${nombre} está capacitado para conducir.`);
} else {
    console.log(`${nombre} no está capacitado para conducir.`);
}

// Ejercicio 7: Determinar si una persona puede ingresar a un evento
let nombreEvento = 'carlos';
let pase = 'vip';
let tieneEntrada = 'no';

if (nombreEvento === 'TuNombre' || pase === 'vip' || tieneEntrada === 'si' || tieneEntrada === 's') {
    console.log('Bienvenido al evento!');
} else {
    let quiereComprar = true;
    if (quiereComprar) {
        let dinero = 1500;
        if (dinero >= 1000) {
            console.log('Compra exitosa. Bienvenido al evento!');
        } else {
            console.log('Dinero insuficiente para la compra. Venta rechazada.');
        }
    } else {
        console.log('Despedida. No se ha realizado ninguna compra.');
    }
}

// Ejercicio 8: Juego de adivinar

let numeroIncognita = Math.floor(Math.random() * 10) + 1; // Número aleatorio entre 1 y 10
let intentos = 4; // Número de intentos

while (intentos > 0) {
    let numeroIngresado = Math.floor(Math.random() * 10) + 1;
    if (numeroIngresado === numeroIncognita) {
        console.log('Ganaste, haz adivinado el número.');
        break;
    } else if (numeroIngresado > numeroIncognita) {
        console.log('El número ingresado es mayor, vuelve a intentarlo.');
    } else {
        console.log('El número ingresado es menor, vuelve a intentarlo.');
    }
    intentos--;
}

if (intentos === 0) {
    console.log(`Has perdido. El número era ${numeroIncognita}.`);
}


// Ejercicio 9: Determinar la categoría según la edad ingresada
let edadIngresada = 41;

if (edadIngresada >= 0 && edadIngresada <= 12) {
    console.log('Eres un infante.');
} else if (edadIngresada >= 13 && edadIngresada <= 18) {
    console.log('Eres un adolescente.');
} else if (edadIngresada >= 19 && edadIngresada <= 45) {
    console.log('Eres un mayor joven.');
} else if (edadIngresada > 45 && edadIngresada <= 100) {
    console.log('Eres un anciano.');
} else if (edadIngresada > 100) {
    console.log('¿Realmente tienes esa edad?');
} else {
    console.log('Edad no válida.');
}

// Ejercicio 10: Juego de "Piedra, Papel o Tijeras"
let jugador1 = 'PIEDRA';
let jugador2 = 'TIJERAS';

if (jugador1 === jugador2) {
    console.log('Empate.');
} else if ((jugador1 === 'PIEDRA' && jugador2 === 'TIJERAS') || (jugador1 === 'PAPEL' && jugador2 === 'PIEDRA') || (jugador1 === 'TIJERAS' && jugador2 === 'PAPEL')) {
    console.log('Jugador 1 gana.');
} else if ((jugador2 === 'PIEDRA' && jugador1 === 'TIJERAS') || (jugador2 === 'PAPEL' && jugador1 === 'PIEDRA') || (jugador2 === 'TIJERAS' && jugador1 === 'PAPEL')) {
    console.log('Jugador 2 gana.');
} else {
    console.log('Uno de los jugadores ha hecho trampa.');
}

// Ejercicio 11: Determinar el mensaje según el color ingresado usando `switch`
let color = 'rojo';

switch (color) {
    case 'blanco':
    case 'negro':
        console.log('Falta de color.');
        break;
    case 'verde':
        console.log('El color de la naturaleza.');
        break;
    case 'azul':
        console.log('El color del agua.');
        break;
    case 'amarillo':
        console.log('El color del sol.');
        break;
    case 'rojo':
        console.log('El color del fuego.');
        break;
    case 'marrón':
        console.log('El color de la tierra.');
        break;
    default:
        console.log('Excelente elección, no lo teníamos pensado.');
        break;
}

// Ejercicio 12: Calculadora con operaciones básicas
let valor1 = 20;
let valor2 = 5;
let operacion = 'suma';

switch (operacion) {
    case 'suma':
        console.log(`El resultado de la suma es: ${valor1 + valor2}`);
        break;
    case 'resta':
        console.log(`El resultado de la resta es: ${valor1 - valor2}`);
        break;
    case 'multiplicación':
    case 'multiplicacion':
        console.log(`El resultado de la multiplicación es: ${valor1 * valor2}`);
        break;
    case 'división':
    case 'division':
        if (valor2 !== 0) {
            console.log(`El resultado de la división es: ${valor1 / valor2}`);
        } else {
            console.log('ERROR: División por 0 no permitida.');
        }
        break;
    default:
        console.log('Operación no válida.');
        break;
}

// Ejercicio 13: Registro de documento de identidad
let dni = {
    nombre: 'Carlos',
    apellido: 'valero',
    edad: 41,
    direccion: 'Calle 6a carrera 5h sur'
};

console.log(`Nombre: ${dni.nombre}, Apellido: ${dni.apellido}, Edad: ${dni.edad}, Dirección: ${dni.direccion}`);

let confirmacion = true;
if (confirmacion) {
    console.table(dni);
    console.log('Registro exitoso.');
} else {
    console.log('Vuelva a intentarlo en 1 mes.');
}
