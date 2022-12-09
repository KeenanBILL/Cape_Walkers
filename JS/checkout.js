let cart = JSON.parse(localStorage.getItem('cartDepart'));

console.log(cart)

let tbody = document.querySelector('tbody')

Object.keys(cart).forEach((item) => {

    if(cart[item]) {
    tbody.innerHTML +=
    `
    <tr>
    <th>${parseInt((item)) + 1}</th>
    <td><img src='${item.image}'></td>
    <td>${item.fruit}</td>
    <td>${item.weight}</td>
    <td>${item.price}</td>
    </tr>
    `
    }
})

let POS = [];
localStorage.setItem('cartDepart', JSON.stringify(POS))

let fruitVariety = JSON.parse(localStorage.getItem('fruits'));
Object.keys(fruitVariety).forEach((fruitsOne) => {

    let variety = fruitVariety[fruitsOne];
    let myCar = document.querySelector("#cartDepart");
    console.log(allCars[carKey].type);
    myCar.innerHTML +=
                `
                    <div class="col-md-4">
                        <div class="card" style="width: 18rem;">
                            <img src=${w.image} class="card-img-top" alt="...">
                                <div class="card-body">
                                    <p class="carName">${w.name}</p>
                                    <p class="carPrice">${w.price}</p>
                                    <button class="addToCart" href="#">Purchase</button>
                                </div>
                        </div>
                    </div>
                `
})
let addBtn = document.querySelectorAll('.addToCart');
Object.keys(addBtn).forEach((item) => {
        addBtn[item].addEventListener('click', (e) => {
            console.log('clicked', addBtn[item])
            console.log(allCars[item])
            checkout.push(allCars[item]);
            console.log(checkout)
            localStorage.setItem('myCheckout', JSON.stringify(checkout));
        })
    }
);