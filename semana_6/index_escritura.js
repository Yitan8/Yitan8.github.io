document.getElementById('mensaje').innerHTML="Hola Bienvenido";
const btn1 = document.getElementById('bt-1');
const btn2 = document.getElementById('bt-2');
const btn3 = document.getElementById('bt-3');
const btn4 = document.getElementById('bt-4');
const container = document.getElementById('contenido');

const platos = {
    nombre : ["lomo saltado", "causa rellena", "tallarines verdes"],
    precio : ["22","15","18"],

}

btn1.addEventListener('click',function(){
    for(let step=0 ;step<5;step++){
        console.log(step);
        container.innerHTML += 
        `<div> Presionaste el botón ${step}</div>`
    }})

btn2.addEventListener('click',function(){
    for(let step=0;step<3;step++){
        container.innerHTML += 
        `<div>${step*2} </div>`
    }})



btn3.addEventListener('click',function(){
    for(let i in platos.nombre){
        console.log(platos.nombre[i])}
})

btn4.addEventListener('click',function(){
    container.innerHTML = '<div> Presionaste el botón 4</div>'

})

const nombres = ['Juan','Pedro','Luis'];

for(const i in nombres){
    console.log(i);
}