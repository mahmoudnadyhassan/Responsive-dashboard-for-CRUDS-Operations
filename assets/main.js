




let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let category = document.getElementById('category');
let submit = document.getElementById('submit');



//get total

function getTotal() {
    if (price.value != "") {
        let result = (+price.value + +taxes.value + +ads.value)
            - +discount.value
        total.innerHTML = result;
        total.style.backgroundColor = 'green';
    }
    else {
        total.innerHTML = '';
        total.style.backgroundColor = 'red';

    }
}


//create product


let dataPro;

if (localStorage.product != null) {
    dataPro = JSON.parse(localStorage.product)
} else {
    dataPro = [];
}



submit.onclick = function () {
    let newPro = {
        title: title.value,
        price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        discount: discount.value,
        total: total.innerHTML,
        count: count.value,
        category: category.value,
    }



//count


if(newPro.count>1){
    for(let i =0 ; i<newPro.count;i++){

        dataPro.push(newPro)
    }
}else{
    
    dataPro.push(newPro)
}

    //save local storage



    localStorage.setItem('product', JSON.stringify(dataPro))

    cleardata()


}


//clear inputs


function cleardata() {

    title.value = '';
    price.value = '';
    taxes.value = '';
    ads.value = '';
    discount.value = '';
    total.innerHTML = '';
    count.value = '';
    category.value = '';

}



//read

function showData() {
    let table = '';

    for (let i = 0; i < dataPro.length; i++) {
        table += `
        <tr>
          <td>${i}</td>
          <td>${dataPro[i].title}</td>
          <td>${dataPro[i].price}</td>
          <td>${dataPro[i].taxes}</td>
          <td>${dataPro[i].ads}</td>
          <td>${dataPro[i].discount}</td>
          <td>${dataPro[i].total}</td>
          <td>${dataPro[i].category}</td>
          <td><button id="update">update</button></td>
          <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
        </tr>
      `;
    }

    // Set the table HTML after the loop
    document.getElementById('tbody').innerHTML = table;

    let btnDelete = document.getElementById('deleteAll');
    if (dataPro.length > 0) {
      btnDelete.innerHTML = `<button>delete All</button>`;
    }
}

showData();


//count





//delete

function deleteData(i) {
    dataPro.splice(i, 1);
    localStorage.product = JSON.stringify(dataPro);
    showData()
}
