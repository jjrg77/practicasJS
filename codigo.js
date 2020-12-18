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
/* let cadena = "cadena de prueba,"; */ //el sistema lo trata como un objeto, y lo lee así por detrás: let cadena = new string ("cadena de prueba").
/* let cadena2 = " prueba";*/
// Veamos algunos ejemplos de métodos de cadenas

//MÉTODO CONCAT(). Junta dos o más cadenas y retorna una nueva
/* let concatenacion = cadena.concat(cadena2);
document.write(`<b>${concatenacion}</b>`); //le hemos incluido etiquetas de HTML5 para que lo escriba en negrita.También valdría sólo la variable (document.write(concatenacion)).*/

//MÉTODO STARTSWITCH(). Si una cadena comienza con los caracteres de otra cadena, devuelve TRUE; si no, devuelve FALSE
/* concatenacion = cadena.startsWith(cadena2);
document.write(concatenacion); *///en este caso, será FALSE, ya que no comienzan igual.

//MÉTODO ENDSWITCH(). Si una cadena TERMINA con los caracteres de otra cadena, devuelve TRUE; si no, devuelve FALSE.
/* concatenacion = cadena.endsWith(cadena2);
document.write(concatenacion); *///aquí también será FALSE, ya que no acaban igual

//MÉTODO INCLUDES(). Si una cadena puede encontrarse dentro de otra cadena, devuelve TRUE; en caso contrario devuelve FALSE.
/* concatenacion = cadena.includes("cadena de");
document.write(concatenacion); *///en este caso, será TRUE, ya que la cadena CADENA DE se encuentra en las dos cadenas.

//MÉTODO INDEXOF(). Nos devuelve el índice donde se inicia la cadena que solicitamos.
/* let cadena3 = "texto de prueba prueba prueba";
let concatenacion1 = cadena3.indexOf("prueba");
document.write(concatenacion1); */ // ene este caso nos devuelve 10, que es donde se encuentra el string solicitado. Si no estuviera, nos devuelve -1.

//MÉTODO LASTINDEXOF(). Nos devuelve el último índice del primer caracter de la cadena, si no existe, devuelve -1.
/* concatenacion1 = cadena3.lastIndexOf("prueba"); 
document.write(concatenacion1); */ //en este caso, devuelve 23.

//MÉTODO PADSTART(). Rellena la cadena al principio con los caracteres deseados
/* let cadena4 = "abc";
resultado = cadena4.padStart(10,"1");
document.write(resultado); *///Nos rellenará con 7 unos para que la cadena sea de 10.

//MÉTODO PADEND(). Realiza la misma función pero rellenando los caracteres al final.
/* resultado = cadena4.padEnd(10,"1");
document.write(resultado + "<br>"); */

//MÉTODO REPEAT(). Repite la cadena el número de veces que le digamos
/* let cadena5 = "123";
resultado1 = cadena5.repeat(4);
document.write(resultado1 + "<br>"); */

//MÉTODO SPLIT(). Divide la cadena como le pidamos
/* let cadena6 = "hola como estás"; */ //en este caso, HOLA COMO ESTÁS es un array, por lo que la posición 0 es HOLA, la posición 1 es COMO...
/* let resultado2 = cadena6.split("como");
document.write(resultado2[1] + "<br>"); */// al decirle que sea a partir de la palabra COMO y a partir de la posición 1, nos elimina los caracteres, incluido COMO y sólo aparece ESTÁS. Si le indicamos ésto miso en la posición 0, nos aparece sólo HOLA

//MÉTODO SUBSTRING(). Apartir de la cadea que tenemos, le decimos que cree una cadena nueva desde la posición de inicio y fin que le indicamos.
/* let cadena7 = "12345";
let resultado3 = cadena7.substring(0,2);

document.write(resultado3 + "<br>"); */// en este caso, muestra 12.

//MÉTODO TOLOWERCASE(). convierte un acadena a minúscula
/* let cadena8 = "EJEMPLO TEXTO CONVERTIDO A MINÚSCULA";
let resultado4 = cadena8.toLowerCase();
document.write(resultado4 + "<br>"); */

