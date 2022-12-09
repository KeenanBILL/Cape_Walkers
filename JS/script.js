let products = JSON.parse(localStorage.getItem('produceFruit')) ? 
JSON.parse(localStorage.getItem('produceFruit')) : localStorage.setItem('produceFruit', JSON.stringify(
    [
        {
            product: 1,
            image: "/Img/Kiwi-Fruit-PNG-Transparent-Image.png",
            price: "R49,89",
            weight: "1 X 455g",
            fruit: "Kiwi"
        },
        {
            product: 2,
            image: "/Img/strawberry-fruit-png-3.jpg",
            price: "R35,99",
            weight: "1 X 300g",
            fruit: "Strawberry"
        },
        {
            product: 3,
            image: "/Img/Granadilla.png",
            price: "R85,89",
            weight: "1 X 1kg",
            fruit: "Granadilla"
        },
        {
            product: 4,
            image: "/Img/dragon fruit.png",
            price: "R85,89",
            weight: "1 Each",
            fruit: "Dragon Fruit"
        },
        {
            product: 5,
            image: "/Img/cherry.png",
            price: "R75,90",
            weight: "1 X 1kg",
            fruit: "Cherries"
        },
        {
            product: 6,
            image: "/Img/Blueberry-PNG-Image-300x225.png",
            price: "R55,89",
            weight: "1 X 1kg",
            fruit: "Blueberry"
        },
        {
            product: 7,
            image: "/Img/lychee.png",
            price: "R95,89",
            weight: "1 X 2kg",
            fruit: "Lychee"
        },
        {
            product: 8,
            image: "/Img/Orange.png",
            price: "R65,89",
            weight: "1 X 5kg",
            fruit: "Oranges"
        },
        {
            product: 9,
            image: "/Img/sweetmelon.png",
            price: "R30,99",
            weight: "1 X Each",
            fruit: "Sweet Melon"
        },
        {
            product: 10,
            image: "/Img/Pear.png",
            price: "R25,89",
            weight: "1 X 1kg",
            fruit: "Pear"
        }
    ]
));

// localStorage.setItem('produceFruit', JSON.stringify([
//     {
//         product: 1,
//         image: "/Img/Kiwi-Fruit-PNG-Transparent-Image.png",
//         price: "R49,89",
//         weight: "1 X 455g",
//         fruit: "Kiwi"
//     },
//     {
//         product: 2,
//         image: "/Img/strawberry-fruit-png-3.jpg",
//         price: "R35,99",
//         weight: "1 X 300g",
//         fruit: "Strawberry"
//     },
//     {
//         product: 3,
//         image: "/Img/Granadilla.png",
//         price: "R85,89",
//         weight: "1 X 1kg",
//         fruit: "Granadilla"
//     },
//     {
//         product: 4,
//         image: "/Img/dragon fruit.png",
//         price: "R85,89",
//         weight: "1 Each",
//         fruit: "Dragon Fruit"
//     },
//     {
//         product: 5,
//         image: "/Img/cherry.png",
//         price: "R75,90",
//         weight: "1 X 1kg",
//         fruit: "Cherries"
//     },
//     {
//         product: 6,
//         image: "/Img/Blueberry-PNG-Image-300x225.png",
//         price: "R55,89",
//         weight: "1 X 1kg",
//         fruit: "Blueberry"
//     },
//     {
//         product: 7,
//         image: "/Img/lychee.png",
//         price: "R95,89",
//         weight: "1 X 2kg",
//         fruit: "Lychee"
//     },
//     {
//         product: 8,
//         image: "/Img/Orange.png",
//         price: "R65,89",
//         weight: "1 X 5kg",
//         fruit: "Oranges"
//     },
//     {
//         product: 9,
//         image: "/Img/sweetmelon.png",
//         price: "R30,99",
//         weight: "1 X Each",
//         fruit: "Sweet Melon"
//     },
//     {
//         product: 10,
//         image: "/Img/Pear.png",
//         price: "R25,89",
//         weight: "1 X 1kg",
//         fruit: "Pear"
//     }
// ]));

// let produce = JSON.parse(localStorage.getItem('produceFruit'));

// console.log(produce);

// let items = JSON.parse(localStorage.getItem('produceFruit'))?
// JSON.parse(localStorage.getItem('produceFruit')):
// JSON.parse(localStorage.setItem("produceFruit",JSON.stringify(produceFruit)));

const fruitsStore = document.getElementById("productsFruit");
function displayFruits() {
    fruitsStore.innerHTML = "";

    products.forEach((item) => {
        fruitsStore.innerHTML += `

        <div class="row2">

                <div class="col-lg-4">

                    <div class="card p-2">

                        <div class="card-body">

                            <div class="star">

                                <span><i class="bi bi-star-fill"></i></span>

                                <span><i class="bi bi-star-fill"></i></span>

                                <span><i class="bi bi-star-fill"></i></span>

                                <span><i class="bi bi-star-fill"></i></span>

                                <span><i class="bi bi-star-fill"></i></span>

                            </div>

                            <img src=${item.image} class="img-fluid pb-3" alt="">

                            <h4 class="head1">${item.fruit}</h4>

                            <p class="per1">${item.weight}</p>

                            <h4 class="head1">${item.price}</h4>

                            <button onclick="add()" class="mbtn2 my-4">ADD TO CHECKOUT</button>

                        </div>

                    </div>

                </div>
        `;
    });
    
}
// Calling a function
displayFruits();

