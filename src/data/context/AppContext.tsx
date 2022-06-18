import { createContext, ReactNode, useState } from "react";

type Theme = 'dark' | '';

interface AppContextProps {
  theme: Theme;
  changeTheme: () => void;
}

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppContext = createContext<AppContextProps>({} as AppContextProps);

export function AppProvider({ children }: AppProviderProps) {
  const [theme, setTheme] = useState<Theme>('dark'); 

  function changeTheme() {
    setTheme(theme === '' ? 'dark': '');
  }

  return (
    <AppContext.Provider value={{ theme, changeTheme }}>
      {children}
    </AppContext.Provider>
  )
}