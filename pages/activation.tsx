import {
  Badge,
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  SimpleGrid,
  Text,
  Link as LinkChakra,
  useColorModeValue,
  Divider,
} from '@chakra-ui/react';
import Link from 'next/link';
import { Router } from 'next/router';
import { ReactElement } from 'react';
import { Layout, Section } from '../components';
import { NextPageWithLayout } from './_app';

const Activation: NextPageWithLayout = () => {
  return (
    <Layout.Content title={'Aktivasi'}>
      <Container maxWidth={'container.lg'}>
        <Heading
          as={'h3'}
          fontSize={20}
          marginBottom={4}
          borderRadius={'lg'}
          padding={5}
          background={useColorModeValue('embersGray', 'embersGray')}
          color={'whiteAlpha.900'}
        >
          Aktivasi
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0}>
            <FormControl>
              <Box>
                <Box>
                  <FormLabel>NIS</FormLabel>
                  <Input variant={'form-input'} />
                </Box>
                <Box marginTop={4}>
                  <FormLabel>Tempat Lahir</FormLabel>
                  <Input variant={'form-input'} />
                </Box>
                <Box marginTop={4}>
                  <FormLabel>Tanggal Lahir</FormLabel>
                  <Input variant={'form-input'} />
                </Box>
                <Box marginTop={4}>
                  <FormLabel>Email</FormLabel>
                  <Input variant={'form-input'} />
                </Box>
                <Box marginTop={4}>
                  <FormLabel>Nomor Handphone</FormLabel>
                  <Input variant={'form-input'} />
                </Box>
                <Box marginTop={4}>
                  <FormLabel>Username</FormLabel>
                  <Input variant={'form-input'} />
                </Box>
                <Box marginTop={4}>
                  <FormLabel>Password</FormLabel>
                  <Input variant={'form-input'} />
                </Box>
              </Box>
              <Box
                marginTop={4}
                display={'flex'}
                flexDirection={'column'}
                gap={4}
              >
                <Button
                  width={'100%'}
                  background={'oceanWavesNormal'}
                  _hover={{
                    background: 'oceanWavesBold',
                    _dark: { background: 'oceanWavesLight' },
                  }}
                  color={useColorModeValue('#f0e7db', '#202023')}
                  type={'submit'}
                >
                  Daftar
                </Button>
              </Box>
            </FormControl>
          </Section>
          <Section delay={0}>
            <Text>
              <Badge colorScheme={'yellow'} textTransform={'capitalize'}>
                Perhatian!
              </Badge>{' '}
              Untuk dapat melakukan aktivasi akun student site anda, silahkan
              isi data pada kolom disamping ini.
              <br />
              <br />
              Pastikan data yang anda masukkan sesuai dengan data yang anda
              berikan ketika melakukan pendaftaran mahasiswa baru. Perubahan
              data dapat dilakukan pada saat isi KRS atau Daftar Ulang.
              <br />
              <br />
              Pastikan alamat email yang dimasukkan aktif, karena apabila anda
              lupa password maka informasi nya akan dikirimkan melalui alamat
              email tersebut.
            </Text>
            <Divider
              width={'100%'}
              marginY={{ base: 6, md: 8 }}
              marginX={{ md: 'auto' }}
              borderColor={useColorModeValue('gray.900', 'whiteAlpha.900')}
            />
            <Text>
              Kesulitan dalam melakukan aktivasi ? silahkan klik link berikut
              ini :{' '}
              <Link href={''}>
                <LinkChakra>Help Desk</LinkChakra>
              </Link>
              .
            </Text>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout.Content>
  );
};

Activation.getLayout = function getLayout(page: ReactElement, router: Router) {
  return <Layout.Main router={router}>{page}</Layout.Main>;
};

export default Activation;
