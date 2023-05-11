import { ReactNode } from 'react';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { CssBaseline, ThemeProvider } from '@mui/material';

import store from './redux/store';
import { useThemeContext } from './themeContext';

const GlobalProviders = ({ children }: { children: ReactNode }) => {
  const { theme } = useThemeContext();
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ProSidebarProvider>{children}</ProSidebarProvider>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
};
export default GlobalProviders;
