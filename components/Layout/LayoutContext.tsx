import { createContext, Dispatch, SetStateAction, useContext } from 'react';

export type LayoutContextProps = {
  isClosed: boolean;
  setIsClosed: Dispatch<SetStateAction<boolean>>;
};

export const LayoutContext = createContext<LayoutContextProps | undefined>(
  undefined,
);

export function useLayoutContext(): LayoutContextProps {
  const context = useContext(LayoutContext);

  if (!context) {
    throw new Error(
      'useLayoutContext should be used within the LayoutContext provider!',
    );
  }

  return context;
}
