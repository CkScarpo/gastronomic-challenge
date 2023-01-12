/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/function-component-definition */
import { Button } from 'antd';
import React, { createContext, useState } from 'react';

export interface ThemeContextData {
  theme: 'light' | 'dark';
  themeToggler(): void;
}

export const ThemeContext = createContext<ThemeContextData>(
  {} as ThemeContextData,
);

export const ThemeButton = Button;

const THEME_KEY = '@fomeList:theme';

const ThemeProvider: React.FC<any> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const localTheme = localStorage.getItem(THEME_KEY);
    if (localTheme === 'light') return 'light';

    if (localTheme === undefined) return 'light';

    return 'dark';
  });
  const setMode = (mode: 'light' | 'dark') => {
    localStorage.setItem(THEME_KEY, mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    setMode(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <ThemeContext.Provider value={{ theme, themeToggler }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
