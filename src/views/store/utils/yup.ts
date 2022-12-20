import * as yup from 'yup';

yup.setLocale({
  mixed: {
    default: 'El campo es inválido',
    required: 'El campo es requerido',
  },
});

export default yup;
