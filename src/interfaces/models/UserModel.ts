import { PaymentInformation } from './PaymentInformationModel';

export interface User {
  user_id: string;
  user_name: string;
  email: string;
  role: string;
  birth_date: Date | null;
  description: string;
  profile_image: string;
  name: string;
  surname: string;
  payment_information: PaymentInformation[];
  created_at: Date;
  updated_at: Date;
}
