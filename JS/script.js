localStorage.setItem('produceFruit', JSON.stringify([
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
]));

let produce = JSON.parse(localStorage.getItem('produceFruit'));

console.log(produce);

let items = JSON.parse(localStorage.getItem('produceFruit'))?
JSON.parse(localStorage.getItem('produceFruit')):
JSON.parse(localStorage.setItem("produceFruit",JSON.stringify(produceFruit)));

const fruitsStore = document.getElementById("products");
function displayFruits() {
    fruitsStore.innerHTML = "";

    produce.forEach((produce) => {
        fruitsStore.innerHTML += `
        <div class="row">

                <div class="col-lg-4">

                    <div class="card p-2">

                        <div class="card-body">

                            <div class="star">

                                <span><i class="bi bi-star-fill"></i></span>

                                <span><i class="bi bi-star-fill"></i></span>

                                <span><i class="bi bi-star-fill"></i></span>

                                <span><i class="bi bi-star-fill"></i></span>

                            </div>

                            <img src=${produce.image} class="img-fluid pb-3" alt="Kiwi">

                            <h4 class="head1">${produce.fruit}</h4>

                            <p class="per1">${produce.weight}</p>

                            <h4 class="head1">${produce.price}</h4>

                            <button onclick="add()" class="btn my-4">ADD TO CART</button>

                        </div>

                    </div>

                </div>
        `;
    });

    // document.querySelectorAll(".trigger").forEach((button) => button.addEventListener("click", progress));
    // document.querySelectorAll("#Image").forEach((input) => input.addEventListener("change", pictureChange))
}

// function toggleModal(modeI) {
//     console.log(modeI);
//     document.querySelector(`#${modeI}`).classList.toggle("active");
// }

// function removeItem(fruit_num) {
//     let removeVerify = verify("You sure you want to remove this item?");
//     if (removeVerify) {
//         fetch (
//             `code.json`
//         );
//     }
// }

// function pictureChange() {
//     const picture = document.querySelector(".sort-pic");
//     const folder =  document.querySelector('#Image').folders[0];
//     const scanner = new FolderScanner();

//     scanner.addEventListener(
//         "refresh",
//         function () {
//             image.src = scanner.outcome;
//         },
//         false
//     );

//     if (folder) {
//         scanner.scanAsDataURL(folder);
//     }
// }

// function addProduce() {
//     let f_Pic = document.querySelector(".sort-pic").src;
//     let fruitName = document.getElementById("fruit_name").value;
//     let weight = document.getElementById("weight").value;
//     let price = document.getElementById("price").value;

//     console.log(addProduce);
//     if (verify("You would like to add this item?")) {
//         fetch(
//             `code.json`, {
//                 method: "POST",
//                 body: JSON.stringify({
//                     image: f_Pic,
//                     fruit_name: fruitName,
//                     weight: weight,
//                     price: price,
//                 }),
//                 headers:  {
//                     "media-type": "application/json",
//                 },
//             }
//         ) .then((res) => res.json())
//         .then((data) => {
//             window.location.reload();
//         }); 
//     } else {
//             console.log("Add not implemented")
//     }
// }

// function progress(e) {
//     console.log(e.target.id);
//     let produceID = e.target.id;
//     console.log(produceID);

//     let f_Pic = document.querySelector(`.sort-pic`).src;
//     let fruitName = document.getElementById(`fruit_name${fruit_num}`).value;
//     let weight = document.getElementById(`weight${fruit_num}`).value;
//     let price = document.getElementById(`price${fruit_num}`).value;
//     if (verify("great!")) {
//         fetch(
//             `code.json`,
//             {
//                 method: "PUT",
//                 body: JSON.stringify ({
//                     image: f_Pic,
//                     fruit_name: fruitName,
//                     weight: weight,
//                     price: price,
//                 }),
//                 headers: {
//                     "media-type": "application/json; charset=UTF-8",
//                 },
//             }
//         )
//         .then((res) => res.json())
//         .then((data) => {
//             console.log(data);
//         });
//     }
// }