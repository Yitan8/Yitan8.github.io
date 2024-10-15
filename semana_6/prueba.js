const a = 5;
const nombre = "Pedro";
const edad = 2;
const arreglo = [10,20,30,40];


console.log(arreglo[2]);

const objeto ={
    nombre: "Sergio",
    cursos:["HTML", "CSS", "JavaScript"],
    n_dni: 1234567,

}

//For in

for(let i in objeto.cursos)
    console.log(objeto.cursos[i]);

const objeto_2 ={
    nombre: "Sergio",
    colores: ["negro","rojo","azul","morado"],
    n_dni:12345
}

for(let i in objeto_2.colores)
    console.log(objeto_2.colores[i]);