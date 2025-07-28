import {products} from '/products.js';

let productsHTML = '';

products.forEach((products) => {
  productsHTML+= `
    <li class="list">
      <div class="list-img">
        <img src="${products.image}">
        <div class="rating">
          <span class="rating-text">${products.rating.text}</span>
          <img src="${products.rating.star}" class="rating-star">
          <span style="color: rgb(148, 150, 159);">|</span>
          <span class="rating-count">${products.rating.count}</span>
        </div>
        <div class="info">
          <h3>${products.info.heading}</h3>
          <h4>${products.info.heading1}</h4>
          <div class="price-container">
            <span class="buy-price">
              <img src="images/svgexport-15.svg">
              <span class="price">${products.price}</span>
            </span>
            <span class="orig">
              <img src="${products.origin}">
              <span class="orig-price">${products.orginalprice}
              </span>
            </span>
            <span class="disc-price">${products.discount}</span>
          </div>
          <div class="space"></div>
        </div>
        <div class="like">
          <img src="images/svgexport-17.svg" alt="">
        </div>
      </div>
    </li>
  `;
});
// console.log(productsHTML)
document.querySelector('.main').innerHTML=productsHTML;


let listHTML = '';

products.forEach((products) => {
  listHTML+= `
    <li class="list1">
      <div class="list-img">
        <img src="${products.image}">
        <div class="rating">
          <span class="rating-text">${products.rating.text}</span>
          <img src="${products.rating.star}" class="rating-star">
          <span style="color: rgb(148, 150, 159);">|</span>
          <span class="rating-count">${products.rating.count}</span>
        </div>
        <div class="info">
          <h3>${products.info.heading}</h3>
          <h4>${products.info.heading1}</h4>
          <div class="price-container">
            <span class="buy-price">
              <img src="images/svgexport-15.svg">
              <span class="price">${products.price}</span>
            </span>
            <span class="orig">
              <img src="${products.origin}">
              <span class="orig-price">${products.orginalprice}
              </span>
            </span>
            <span class="disc-price">${products.discount}</span>
          </div>
          <div class="space"></div>
        </div>
        <div class="like">
          <img src="images/svgexport-17.svg" alt="">
        </div>
      </div>
    </li>
  `;
});
// console.log(productsHTML)
document.querySelector('.main').innerHTML=listHTML;
