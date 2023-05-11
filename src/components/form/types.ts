export enum AccessLevel {
  ADMIN = 'admin',
  MANAGER = 'manager',
  USER = 'user',
}

export interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  contact: string;
  address1: string;
  address2: string;
  accessLevel: AccessLevel | '';
  age: number;
}
