import {products} from '/products.js';

let productsHTML = '';

products.forEach((products,index) => {
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
  if(index===7){
    productsHTML+=`
    </ul>
      <div class="banner-1">
        <img src="images/banner.png">
      </div> 
    <ul class="main">
    `
  }
  if (index === 15) {
    productsHTML += `
      </ul>
      <div class="filter-1">
        <div class="title">
          <div class="filter-by">Filter by</div>
          <div class="gender">Gender</div>
        </div>
        <div class="values">
          <div>
            <div class="bg">Boys</div>
            <div class="bg">Girls</div>
          </div>
          <div>
            <div class="women">Women</div>
            <div class="other">Other Filters</div>
            <span class="arrow"><img src="images/svgexport-19.svg"></span>
          </div>
        </div>
      </div>
      <ul class="main">
    `;
  }
  if (index === 23){
    productsHTML += `
      </ul>
        <div class="filter-1">
          <div class="title">
            <div class="filter-by">Filter by</div>
            <div class="gender">Brand</div>
          </div>
          <div class="values">
            <div>
              <div class="bg">109f</div>
              <div class="bg">13-star</div>
              <div class="bg">15 buttons</div>
              <div class="bg">1st step</div>
              <div class="bg">20dresses</div>
              <div class="bg">250 designs</div>
              <div class="bg">27 drapes</div>
              <div class="bg">28 moons</div>
              <div class="bg">30 looks</div>
              <div class="bg">3pin</div>
              <div class="bg">14wrd by dressberry</div>
            </div>
            <div>
              <div class="women">4you dresses</div>
              <div class="women">5.10.15</div>
              <div class="women">612 ivy league</div>
              <div class="women">612 league</div>
              <div class="women">612 league</div>
              <div class="women">69 fashion street</div>
              <div class="women">6th avenue streetwear</div>
              <div class="women">7ounce</div>
              <div class="women">8seconds</div>
              <div class="other">More Options</div>
              <span class="arrow"><img src="images/svgexport-19.svg"></span>
            </div>
          </div>
        </div>
      <ul class="main">
    `;
  }
  if (index === 31){
    productsHTML += `
      </ul>
        <div class="filter-1">
          <div class="title">
            <div class="filter-by">Filter by</div>
            <div class="gender">Color</div>
          </div>
          <div class="values">
            <div>
              <div class="bg">Assorted</div>
              <div class="bg">Beige</div>
              <div class="bg">Black</div>
              <div class="bg">Blue</div>
              <div class="bg">Brown</div>
              <div class="bg">Burgundy</div>
              <div class="bg">Camel brown</div>
              <div class="bg">Champagne</div>
              <div class="bg">Charcoal</div>
            </div>
            <div>
              <div class="women">Coffee brown</div>
              <div class="women">Copper</div>
              <div class="women">Coral</div>
              <div class="women">Cream</div>
              <div class="women">Fluorescent green</div>
              <div class="women">Gold</div>
              <div class="women">Green</div>
              <div class="women">Gray</div>
              <div class="women">Grey melange</div>
              <div class="other">Khaki</div>
              <div class="other">More Options</div>
              <span class="arrow"><img src="images/svgexport-19.svg"></span>
            </div>
          </div>
        </div>
      <ul class="main">
    `;
  }
});

console.log(productsHTML)
document.querySelector('.main').innerHTML=productsHTML;



function click(){
  console.log("he")
}