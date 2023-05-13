import { SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import { joiResolver } from '@hookform/resolvers/joi';

import { nanoid } from 'nanoid';

import { RootState } from '../../redux/store';
import { createUser } from '../../redux/userProfileSlice';
import { ITeam } from '../../types';
import { joinName } from '../../utils/helper';
import { useAppDispatch } from '../../utils/hooks';
import { FormValues } from './types';
import { validationSchema } from './validators';

export default function useFormVM() {
  const dispatch = useAppDispatch();
  const isLoading = useSelector((state: RootState) => state.user.loading);

  const formMethods = useForm<FormValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      contact: '',
      address1: '',
      address2: '',
      accessLevel: '',
      age: 0,
    },
    resolver: joiResolver(validationSchema),
    mode: 'all',
  });

  const {
    formState: { errors },
  } = formMethods;
  console.log('errors:', errors);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log(data);
    const { firstName, lastName, address1, address2, ...d } = data;
    const name = joinName(firstName, lastName);

    const user: ITeam = {
      name,
      id: nanoid(),
      ...d,
    };

    dispatch(createUser(user));
  };

  return { formMethods, onSubmit, isLoading };
}
