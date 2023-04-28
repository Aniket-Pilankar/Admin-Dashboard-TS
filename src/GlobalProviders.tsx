import { ReactNode } from 'react';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { BrowserRouter } from 'react-router-dom';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { useThemeContext } from './themeContext';

const GlobalProviders = ({ children }: { children: ReactNode }) => {
  const { theme } = useThemeContext();
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ProSidebarProvider>{children}</ProSidebarProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};
export default GlobalProviders;
