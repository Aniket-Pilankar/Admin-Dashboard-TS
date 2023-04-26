import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

import { createTheme, PaletteMode, Theme } from '@mui/material';

import { getDesignTokens } from './theme';

interface Props {
  children: ReactNode;
}

interface ThemeContextType {
  colorMode: {
    toggleMode: () => void;
  };
  theme: Theme;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('using useThemeContext outside ThemeContextProvider not allowed');
  }
  return context;
};

const useThemeContextProvider = () => {
  const [mode, setMode] = useState<PaletteMode>('dark');

  const colorMode = useMemo(
    () => ({
      toggleMode: () => {
        setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
      },
    }),
    [],
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return useMemo(
    () => ({
      theme,
      colorMode,
    }),
    [colorMode, theme],
  );
};

export const ThemeContextProvider = ({ children }: Props) => {
  const providerValue = useThemeContextProvider();
  return <ThemeContext.Provider value={providerValue}>{children}</ThemeContext.Provider>;
};

// export {};
