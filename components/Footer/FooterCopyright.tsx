import { Box, Link, Text } from '@chakra-ui/react';
import type { ComponentProps, FC } from 'react';

type FooterCopyrightProps = ComponentProps<'span'> & {
  href?: string;
  by: string;
  year?: number;
};

export const FooterCopyright: FC<FooterCopyrightProps> = ({
  href,
  by,
  year,
}) => {
  return (
    <Box as={'div'}>
      <Text as={'span'} fontSize={'sm'} textAlign={{ md: 'center' }}>
        &#169; {year}
        {href ? (
          <Link href={href} marginLeft={1}>
            {by}
          </Link>
        ) : (
          <Text as={'span'} marginLeft={1}>
            {by}
          </Text>
        )}
      </Text>
    </Box>
  );
};
