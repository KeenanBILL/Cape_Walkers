let fruits = JSON.parse(localStorage.setItem("fruits")) ? JSON.parse(localStorage.getItem("fruits")) : 
[
    {
        "product": 1,
        "price": "R49,89",
        "weight": "6 X 455g",
        "fruit": "Kiwi"
    },
    {
        "product": 2,
        "price": "R35,99",
        "weight": "21 X 300g",
        "fruit": "Strawberry"
    },
    {
        "product": 3,
        "price": "R85,89",
        "weight": "7 X 1kg",
        "fruit": "Granadilla"
    },
    {
        "product": 4,
        "price": "R85,89",
        "weight": "7 X 1kg",
        "fruit": "Granadilla"
    },
    {
        "product": 5,
        "price": "R85,89",
        "weight": "7 X 1kg",
        "fruit": "Granadilla"
    },
    {
        "product": 6,
        "price": "R85,89",
        "weight": "7 X 1kg",
        "fruit": "Granadilla"
    },
    {
        "product": 7,
        "price": "R85,89",
        "weight": "7 X 1kg",
        "fruit": "Granadilla"
    },
    {
        "product": 8,
        "price": "R85,89",
        "weight": "7 X 1kg",
        "fruit": "Granadilla"
    },
    {
        "product": 9,
        "price": "R85,89",
        "weight": "7 X 1kg",
        "fruit": "Granadilla"
    },
    {
        "product": 10,
        "price": "R85,89",
        "weight": "7 X 1kg",
        "fruit": "Granadilla"
    }
]

function displayFruits(produce) {
    let fruitsStore = documents.querySelector("#products");
    fruitsStore.innerHTML = "";

    produce.forEach((produce) => {
        fruitsStore.innerHTML += `
        <div class="produce">
        <img class="fruit-img" src=${produce.image} alt="pic">
        <div class="fresh">
        <h3 class="fruit-spec">${produce.fruit_name}</h3>
        <h3 class="fruit-spec">${produce.weight}</h3>
        <h3 class="fruit-spec">${produce.price}</h3>
        <div class="btn_produce">
        <button class="btn" onclick="removeProduce(${produce.fruit_num})">Delete</button>
        <button class="btn" onclick="toggleModal('rewrite-modal-${produce.fruit_num}')" id='${produce.fruit_num}'>Edit</button>
        </div>
        </div>
        <div id="rewrite-mode-${produce.fruit_num}" class="modal">
        <div class="modal">
        <button onclick="toggleModal('rewrite-mode-${produce.fruit_num}')" class="modal btn" id='${produce.fruit_num}'>X</button>
        <div class="rewrite">
        <form>
        <input type="file" id="Image" name="image" required>
        <input required type="text" name="fruit_name" id="fruit_name${produce.fruit_num}" placeholder="name"/>
        <input required type="text" name="weight" id="weight${produce.fruit_num}" placeholder="weight"/>
        <input required type="text" name="price" id="price${produce.fruit_num}" placeholder="price"/>
        <button type="submit" class='button-modal trigger' onclick='event.preventDefault()' id=${produce.fruit_num}'>Submit INFO</button>
        </form>
        </div>
        </div>
        </div>
        `;
    });
    document.querySelectorAll(".trigger").forEach((button) => button.addEventListener("click", progress));
    document.querySelectorAll("#Image").forEach((input) => input.addEventListener("change", pictureChange))
}

function toggleModal(modeI) {
    console.log(modeI);
    document.querySelector(`#${modeI}`).classList.toggle("active");
}

function removeItem(fruit_num) {
    let removeVerify = verify("You sure you want to remove this item?");
    if (removeVerify) {
        fetch (
            `code.json`
        );
    }
}

function pictureChange() {
    const picture = document.querySelector(".sort-pic");
    const folder =  document.querySelector('#Image').folders[0];
    const scanner = new FolderScanner();

    scanner.addEventListener(
        "refresh",
        function () {
            image.src = scanner.outcome;
        },
        false
    );

    if (folder) {
        scanner.scanAsDataURL(folder);
    }
}

function addProduce() {
    let f_Pic = document.querySelector(".sort-pic").src;
    let fruitName = document.getElementById("fruit_name").value;
    let weight = document.getElementById("weight").value;
    let price = document.getElementById("price").value;

    console.log(addProduce);
    if (verify("You would like to add this item?")) {
        fetch(
            `code.json`, {
                method: "POST",
                body: JSON.stringify({
                    image: f_Pic,
                    fruit_name: fruitName,
                    weight: weight,
                    price: price,
                }),
                headers:  {
                    "media-type": "application/json",
                },
            }
        ) .then((res) => res.json())
        .then((data) => {
            window.location.reload();
        }); 
    } else {
            console.log("Add not implemented")
    }
}

function progress(e) {
    console.log(e.target.id);
    let produceID = e.target.id;
    console.log(produceID);

    let f_Pic = document.querySelector(`.sort-pic`).src;
    let fruitName = document.getElementById(`fruit_name${fruit_num}`).value;
    let weight = document.getElementById(`weight${fruit_num}`).value;
    let price = document.getElementById(`price${fruit_num}`).value;
    if (verify("great!")) {
        fetch(
            `code.json`,
            {
                method: "PUT",
                body: JSON.stringify ({
                    image: f_Pic,
                    fruit_name: fruitName,
                    weight: weight,
                    price: price,
                }),
                headers: {
                    "media-type": "application/json; charset=UTF-8",
                },
            }
        )
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        });
    }
}