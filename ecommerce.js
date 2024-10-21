let iconcart = document.querySelector('.icon-cart');
let closecart = document.querySelector('.close');
let body = document.querySelector('body');
let listproducthtml = document.querySelector('.listproduct');

let listproducts = [];
iconcart.addEventListener('click', () => {
    body.classList.toggle('showcart')
})

closecart.addEventListener('click', () => {
    body.classList.toggle('showcart')
})

const addDataToHTML = () =>{
    listproducthtml.innerHTML = '';
    if(listproducts.length > 0){
        listproducts.forEach(product =>{
            let newproduct = document.createElement('div');
            newproduct.classList.add('item');
            newproduct.innerHTML = `
                <img src="Screenshot_2024_1020_222824.jpg" alt="">
                <h2>NAME PRODUCT</h2>
                <div class="price">$200</div>
                <button class="addcart">Add to cart</button>
            `;
            listproducthtml.appendChild(newproduct);
        })
    }
}

const initapp = () => {
    fetch('products.json')
    .then(response => response.json())
    .then(data => {
        listproducts = data;
        addDataToHTML();
    })
}
initapp();