import { setLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";

const dataSource = new ProductData("tents");
const addtoCartbut = document.querySelector("#addToCart");

function addProductToCart(product) {
  console.log(JSON.stringify(product))
  setLocalStorage("so-cart", product);
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button

  addtoCartbut.addEventListener("click", (event)=>{
   addToCartHandler(event)
  });
