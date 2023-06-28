import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const themeStyles = {
    light: {
      backgroundColor: '#E6E7E7',
      color: '#1C1C1C',
    },
    dark: {
      backgroundColor: '#1C1C1C',
      color: '#E6E7E7',
    },
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={themeStyles[theme]}>{children}</div>
    </ThemeContext.Provider>
  );
}; 