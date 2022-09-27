let store = document.getElementById("productContainer")
let basket =  JSON.parse(localStorage.getItem('data')) || []

localStorage.setItem("products", JSON.stringify(
  [

    {
      id: 1,
      description: "Wine Sneakers with a solid white sole",
      price: 15,
      image: "/Images/sneakers/sneaker3.jpg",
    },
    {
      id: 2,
      description: "white nike with orange design",
      price: 25,
      image: "/Images/sneakers/sneaakes5.jpg",
    },
    {
      id: 3,
      description: "red nike sneaker",
      price: 10,
      image: "/Images/sneakers/sneakers4.jpg",
    },
    {
      id: 4,
      description: "Wine Sneakers with a solid white sole",
      price: 15,
      image: "/Images/sneakers/sneaker3.jpg",
    },
  
  ]
));
const products = JSON.parse(localStorage.getItem("products"));
console.log(products)


// ${search.item === undefined ? 0 : search.item}
const getproducts = () => {
  return (store.innerHTML = products.map((item) => {
    let { image, description, price, id } = item;
    let search = basket.find((x) => x.id === id) || []
    return( `
      <div id=product-id-${id} class="card mb-4 box-shadow">
        <div class="card-header">
            <img src="${image}" alt="" class="img img-responsive img-thumbnail img-height sneakers1" width="220">
        </div>
        <div class="card-body">
            <h1 class="card-title pricing-card-title pricing">$ ${price}</h1>
            <input type="button" onclick="decrement(${id})" value="-" class="checkout-btn-minus"> 
            <span id=${id} class="productCounter">${search.item == undefined ? 0: search.item}</span>
            <input type="button" value="+" class="checkout-btn-plus" onclick="increment(${id})">
            <h6 class="description">${description}</h6>
          <button type="button" class="btn btn-lg btn-block btn-outline-primary add-cart" onclick="addToCart(${id})">Add to Cart</button>
    </div>
    </div>`);
  })
    .join(""));
    
};

getproducts();

const addToCart = (id) => {
  let selectedItem = id
  let search = basket.find((x) => x.id === selectedItem);
  if (search === undefined) {
    basket.push({
      id: selectedItem,
      item: 1
    });
    }
    updateCount(selectedItem)
    calculateCartItem()
    pushToLocalStorage()

}

function pushToLocalStorage() {
  localStorage.setItem("data", JSON.stringify(basket))
}


const increment=(id)=>{
  let selectedItem = id
  console.log(selectedItem);
  
  let search = basket.find((x) => x.id === selectedItem)
  
  if (search === undefined) {
    basket.push({
      id: selectedItem,
      item: 1
    });

  }else{
    search.item++;
  }
  console.log(basket);
  
  localStorage.setItem('data', JSON.stringify(basket))
  updateCount(selectedItem)
}

const decrement=(id)=>{
  let selectedItem = id

  let search = basket.find((x) => x.id === selectedItem)
  if (search === undefined) return;
  else if (search.item === 0) {
    delete search;
   return;
  }
  
  else {
    search.item -= 1;
  }
  console.log(basket);
  updateCount(selectedItem)
  basket = basket.filter((x) => x.item !== 0);
  localStorage.setItem('data', JSON.stringify(basket))


}

function updateCount(id) {
  let selectedItem = id
  let countid = document.getElementById(id);
  // console.log(countid);
  let search = basket.find((x) => x.id === selectedItem)
  countid.innerHTML = search.item
  calculateCartItem()
}

let calculateCartItem = ()=>{
  let cartIcon = document.querySelector('#toast');
 cartIcon.innerHTML = basket.map((x) => x.item).reduce((x,y) => x+y, 0)
  
}
calculateCartItem()

