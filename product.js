function get(id) {
  return document.querySelector(id);
}
function create(id) {
  return document.createElement(id);
}

import { covidEssentials } from "../components/data.js";
import { sidebar } from "../components/data.js";
import { navbar, shopcart } from "../components/navbar.js";
import { footer } from "../components/navbar.js";

get("#navbar").innerHTML = navbar();

get("#sidebar").innerHTML = sidebar();

get("#footer").innerHTML = footer();

let dataFuncArr = [covidEssentials];
let loadData = localStorage.getItem("loadData") || "";
let data;
let backUp;
if (loadData == "CE") {
  data = covidEssentials();
  backUp = 0;
  localStorage.setItem("loadData1", "CE");
} else {
  let ran = Math.floor(Math.random() * 1);
  console.log(ran);
  data = dataFuncArr[ran]();
  backUp = ran;
  let key;
  if (ran == 0) {
    key = "CE";
  } else {
    key = "NUll";
  }

  localStorage.setItem("loadData1", key);
}

// let data = MakeUp()
// console.log(data)
let buttonCreateDivCount = 0;
let i = 0;
let mastRan;
function displayUI({ bannerImg, mastCata, name }) {
  let body = get("appendProd");

  console.log(mastCata);
  sortByCatagory(mastCata);
  displayBannerImage(bannerImg, name);
  if (!mastRan) mastRan = Math.floor(Math.random() * mastCata.length);
  appendPrducts(mastCata[mastRan].catagories.data);
}
displayUI(data);

function appendPrducts(data) {
  let body = get("#appendProd");

  body.innerHTML = null;

  let h5 = create("h5");
  h5.innerText = "ALL PRODUCTS";

  let Mdiv = create("div");
  // console.log(data)

  data.forEach(({ image, name, price, strike }) => {
    let div = create("div");

    let img = create("img");
    img.src = image;

    let title = create("h5");
    title.innerText = name;


    let priceH = create("h4");
    priceH.innerHTML = `Best Price* <span>Rs ${price}</span>`;

    let strikeP = create("p");
    strikeP.setAttribute("id", "cutprice");
    if (strike) {
      strikeP.innerHTML = `MRP <span>Rs ${strike}</span>`;
    } else {
      strikeP.innerHTML = " . ";
    }

    let Buttondiv = create("div");
    let idDiv = `cartdiv${buttonCreateDivCount}`;
    Buttondiv.setAttribute("id", idDiv);
    let button = buttonCreate(
      Buttondiv,
      { image, name, price, strike },
      idDiv
    );

    div.append(img, title, priceH, strikeP, Buttondiv);
    Mdiv.append(div);
  });
  body.append(h5, Mdiv);
}

function buttonCreate(div, obj, idDiv) {
  // console.log(div)
  div.innerHTML = null;

  let button = create("button");
  button.innerHTML = "<button>ADD TO CART</button>";

  button.addEventListener("click", function () {
    prdctClick(div, obj, idDiv);
  });
  button.setAttribute("id", "prdctadded");

  div.append(button);

  buttonCreateDivCount++;
}

function prdctClick(div, obj, idDiv) {
  div.innerHTML = null;
  // console.log(obj)
  obj.count = 1;
  console.log(obj);
  setLocalStorage(obj, "cartData");

  let minus = create("button");
  minus.innerText = "-";
  minus.id = "minusButton";

  let count = create("p");
  count.innerText = 1;
  count.id = "productCount";

  let plus = create("button");
  plus.innerText = "+";
  plus.id = "plusButton";

  minus.onclick = function () {
    obj["count"]--;
    if (obj.count <= 0) {
      removeFromLocalStorage(obj);
    } else {
      setLocalStorage(obj, "cartData");
    }
    addToProductsIncDec(count, false, idDiv, obj);
  };
  plus.onclick = function () {
    obj["count"]++;
    console.log(obj);
    setLocalStorage(obj, "cartData");
    addToProductsIncDec(count, true, idDiv, obj);
  };

  div.append(minus, count, plus);
}

function removeFromLocalStorage(obj) {
  let data = getLocaStorage("cartData");
  delete data[obj.name];
  localStorage.setItem("cartData", JSON.stringify(data));
}

function getLocaStorage(key) {
  let data = JSON.parse(localStorage.getItem(key)) || {};
  return data;
}

function setLocalStorage(obj, key) {
  let data = getLocaStorage(key);
  data[obj.name] = obj;
  localStorage.setItem("cartData", JSON.stringify(data));
}

function addToProductsIncDec(count, inc, idDiv, obj) {
  if (inc) {
    let c = count.innerText;
    c++;
    count.innerText = c;
  } else {
    let c = count.innerText;
    c--;
    count.innerText = c;
    if (c == 0) {
      buttonCreate(get(`#${idDiv}`), obj, idDiv);
    }
  }
}

function displayBannerImage(data, name) {
  let body = get("#bannerImg");
  // console.log(data,name)
  body.innerHTML = null;
  let innerDat;
  if (data) {
    innerDat = create("img");
    innerDat.src = data;
  } else {
    innerDat = create("h2");
    innerDat.innerText = name;
    body.style.backgroundColor = "#dff8ff";
  }
  body.append(innerDat);
}

function sortByCatagory(data) {
  let body = get("#sortByCatagory");
  body.innerHTML = null;
}





shopcart();
