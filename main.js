'use strict';

const container = document.querySelector('.container');

const counter = document.createElement('div');
counter.classList.add('counter');

container.prepend(counter);
let initialCount = 0;
counter.innerText = initialCount;

const clicker = document.querySelector('.clicker');

clicker.addEventListener('click', () => {
  initialCount += 1;
  counter.innerText = initialCount;
})