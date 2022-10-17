import { List } from '@chakra-ui/react';
import type { ComponentProps, FC } from 'react';

export const FooterLinkGroup: FC<ComponentProps<'ul'>> = ({ children }) => {
  return (
    <List
      display={'flex'}
      flexWrap={'wrap'}
      fontSize={'sm'}
      flexDirection={'column'}
      marginTop={1}
    >
      {children}
    </List>
  );
};
