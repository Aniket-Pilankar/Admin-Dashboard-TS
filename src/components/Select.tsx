import { ReactNode, useMemo } from 'react';

import {
  FormControl,
  FormHelperText,
  InputLabel,
  Select as MuiSelect,
  SelectProps as MuiSelectProps,
} from '@mui/material';

import clsx from 'clsx';
import { nanoid } from 'nanoid';

export interface Props extends DistributiveOmit<MuiSelectProps, 'classes' | 'required'> {
  helperText?: string;
  error?: boolean;
  className?: string;
  children: ReactNode;
}

const Select = ({
  label,
  helperText,
  error,
  id,
  className,
  onChange,
  inputRef,
  onBlur,
  value,
  children,
}: Props) => {
  const ids = useMemo(
    () => ({
      input: id || `select-${nanoid(4)}`,
      helperText: `helper-text-${id || nanoid(4)}`,
    }),
    [id],
  );

  return (
    <FormControl fullWidth className={className} error={error} variant="standard">
      <InputLabel htmlFor={ids.input}>{label}</InputLabel>
      <MuiSelect
        id={ids.input}
        aria-describedby={ids.helperText}
        value={value}
        onBlur={onBlur}
        inputRef={inputRef}
        onChange={onChange}
      >
        {children}
      </MuiSelect>
      {error && <FormHelperText id={ids.helperText}>{helperText}</FormHelperText>}
    </FormControl>
  );
};
export default Select;
