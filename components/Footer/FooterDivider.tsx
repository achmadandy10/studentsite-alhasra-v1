import { Divider, useColorModeValue } from '@chakra-ui/react';
import type { FC } from 'react';

export const FooterDivider: FC = () => {
  return (
    <Divider
      width={'100%'}
      marginY={{ base: 6, md: 8 }}
      marginX={{ md: 'auto' }}
      borderColor={useColorModeValue('gray.900', 'whiteAlpha.900')}
    />
  );
};
