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
let bt = document.getElementById('TopbrndBtn1')
var productbuttonRight = document.getElementById('rightbtn1');
var productbuttonLeft = document.getElementById('leftbtn1');

productbuttonRight.onclick = function () {
    document.getElementById('itemContnr').scrollLeft += 500;
};
productbuttonLeft.onclick = function () {
    document.getElementById('itemContnr').scrollLeft -= 500;

};