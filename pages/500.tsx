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
import ErrorServerSVG from '../media/svg/undraw_server_down_s-4-lk.svg';
import { NextPageWithLayout } from './_app';

const ServerError: NextPageWithLayout = () => {
  return (
    <Container
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      flexDirection={'column'}
    >
      <Flex alignItems={'center'} justifyContent={'center'}>
        <Image
          src={ErrorServerSVG}
          alt={'Error server SVG'}
          width={300}
          height={300}
        />
      </Flex>
      <Heading textAlign={'center'} as={'h1'}>
        Ups! Terjadi kesalahan
      </Heading>
      <Text textAlign={'center'} marginTop={4}>
        Kami mohon maaf dan sedang memperbaiki masalah.
        <br />
        Silakan coba lagi di tahap selanjutnya.
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

ServerError.getLayout = function getLayout(page: ReactElement, router: Router) {
  return <Layout.Main router={router}>{page}</Layout.Main>;
};

export default ServerError;
