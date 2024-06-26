import { createTheme, useMediaQuery } from '@mui/material';
import { useState, useMemo } from 'react';
import theme from './Theme';

export const useColorTheme = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  if (!localStorage.getItem('meetup-color-preference')) {
    localStorage.setItem(
      'meetup-color-preference',
      prefersDarkMode ? 'dark' : 'light'
    );
  }

  const initialState = localStorage.getItem('meetup-color-preference');
  const [mode, setMode] = useState(initialState || 'light');

  const toggleColorMode = () =>
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));

  const modifiedTheme = useMemo(
    () =>
      createTheme({
        ...theme,
        palette: {
          ...theme.palette,
          mode,
        },
      }),
    [mode]
  );

  return {
    theme: modifiedTheme,
    mode,
    toggleColorMode,
  };
};
