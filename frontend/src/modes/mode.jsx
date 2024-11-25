import React, { useEffect, useState } from 'react';
import { TiAdjustBrightness, TiAdjustContrast } from "react-icons/ti";
import { Button } from '@mui/material';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Button onClick={toggleTheme}>
      {theme === 'light' 
      ? 
        <TiAdjustBrightness fontSize={20}/>
      :
        <TiAdjustContrast fontSize={20}/>
      }
    </Button>
  );
};

export default ThemeToggle;