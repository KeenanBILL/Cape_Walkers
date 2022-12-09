let tbody = document.getElementById('fruitMenu');

let produce = JSON.parse(localStorage.produce);

produce.forEach(produce => {
    try {
        tbody.innerHTML += `
        <tr>
        <th scope = "row"><img src="${produce.image}" style = "width: 40px;"</th>
        <td>${produce.fruit}</td>
        <td>${produce.weight}</td>
        <td>${produce.price}</td>
        <td> <button id="addbtn" class="btnc my-4">ADD</button><button id="rembtn" class="btnc my-4">DELETE</button></td>
        </tr>
        `
    } catch(error) {
        console.log(error);
    }
});