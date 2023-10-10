import React, { useEffect, useState } from 'react';
import './index.js';
import { Navbar } from 'react-bootstrap';

//Scrolling Cards
// currently lots of duplicate code, will fix later
// the event listeners did not work initially since they were called before the elements were loaded
// so I added the DOMContentLoaded event listener to make sure the elements were loaded before the event listeners were added
//the constants also need to set after the content loads

const inactive = 'rgb(138, 136, 135)'
const active = 'rgb(249, 249, 249)';
const activeRed = 'rgb(209, 54, 58)';


/* Disabled for now until I can figure out how to make it work with React

// go right button
document.addEventListener('DOMContentLoaded', () => {
  const scrollLeftButton = document.querySelector('#scroll-left-button');
  const scrollRightButton = document.querySelector('#scroll-right-button');
  const scrollLeftCircle = document.querySelector('#scroll-left-circle');
  const scrollRightCircle = document.querySelector('#scroll-right-circle');

  const cardMageSeeker = document.querySelector('#cardMageSeeker');
  const cardRuinedKing = document.querySelector('#cardRuinedKing');
  const cardConvrgence = document.querySelector('#cardConvrgence');
  const cardNunu = document.querySelector('#cardNunu');
  scrollRightButton.addEventListener('click', () => {
    console.log('clicked');
    cardMageSeeker.style.display = 'none';
    cardRuinedKing.style.display = 'none';
    cardConvrgence.style.display = 'flex';
    cardNunu.style.display = 'flex';
    scrollLeftButton.style.color = active;
    scrollRightButton.style.color = inactive;
    scrollLeftCircle.style.color = inactive;
    scrollRightCircle.style.color = activeRed;
  });
});

// go left button
  document.addEventListener('DOMContentLoaded', () => {
    const scrollLeftButton = document.querySelector('#scroll-left-button');
    const scrollRightButton = document.querySelector('#scroll-right-button');
    const scrollLeftCircle = document.querySelector('#scroll-left-circle');
    const scrollRightCircle = document.querySelector('#scroll-right-circle');

    const cardMageSeeker = document.querySelector('#cardMageSeeker');
    const cardRuinedKing = document.querySelector('#cardRuinedKing');
    const cardConvrgence = document.querySelector('#cardConvrgence');
    const cardNunu = document.querySelector('#cardNunu');
    scrollLeftButton.addEventListener('click', () => {
      console.log('clicked');
      cardConvrgence.style.display = 'none';
      cardNunu.style.display = 'none';
      cardMageSeeker.style.display = 'flex';
      cardRuinedKing.style.display = 'flex';
      scrollLeftButton.style.color = inactive;
      scrollRightButton.style.color = active;
      scrollLeftCircle.style.color = activeRed;
      scrollRightCircle.style.color = inactive;
    });
  });

// go right circle
document.addEventListener('DOMContentLoaded', () => {
  const scrollLeftCircle = document.querySelector('#scroll-left-circle');
  const scrollRightCircle = document.querySelector('#scroll-right-circle');
  const scrollLeftButton = document.querySelector('#scroll-left-button');
  const scrollRightButton = document.querySelector('#scroll-right-button');

  const cardMageSeeker = document.querySelector('#cardMageSeeker');
  const cardRuinedKing = document.querySelector('#cardRuinedKing');
  const cardConvrgence = document.querySelector('#cardConvrgence');
  const cardNunu = document.querySelector('#cardNunu');
  scrollRightCircle.addEventListener('click', () => {
    console.log('clicked');
    cardMageSeeker.style.display = 'none';
    cardRuinedKing.style.display = 'none';
    cardConvrgence.style.display = 'flex';
    cardNunu.style.display = 'flex';
    scrollLeftCircle.style.color = inactive;
    scrollRightCircle.style.color = activeRed;
    scrollLeftButton.style.color = active;
    scrollRightButton.style.color = inactive;
  });
});

// go left circle
document.addEventListener('DOMContentLoaded', () => {
  const scrollLeftCircle = document.querySelector('#scroll-left-circle');
  const scrollRightCircle = document.querySelector('#scroll-right-circle');
  const scrollLeftButton = document.querySelector('#scroll-left-button');
  const scrollRightButton = document.querySelector('#scroll-right-button');

  const cardMageSeeker = document.querySelector('#cardMageSeeker');
  const cardRuinedKing = document.querySelector('#cardRuinedKing');
  const cardConvrgence = document.querySelector('#cardConvrgence');
  const cardNunu = document.querySelector('#cardNunu');
  scrollLeftCircle.addEventListener('click', () => {
    console.log('clicked');
    cardConvrgence.style.display = 'none';
    cardNunu.style.display = 'none';
    cardMageSeeker.style.display = 'flex';
    cardRuinedKing.style.display = 'flex';
    scrollLeftCircle.style.color = activeRed;
    scrollRightCircle.style.color = inactive;
    scrollLeftButton.style.color = inactive;
    scrollRightButton.style.color = active;
  });
});*/