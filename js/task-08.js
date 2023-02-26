const form = document.querySelector('.login-form');

form.addEventListener('submit', handlerFormSubmit);

function handlerFormSubmit(event) {
  event.preventDefault();

  const formEl = event.currentTarget.elements;
  const email = formEl.email.value;
  const password = formEl.password.value;

  if (email === '' || password === '') {
    alert('All fields must be filled');
    return;
  }

  const formData = {
    email,
    password,
  };

  console.log(formData);
  form.reset();
}
