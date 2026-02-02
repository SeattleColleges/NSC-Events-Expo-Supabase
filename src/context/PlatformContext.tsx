import React, { createContext, useContext } from 'react';
import { Platform } from 'react-native';

type PlatformContextType = typeof Platform.OS;

export const PlatformContext = createContext<PlatformContextType | undefined>(undefined);

export function PlatformProvider({ children }: { children: React.ReactNode }) {
  return (
    <PlatformContext.Provider value={Platform.OS}>
      {children}
    </PlatformContext.Provider>
  );
}

export function usePlatform() {
  const context = useContext(PlatformContext);
  if (context === undefined) {
    throw new Error('usePlatform must be used within a PlatformProvider');
  }
  return context;
}