//MÉTODO TOUPPERCASE(). Convierte cadena a mayúscula
/* let cadena9 = "texto convertido a mayúscula";
let resultado5 = cadena9.toUpperCase();
document.write(resultado5 + "<br>"); */

//MÉTOD TOSTRING(). Convierte valor numérico a string
/* let cadena10 = 1234;
let resultado6 = cadena10.toString();
document.write(cadena10 + "<br>"); */

//MÉTODO TRIM(). Elimina los espacios en blanco
/* let cadena11 = "   Pedro   "
let resultado7 = cadena11.trim();
document.write(resultado7.length + "<br>") */;//vemos que con la propiedad LENGHT nos indica que la cadena ha pasado de tener una longitud de 11 (ya que cuenta los espacios), a 5.

//MÉTODO TRIMEND() Y TRIMSTART(), nos elimina los espacios en blanco del final y el principio respectivamente.

/* *******************************************************
******************************************************* */
/* MÉTODOS DE ARRAYS */
//Veremos tres tipos de métodos de ARRAYS: transformadores, accesores y de repetición.
//MÉTODOS TRANSFORMADORES

//MÉTODO POP(). Elimina el último elemento de un array y lo devuelve
/* let array = ["azul","verde","rojo"];
let resultado = array.pop();
document.write(resultado + "<br>"); */ //en este caso, elimina ROJO y nos lo muestra, de tal forma que si sacamos por pantalla de nuevo ARRAY, éste tendrá los elementos AZUL, y VERDE.
/* document.write(array + "<br>"); */

//MÉTODO SHIFT(). Elimina el primer elemento del array y nos lo muestra. Usaremos el mismo array:
/* document.write(array.shift() + "<br>"); *///en este caso, elimina AZUL y nos lo muestra.

//MÉTODO UNSHIFT(). Agrega uno o más elementos al inicio del array, y devuelve la nueva longitud.
/* let nombres = ["Pedro","Luis","María"];
document.write(nombres.unshift("Joaquín") + "<br>"); *///vemos cómo la logitud es ahora 4
/* document.write(nombres + "<br>"); *///si escribimos el array, vemos cómo ha incluido el elemento JOAQUÍN

//MÉTODO PUSH(). Agregamos elementos al array.
/* let nombres = ["Pedro","Luis","María"];
document.write(nombres + "<br>");
let result = nombres.push("Diego");
document.write(result + "<br>"); *///si lo escribimos así, nos indica el número de elementos que tiene el array NOMBRES, en este caso, ha pasado a tener 4.
/* document.write(nombres + "<br>"); *///comprobamos que en el array NOMBRES se ha añadido el elemento DIEGO.

//MÉTODO REVERSE(). Invierte el orden de los elementos del array.
/* let nombres = ["Pedro","Luis","María"];
document.write(nombres + "<br>");
document.write(nombres.reverse() + "<br>"); *///vemos cómo en este segundo document.write ha invertido los elementos del array.
/* document.write(nombres + "<br>"); *///el array se queda con este valor invertido

//MÉTODO SHORT(). Ordena los elementos del array y devuelve el arreglo ordenado
/* let numeros = [2,4,1,3,6,5];
let letras = ["c","a","b","e","d"];
document.write(numeros + "<br>");
document.write(numeros.sort() + "<br>");
document.write(letras + "<br>");
document.write(letras.sort() + "<br>"); */

//MÉTODO SPLICE(). Cambia el contenido de un ARRAY eliminando elementos existentes y/o agregando nuevos elementos.
/* let numero = [1,2,3,4,5,6,7];
document.write(numero + "<br>");
numero.splice(1,3); *///le indicamos que borre tres elementos desde la posición 1.
/* document.write(numero + "<br>"); *///el array queda con los siguientes elementos: 1,5,6,7
//ahora eliminaremos dos elementos desde la posición 1 y agregaremos otros 3. Éstos se agrgarán desde la posición que hemos modificado (en este caso, la 1)
/* numero.splice(1,2,8,7,9);
document.write(numero + "<br>"); *///si agregamos elementos string, lo pondremos entre comillas
//si sólo queremos añadir sin eliminar ningún element
/* numero.splice(1,0,"hola"); *///así le indicamos que añada HOLA a la posición 1. Para añadirlo al final del array, utilizaremos -1
/* document.write(numero + "<br>"); */

