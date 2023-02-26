function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  buttonEl: document.querySelector('button.change-color'),
  spanEl: document.querySelector('span.color'),
};

refs.buttonEl.addEventListener('click', () => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  refs.spanEl.textContent = color;
});
