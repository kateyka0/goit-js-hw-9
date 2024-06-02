const form = document.querySelector('.feedback-form');
const formData = {
  email: '',
  message: '',
};

const LOCALSTORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
});

document.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem(LOCALSTORAGE_KEY);
  if (savedData) {
    const { email, message } = JSON.parse(savedData);
    form.email.value = email;
    form.message.value = message;
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!form.email.value || !form.message.value) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  localStorage.removeItem(LOCALSTORAGE_KEY);
  form.reset();
});