const loginForm = document.querySelector(`.login-form`);

loginForm.addEventListener(`submit`, (event) => 
{
  event.preventDefault();

  const email = loginForm.email.value.trim();
  const password = loginForm.password.value.trim();

  if (email === `` || password === ``) {
    alert(`All form fields must be filled in`);
    return;
  }

  const dataForm = {
    email,
    password,
  };

  console.log(dataForm);

  loginForm.reset();
});