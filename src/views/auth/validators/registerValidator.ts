import { date, number, object, string } from 'yup';
export const RegisterSchema = object().shape({
  user_name: string()
    .required('El nombre de usuario es requerido')
    .min(6, 'El nombre de usuario debe tener al menos 6 caracteres')
    .max(25, 'El nombre de usuario debe tener máximo 25 caracteres'),
  email: string().email('Email inválido').required('Campo requerido'),
  password: string()
    .min(8, 'La contraseña debe tener como mínimo 8 caracteres')
    .max(16, 'La contraseña debe tener como máximo 16 caracteres')
    .required('Campo requerido'),
  telephone_number: number()
    .required('Número de teléfono requerido')
    .test(
      'telephone_number',
      'El número de teléfono debe empezar con 9 y tener 9 digitos',
      (value) => {
        if (value) return /^9\d{8}$/.test(value.toString());
        return false;
      }
    )
    .typeError('Debe ser un número'),
  birth_date: date().required('Fecha de nacimiento requerida'),
});
