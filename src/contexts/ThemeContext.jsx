import React, { createContext, useEffect, useState } from 'react';
import idark from '../assets/moon.svg';
import ilight from '../assets/brightness.svg';

export const ThemeContext = createContext();

const getThemeStorage = () => {
  const storedTheme = localStorage.getItem('theme');
  return storedTheme ? storedTheme : 'light';
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getThemeStorage());
  
  const saveThemeStorage = (theme) => {
    localStorage.setItem('theme', theme);
  };

  useEffect(() => {
    saveThemeStorage(theme);
  }, [theme]);


  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const imgTheme = theme === 'light' ? ilight : idark;

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
    <ThemeContext.Provider value={{ theme, toggleTheme, imgTheme }}>
      <div style={themeStyles[theme]}>{children}</div>
    </ThemeContext.Provider>
  );
};
