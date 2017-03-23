'use strict';

var itemsListArray = [];
var prevImgIndexes = [];
var labelArray = [];
var clickDataArray = [];

var totalClicks = 0;
var clickLimit = 25;

function Item(itemName, itemPath){
  this.itemName = itemName;
  this.itemPath = itemPath;
  this.itemNumberClicked = 0;
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

function randomImgIndex(){
  return Math.floor(Math.random() * (itemsListArray.length));
};
function randomPicGenerate(){
  var currentImgIndexes = [];
  while (currentImgIndexes.length < 3) {
    var randomImgSelectVar = randomImgIndex();
    if (!prevImgIndexes.includes(randomImgSelectVar) && !currentImgIndexes.includes(randomImgSelectVar)){
      currentImgIndexes.push(randomImgSelectVar);
    }
  }
  var imageLeft = itemsListArray[currentImgIndexes[0]];
  var imageCenter = itemsListArray[currentImgIndexes[1]];
  var imageRight = itemsListArray[currentImgIndexes[2]];
  image1.src = imageLeft.itemPath;
  image2.src = imageCenter.itemPath;
  image3.src = imageRight.itemPath;
  prevImgIndexes = currentImgIndexes;
  image1.alt = currentImgIndexes[0];
  image2.alt = currentImgIndexes[1];
  image3.alt = currentImgIndexes[2];

  imageLeft.itemShownTotal++;
  imageCenter.itemShownTotal++;
  imageRight.itemShownTotal++;
}
randomPicGenerate();

function clickHandle(event){
  randomPicGenerate();
  totalClicks++;
  var productIndex = this.alt;
  itemsListArray[productIndex].itemNumberClicked++;

  if (totalClicks === clickLimit){
    localStorage.newClick = JSON.stringify(itemsListArray);
    image1.removeEventListener('click', clickHandle);
    image2.removeEventListener('click', clickHandle);
    image3.removeEventListener('click', clickHandle);
    productClicks();
  }
}
var percentTotal = [];

if (localStorage.newClick){
  var newClickings = JSON.parse(localStorage.newClick);
  for (var i = 0; i < newClickings.length; i++) {
    itemsListArray[i].itemNumberClicked = newClickings[i].itemNumberClicked;
  }
}

image1.addEventListener('click', clickHandle);
image2.addEventListener('click', clickHandle);
image3.addEventListener('click', clickHandle);

function productClicks(){
  var content = document.getElementById('content');
  var ul = document.createElement('ul');
  content.appendChild(ul);
  for (var i = 0; i < itemsListArray.length; i++) {
    clickDataArray.push(itemsListArray[i].itemNumberClicked);
    labelArray.push(itemsListArray[i].itemName);
    percentTotal.push(itemsListArray[i].itemShownTotal / itemsListArray[i].itemNumberClicked);
  }

  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  var data = {
    labels: labelArray,
    datasets: [{
      label: 'Times Clicked',
      data: clickDataArray,
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
