
function paragraphSelector(){
  //select and return all p tags
  $('p');
}

function lastImageSelector(){
  //returns last image
  $('img:last');
}

function ninjaBabySelector(){
  //use id selector to get baby gif
  $('#baby-ninja');
}

function divSelector(){
  //use class selector to get divs labelled pics
  $('.pics');
}

function firstListItem(){
  //use first child selector to get first item in ul with ID pic-list
  $('#pic-list li:first-child');
}

$(function(){
  paragraphSelector();
  lastImageSelector();
  ninjaBabySelector();
  divSelector();
  firstListItem();
});
