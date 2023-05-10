import { ChangeEvent, ReactNode } from 'react';

import {
  Checkbox as MuiCheckbox,
  CheckboxProps,
  FormControlLabel,
  FormControlLabelProps,
} from '@mui/material';

export interface Props extends Omit<CheckboxProps, 'onChange' | 'inputRef' | 'name'> {
  onChange?: (checked: boolean) => any;
  label: ReactNode;
  formControlLabelProps?: Omit<FormControlLabelProps, 'control' | 'label' | 'value'>;
}

const Checkbox = ({ label, value, onChange, formControlLabelProps, ...props }: Props) => {
  console.log('value:', value);
  return (
    <FormControlLabel
      {...formControlLabelProps}
      value={value}
      label={label}
      control={
        <MuiCheckbox
          {...props}
          checked={Boolean(value)}
          onChange={(event: ChangeEvent<HTMLInputElement>) => onChange?.(event.target.checked)}
        />
      }
    />
  );
};

export default Checkbox;
