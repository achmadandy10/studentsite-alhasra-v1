import { ListItem, Link as LinkChakra } from '@chakra-ui/react';
import Link from 'next/link';
import type { ComponentProps, FC } from 'react';

type FooterLinkProps = ComponentProps<'a'> & {
  href: string;
};

export const FooterLink: FC<FooterLinkProps> = ({ children, href }) => {
  return (
    <ListItem _last={{ marginRight: 0 }} marginRight={{ md: 6 }}>
      <Link href={href}>
        <LinkChakra>{children}</LinkChakra>
      </Link>
    </ListItem>
  );
};
