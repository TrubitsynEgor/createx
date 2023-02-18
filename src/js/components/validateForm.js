import JustValidate from 'just-validate';

const validate = new JustValidate('#form');

validate
  .addField('.input-name', [
    {
      rule: 'minLength',
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 30,
    },
  ])
  .addField('.input-email', [
    {
      rule: 'required',
      errorMessage: 'Please provide a valid input.',
    },
    {
      rule: 'email',
      errorMessage: 'Email is invalid!',
    },


  ])
  .addField('.input-tel', [
    {
      rule: 'required',
      errorMessage: 'Please provide a valid input.',
    },
    {
      rule: 'number',
      errorMessage: 'Phone is invalid!',
    },

  ])
