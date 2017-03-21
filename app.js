'use strict';

var itemsListArray = [];

function Item(itemName, itemPath){
  this.itemName = itemName;
  this.itemPath = itemPath;
  this.itemShownTotal = 0;
  this.numberOfTimesClicked = 0;
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
}

randomPictureGenerator();
