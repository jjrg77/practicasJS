/*se utiliza LET para definir variable 
dentro de un bloque */

 /*let variable = 'cadena de texto';

alert(variable);*/

/* ************************************************
***************************************************
con el símbolo ${} concatenamos */

/* let nombre = prompt('dime tu nombre');
let frase = `soy ${nombre}`;

document.write(frase); */

/* ***************************************************
*************************************************** 
ARRAYS*/

/* let fruta = ["pera", "manzana", "uva"];
document.write(fruta[0]); */

/* ARRAYS ASOCIATIVOS */

/* pc = {
    nombre: "Joaquín PC",
    procesador: "Intel Core I7",
    ram: "16 gb",
    espacio: "1TB"
};

let nombre = pc["nombre"];
let procesador = pc["procesador"];
let ram = pc["ram"];
let espacio = pc["espacio"];

let frase = `El nombre de mi PC es: <h2>${nombre}</h2> 
             Mi procesador es: <h3>${procesador}</h3>
             Mi RAM es: <h3>${ram}</h3>
             Mi almacenamiento es: <h3>${espacio}</h3>`;


document.write(frase); */


/* *******************************************************
******************************************************* */
/* SENTENCIA WHILE */

/* let numero = 0;

while (numero <= 10) {
    document.write(numero);
    numero++;
}; */

/* *******************************************************
******************************************************* */
/* SENTENCIA DO WHILE */

/* let numero = 0;

do {
    document.write(numero + "<br>");
    numero++;
}
while (numero <= 10); */

/* *******************************************************
******************************************************* */
/* SENTENCIA BREAK */

/* let numero = 0;

while (numero <= 100) {
    document.write(numero + "<br>");
    numero++;
    if (numero == 10) {
        break;
    };
}; */

/* *******************************************************
******************************************************* */
/* SENTENCIA FOR */

/* for (let i = 0; i <6; i++) {
    document.write(i + "<br>");
};

//Se puede hacer al revés: decremento:
for (let i = 6; i >= 0; i--) {
    document.write(i + "<strong>");
}; */

/* *******************************************************
******************************************************* */
/* SENTENCIA CONTINUE: Para saltar iteración */
/* for (let i = 6; i >= 0; i--) {
    if (i == 3) {
        continue;
    }
    document.write(i + "<strong>");
}; */

/* *******************************************************
******************************************************* */
/* SENTENCIA FOR IN / FOR OF */
//IN nos muestra la posición del elemento del array
/* let animales = ["gato","perro","tortuga"];

for (animal in animales) {
    document.write(animal + "<br>");
}

//OF nos muestra el valor del elemento
for (animal of animales) {
    document.write(animal + "<br>");
} */

/* *******************************************************
******************************************************* */
/* SENTENCIA LABEL */

/* array1 = ["María, Pedro, José"];
array2 = ["Marc,Ana,array1,Pepe"];

forLabel: for (let array in array2) {
    if (array == 2) {

        for (let array of array1) {
            continue forLabel;
            document.write(array + "<br>");
            // break forLabel;
            
        }

    } else {
        document.write (array2[array] + "<br>");
      }
} */

/* *******************************************************
******************************************************* */
/* FUNCIONES  */

/* function saludo(){
    let n1 = prompt("dime tu nombre");
    let n2 = prompt("dime tu edad");
    document.write("Hola " + n1 + "<br>");
    if (n2 >= 18) {
        document.write("Eres mayor de edad");
    }
    else {
        document.write("Eres menor de edad");
    }

}

saludo(); */

//También se puede crear así:
/* saludo = function(){
    let n1 = prompt("dime tu nombre");
    let n2 = prompt("dime tu edad");
    document.write("Hola " + n1 + "<br>");
    if (n2 >= 18) {
        document.write("Eres mayor de edad");
    }
    else {
        document.write("Eres menor de edad");
    }

}

saludo(); */


// RETURN en funciones. Nos devuelve un valor
/* function saludo(){
    alert("Hola");
    return "la función se ha ejecutado correctamente";
}

let saludar = saludo();
document.write(saludar); */

//También se puede ver return si en document.write escribimos
//directamente la función: 
/* function saludo(){
    alert("Hola");
    return "la función se ha ejecutado correctamente";
}
document.write(saludo()); */

