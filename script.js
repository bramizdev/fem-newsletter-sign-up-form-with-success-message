'use strict';

const $ = (selector) => document.querySelector(selector);

const $form = $('.form');
const $inputEmail = $('#email');
const $newsletter = $('.newsletter');
const $successMessage = $('.success');
const $successEmail = $('.success__email');
const $successBtn = $('.success__btn');

const isValidEmail = (email) => {
  const regex = /^[\w.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
};

const displayError = (input, msg) => {
  const formControl = input.closest('.form__control');
  const errorMessage = formControl.querySelector('.form__error');
  errorMessage.textContent = msg;
  input.classList.add('form__input-error');
};

const removeError = (input) => {
  const formControl = input.closest('.form__control');
  const errorMessage = formControl.querySelector('.form__error');
  errorMessage.textContent = '';
  input.classList.remove('form__input-error');
};

const displaySuccess = (email) => {
  $successEmail.textContent = email;
  $newsletter.classList.add('hidden');
  $successMessage.classList.remove('hidden');
};

const displayNewsletter = () => {
  $successEmail.textContent = '';
  $inputEmail.value = '';
  $newsletter.classList.remove('hidden');
  $successMessage.classList.add('hidden');
};

$form.addEventListener('submit', (e) => {
  e.preventDefault();
  removeError($inputEmail);
  if (!isValidEmail($inputEmail.value))
    return displayError($inputEmail, 'Valid email required');

  displaySuccess($inputEmail.value);
});

$successBtn.addEventListener('click', displayNewsletter);
