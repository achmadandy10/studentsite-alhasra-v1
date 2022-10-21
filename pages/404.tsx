import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { Router } from 'next/router';
import { ReactElement } from 'react';
import { Layout } from '../components';
import NotFoundSVG from '../media/svg/undraw_page_not_found_re_e9o6.svg';
import { NextPageWithLayout } from './_app';

const NotFound: NextPageWithLayout = () => {
  return (
    <Container
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      flexDirection={'column'}
    >
      <Flex alignItems={'center'} justifyContent={'center'}>
        <Image
          src={NotFoundSVG}
          alt={'Not found SVG'}
          width={300}
          height={300}
        />
      </Flex>
      <Heading textAlign={'center'} as={'h1'}>
        Tidak ditemukan
      </Heading>
      <Text textAlign={'center'} marginTop={4}>
        Halaman yang Anda cari tidak ditemukan.
      </Text>
      <Divider marginY={6} />
      <Box
        marginY={6}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Link href={'/'} passHref>
          <Button
            background={'oceanWavesNormal'}
            _hover={{
              background: 'oceanWavesBold',
              _dark: { background: 'oceanWavesLight' },
            }}
            color={useColorModeValue('#f0e7db', '#202023')}
          >
            Kembali
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

NotFound.getLayout = function getLayout(page: ReactElement, router: Router) {
  return <Layout.Main router={router}>{page}</Layout.Main>;
};

export default NotFound;
