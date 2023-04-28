import { formLabelClasses, inputLabelClasses, styled, TextField } from '@mui/material';

import { generateClasses } from '../../utils/helper';

export const styledTextFieldClasses = generateClasses('DashBoardTextField', [
  'textCentered',
  'textFieldCentered',
  'formHelperText',
]);

export const StyledTextField = styled(TextField)(({ theme }) => ({
  [`& .${formLabelClasses.root}.${inputLabelClasses.focused}`]: {
    color: 'yellow',
  },
  [`& .${styledTextFieldClasses.textCentered}`]: {
    textAlign: 'center',
  },
  [`& .${styledTextFieldClasses.formHelperText}`]: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));
