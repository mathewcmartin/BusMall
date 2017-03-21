'use strict';

var itemsListArray = [];
var totalClicks = 0;
var image1 = document.getElementById(image1);
var image2 = document.getElementById(image2);
var image3 = document.getElementById(image3);

function Item(itemName, itemPath){
  this.itemName = itemName;
  this.itemPath = itemPath;
  numberOfTimesClicked = 0;
  this.itemShownTotal = 0;
  itemsListArray.push(this);
}
var a = new Item ('bag', 'assets/bag.jpg');
var b = new Item ('banana', 'assets/banana.jpg');
var c = new Item ('bathroom', 'assets/bathroom.jpg');
var d = new Item ('boots', 'assets/boots.jpg');
var e = new Item ('breakfast', 'assets/breakfast.jpg');
var f = new Item ('bubblegum', 'assets/bubblegum.jpg');
var g = new Item ('chair', 'assets/chair.jpg');
var h = new Item ('cthulhu', 'assets/cthulhu.jpg');
var i = new Item ('dog-duck', 'assets/dog-duck.jpg');
var j = new Item ('dragon', 'assets/dragon.jpg');
var k = new Item ('pen', 'assets/pen.jpg');
var l = new Item ('pet-sweep', 'assets/pet-sweep.jpg');
var m = new Item ('scissors', 'assets/scissors.jpg');
var n = new Item ('shark', 'assets/shark.jpg');
var o = new Item ('sweep', 'assets/sweep.png');
var p = new Item ('tauntaun', 'assets/tauntaun.jpg');
var q = new Item ('unicorn', 'assets/unicorn.jpg');
var r = new Item ('usb', 'assets/usb.gif');
var s = new Item ('water-can', 'assets/water-can.jpg');
var t = new Item ('wine-glass', 'assets/wine-glass.jpg');

function randomItemSelectionFunc(){
  return Math.floor(Math.random() * (itemsListArray.length));
};

var previouslyShownUserPageArray = [];

function randomPictureGenerator(){
  var currentlyShownUserPageArray = [];
  while (currentlyShownUserPageArray.length < 3) {
    var randomItemSelectionVar = randomItemSelectionFunc();
    if(!previouslyShownUserPageArray.includes(randomItemSelectionVar) && !currentlyShownUserPageArray.includes(randomItemSelectionVar)){
      currentlyShownUserPageArray.push(randomItemSelectionVar);
    }
  }
  previouslyShownUserPageArray = currentlyShownUserPageArray;
  var imageLeft = itemsListArray[currentlyShownUserPageArray[0]].itemPath;
  var imageCenter = itemsListArray[currentlyShownUserPageArray[1]].itemPath;
  var imageRight = itemsListArray[currentlyShownUserPageArray[2]].itemPath;
  console.log('current' + currentlyShownUserPageArray);
  document.getElementById('image1').src = imageLeft;
  document.getElementById('image2').src = imageCenter;
  document.getElementById('image3').src = imageRight;
  prod1.imageShown++;
  prod2.imageShown++;
  prod3.imageShown++;
};

function handleTheClick(){
  randomPictureGenerator();
  totalClicks++;

  console.log(this);
  var productIndex = this.alt; // get the index of the product clicked
  productIndex(productIndex).itemClick++;
};
var clickLimit = 25;
if (totalClicks === clickLimit){
  image1.removeEventListener('click', handleTheClick);
  image2.removeEventListener('click', handleTheClick);
  image3.removeEventListener('click', handleTheClick);
  productClicks();
  }


image1.addEventListener('click', handleTheClick);
image2.addEventListener('click', handleTheClick);
image3.addEventListener('click', handleTheClick);

var content = document.createElement('content');
var ul = document.createElement('ul');
content.appendChild(ul);
for (var i = 0; i < productArray.length; i++) {
  var li = document.createElement('li');

}
