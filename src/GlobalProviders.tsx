import { ReactNode } from 'react';
import { ProSidebarProvider } from 'react-pro-sidebar';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { useThemeContext } from './themeContext';

const GlobalProviders = ({ children }: { children: ReactNode }) => {
  const { theme } = useThemeContext();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ProSidebarProvider>{children}</ProSidebarProvider>
    </ThemeProvider>
  );
};
export default GlobalProviders;
