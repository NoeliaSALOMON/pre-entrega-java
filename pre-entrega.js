alert("Bienvenido señor ");
const usuarioAutorizado = "gustavo";
const contraseniaAutorizada = "2222";

let usuario = prompt("Ingrese su usuario");
let contrasenia = prompt("Ingrese su contraseña");

if(usuario === usuarioAutorizado && contrasenia === contraseniaAutorizada) {
    alert("Bienvenido " + usuario);

    let cantidadAlumnos = parseInt(prompt("Ingrese la cantidad de pagos a calcular"));

    for(let i = 0; i < cantidadAlumnos; i++) {
        let nombreCliente = prompt("Ingrese su nombre");
        let pago1 = parseInt(prompt("Ingrese pago 1"));
        let pago2 = parseInt(prompt("Ingrese pago 2"));
        let pago3 = parseInt(prompt("Ingrese pago 3"));
        let promedio = calcularPromedio(pago1, pago2, pago3);
        alert("El pago de " + nombreCliente + " es " + promedio.toFixed(2));

        let aprueba = apruebaAnio(promedio);

        if(aprueba) {
            alert(nombreCliente + " Pago realizado");
        } else {
            alert(nombreCliente + " Pago no realizado");
        }
    }
} else {
    alert("Usuario o contraseña incorrecta");
}

//Funciones

function calcularPromedio(pago1, pago2, pago3) {
    let promedio = (pago1 + pago2 + pago3) / 3;
    return promedio;
}

function apruebaAnio(promedio) {
    if(promedio >= 5000) {
        return true;
    } else {
        return false;
    }
}




