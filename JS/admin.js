let tbody = document.getElementById('fruitMenu');

let produce = JSON.parse(localStorage.produceFruit);

produce.forEach((item) => {
    try {
        tbody.innerHTML += `
        <tr>
        <th scope = "row"><img src="${item.image}" style = "width: 40px;"</th>
        <td>${item.fruit}</td>
        <td>${item.weight}</td>
        <td>${item.price}</td>
        <td> <button id="addbtn" class="btnc my-4">EDIT</button><button id="rembtn" class="btnc my-4" onclick="remove(${item.product})">DELETE</button></td>
        </tr>
        `    
    } catch(error) {
        console.log(error);
    }
})

function remove(product) {
    localStorage.setItem('produceFruit',JSON.stringify(products));

    products.splice(products.findIndex(item => item.product==product));

    console.log(products)
    console.log(product)
    localStorage.setItem('produceFruit',JSON.stringify(product))
    console.log(JSON.parse(localStorage.product));
    location.reload()
}
