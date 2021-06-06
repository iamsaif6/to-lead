// vanilla JS
// init with element
var grid = document.querySelector('.gallery__grid');
var msnry = new Masonry( grid, {
  // options...
  itemSelector: '.gallery-item',
  columnWidth: 600
});

// init with selector
var msnry = new Masonry( '.gallery__grid', {
  // options...
});