//MÉTODOS ACCESORES. Estos métodos NO modifican el array, sino que crean un array nuevo.

//MÉTODO JOIN(). Convierte los elementos del array en una cadena de texto
/* let color = ["rojo","azul","amarillo","verde"]; */
//creamos la variable donde se alojará el elemento de texto nuevo. En este caso , pondremos guiones entre lo que era los elementos del array.
/* let resultado = color.join(" - ");
document.write(resultado); */

//MÉTODO SLICE(). Devuelve una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido).
/* let numero = [0,1,2,3,4,5];
let result = numero.splice(0,4); *///aquí le indicamos que queremos del elemento 0 al 4(éste último, no incluido)
/* document.write(result + "<br>"); *///nos muestra 0,1,2,3
//si nop sabemos la longitud del array, podemos escribir lo siguiente para que nos muestre todos (recordemos que el último nunca se muestra)
/* let letras = ["a","b","c","d","e"];
document.write(letras + "<br>");
let resultado = letras.splice(0,-1);
document.write(resultado); */

//MÉTODOS DE REPETICIÓN. 

//MÉTODOS FILTER() y FOREACH(). Hacen lo mismo
//FILTER().
/* let colores = ["azul","rojo","amarillo","verde","negro"];
colores.filter(color => document.write(color + "<br>")); *///vemos cómo actúa como un bucle. La variable COLOR recoge el valor de cada elemento del array y lo muestra.
//FOREACH().
/* let colores = ["azul","rojo","amarillo","verde","negro"];
colores.forEach(color => document.write(color + "<br>")); */
//La diferencia entre uno y otro, es que FILTER nos deja crear un nuevo array con la condición que le indequemos. Por ejemplo, le indicaremos que el array nos muestre los tres primeros elementos:
/* let resultado = colores.filter(color => color.length > 4);
document.write(resultado); */

/* *******************************************************
******************************************************* */
/* OBJETO MATH */
//Math es un objeto incorporado que tiene propiedades y métodos para constantes y funciones matemáticas. No es un objeto de función. Math funciona con el tipo Number 
//MÉTODOS DE OBJETO MATH
//MÉTODO SQRT(). Devuelve la raiz cuadrada positiva de un número
/* let numero = Math.sqrt(25);//resultado = 5
document.write(numero); */

//MÉTODO CBRT(). Devuelve la raiz cúbica positiva de un número
/* let numero = Math.cbrt(25);
document.write(numero); */

//MÉTODOS MAX() Y min(). Devuelve el mayor de cero y el menor respectivamente
/* let numero = Math.max(2,4,6,8,9);
document.write(numero + "<br>");

numero = Math.min(2,4,6,8,9);
document.write(numero + "<br>"); */

//MÉTODO RANDOM. Devuelve un número aleatorio entre 0 y 1
/* let numero = Math.random();
document.write(numero); *///así nos dará un número aleatorio entre 0 y 1. Si queremos que nos de un número aleatorio entre un rango de números, debemos hacer lo siguiente./* (en este caso lo haremos entre 1 y 100, ambos incluidos) */
/* let numero = Math.random()*100;
numero = numero.toString();
num = numero[0] + numero[1];
    //la función de este if es evitar que nos salga un número con un punto decimal
    if(numero[1] === "."){
        num = numero[0];
    }
document.write(num); */

//MÉTODO ROUND(). Este método es el ideal para sacar un número aleatorio sin decimales, ya que redondea la cifra:
/* let numero = Math.random()*300;//número aleatorio entre 1 y 300
numero = Math.round(numero);
document.write(numero); */

//MÉTODO TRUNC(). Nos saca el número entero de un número que tenga decimales.
/* let numero = Math.trunc(9.6);
document.write(numero); *///nos saca 9. Los decimales los elimina

//PROPIEDADES DE OBJETO MATH
//PROPIEDAD PI
/* let numero = Math.PI;
document.write(numero);*/

//PROPIEDAD SQRT1_2(). Raiz cuadrada de 1/2
/* let numero = Math.SQRT1_2;
document.write(numero); */

//PRPIEDAD SQRT2. Raíz cuadrada de 2
/* let numero = Math.SQRT2;
document.write(numero); */




