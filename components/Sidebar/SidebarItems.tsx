import { Box } from '@chakra-ui/react';
import type { ComponentProps, FC } from 'react';

export const SidebarItems: FC<ComponentProps<'div'>> = ({ children }) => {
  return (
    <Box
      height={'calc(100% - 55px)'}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'space-between'}
      overflowY={'scroll'}
      css={{
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      {children}
    </Box>
  );
};
