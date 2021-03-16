import { createContext, ReactNode, useState } from "react";

interface AppProviderProps {
  children: ReactNode;
}

interface AppContextData {
  selectedGenreId: number;
  handleClickButton: (id: number) => void;
}

export const AppContext = createContext({} as AppContextData)

export function AppProvider({ children }: AppProviderProps) {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  
  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <AppContext.Provider value={{ selectedGenreId, handleClickButton }} >
      {children}
    </AppContext.Provider>
  )
}