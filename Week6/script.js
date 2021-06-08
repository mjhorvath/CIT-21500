var products = [
  {
    id:0,
    name:"Apples",
    price:"2.99",
    image:"https://banner2.kisspng.com/20180310/jyw/kisspng-plum-tomato-apple-fuji-vector-two-apples-5aa49732abbf96.2950483615207360507035.jpg",
    color:"red"
  },
  {
    id:1,
    name:"Bananas",
    price:"2.50",
    image:"https://icon2.kisspng.com/20180125/cyq/kisspng-banana-powder-fruit-cavendish-banana-banana-5a6a705e555d06.3110857015169250223497.jpg",
    color:"gold"
  },
  {
    id:2,
    name:"oranges",
    price:"3.50",
    image: "https://icon2.kisspng.com/20180308/wlw/kisspng-south-africa-blood-orange-mandarin-orange-tangelo-south-africa-imports-of-oranges-5aa10d936cc6c7.6226563815205042114456.jpg",
    color:"orange"
  }
];

// DO NOT EDIT THE ARRAY TO COMPLETE THE ASSIGNMENT

// Create a div and give it a class of "popUp". Append that div to the body 

// If I click on the popUp div, it should hide it

// Create a div for each item in the array above

// inside of each div, the prodcut Name and Price should be written as "Name: value" and "Price: $#.##";

// inside of each div, the product's image should be on top of the text

// when hovering over a product, its border color should change to the "color" of that product. Once you hover off, it should return to black

// When Clicking on a product, it should display the popUp Menu over all the content

// When clicking on the paticular product, that products image, name, and price should be displayed inside the popUp div just like it does in its own product div. No other products information shold be shown.

function createFruit(thisFruit) {
  var that = this;
  var productDiv = document.createElement('div');
  productDiv.className = 'product';
  var imageEle = document.createElement('img');
  imageEle.src = thisFruit.image;
  var nameDiv = document.createElement('div');
  var nameTxt = document.createTextNode('Name: ' + thisFruit.name);
  nameDiv.appendChild(nameTxt);
  var priceDiv = document.createElement('div');
  var priceTxt = document.createTextNode('Price: $' + thisFruit.price);
  priceDiv.appendChild(priceTxt);
  productDiv.appendChild(imageEle);
  productDiv.appendChild(nameDiv);
  productDiv.appendChild(priceDiv);
  var borderOn = function () {
    this.style.borderColor = thisFruit.color;
  }
  var borderOff = function () {
    this.style.borderColor = 'black';
  }
  var popupClick = function () {
    var popupDiv = document.getElementById('popUpID');
    popupDiv.innerHTML = this.innerHTML;
    popupDiv.style.display = 'flex';
  }
  productDiv.addEventListener('mouseover', borderOn);
  productDiv.addEventListener('mouseout', borderOff);
  productDiv.addEventListener('click', popupClick);
  document.body.appendChild(productDiv);
}

function createPopup() {
  var that = this;
  var popupDiv = document.createElement('div');
  popupDiv.className = 'popUp';
  popupDiv.id = 'popUpID';
  popupDiv.style.display = 'none';
  var popupClick = function () {
    this.style.display = 'none';
  }
  popupDiv.addEventListener('click', popupClick);
  document.body.appendChild(popupDiv);
}

for (var i = 0; i < products.length; i++) {
  createFruit(products[i]);
}

createPopup();