import { List, useColorModeValue } from '@chakra-ui/react';
import type { ComponentProps, FC } from 'react';

export const SidebarFooter: FC<ComponentProps<'ul'>> = ({ children }) => {
  return (
    <List
      borderTop={'1px'}
      borderColor={useColorModeValue('gray.200', 'whiteAlpha.400')}
    >
      {children}
    </List>
  );
};
