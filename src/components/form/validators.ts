import Joi from 'joi';

import { requiredString } from '../../utils/validators';
import { phoneRegExp } from './constants';

export const validationSchema = Joi.object({
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
});
