let covidEssentials = () => {
  return {
    bannerImg:
      "https://www.netmeds.com/images/cms/aw_rbslider/slides/1649267860_Category_Banners_web_1000px_x_200px.jpg",
    mastCata: [
      {
        catagoryImg:
          "https://www.netmeds.com/images/category/3061/thumb/immunity_booster_1.jpg",
        name: "immunity booster ",
        disc: 545,
        catagories: {
          subBanner:
            "https://www.netmeds.com/images/cms/aw_rbslider/slides/1649268453_Category_Banners_web_2_1000px_x_200px.jpg",
          data: [
            {
              image:
                "https://www.netmeds.com/images/product-v1/150x150/113742/revital_h_capsule_10_s_0.jpg",
              name: "Revital Capsule 10's",
              mkt: "Sun Pharmaceutical Industries l..",
              price: 95,
              strike: 110,
            },
            {
              image:
                "https://www.netmeds.com/images/product-v1/150x150/407923/revital_h_woman_tablet_30_s_0.jpg",
              name: "Revital H Women Tablet 30'S",
              mkt: "Sun Pharmaceutical Industries l..",
              price: 293,
              strike: 345,
            },
            {
              image:
                "https://www.netmeds.com/images/product-v1/150x150/113653/revital_h_capsule_60_s_0.jpg",
              name: "Revital H Capsule 60's",
              mkt: "Sun Pharmaceutical Industries l..",
              price: 467,
              strike: 550,
            },
            {
              image:
                "https://www.netmeds.com/images/product-v1/150x150/328123/revital_h_capsule_30_s_0.jpg",
              name: "Revital H Capsule 30's",
              mkt: "Sun Pharmaceutical Industries l..",
              price: 263,
              strike: 310,
            },
           
            {
              image:
                "https://www.netmeds.com/images/category/3495/thumb/face_wash_cleansers_3.jpg",
              name: "face wash cleansers",
              mkt: "AeroNutrix Sports Products Priv..",
              price: 850,
              strike: 1170,
            },
            {
              image:
                "https://www.netmeds.com/images/category/3495/thumb/face_wash_cleansers_3.jpg",
              name: "face wash cleansers",
              mkt: "AeroNutrix Sports Products Priv..",
              price: 850,
              strike: 1170,
            },
            {
              image:
                "https://www.netmeds.com/images/category/3505/thumb/facial_kits_1.jpg",
              name: "facial kits",
              mkt: "West Coast Pharmaceuticals W...",
              price: 360,
              strike: 400,
            },
            {
              image:
                "https://www.netmeds.com/images/category/v1/3706/thumb/hair_sprays_mists_0.jpg",
              name: "hair sprays mists",
              mkt: "West Coast Pharmaceuticals W...",
              price: 473,
              strike: 550,
            },
          ],
        },
      },
    ],
  };
};


function sidebar(){
    return `
    <div id="name">
    <h2>Categories</h2>
</div>
    <div id="category">
        <p><i class="fa-solid fa-greater-than"></i> Hair</p>
        <p><i class="fa-solid fa-greater-than"></i> Men's Grooming</p>
        <p><i class="fa-solid fa-greater-than"></i> Skin Care</p>
        <p><i class="fa-solid fa-greater-than"></i> Tools & Appliances</p>
        <p><i class="fa-solid fa-greater-than"></i> Wellness</p>
        <p><i class="fa-solid fa-greater-than"></i> Personal Care</p>
        <p><i class="fa-solid fa-greater-than"></i> Ayush</p>
        <p><i class="fa-solid fa-greater-than"></i> Fitness</p>
        <p><i class="fa-solid fa-greater-than"></i> Mom & Baby</p>
        <p><i class="fa-solid fa-greater-than"></i> Sexual Wellness</p>
        <p><i class="fa-solid fa-greater-than"></i> Treatments</p>
        <p><i class="fa-solid fa-greater-than"></i> Devices</p>
        <p><i class="fa-solid fa-greater-than"></i> Health Conditions</p>
        <p><i class="fa-solid fa-greater-than"></i> Otc Deals</p>
        <p><i class="fa-solid fa-greater-than"></i> Eyewear</p>
        <p><i class="fa-solid fa-greater-than"></i> Covid Essentials</p>
        <p><i class="fa-solid fa-greater-than"></i> Surgical</p>
    </div>
    

    `
}


export { covidEssentials};
export{sidebar};
