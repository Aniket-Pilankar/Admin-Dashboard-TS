import { Button, ButtonBase, IconButton, styled } from '@mui/material';

import CircularLoader from '../CircularLoader';

export const ContentWrapper = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  position: 'relative',
  minWidth: 'unset',
}));
export const StyledButton = styled(Button)(({ theme }) => ({
  position: 'relative',
  minWidth: 'unset',
}));
export const StyledButtonBase = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  minWidth: 'unset',
}));
export const StyledCircularLoader = styled(CircularLoader)(({ theme }) => ({
  height: 24,
  width: 24,
}));
