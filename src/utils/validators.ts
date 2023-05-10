import Joi from 'joi';

export const requiredString = Joi.string().required().messages({
  'string.base': 'This field is required',
  'string.empty': 'This field is required',
  'any.required': 'This field is required',
});
