import { createContext, Dispatch, SetStateAction, useContext } from 'react';

export type SidebarContextProps = {
  isClosed: boolean;
  setIsClosed: Dispatch<SetStateAction<boolean>>;
};

export const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined,
);

export function useSidebarContext(): SidebarContextProps {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error(
      'useSidebarContext should be used within the SidebarContext provider!',
    );
  }

  return context;
}
