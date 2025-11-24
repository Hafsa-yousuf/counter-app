'use strict';
const counter = document.getElementById('count');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');

let count = 0;
// function to update counter display
const updateCounter = function () {
  counter.textContent = count;
};

// function to increase count
const increaseCount = function () {
  count++;
  updateCounter();
};

//function to decrease count
const decreaseCount = function () {
  if (count > 0) {
    count--;
    updateCounter();
  }
};

// function to reset count
const reset = function () {
  count = 0;
  updateCounter();
};

// attach event listeners
increaseBtn.addEventListener('click', increaseCount);
decreaseBtn.addEventListener('click', decreaseCount);
resetBtn.addEventListener('click', reset);

// initialize display
updateCounter();
