const refs = {
  inputEl: document.querySelector('#name-input'),
  spamEl: document.querySelector('#name-output'),
};

refs.inputEl.addEventListener('input', event => {
  if (event.currentTarget.value === '') {
    refs.spamEl.textContent = 'Anonymous';
  } else {
    refs.spamEl.textContent = event.currentTarget.value;
  }
});
