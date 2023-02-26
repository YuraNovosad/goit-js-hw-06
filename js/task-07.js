const inputEL = document.querySelector('#font-size-control');
// console.log(inputEL);

const spanEl = document.querySelector('#text');
// console.log(spanEl);

inputEL.addEventListener('input', event => {
  spanEl.style.fontSize = `${event.currentTarget.value}px`;
});
