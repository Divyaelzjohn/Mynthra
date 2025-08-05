const filterOptions={
  Gender:[
    {name:"Boys",count:1052},
    {name:"Girls",count:64631},
    {name:"Women",count:206441}
  ],
  Categories:[
    {name:"T-Shirts",count:5000},
    {name:"Jeans", count:3000},
    {name:"Dresses",count:2000}
  ],
  Size:[
    {name:"3xs",count:166},
    {name:"Xxs",count:4855},
    {name:"Xs",count:66867},
    {name:"Xs/s",count:111},
    {name:"S",count:150472},
    {name:"S/m",count:302},
    {name:"M",count:150966},
    {name:"M/l",count:350},
    {name:"L",count:145291},
    {name:"L/xl",count:281},
    {name:"Xl",count:128837},
    {name:"Xl/xxl",count:71},
    {name:"Xxl",count:76411},
    {name:"4xl",count:12595},
    {name:"6xl",count:6194},
    {name:"8xl",count:1921},
    {name:"9xl",count:730},
  ],
  Price:[
    {name:"above 320",count:43}
  ],
  Brand:[
    {name:"13-star",count:61},
    {name:"15 buttons",count:20},
    {name:"1st step",count:8},
    {name:"Amaisa",count:1},
    {name:"MANGO",count:7},
    {name:"And",count:23},
    {name:"20dresses",count:61},
    {name:"250 Designs",count:20},
    {name:"28 moons",count:8},
    {name:"30 looks",count:1},
    {name:"3pin",count:7},
    {name:"5.0..5679",count:23},
  ],
  Color:[
    {name:"Assorted",count:42, color:"#5EB160"},
    {name:"Begige",count:27378, color:"#E8E6CF"},
    {name:"Black",count:40878, color:"#36454F"},
    {name:"Blue",count:374, color:"#0074D9"},
    {name:"Brown",count:43,color:"#8B4513"},
    {name:"charchoal",count:340,color:"#36454F"},
    {name:"coffee brown", count:3,color:"#4B302F"},
    {name:"Green",count:23,color:"#5EB160"},
    {name:"Maroon",count:72,color:"#B03060"}
  ],
  "Discount Range":[
    {name:"10% and higher",count:237003},
    {name:"20% and higher",count:229638},
    {name:"30% and higher",count:229638},
    {name:"40% and higher",count:229638},
    {name:"50% and higher",count:229638},
    {name:"60% and higher",count:229638},
    {name:"70% and higher",count:229638},
    {name:"80% and higher",count:229638},
    {name:"90% and higher",count:229638}
  ],
  Bundles:[
    {name:"Bundles",count:24},
    {name:"Single styles",count:271244}
  ],
 "Country of Origin":[
    {name:"All countries",count:273654},
    {name:"Bangladesh",count:16},
    {name:"China",count:23},
    {name:"India",count:213234},
    {name:"Italy",count:4},
    {name:"Thailand",count:2},
  ]

}
const filterItems=document.querySelectorAll(".filter-pane li");
const rightBox=document.querySelector(".right-box ");


const filterWithSearch=["Size","Brand","Color","Country Of Origin"];

function renderFilterOptions(selectedFilter, options) {
  const showSearch = filterWithSearch.includes(selectedFilter);

  if(selectedFilter==="Price"){
    return renderPriceFilter();
  }

  return `
    ${showSearch ? `
      <div class="search-box">
        <div class="search-box2">
            <img src="../images/svgexport-13 (2).svg">
            <input type="text" placeholder="Search by ${selectedFilter}" class="filter-search" />
        </div>
      </div>
    ` : ""}
    <ul class="filter-list">
      ${options.map(opt => {
        const colorBox = selectedFilter === "Color" && opt.color
          ? `<span class="color-box" style="background-color: ${opt.color};"></span>`
          : "";

        return `
              <li>
                <label class="customCheckbox">
                  <input type="checkbox">
                  <div class="checkbox-indicator"></div>
                  ${colorBox}<span class="label-text">${opt.name}</span>
                  <span class="number">${opt.count}</span>
                </label>
              </li>
            `;
      }).join("")}
    </ul>
  `;
}

function setupCheckboxHandlers() {
  const checkboxes = document.querySelectorAll(".filter-list input[type='checkbox']");
  
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", () => {
      const selected = Array.from(checkboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.closest("label").textContent.trim());

      console.log("Selected filters:", selected);
    });
  });
}

function setupSearchHandler() {
  const searchInput = document.querySelector(".filter-search");
  const filterList = document.querySelectorAll(".filter-list li");

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.toLowerCase();
      filterList.forEach(li => {
        const label = li.textContent.toLowerCase();
        li.style.display = label.includes(query) ? "" : "none";
      });
    });
  }
}

function renderPriceFilter(){
  return`
      <div class="price-outer">
        <div class="price-info">
          <div class="price-range">Selected price range</div>
          <div class="price-amount"><span id="min-price">₹0</span> - <span id="max-price">₹48,000</span></div>
        <div class="product-count">269005 products found</div>
      </div>
        <div class="slider-bar">
          <div class="slider-fill">
            <div class="histogram" style="height: 60px;"></div>
            <div class="histogram" style="height: 33.6px;"></div>
            <div class="histogram" style="height: 26.4px;"></div>
        </div>
        </div>
        <div class="slider-container">
          <input type="range" id="maxRange" min="0" max="48000" step="100" value="48000">
        </div>
      </div>
  `
}


  filterItems.forEach((item)=>{
    item.addEventListener("click",()=>{
      const selectedFilter=item.textContent.trim();
      const options=filterOptions[selectedFilter]

      filterItems.forEach((el)=>el.classList.remove("active-filter"))
      item.classList.add("active-filter");

      // rightBox.innerHTML=" "
      if(selectedFilter==="More Filters"){
        rightBox.innerHTML=`
          <div class="refine-search">
            <h4>Refine your search</h4>
            <p>Select any one category to view more filter(s).</p>
            <button class="categoryButton">SELECT CATEGORY</button>
          </div>
        `;
        return;
      }
      if(options){
        rightBox.innerHTML=renderFilterOptions(selectedFilter,options);
        setupCheckboxHandlers();
        setupSearchHandler();
      }else{
        rightBox.innerHTML=`<p>No options available.</p>`
      }
    });
  });
  
  const defaultFilter="Gender";
  const defaultOptions=filterOptions[defaultFilter];
  filterItems.forEach((el)=>{
    el.classList.remove("active-filter");
    if(el.textContent.trim()===defaultFilter){
      el.classList.add("active-filter");
    }
  });
  if(defaultOptions){
   rightBox.innerHTML=renderFilterOptions(defaultFilter,defaultOptions);
  }else{
    rightBox.innerHTML=`<p>No options available.</p>`
  }

  const maxRange = document.getElementById('maxRange');
const maxPrice = document.getElementById('max-price');

function updateSlider() {
  const val = parseInt(maxRange.value);
  maxPrice.textContent = `₹${val.toLocaleString()}`;
  maxRange.style.setProperty('--value', `${(val / maxRange.max) * 100}%`);
}

maxRange.addEventListener('input', updateSlider);
updateSlider();


