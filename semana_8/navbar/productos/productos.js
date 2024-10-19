const productos =[
    {
        "image": "'./img/Chompa Lana Clásica.png'",
        "name": "Chompa Lana Clásica",
        "category": "chompas",
        "price": 49.99
    },
    {
        "image": "'./img/chompa de cuello alto.png'",
        "name": "Chompa Cuello Alto",
        "category": "chompas",
        "price": 59.90
    },
    {
        "image": "'./img/Chompa Tejida Gruesa.png'",
        "name": "Chompa Tejida Gruesa",
        "category": "chompas",
        "price": 65.50
    },
    {
        "image": "'./img/Chompa Manga Larga Rayas.png'",
        "name": "Chompa Manga Larga Rayas",
        "category": "chompas",
        "price": 45.75
    },
    {
        "image": "'./img/Chompa Algodón Casual.png'",
        "name": "Chompa Algodón Casual",
        "category": "chompas",
        "price": 55.20
    },
    {
        "image": "'./img/Polera Básica Blanca.png'", 
        "name": "Polera Básica Blanca", 
        "category": "poleras", 
        "price": 19.99
    },
    {
        "image": "'./img/Polera Estampada Negra.png'", 
        "name": "Polera Estampada Negra", 
        "category": "poleras", 
        "price": 24.99
    },
    {
        "image": "'./img/Polera Manga Larga Gris.png'", 
        "name": "Polera Manga Larga Gris", 
        "category": "poleras", 
        "price": 29.50
    },
    {
        "image": "'./img/Polera Deportiva Azul.png'", 
        "name": "Polera Deportiva Azul", 
        "category": "poleras", 
        "price": 34.75
    },
    {
        "image": "'./img/Polera Casual Verde.png'", 
        "name": "Polera Casual Verde", 
        "category": "poleras", 
        "price": 22.49
    },
    {
        "image": "'./img/Casaca de Cuero Clásica.png'",
        "name": "Casaca de Cuero Clásica",
        "category": "casaca",
        "price": 89.99
    },
    {
        "image": "'./img/Casaca Deportiva Impermeable.png'",
        "name": "Casaca Deportiva Impermeable",
        "category": "casaca",
        "price": 75.50
    },
    {
        "image": "'./img/Casaca de Invierno con Capucha.png'",
        "name": "Casaca de Invierno con Capucha",
        "category": "casaca",
        "price": 120.45
    },
    {
        "image": "'./img/Casaca de Jean Estilo Vintage.png'",
        "name": "Casaca de Jean Estilo Vintage",
        "category": "casaca",
        "price": 65.00
    },
    {
        "image": "'./img/Pantalón Vaquero.png'",
        "name": "Pantalón Vaquero",
        "category": "pantalon",
        "price": 49.99
    },
    {
        "image": "'./img/Pantalón Chino.png'",
        "name": "Pantalón Chino",
        "category": "pantalon",
        "price": 39.95
    },
    {
        "image": "'./img/Pantalón de Vestir.png'",
        "name": "Pantalón de Vestir",
        "category": "pantalon",
        "price": 59.50
    },
    {
        "image": "'./img/Pantalón Cargo.png'",
        "name": "Pantalón Cargo",
        "category": "pantalon",
        "price": 44.90
    },
    {
        "image": "'./img/Zapato Deportivo.jpeg'",
        "name": "Zapato Deportivo",
        "category": "zapato",
        "price": 59.99
    },
    {
        "image": "'./img/Zapato de Vestir.jpeg'",
        "name": "Zapato de Vestir",
        "category": "zapato",
        "price": 89.50
    },
    {
        "image": "'./img/Botines de Cuero.jpeg'",
        "name": "Botines de Cuero",
        "category": "zapato",
        "price": 120.00
    },
    {
        "image": "'./img/Sandalias Casual.jpeg'",
        "name": "Sandalias Casual",
        "category": "zapato",
        "price": 35.75
    },
    {
        "image": "'./img/Zapatillas Running.jpeg'",
        "name": "Zapatillas Running",
        "category": "zapato",
        "price": 75.90
    }
    
]

const lista_productos = document.getElementById('productos');
for (let i in productos){
    src = productos[i].image;
    nombre = productos[i].name;
    categoria = productos[i].category;
    precio = productos[i].price;
    
    renderizar(src,nombre,categoria,precio);
}

function renderizar(src,nombre,categoria,precio) {
    lista_productos.innerHTML += `
        <div style=" width: 100%; padding: 15px; border-radius: 4%; box-sizing: border-box;">
                    <div>
                        <img src=${src} alt="" width="100%" style="border-radius: 1%;">
                    </div>
                    <div>
                        <p>${categoria}</p>
                        <h1 style="font-weight: normal; text-transform: uppercase;">${nombre}</h1>
                        <p style="font-size:1.3em;">$  ${precio}</p>
                    </div>
                </div>`;
    
    
    
}
