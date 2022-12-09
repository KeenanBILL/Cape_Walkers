let tbody = document.getElementById('fruitMenu');

// let produce = JSON.parse(localStorage.getItem('produceFruit'));
let produce = JSON.parse(localStorage.produceFruit);

produce.forEach((item) => {
    try {
        tbody.innerHTML += `
        <tr>
        <th scope = "row"><img src="${item.image}" style = "width: 40px;"</th>
        <td>${item.fruit}</td>
        <td>${item.weight}</td>
        <td>${item.price}</td>
        <td> <button id="addbtn" class="btnc my-4">EDIT</button><button id="rembtn" class="btnc my-4">DELETE</button></td>
        </tr>
        `    
    } catch(error) {
        console.log(error);
    }
})
