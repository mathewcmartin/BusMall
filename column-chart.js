'use strict';

var newItemsListArray = [];

if (localStorage.newClick) {
  var newClickings = JSON.parse(localStorage.newClick);
  for (var i = 0; i < newClickings.length; i++) {
    
    newItemsListArray[i].itemNumberClicked = newClickings[i].itemNumberClicked;
  }
}
