console.log('bobbyhadz.com');

document.addEventListener('touchstart', event => {
  event.preventDefault();

  console.log('touchstart event');
});

document.addEventListener('touchmove', event => {
  event.preventDefault();

  console.log('touchmove event');
});

document.addEventListener('touchcancel', event => {
  event.preventDefault();

  console.log('touchcancel event');
});
