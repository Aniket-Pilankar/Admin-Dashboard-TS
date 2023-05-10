import { FieldValues, useController, UseControllerProps } from 'react-hook-form';

import SelectComp, { Props as SelectCompProps } from '../../components/Select';

type Props<T extends FieldValues> = UseControllerProps<T> & SelectCompProps & {};

const Select = <T extends FieldValues>({ name, control, helperText, ...props }: Props<T>) => {
  const {
    field: { ref, value, ...field },
    fieldState: { error, invalid },
  } = useController({
    name,
    control,
  });

  const computedHelperText = invalid ? error?.message : helperText;

  return (
    <SelectComp
      {...field}
      {...props}
      id={props.id || field.name}
      value={value}
      inputRef={ref}
      error={invalid}
      aria-invalid={invalid}
      helperText={computedHelperText}
    />
  );
};

export default Select;
