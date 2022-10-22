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
import BadRequestSVG from '../media/svg/undraw_online_test_re_kyfx.svg';
import { NextPageWithLayout } from './_app';

const BadRequest: NextPageWithLayout = () => {
  return (
    <Container
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      flexDirection={'column'}
    >
      <Flex alignItems={'center'} justifyContent={'center'}>
        <Image
          src={BadRequestSVG}
          alt={'Bad request SVG'}
          width={300}
          height={300}
        />
      </Flex>
      <Heading textAlign={'center'} as={'h1'}>
        Permintaan Buruk
      </Heading>
      <Text textAlign={'center'} marginTop={4}>
        Anda telah mengirim permintaan yang buruk
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

BadRequest.getLayout = function getLayout(page: ReactElement, router: Router) {
  return <Layout.Main router={router}>{page}</Layout.Main>;
};

export default BadRequest;
