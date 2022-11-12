export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister {
  user_name: string;
  email: string;
  password: string;
  telephone_number: number;
  birth_date: string | Date | null;
}
