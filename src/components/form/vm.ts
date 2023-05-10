import { SubmitHandler, useForm } from 'react-hook-form';

import { joiResolver } from '@hookform/resolvers/joi';

import { FormValues } from './types';
import { validationSchema } from './validators';

export default function useFormVM() {
  const formMethods = useForm<FormValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      contact: '',
      address1: '',
      address2: '',
      //   age: '',
      accessLevel: '',
    },
    resolver: joiResolver(validationSchema),
    mode: 'all',
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return { formMethods, onSubmit };
}
