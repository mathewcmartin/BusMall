'use strict';

var itemsListArray = [];
var previouslyShownUserPageArray = [];
var labelNameArray = [];
var labelClickArray = [];

var totalClicks = 0;
var clickLimit = 5;
// var image1 = document.getElementById('image1');
// var image2 = document.getElementById('image2');
// var image3 = document.getElementById('image3');

function Item(itemName, itemPath){
  this.itemName = itemName;
  this.itemPath = itemPath;
  this.itemClick = 0;
  this.itemShownTotal = 0;
  labelNameArray.push(itemName);
  itemsListArray.push(this);
  // this.itemClick = 0;.
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
function randomPictureGenerator(){
  var currentlyShownUserPageArray = [];
  while (currentlyShownUserPageArray.length < 3) {
    var randomItemSelectionVar = randomItemSelectionFunc();
    if (!previouslyShownUserPageArray.includes(randomItemSelectionVar) && !currentlyShownUserPageArray.includes(randomItemSelectionVar)){
      currentlyShownUserPageArray.push(randomItemSelectionVar);
    }
  }
  var imageLeft = itemsListArray[currentlyShownUserPageArray[0]];
  var imageCenter = itemsListArray[currentlyShownUserPageArray[1]];
  var imageRight = itemsListArray[currentlyShownUserPageArray[2]];
  image1.src = imageLeft.itemPath;
  image2.src = imageCenter.itemPath;
  image3.src = imageRight.itemPath;

  image1.alt = currentlyShownUserPageArray[0];
  image2.alt = currentlyShownUserPageArray[1];
  image3.alt = currentlyShownUserPageArray[2];

  previouslyShownUserPageArray = currentlyShownUserPageArray;

  imageLeft.itemShownTotal++;
  imageCenter.itemShownTotal++;
  imageRight.itemShownTotal++;
};
randomPictureGenerator();

function handleTheClick(){
  randomPictureGenerator();
  totalClicks++;

  console.log(this);
  var productIndex = this.alt; // get the index of the product clicked
  itemsListArray[productIndex].itemClick++;

  if (totalClicks === clickLimit){
    image1.removeEventListener('click', handleTheClick);
    image2.removeEventListener('click', handleTheClick);
    image3.removeEventListener('click', handleTheClick);
    productClicks();
  }
}

image1.addEventListener('click', handleTheClick);
image2.addEventListener('click', handleTheClick);
image3.addEventListener('click', handleTheClick);

function productClicks(){
  var content = document.getElementById('content');
  var ul = document.createElement('ul');
  content.appendChild(ul);
  for (var i = 0; i < itemsListArray.length; i++) {
    labelClickArray.push(itemsListArray[i].itemClick);
  }

  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  var data = {
    labels: labelNameArray,
    datasets: [{
      label: 'Times Clicked',
      data: labelClickArray,
      backgroundColor: 'red'
    }]
  };

  var myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });
}
