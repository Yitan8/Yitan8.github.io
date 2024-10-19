const platos = [
    {
        "image": "./img/image-waffle-desktop.jpg",
        "name": "Waffle with Berries",
        "category": "Waffle",
        "price": 6.50
    },
    {
        "image": "./img/image-creme-brulee-desktop.jpg",
        "name": "Vanilla Bean Crème Brûlée",
        "category": "Crème Brûlée",
        "price": 7.00
    },
    {
        "image": "./img/image-macaron-desktop.jpg",
        "name": "Macaron Mix of Five",
        "category": "Macaron",
        "price": 8.00
    },
    {
        "image": "./img/image-tiramisu-desktop.jpg",
        "name": "Classic Tiramisu",
        "category": "Tiramisu",
        "price": 5.50
    },
    {
        "image": "./img/image-baklava-desktop.jpg",
        "name": "Pistachio Baklava",
        "category": "Baklava",
        "price": 4.00
    },
    {
        "image": "./img/image-meringue-desktop.jpg",
        "name": "Lemon Meringue Pie",
        "category": "Pie",
        "price": 5.00
    },
    {
        "image": "./img/image-cake-desktop.jpg",
        "name": "Red Velvet Cake",
        "category": "Cake",
        "price": 4.50
    },
    {
        "image": "./img/image-brownie-desktop.jpg",
        "name": "Salted Caramel Brownie",
        "category": "Brownie",
        "price": 4.50
    },
    {
        "image": "./img/image-panna-cotta-desktop.jpg",
        "name": "Vanilla Panna Cotta",
        "category": "Panna Cotta",
        "price": 6.50
    },
    {
        "image": "./img/image-panna-cotta-desktop.jpg",
        "name": "Lomo Saltado",
        "category": "Salteado",
        "price": 22.00
    }
];
const lista_platos = document.getElementById('menu');
const main = document.getElementById('main');
for (let i in platos) {
    
    categoria = platos[i].category;
    precio = platos[i].price;
    nombre = platos[i].name;
    src = platos[i].image;
    
    renderizar(src,nombre,categoria,precio);
}

function renderizar(src,nombre,categoria,precio) {

    lista_platos.innerHTML += `
            <div style="border: solid red; width: 100%; padding: 15px; border-radius: 4%; background-color: orange;box-sizing: border-box;">
                    <div>
                        <img src=${src} alt="" width="100%" style="border-radius: 4%;">
                    </div>
                    <div>
                        <p>${categoria}</p>
                        <h1>${nombre}</h1>
                        <p>${precio}</p>
                    </div>
                </div>`;
}
function bg1() {
    main.style.backgroundColor = "red";
}
function bg2() {
    main.style.backgroundImage = "url(./img/image-creme-brulee-desktop.jpg)";
}
function bg3() {
    main.style.backgroundColor = "yellow";
}

function enviodedatos(event){

    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const dinero = document.getElementById('dinero').value;
    const dolares = document.getElementById('dolares').value;

    const dolares_cont = document.getElementById('dolares');
    const dolares_2 = dinero/3.8;
    
    dolares_cont.innerHTML= "SU CANTIDAD DE DOLARES ES:  " + dolares_2;
    console.log(nombre);
    console.log(apellido);
    console.log(dolares);



}