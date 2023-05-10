import { FieldValues, useController, UseControllerProps } from 'react-hook-form';

import CheckboxComp, { Props as CheckboxCompProps } from '../../components/Checkbox';

type Props<T extends FieldValues> = CheckboxCompProps & UseControllerProps<T> & {};

const Checkbox = <T extends FieldValues>({ name, control, onChange, ...props }: Props<T>) => {
  const {
    field: { ref, onChange: _onChange, ...field },
  } = useController({
    name,
    control,
  });

  const handleChange = (checked: boolean) => {
    onChange?.(checked);
    _onChange(checked);
  };

  return <CheckboxComp {...props} {...field} onChange={handleChange} />;
};
export default Checkbox;
