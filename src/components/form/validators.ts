import Joi from 'joi';

import { requiredOneOption, requiredString } from '../../utils/validators';
import { phoneRegExp } from './constants';
import { AccessLevel, FormValues } from './types';

export const validationSchema = Joi.object<FormValues>({
  firstName: requiredString,
  lastName: requiredString,
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ['com', 'net'] },
  }),
  //   contact: Joi.number().required(), // TODO: add custom hook for validation
  contact: Joi.string()
    .regex(/^[0-9]{10}$/)
    .messages({ 'string.pattern.base': `Phone number must have 10 digits.` }),
  address1: requiredString,
  address2: Joi.string().optional(),
  accessLevel: requiredOneOption({ option: Object.values(AccessLevel) }),
  age: requiredString,
});