// PARÁMETROS en funciones:
/* function suma(num1,num2,num3){
    let result = num1 + num2 + num3;
    document.write(result);
}
suma(56,21,48); //en pantalla nos aparecerá la suma de los números
                //introducidos. */

//Podemos realizarlo con Return:
/* function suma(num1,num2,num3){
    let result = num1 + num2 + num3;
    return(result);
}
let resultado =suma(6,2,8);
document.write(resultado); */

// Funciones flecha: es otra forma de crear funciones, veamos los ejemplos;
// primero crearemos una función como la hemos creado hasta ahora:
/* function saludar(nombre){
    let frase = `Hola ${nombre} ¿Cómo estás?`;
    document.write(frase);
}
saludar(Joaquín); */
//Ahora crearemos la misma función con flecha:
/* saludar = nombre => {
    let frase = `Hola ${nombre} ¿Cómo estás?`;
    document.write(frase); 
}
saludar("Joaquín"); */
//Al llevar sólo un parárametro no es necesario que vaya entre paréntesis, si
//hay más de uno, va entre paréntesis:
/* saludar = (nombre,apellidos) => {
    let frase = `Hola ${nombre} ${apellidos} ¿Cómo estás?`;
    document.write(frase); 
}
saludar("Joaquín","Rodríguez"); */

//Función flecha sin paramétros
/* saludo = () => {
    document.write("Hola");
}
saludo(); */

//la función flecha, si sólo tiene un comando entre llaves, éstas se pueden eliminar:
/* saludo = () => document.write("hola, que tal");
saludo(); */

/* *******************************************************
******************************************************* */
/* POO  */

// creamos clase y constructor
/* class animal{
    constructor (especie,edad,color){
        this.especie = especie;
        this.edad    = edad;
        this.color   = color;
        this.info    = `soy un ${this.especie}, tengo ${this.edad} años, y mi color es ${this.color}.`;
    }

    //creamos un método, en este caso, para saludar. Es decir, los métodos son las acciones que realiza el objeto (Un método es una función dentro de la clase).
    verInfoDeObjeto = () => {
        document.write(this.info + "<br>");
    }
}

// instanciamos clase
let perro = new animal("perro",5,"verde");
let gato = new animal("gato",2,"marrón");
let pajaro = new animal("pájaro",6,"amarillo");
let pez = new animal("boquerón",8,"negro");

//llamamos al método
perro.verInfoDeObjeto();
gato.verInfoDeObjeto();
pajaro.verInfoDeObjeto();
pez.verInfoDeObjeto(); */

/* POLIMORFISMO */

/* class animal{
    constructor (especie,edad,color){
        this.especie = especie;
        this.edad    = edad;
        this.color   = color;
        this.info    = `soy un ${this.especie}, tengo ${this.edad} años, y mi color es ${this.color}.`;
    }
    verInfoDeObjeto = () => {
        document.write(this.info + "<br>");
    }

    /* Podemos crear un método que sea específico para un objeto de la clase pero no para otros objetos de esa clase. Ésto se hace con el concepto POLIMORFISMO. a continuación crearemos un método LADRAR() el cual sólo servirá para el objeto PERRO de la clase ANIMALES: */
 /*    ladrar = () => {
        if(this.especie == "perro"){
            document.write("WOW", "<br>");
        }else{
            document.write(`no puede ladrar ya que es un ${this.especie} <br>`);
        }
    }
}

//instanciamos la clase
let perro = new animal("perro",5,"verde");
let gato = new animal("gato",2,"marrón");
let pajaro = new animal("pájaro",6,"amarillo");
let pez = new animal("boquerón",8,"negro");

//llamamos al método
perro.ladrar();
gato.ladrar();
pajaro.ladrar();
pez.ladrar();  */

