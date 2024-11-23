import React, { useEffect, useState } from 'react';
import { TiAdjustBrightness, TiAdjustContrast } from "react-icons/ti";

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
    <button onClick={toggleTheme}>
      {theme === 'light' 
      ? 
        <TiAdjustBrightness fontSize={20}/>
      :
        <TiAdjustContrast fontSize={20}/>
      }
    </button>
  );
};

export default ThemeToggle;