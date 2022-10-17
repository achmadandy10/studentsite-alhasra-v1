import { Box, Link as LinkChakra, Text } from '@chakra-ui/react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import type { ComponentProps, FC } from 'react';

type FooterBrandProps = ComponentProps<typeof Image> & {
  alt: string;
  href?: string;
  name?: string;
  src: string | StaticImageData;
};

export const FooterBrand: FC<FooterBrandProps> = ({
  alt,
  children,
  href = '/',
  name,
  src,
  ...props
}) => {
  return (
    <Box>
      {href ? (
        <Link href={href}>
          <LinkChakra
            marginBottom={{ base: 4, md: 0 }}
            display={'flex'}
            alignItems={'center'}
            color={'none'}
            _hover={{ textDecoration: 'none' }}
          >
            <Image src={src} alt={alt} {...props} />
            <Text
              as={'span'}
              marginLeft={3}
              alignSelf={'center'}
              whiteSpace={'nowrap'}
              fontSize={'2xl'}
              fontWeight={'bold'}
              fontFamily={'Poppins'}
              textTransform={'uppercase'}
            >
              {name}
            </Text>
            {children}
          </LinkChakra>
        </Link>
      ) : (
        <Image src={src} alt={alt} {...props} />
      )}
    </Box>
  );
};
