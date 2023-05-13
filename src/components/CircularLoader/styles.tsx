import { keyframes, styled } from '@mui/material';

import { generateClasses } from '../../utils/helper';

export const circularLoaderClasses = generateClasses('CircularLoader', ['spinner']);

export const rotateFull = keyframes`
0% { transform: rotate(0deg)}
100% { transform: rotate(360deg)}
`;

export const CircularLoader = styled('div')(() => ({
  [`&.${circularLoaderClasses.spinner}`]: {
    width: '1.75rem',
    height: '1.75rem',
    border: '4px solid',
    borderColor: '#d95916 #068f68 #0b68ad #d11250', // orange green blue dark-pink
    borderRadius: '50%',
    animation: `${rotateFull} 0.8s linear infinite`,
  },
}));
