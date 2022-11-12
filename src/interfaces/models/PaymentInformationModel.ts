export interface PaymentInformation {
  payment_information_id: string;
  primary_account_number: string;
  cardholder_name: string;
  expiration_date: Date;
  active: boolean;
  created_at: Date;
  updated_at: Date;
}
