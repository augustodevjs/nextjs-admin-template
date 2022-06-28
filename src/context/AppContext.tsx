import { createContext, useEffect, useState } from "react";


interface AppContextProps {
  theme: string;
  changeTheme: () => void;
}

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppContext = createContext<AppContextProps>({} as AppContextProps);

export function AppProvider({ children }: AppProviderProps) {
  const [theme, setTheme] = useState('dark'); 

  function changeTheme() {
    const newValueTheme = theme === '' ? 'dark': ''
    setTheme(newValueTheme);
    localStorage.setItem('theme', newValueTheme);
  }

  useEffect(() => {
    const themeValue = localStorage.getItem('theme');
    setTheme(themeValue);
  }, []); 

  return (
    <AppContext.Provider value={{ theme, changeTheme }}>
      {children}
    </AppContext.Provider>
  )
}