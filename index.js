import { navbar, shopcart } from "./components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();


import { footer } from "./components/navbar.js";
document.getElementById("footer").innerHTML = footer();


document.addEventListener("click", e => {
    const isDropdownButton = e.target.matches("[db]")
    if (!isDropdownButton && e.target.closest("[down2]") != null) return

    let cd
    if (isDropdownButton) {
        cd = e.target.closest("[down2]")
        cd.classList.toggle("active")
    }
    document.querySelectorAll("[down2].active").forEach(dropdown => {
        if (dropdown === cd) return
        dropdown.classList.remove("active")
    })
})


$('.carousel').carousel({
    interval: 3000
})
// paymentofrs
let bt = document.getElementById('productsbtns1')
var productsbtnsRight = document.getElementById('pdcbtn');
var productsbtnsLeft = document.getElementById('pbtn');

productsbtnsRight.onclick = function () {
    document.getElementById('paymentdiv').scrollLeft += 500;
};
productsbtnsLeft.onclick = function () {
    document.getElementById('paymentdiv').scrollLeft -= 500;

};

// Category focus
let CategoryRight = document.querySelector('#rightbtn1');
let CategoryLeft = document.querySelector('#leftbtn1');

CategoryRight.onclick = function () {
    document.querySelector('#CatFocusC').scrollLeft += 250;
};
CategoryLeft.onclick = function () {
    document.querySelector('#CatFocusC').scrollLeft -= 250;

};

// top brands
let TopbrndleftBtn = document.getElementById("TopbrndleftBtn");
let TopbrndrghtBtn = document.getElementById("TopbrndrghtBtn");
TopbrndrghtBtn.onclick = function () {
    document.querySelector('#topbrands').scrollLeft += 250;
};
TopbrndleftBtn.onclick = function () {
    document.querySelector('#topbrands').scrollLeft -= 250;

};


// BestinBeauty
let BestBtyleft = document.getElementById("BestBtyleft1");
let BestBtyright = document.getElementById("BestBtyright1");
BestBtyright.onclick = function () {
    document.querySelector('#BestinBeauty1').scrollLeft += 250;
};
BestBtyleft.onclick = function () {
    document.querySelector('#BestinBeauty1').scrollLeft -= 250;

};


let arr = JSON.parse(localStorage.getItem("data"))
console.log(arr)
if (arr !== null) {
    let final = document.getElementById("inpt")
    console.log(final)

    arr.forEach(function (el) {
        final.innerText = el.first
        final.href = "acinfo.html"
    })
}
shopcart()