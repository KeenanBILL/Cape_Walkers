
let products = JSON.parse(localStorage.getItem('produceFruit')) ? 
JSON.parse(localStorage.getItem('produceFruit')) : localStorage.setItem('produceFruit', JSON.stringify(
    [
        {
            product: 1,
            image: "https://i.postimg.cc/YqXv0cWS/Kiwi-Fruit-PNG-Transparent-Image.png",
            price: "R49,89",
            weight: "1 X 455g",
            fruit: "Kiwi"
        },
        {
            product: 2,
            image: "https://i.postimg.cc/pLm8fVf7/strawberry-fruit-png-3.jpg",
            price: "R35,99",
            weight: "1 X 300g",
            fruit: "Strawberry"
        },
        {
            product: 3,
            image: "https://i.postimg.cc/x188wsqb/Granadilla.png",
            price: "R85,89",
            weight: "1 X 1kg",
            fruit: "Granadilla"
        },
        {
            product: 4,
            image: "https://i.postimg.cc/9fDZCmgV/dragon-fruit.png",
            price: "R85,89",
            weight: "1 Each",
            fruit: "Dragon Fruit"
        },
        {
            product: 5,
            image: "https://i.postimg.cc/mkCSRLDh/cherry.png",
            price: "R75,90",
            weight: "1 X 1kg",
            fruit: "Cherries"
        },
        {
            product: 6,
            image: "https://i.postimg.cc/9Mqdtmy1/Blueberry-PNG-Image-300x225.png",
            price: "R55,89",
            weight: "1 X 1kg",
            fruit: "Blueberry"
        },
        {
            product: 7,
            image: "https://i.postimg.cc/zvPvvWcf/lychee.png",
            price: "R95,89",
            weight: "1 X 2kg",
            fruit: "Lychee"
        },
        {
            product: 8,
            image: "https://i.postimg.cc/RFHnjgsT/Group-Of-Raspberries-png-hd.png",
            price: "R65,89",
            weight: "1 X 1kg",
            fruit: "Raspberries"
        },
        {
            product: 9,
            image: "https://i.postimg.cc/WpZHnjnd/sweetmelon.png",
            price: "R30,99",
            weight: "1 X Each",
            fruit: "Sweet Melon"
        }
    ]
));

const fruitsStore = document.getElementById("productsFruit");
function displayFruits() {
    fruitsStore.innerHTML = "";

    products.forEach((item) => {
        fruitsStore.innerHTML += `
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

                            <button id="appendCart" class="mbtn2 my-4" onclick='addToCheckout(${JSON.stringify(item)})'>ADD TO CHECKOUT</button>

                        </div>
        `;
    });
    
}
// Calling a function
displayFruits();

let cartLeave = [];

function addToCheckout(item){
    console.log(item);
    cartLeave.push(item);
    localStorage.setItem('depart',JSON.stringify(cartLeave))
}


