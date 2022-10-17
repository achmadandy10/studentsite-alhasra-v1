import { List } from '@chakra-ui/react';
import type { ComponentProps, FC } from 'react';

export const SidebarItemGroup: FC<ComponentProps<'ul'>> = ({ children }) => {
  return <List>{children}</List>;
};
