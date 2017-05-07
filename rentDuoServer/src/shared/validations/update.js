import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
  let errors ={};

  if (Validator.isEmpty﻿(data.firstname)) {
    errors.firstname = 'First Name is required';
  }

  if (Validator.isEmpty﻿(data.lastname)) {
    errors.lastname = 'Last Name is required';
  }

  if (Validator.isEmpty﻿(data.password)) {
    errors.password = 'Password is required';
  }

  if (Validator.isEmpty﻿(data.passwordConfirmation)) {
    errors.passwordConfirmation = 'Password Confirmation is required';
  }

  if (!Validator.equals(data.password, data.passwordConfirmation)) {
    errors.passwordConfirmation = 'passwords are not the same';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
