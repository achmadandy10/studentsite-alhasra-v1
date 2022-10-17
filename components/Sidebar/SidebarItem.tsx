import {
  ListItem,
  Link as LinkChakra,
  Text,
  Icon,
  Box,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import type { ComponentProps, FC } from 'react';
import { useSidebarContext } from './SidebarContext';

type SidebarItemProps = ComponentProps<'li'> & {
  href: string;
  icon: FC<ComponentProps<'svg'>>;
  label: string;
};

export const SidebarItem: FC<SidebarItemProps> = ({ href, icon, label }) => {
  const { isClosed } = useSidebarContext();
  return (
    <ListItem
      height={'50px'}
      display={'flex'}
      alignItems={'center'}
      marginTop={'10px'}
    >
      <Link href={href}>
        <LinkChakra
          height={'100%'}
          background={'transparent'}
          display={'flex'}
          alignItems={'center'}
          width={'100%'}
          borderRadius={'lg'}
          color={useColorModeValue('gray.600', 'whiteAlpha.900')}
          _hover={{
            textDecoration: 'none',
            background: 'oceanWavesNormal',
            color: 'whiteAlpha.900',
          }}
          transition={'all 0.2 ease'}
        >
          <Box
            minWidth={'60px'}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Icon
              as={icon}
              borderRadius={'lg'}
              height={'100%'}
              width={'20px'}
            />
          </Box>
          <Text
            fontSize={'17px'}
            whiteSpace={'nowrap'}
            opacity={isClosed ? 0 : 1}
          >
            {label}
          </Text>
        </LinkChakra>
      </Link>
    </ListItem>
  );
};
