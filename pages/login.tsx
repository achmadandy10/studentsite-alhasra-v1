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
} from '@chakra-ui/react';
import Link from 'next/link';
import { Router } from 'next/router';
import { ReactElement } from 'react';
import { Layout, Section } from '../components';
import { NextPageWithLayout } from './_app';

const Login: NextPageWithLayout = () => {
  return (
    <Layout.Content title={'Login'}>
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
          Login
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0}>
            <FormControl>
              <Box>
                <Box>
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
                  Login
                </Button>
                <Link href={'/forgot-password'}>
                  <LinkChakra>Forgot Password?</LinkChakra>
                </Link>
              </Box>
            </FormControl>
          </Section>
          <Section delay={0}>
            <Text>
              <Badge colorScheme={'yellow'} textTransform={'capitalize'}>
                Perhatian!
              </Badge>{' '}
              Silahkan login pada form yang telah disediakan pada form di
              samping ini. Apabila anda mengalami kesulitan silahkan hubungi{' '}
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

Login.getLayout = function getLayout(page: ReactElement, router: Router) {
  return <Layout.Main router={router}>{page}</Layout.Main>;
};

export default Login;