/* HERENCIA */
/* class animal{
    constructor (especie,edad,color){
        this.especie = especie;
        this.edad    = edad;
        this.color   = color;
        this.info    = `soy un ${this.especie}, tengo ${this.edad} años, y mi color es ${this.color}.`;
    }
    verInfoDeObjeto = () => {
        document.write(this.info + "<br>");

    }
} */
// Creamos una clase que hereda las propiedades de la clase padre y además adquiere propiedades nuevas. En este caso, crearemos la clase PERRO. Al heredar las propiedades, también hereda los métodos de la clase padre, en este caso VERINFOOBJETO():
/* class perro extends animal{
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza = raza;
    }
    //creamos un método para esta clase, lo escribiremos de esta otra forma (es igual de válida):
    ladrar(){
        alert("WOW");
    }

}
//instanciamos las dos clases
let perro1 = new perro("perro",5,"verde","doberman");
let gato = new animal("gato",2,"marrón");
let pajaro = new animal("pájaro",6,"amarillo");
let pez = new animal("boquerón",8,"negro");

//llamamos al método de la clase padre
perro1.verInfoDeObjeto();
gato.verInfoDeObjeto();
pajaro.verInfoDeObjeto();
pez.verInfoDeObjeto();

//llamamos al método de la clase PERRO. Al ser un método de la clase ANIMAL, sólo es válido para dicha clase, no para los objetos de la clase padre
perro1.ladrar(); */

/* MÉTODOS ESTÁTICOS */
/* Los métodos estáticos son aquellos que no necesitan al constructor de la CLASE. de hecho, no necesitamos instanciar la clase (crear el objeto), para utilizarlos: */
/* class animal{
    constructor (especie,edad,color){
        this.especie = especie;
        this.edad    = edad;
        this.color   = color;
        this.info    = `soy un ${this.especie}, tengo ${this.edad} años, y mi color es ${this.color}.`;
    }
    //Método de la clase
    verInfoDeObjeto = () => {
        document.write(this.info + "<br>");

    }
    //Método estático
    static comer(){
        document.write("Estoy comiendo");
    }
}

animal.comer(); */

/* Método GET/SET (obtener, modificar datos)*/
//vamos a ver un ejemplo con las clases con las que estamos trabajando:
/* class animal{
    constructor (especie,edad,color){
        this.especie = especie;
        this.edad    = edad;
        this.color   = color;
        this.info    = `soy un ${this.especie}, tengo ${this.edad} años, y mi color es ${this.color}.`;
    }
    
}
//en la clase ANIMAL modificaremos la propiedad RAZA
class perro extends animal{
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza = null;
    }
    
    //Método SET: modificamos la propiedad RAZA
    set setRaza (modifRaza){
        this.raza = modifRaza;
    }
    //Método GET: obenemos el valor de la propiedad RAZA
    get getRaza(){
        return this.raza;
    }
}

//instanciamos la clase
const perro1 = new perro("perro",5,"marrón");

//Llamamos al método. Para llamar a un método SET, debemos escribirlo como si fuera una propiedad: 
perro1.setRaza = "caniche";

//Imprimimos por pantalla, vemos que la propiedad RAZA se ha modificado:
document.write(perro1.getRaza); */

/* *******************************************************
******************************************************* */
/* MÉTODOS DE CADENAS */
// Cuando creamos cadenas de String, lo escribimos así:
let cadena = "cadena de prueba,"; //el sistema lo trata como un objeto, y lo lee así por detrás: let cadena = new string ("cadena de prueba").
let cadena2 = " prueba";
// Veamos algunos ejemplos de métodos de cadenas

//MÉTODO CONCAT(). Junta dos o más cadenas y retorna una nueva
let concatenacion = cadena.concat(cadena2);
document.write(`<b>${concatenacion}</b>`);//le hemos incluido etiquetas de HTML5 para que lo escriba en negrita.También valdría sólo la variable (document.write(concatenacion)).

//MÉTODO STARTSWITCH(). Si una cadena comienza con los caracteres de otra cadena, devuelve TRUE; si no, devuelve FALSE
concatenacion = cadena.startsWith(cadena2);
document.write(concatenacion);//en este caso, será FALSE, ya que no comienzan igual.

//MÉTODO ENDSWITCH(). Si una cadena TERMINA con los caracteres de otra cadena, devuelve TRUE; si no, devuelve FALSE.
concatenacion = cadena.endsWith(cadena2);
document.write(concatenacion);//aquí también será FALSE, ya que no acaban igual

//MÉTODO INCLUDES(). Si una cadena puede encontrarse dentro de otra cadena, devuelve TRUE; en caso contrario devuelve FALSE.
concatenacion = cadena.includes("cadena de");
document.write(concatenacion);//en este caso, será TRUE, ya que la cadena CADENA DE se encuentra en las dos cadenas.

//MÉTODO INDEXOF(). (*5.21*)


