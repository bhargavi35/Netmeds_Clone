function navbar() {
    return `<div id="box1">
    <a href="./index.html">
    <div id="logo">
        <img src="https://www.netmeds.com/assets/gloryweb/images/home-logo-netmeds-new.svg" alt="">
     </div>
</a>
    <div id="top2">
        <div class="input-group mb-3">
            <button id="try" style="color: gray; background-color: white"
                class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Deliver to <span style="color: skyblue">700067</span>
            </button>

            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
                <li>
                    <hr class="dropdown-divider" />
                </li>
                <li><a class="dropdown-item" href="#">Separated link</a></li>
            </ul>
            <input placeholder="Search for medicine & wellness" type="text" class="form-control"
                aria-label="Text input with dropdown button" />
        </div>
    </div>

    <div id="top3">
        <span><i class="fa-solid fa-file-lines"></i><span class="anu"><a
                    style="color: white;text-decoration: none;">Upload</span></span>
        <span id="ai"><i class="fa-solid fa-cart-shopping prdctt"></i><span id="cart"
                class="one prdctt"><a href="./cart.html">Cart</a>  </span></span> 

                <div id="alexa">
            <div id="b">
                <p>ORDER SUMMARY</p>
                <P>1 item(s)</P>
            </div>
            <div id="c">
                <p id="c1">Patanjali</p>
                <p id="c2">RS.55.00X1</p>
            </div>

            <div id="d">
                <h4 id="c3">RS.55</h4>
                <button>PROCEED TO CART</button>
            </div>
        </div>


            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
              </svg>
       
        <span><i class="fa-solid fa-user"></i><span class="anu"></span id="log"><a id="inpt" href="signup.html"
                style="text-decoration: none; color:#fff">Sign in / Sign up</a></span>
    </div>
</div>
</div>


<div id="down">
<div id="down1">
    <img src="https://www.netmeds.com/assets/version1649433944/gloryweb/images/icons/medicine.svg" alt="">
    <p class="main">Medicine</p>
    <span><i class="fa-solid scroll fa-caret-down"></i></span>
    <div id="siri">
        <div id="points">
            <p>All Medicines</p>
            <p>Previously Ordered Products</p>
        </div>

    </div>

</div>
<div id="down2">
    <img src="https://www.netmeds.com/assets/gloryweb/images/icons/wellness.svg" alt="">
    <a href="./wellness.html"><p class="main">wellness</p></a>

</div>
<div id="down3">
    <img src="https://www.netmeds.com/assets/gloryweb/images/icons/diagnostics.svg" alt="">
    <p class="main">Lab Tests</p>
</div>
<div id="down4">
    <img src="https://www.netmeds.com/assets/gloryweb/images/icons/beauty.svg" alt="">
    <p class="main">Beauty</p>

    <span><i class="fa-solid scroll fa-caret-down"></i></span>
    <div class="siri">
        <div id="points1">
        <a href="./beauty.html"> <p>Personal Care</p></a>
        <a href="./product.html">   <p>Make-up</p></a>
            <p>Hair</p>
            <p>Skin Care</p>
            <p>Tools & Appliances</p>
            <p>Mom & Baby</p>
            <p>Fragrance</p>
            <p>Men's Grooming</p>
        </div>
    </div>
</div>
<div id="down5">
    <img src="https://www.netmeds.com/assets/version1649433944/gloryweb/images/icons/health-library.svg" alt="">
    <p class="main">Health Corner</p>
    <span><i class="fa-solid scroll fa-caret-down"></i></span>
    <div class="siri">
        <div id="points2">
            <p>Health Library</p>
            <p>PatientsALike</p>
            <p>Corona Awareness</p>
        </div>
    </div>
</div>
</div>


<div id="low">
<div id="script">
<a href="./product.html"><p id="banu35">COVID Essentials</p></a>
    <p>Diabetes</p>
    <p>Eyewear</p>
    <p>Ayush</p>
   <p>Ayurvedic</p>
    <p>Homeopathy</p>
    <a href="./product.html"> <p>Fitness</p></a>
    <p>Mom & Baby</p>
    <p>Devices</p>
    <p>Surgicals</p>
    <p>Sexual Wellness</p>
    <p>Treatments</p>
</div>
</div>

`
}
function footer() {
    return `<div id="between">
    <div id="adc">
        <img src="https://www.netmeds.com/assets/gloryweb/images/netmeds-footer-logo.svg" id="logo"alt="">
        <div>
            <p>Netmeds.com, India Ki Pharmacy, is brought to you by the Dadha & Company – one of India’s most
                trusted <br> pharmacies, with over 100 years’ experience in dispensing quality medicines.</p>
        </div>
    </div>
    <hr>
    <div id="nani">
        <div id="nav1">
            <p class="ftmain">COMPANY</p>
            <p>About Netmeds</p>
            <p>Customers Speak</p>
            <p>In the News</p>
            <p>Career</p>
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
            <p>Fees and Payments Policy</p>
            <p>Shipping and Delivery Policy</p>
            <p>Return, Refund and Cancellation Policy</p>
            <p>Contact</p>
        </div>
        <div id="nav2">
            <p class="ftmain">SHOPPING</p>
            <p>Browse by A-Z</p>
            <p>Browse by Manufacturers</p>
            <p>Health Articles</p>
            <p>Offers / Coupons</p>
            <p>FAQs</p>
        </div>
        <div id="nav3">
            <p class="ftmain">SOCIAL</p>
            <p>Patients Alike</p>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>LinkedIn</p>
            <p>Refer & Earn</p>
        </div>
        <div id="nav4">
            <p class="ftmain">SUBSCRIBE TO OUR NEWSLETTER</p>
            <p>Get a free subscription to our health and <br> fitness tip and stay tuned to our latest <br> offers
            </p>
            <div id="balu">
                <input id="balu1" placeholder="Enter your email address" type="text">
                <i class="fa-solid fa-arrow-right-long"></i>
            </div>
            <hr>
            <div id="balu2">
                <img src="https://www.netmeds.com/assets/gloryweb/images/icons/play_store.png" alt="">
                <img src="https://www.netmeds.com/assets/gloryweb/images/icons/app_store.png" alt="">
            </div>
        </div>
    </div>
    <hr>
    <div id="srii">
    <p>Medicine</p>
    <a href="./wellness.html"><p>wellness</p></a>
        <p>Lab Tests</p>
        <a href="./beauty.html"> <p>Beauty</p>
        </a>        
        <p>Copyright© 2022. All Rights Reserved.</p>
    </div>`
}

function shopcart() {
    document.querySelectorAll(".prdctt").forEach(el => {
        el.addEventListener("click", function () {
            window.location.href = "./cart.html"
        })
    })

    document.querySelector("#d>button").addEventListener("click", function () {
        window.location.href = "./cart.html"
    })

    let Info = JSON.parse(localStorage.getItem("cartData"))

    console.log('Info:', Info)
    let x = document.querySelector("#c1")
    let y = document.querySelector("#c2")
    let z = document.querySelector("#c3")
    for (let sri in Info) {

        x.textContent = Info[sri].name
        console.log('s:', Info[sri].name)
        y.textContent = Info[sri].price

        z.textContent = `RS.${Info[sri].price}`
    }

}


export { navbar, shopcart }
export { footer }

 