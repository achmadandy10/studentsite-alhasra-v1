/* eslint-disable react-hooks/rules-of-hooks */
import {
  Box,
  Image,
  Link as LinkChakra,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import type { ComponentProps, FC } from 'react';

type CardProps = ComponentProps<'div'> & {
  horizontal?: boolean;
  href?: string;
  imgAlt?: string;
  imgSrc?: string;
};

export const Card: FC<CardProps> = ({
  children,
  horizontal,
  href,
  imgAlt,
  imgSrc,
  ...props
}): JSX.Element => {
  return (
    <Box
      display={'flex'}
      flexDirection={{
        base: horizontal ? 'row' : 'column',
        md: horizontal ? 'row' : 'column',
      }}
      maxWidth={{ md: horizontal ? 'xl' : '' }}
      borderRadius={'lg'}
      background={useColorModeValue('#FEFEFE', '#0F0E0E')}
      boxShadow={'md'}
      {...props}
    >
      {href ? (
        <Link href={href}>
          <LinkChakra
            width={'100%'}
            _hover={{
              background: useColorModeValue('gray.100', 'gray.700'),
            }}
          >
            {imgSrc && (
              <Box paddingTop={4} paddingX={4}>
                <Image src={imgSrc} alt={imgAlt} borderRadius={'md'} />
              </Box>
            )}
            <Box
              display={'flex'}
              height={'full'}
              flexDirection={'column'}
              justifyContent={'center'}
              gap={2}
              padding={4}
            >
              {children}
            </Box>
          </LinkChakra>
        </Link>
      ) : (
        <>
          {imgSrc && (
            <Box paddingTop={4} paddingX={4}>
              <Image src={imgSrc} alt={imgAlt} borderRadius={'md'} />
            </Box>
          )}
          <Box
            display={'flex'}
            height={'full'}
            flexDirection={'column'}
            justifyContent={'center'}
            gap={2}
            padding={4}
          >
            {children}
          </Box>
        </>
      )}
    </Box>
  );
};
