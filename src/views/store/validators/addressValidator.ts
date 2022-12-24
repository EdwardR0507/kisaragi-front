import { yupResolver } from '@hookform/resolvers/yup';
import { yup } from '../utils';

export const addressResolver = yupResolver(
  yup
    .object({
      firstName: yup.string().required(),
      lastName: yup.string().required(),
      address: yup.string().required(),
      address2: yup.string(),
      city: yup.string().required(),
      phone: yup.string().required(),
    })
    .required()
);
