"use client";

import { createContext, ReactNode, useContext, useState } from "react";

type IUser = Record<string, any> | null;

interface AppContextType {
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser>(null);
  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

// hook for using context
export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};
