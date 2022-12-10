let tbody = document.getElementById('cartDepart');

let cart = JSON.parse(localStorage.depart);

cart.forEach((item) => {
    try {
        tbody.innerHTML += `
        <tr>
        <th scope = "row"><img src="${item.image}" style = "width: 40px;"</th>
        <td>${item.fruit}</td>
        <td>${item.weight}</td>
        <td>${item.price}</td>
        <td><button id="rembtn" class="btnc my-4">DELETE</button></td>
        </tr>
        `
    } catch(error) {
        console.log(error);
    }
});

// let cartLeave = [];

// localStorage.setItem('cartDepart'.JSON.stringify(cartLeave));

// let fruitStore = JSON.parse(localStorage.getItem('organic'));

// fruitStore.forEach((item) => {
//     console.log(fruitStore(item).type);
//     fruitStore.innerHTML += `
//     <div class="col-md-4">
//                         <div class="card" style="width: 18rem;">
//                             <img src=${item.image} class="card-img-top" alt="...">
//                                 <div class="card-body">
//                                     <p class="nameF">${item.fruit}</p>
//                                     <p class="weightF">${item.weight}</p>
//                                     <p class="priceF">${item.price}</p>
//                                     <button class="addToCart" href="#">BUY</button>
//                                 </div>
//                         </div>
//                     </div>
//     `
// })




