/* eslint-disable react-hooks/rules-of-hooks */
import { Link as LinkChakra, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';
import type { ComponentProps, FC } from 'react';

type NavbarLinkItemProps = ComponentProps<'a'> & {
  href: string;
  target?: string;
  path: string;
};

export const NavbarLinkItem: FC<NavbarLinkItemProps> = ({
  href,
  target,
  path,
  children,
  ...props
}): JSX.Element => {
  const active = path === href;
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900');
  return (
    <Link href={href}>
      <LinkChakra
        padding={2}
        background={active ? 'oceanWavesNormal' : undefined}
        color={active ? 'whiteAlpha.900' : inactiveColor}
        _hover={{
          textDecoration: 'none',
        }}
        borderRadius={'lg'}
        target={target}
        textTransform={'uppercase'}
        fontSize={'xs'}
        fontWeight={'semibold'}
        {...props}
      >
        {children}
      </LinkChakra>
    </Link>
  );
};
