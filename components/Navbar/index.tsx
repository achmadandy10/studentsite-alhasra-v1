import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Link as LinkChakra,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import type { ComponentProps, FC } from 'react';
import { Logo } from '../Logo';
import { ThemeToggleButton } from '../ThemeToggleButton';
import { NavbarLinkItem } from './NavbarLinkItem';

type NavbarComponentProps = ComponentProps<'div'> & {
  path: string;
};

export const NavbarComponent: FC<NavbarComponentProps> = ({
  path,
  ...props
}): JSX.Element => {
  return (
    <Box
      as={'nav'}
      position={'fixed'}
      width={'100%'}
      background={useColorModeValue('#FEFEFE', '#0F0E0E')}
      backdropFilter={'blur(10px)'}
      zIndex={1}
      {...props}
    >
      <Container
        display={'flex'}
        padding={2}
        maxWidth={'container.xl'}
        flexWrap={'wrap'}
        alignItems={'center'}
        justifyContent={'space-between'}
        height={20}
      >
        <Flex alignItems={'center'} marginRight={5}>
          <Heading as={'h1'} size={'lg'} letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          justifyContent={{ md: 'end' }}
          alignItems={'center'}
          flexGrow={1}
          marginTop={{ base: 4, nmd: 0 }}
        >
          <NavbarLinkItem href={'/'} path={path}>
            Home
          </NavbarLinkItem>
          <NavbarLinkItem href={'/news'} path={path}>
            Berita
          </NavbarLinkItem>
          <NavbarLinkItem href={'/activation'} path={path}>
            Aktivasi
          </NavbarLinkItem>
          <NavbarLinkItem href={'/login'} path={path}>
            Login
          </NavbarLinkItem>
          <NavbarLinkItem href={'/contact'} path={path}>
            Kontak
          </NavbarLinkItem>
        </Stack>

        <Box marginLeft={5} textAlign={'right'}>
          <ThemeToggleButton />

          <Box marginLeft={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant={'outline'}
                aria-label={'Options'}
              />
              <MenuList>
                <Link href={'/'} passHref>
                  <MenuItem as={LinkChakra}>Home</MenuItem>
                </Link>
                <Link href={'/news'} passHref>
                  <MenuItem as={LinkChakra}>News</MenuItem>
                </Link>
                <Link href={'/activation'} passHref>
                  <MenuItem as={LinkChakra}>Activation</MenuItem>
                </Link>
                <Link href={'/login'} passHref>
                  <MenuItem as={LinkChakra}>Login</MenuItem>
                </Link>
                <Link href={'/contact'} passHref>
                  <MenuItem as={LinkChakra}>Contact</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

NavbarComponent.displayName = 'Navbar';

export const Navbar = Object.assign(NavbarComponent, {
  LinkItem: NavbarLinkItem,
});
