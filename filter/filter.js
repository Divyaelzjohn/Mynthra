const filterOptions={
  Gender:[
    {name:"Boys",count:1052},
    {name:"Girls",count:64631},
    {name:"Women"}
  ],Categories:[
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
  price:[
    {name:"above 320",conut:43}
  ]
  // Brand:[
  //   {name:"Amaisa",count:1},
  //   {name:"MANGO",count:7},
  //   {name:"And",count23}
  // ],
  // Color:[
  //   {name:"Assorted",count:42},
  //   {name:"Begige",count:27378},
  //   {name:"Black",count:40878},
  //   {name:"Blue",count:374},
  //   {name:"Brown",count:43},
  //   {name:"charchoal",count:340},
  //   {name:"coffee brown", count:3},
  //   {name:"Green",count:23},
  //   {name:"Maroon",count:72}
  // ],
  // DiscountRange:[
  //   {name:"10% and higher",count:237003},
  //   {name:"20% and higher",count:229638},
  //   {name:"30% and higher",count:229638},
  //   {name:"40% and higher",count:229638},
  //   {name:"50% and higher",count:229638},
  //   {name:"60% and higher",count:229638},
  //   {name:"70% and higher",count:229638},
  //   {name:"80% and higher",count:229638},
  //   {name:"90% and higher",count:229638}
  // ],
  // Bundles:[
  //   {name:"Bundles",count:24},
  //   {name:"Single styles",count:271244}
  // ],
  // CountryOfOrigin:[
  //   {name:"All countries",count:273654},
  //   {name:"Bangladesh",count:16},
  //   {name:"China",count:23},
  //   {name:"India",count:213234},
  //   {name:"Italy",count:4},
  //   {name:"Thailand",count:2},
  // ]

}
const filterItems=document.querySelectorAll(".filter-pane li");
const rightBox=document.querySelector(".right-box ul");

rightBox.innerHTML=" ";
filterItems.forEach((item)=>{
  item.addEventListener("click",()=>{
    const selectedFilter=item.textContent.trim();
    const options=filterOptions[selectedFilter]

    filterItems.forEach((el)=>el.classList.remove("active-filter"))

    item.classList.add("active-filter");

    rightBox.innerHTML=" "

    if(options){
      rightBox.innerHTML=options.map(
        (opt)=>
          `<li>
            <label class="customCheckbox">
              <input type="checkbox">
                <div class="checkbox-indicator"></div>
                ${opt.name}
                <span class="number">${opt.count}</span>
            </label>
          </li>`
        )
        .join("")
        }else{
          rightBox.innerHTML=`<p>No options available.</p>`;
        }
    })
  })