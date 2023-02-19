import JustValidate from 'just-validate';


if (document.querySelector('#form')) {
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
      {
        rule: 'required',
        errorMessage: 'Please provide a valid input.',
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
    .addField('.input-file', [
      {
        rule: 'required',
        errorMessage: 'Please provide a valid input.',
      },
      {
        rule: 'files',
        value: {
          files: {
            extensions: ['jpeg', 'png'],
            maxSize: 25000,
            minSize: 1000,
            types: ['image/jpeg', 'image/png'],
            names: ['file1.jpeg', 'file2.png'],
          },
        },
        errorMessage: 'Please load correct file'
      },
    ]);
}
if (document.querySelector('#form-2')) {
  const validate2 = new JustValidate('#form-2');
  validate2
    .addField('.input-message', [
      {
        rule: 'minLength',
        value: 30,
      },
      {
        rule: 'maxLength',
        value: 300,
      },
      {
        rule: 'required',
        errorMessage: 'Please provide a valid input.',
      },

    ])
    .addField('.input-name', [
      {
        rule: 'minLength',
        value: 3,
      },
      {
        rule: 'maxLength',
        value: 30,
      },
      {
        rule: 'required',
        errorMessage: 'Please provide a valid input.',
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

}
if (document.querySelector('.modal-form')) {
  const validate3 = new JustValidate('.modal-form');

  validate3
    .addField('.input-name', [
      {
        rule: 'minLength',
        value: 3,
      },
      {
        rule: 'maxLength',
        value: 30,
      },
      {
        rule: 'required',
        errorMessage: 'Please provide a valid input.',
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
};

if (document.querySelector('#form-3')) {
  const validate4 = new JustValidate('#form-3');

  validate4
    .addField('.input-message', [
      {
        rule: 'minLength',
        value: 30,
      },
      {
        rule: 'maxLength',
        value: 300,
      },
      {
        rule: 'required',
        errorMessage: 'Please provide a valid input.',
      },

    ])
    .addField('.input-name', [
      {
        rule: 'minLength',
        value: 3,
      },
      {
        rule: 'maxLength',
        value: 30,
      },
      {
        rule: 'required',
        errorMessage: 'Please provide a valid input.',
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
}

