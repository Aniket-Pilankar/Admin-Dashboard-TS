import { FieldValues, useController, UseControllerProps } from 'react-hook-form';

import { TextFieldProps } from '@mui/material';

import clsx from 'clsx';

import { StyledTextField, styledTextFieldClasses } from './styles';

type Props<T extends FieldValues> = Omit<TextFieldProps, 'name' | 'inputRef'> &
  UseControllerProps<T> & {
    characterLimit?: number;
    textCentered?: boolean;
  };

const TextField = <T extends FieldValues>({
  name,
  control,
  helperText,
  characterLimit,
  textCentered,
  ...props
}: Props<T>) => {
  const {
    field: { value, ref, ...fields },
    fieldState: { invalid, error },
  } = useController({ name, control });

  const computedHelperText = invalid ? error?.message : helperText;

  return (
    <StyledTextField
      id={fields.name}
      {...fields}
      {...props}
      name={name}
      value={value}
      inputRef={ref}
      error={invalid}
      helperText={
        characterLimit ? (
          <>
            <span>{computedHelperText}</span>
            <span aria-hidden>{`${value.length}/${characterLimit}`}</span>
          </>
        ) : (
          <span>{computedHelperText}</span>
        )
      }
      FormHelperTextProps={{
        ...props.FormHelperTextProps,
        className: clsx(props.FormHelperTextProps?.className, {
          [styledTextFieldClasses.formHelperText]: Boolean(characterLimit),
          [styledTextFieldClasses.textCentered]: textCentered,
        }),
      }}
      inputProps={{
        ...props.inputProps,
        autoComplete: 'off',
        maxLength: characterLimit,
        className: clsx(props.inputProps?.className, {
          [styledTextFieldClasses.textCentered]: textCentered,
        }),
      }}
      className={clsx(props.className)}
    />
  );
};
export default TextField;
