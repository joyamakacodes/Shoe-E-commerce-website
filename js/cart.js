let listContainer = document.getElementById("listContainer");
let emptyCart = document.querySelector('emptyCart');
let label = document.querySelector('label');
let ProductlocalStorage = JSON.parse(localStorage.getItem('data'))
console.log(ProductlocalStorage)
let itemProducts = JSON.parse(localStorage.getItem("products"));
console.log(itemProducts);


let calculateCartItem = ()=>{
    let cartIcon = document.querySelector('#toast');
   cartIcon.innerHTML = ProductlocalStorage.map((x) => x.item).reduce((x,y) => x+y, 0)
    console.log(cartIcon)
  }
  calculateCartItem()

const getCartProducts = () => {
    if(itemProducts.length !==0){
        return (listContainer.innerHTML = ProductlocalStorage.map((x)=>{ const {id, item} = x;

        let search = itemProducts.find((x)=> x.id === id) || []
        const {description, image, price} = search
        console.log(search)
         return`<li class="list-group-item d-flex justify-content-between lh-condensed">
        <div>
          <img src="${image}" width="50px" height="50px">
          <div>
        <small class="text-muted">${description}</small>
           </div>
          <br>
          <input type="button" onclick="decrement(${id})" value="-" class="checkout-btn-minus"> <span id=${id} class="productCounter">${item} </span><input type="button" value="+" class="checkout-btn-plus" onclick="increment(${id})">
       </div>
         <div >
        <span class="text-muted" style="text-align:end;">$${price}</span>
     </div>
         <div>
        <button class="btn btn-danger" id="remove-btn" onclick="removeBtn((${id}))">Remove</button>
        </div>
         <li class="list-group-item d-flex justify-content-between">
      <strong>$${item * search.price}</strong>
     </li>
     </li>`
    })).join('')}
 else{
listContainer.innerHTML = ``;
emptyCart.innerHTML = `
<h2>Cart is Empty</h2>
<a href="/index.html">
<button class="checkout-btn-minus" >Back to Home</button></a>`
}


}
getCartProducts()

let increment =(id)=>{
    let selectedItem = id
    let search = ProductlocalStorage.find((x)=> x.id === selectedItem)
    console.log(search);
    if(search === undefined){
    ProductlocalStorage.push({
      id: selectedItem,
      item: 1
    })
    } else
    search.item += 1;
    getCartProducts()
   update(selectedItem)
  
  localStorage.setItem('data', JSON.stringify(ProductlocalStorage));
}
  
  let decrement =(id)=>{
    let selectedItem = id
    let search = ProductlocalStorage.find((x)=> x.id === selectedItem)
    if(search === undefined) return;
    else if(search.item === 0) return;
    else{
    search.item -= 1;
  }
  
  update(selectedItem)
  ProductlocalStorage = ProductlocalStorage.filter((x)=> x.item !== 0);
  getCartProducts()
 localStorage.setItem('data', JSON.stringify(ProductlocalStorage));
}


let update =(id)=>{
    let search = ProductlocalStorage.find((x)=> x.id === id);
    document.getElementById(id).innerHTML = search.item;
    
    
    getCartProducts()
    localStorage.setItem('data', JSON.stringify(ProductlocalStorage))
    calculateCartItem()
    TotalAmount()
  }
  

  let removeBtn = (id)=>{
    let selectedItem = id
    ProductlocalStorage = ProductlocalStorage.filter((x)=>x.id !== selectedItem)
    getCartProducts()
    localStorage.setItem('data', JSON.stringify(ProductlocalStorage))
    console.log(ProductlocalStorage)
  }
  

  let TotalAmount = ()=>{
    if (ProductlocalStorage.length !== 0){
        let amount = ProductlocalStorage.map((x) =>{
            let {item, id } = x;
            let search = itemProducts.find((y) => y.id === id) || []
            return item *search.price
        }).reduce((x,y)=> x + y, 0);   
        label.innerHTML = `<h2>Total Bill: $${amount}</h2>
        <a href="checkout.html"> <button type="submit" class="btn btn-secondary checkout-btn-minus">Checkout</button></a>
               <div class="clearbtn">
                <button type="submit" class="btn btn-secondary mx-2 checkout-btn-minus">Clear Cart</button>`
    } else return; 
  }

  TotalAmount();