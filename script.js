let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthItems = items.length;

// Next button functionality
next.onclick = function () {
  if (active + 1 >= lengthItems) {
    active = 0; // Loop back to the first slide
  } else {
    active += 1;
  }
  reloadSlider();
};

// Previous button functionality
prev.onclick = function () {
  if (active - 1 < 0) {
    active = lengthItems - 1; // Go to the last slide
  } else {
    active -= 1;
  }
  reloadSlider();
};

// Reload slider position
function reloadSlider() {
  let checkLeft = items[active].offsetLeft;
  list.style.left = -checkLeft + 'px';

  // Update dots
  document.querySelector('.dots .active').classList.remove('active');
  dots[active].classList.add('active');
}

// Add click functionality to dots
dots.forEach((dot, index) => {
  dot.onclick = function () {
    active = index;
    reloadSlider();
  };
});