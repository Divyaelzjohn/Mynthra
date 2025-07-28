import { products } from "./products.js";

let productsHTML=' ';
products.forEach((products)=>{
  productsHTML+=`
    <li>
      <label class="customCheckbox">
        <input type="checkbox">
        <div class="checkbox-indicator"></div>
        ${name}
        <span class="number">${number}</span>
      </label>
    </li>         
  `
})
console.log(productsHTML)
document.querySelector('.right-box').innerHTML=productsHTML

