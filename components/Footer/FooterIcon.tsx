import { Box, Link } from '@chakra-ui/react';
import type { ComponentProps, FC } from 'react';

type FooterIconProps = ComponentProps<'a'> & {
  href?: string;
  icon: FC<ComponentProps<'svg'>>;
};

export const FooterIcon: FC<FooterIconProps> = ({ href, icon: Icon }) => {
  return (
    <Box as={'div'}>
      {href ? (
        <Link href={href}>
          <Icon style={{ width: '1.25rem', height: '1.25rem' }} />
        </Link>
      ) : (
        <Icon />
      )}
    </Box>
  );
};
