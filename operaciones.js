//paso 1 : declaracion de variables

let num1, num2;
let operacion;

// paso 2 : funcion para realizar operaciones 

function realizarOperacion(num1, num2, operacion) { // inici para variables 
    if(operacion === "suma"){  //condicional para suma
        return num1 + num2;   //operacion para suamr
    } else if (operacion === "resta") {   //condicional para la resta
        return num1 - num2;    //operacion para la resta 
    } else if (operacion === "multiplicacion") {
        return num1 * num2; 
    } else if (operacion === "division") {
        if (num2 === 0){
            return "error division por cero no permitida";
        }
        return num1 / num2;
        }else{
            return"operacion no valida";
        }
}

//paso 3: bucle para realizar multiples operaciones

while (true){
    //solicitar al ususario que igrese el primer numero
    num1 = parseFloat(prompt("ingrese el primer numero(o escriba salir para terminar)"));
    // si la entrada no es numero termine el bucle
    if(isNaN(num1)){
        console.log("Adios");
        break;
    }

    //SOLICITAR AL USUARIO QUE INGRESE EL NUMERO 2
    num2 = parseFloat(prompt("ingrese el segundo numero"));

    // si el segundo nuemro no es valido
    if(isNaN(num2)){
        console.log("Por favor ingrese un numero valido");
        continue; // regresa al inicio del bucle
    }

    //solicita al usuario que ingrese ala operacion deseada
    operacion = prompt("ingrese la operacion(suma, resta, division, multiplicacion)") ;

    // si el usuario ingresa salir terminar bucle
    if(operacion === "salir"){
        console.log("adios");
        break;
    
    }



    const resultado = realizarOperacion(num1,num2,operacion.toLowerCase());
    console.log(`resultado: ${resultado}`);


}