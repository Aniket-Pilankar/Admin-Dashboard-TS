import { AccessLevel } from './types';

export const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

export const accessLevelOptions = [
  { value: AccessLevel.ADMIN, title: 'Admin' },
  { value: AccessLevel.MANAGER, title: 'Manager' },
  { value: AccessLevel.USER, title: 'User' },
];
