function openShop(event){

event.preventDefault();

const modal = document.getElementById("shopModal");

modal.classList.add("show");

}



function closeShop(){

const modal = document.getElementById("shopModal");

modal.classList.remove("show");

}
const products=[
{
title:"The Client Communication Code",
price:"Free",
desc:"A practical guide for freelancers and agencies to communicate better with clients.",
image:"assets/product1.png",
link: "https://selar.com/7238618343"
},


{
title:"Audit Engine",
price:"Free",
desc:"A digital presence audit tool for brands to help them strategize to build better.",
image:"assets/product2.png",
link: "https://audit.webdesignking.online"
},
];



function changeProduct(index){


document
.getElementById("mainProductImage")
.src = products[index].image;


document
.getElementById("productTitle")
.innerText = products[index].title;


document
.getElementById("productPrice")
.innerText = products[index].price;


document
.getElementById("productDescription")
.innerText = products[index].desc;



// buy button link
const buyButton = document.querySelector(".buy-button");


buyButton.onclick = function(e){

e.preventDefault();

window.open(products[index].link, "_blank");

};


}