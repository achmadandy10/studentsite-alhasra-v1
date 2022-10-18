import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  SimpleGrid,
  Link as LinkChakra,
  useColorModeValue,
  Alert,
  AlertIcon,
  Spinner,
  Flex,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { Layout, Section } from '../components';
import { useLogin } from '../hooks';
import { NextPageWithLayout } from './_app';

const Login: NextPageWithLayout = () => {
  const { form, handleChange, handleSubmit, errors, isSubmit } = useLogin();

  return (
    <Layout.Content title={'Login'}>
      <Container paddingX={0} maxWidth={'container.2xl'} height={'100vh'}>
        <SimpleGrid
          columns={[1, 1, 2]}
          height={'full'}
          border={1}
          borderColor={'red.500'}
        >
          <Container
            height={'full'}
            maxWidth={'container.2xl'}
            background={'white'}
            display={{ base: 'none', md: 'block' }}
          >
            <Flex
              height={'full'}
              alignItems={'center'}
              justifyContent={'center'}
            >
              <Image
                src={'/images/svg/undraw_scrum_board_re_wk7v.svg'}
                alt={'Login svg'}
                width={350}
                height={350}
              />
            </Flex>
          </Container>
          <Section delay={0}>
            <Container
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'center'}
              height={'full'}
            >
              <Box
                display={{ base: 'flex', md: 'block' }}
                alignItems={'center'}
                justifyContent={'center'}
              >
                <Image
                  src={'/images/logo.png'}
                  alt={'Logo Al-Hasra'}
                  width={50}
                  height={50}
                />
              </Box>
              <Heading
                as={'h3'}
                fontSize={'2xl'}
                marginTop={4}
                borderRadius={'lg'}
              >
                Login
              </Heading>
              <Heading
                as={'h4'}
                fontSize={'md'}
                marginTop={2}
                borderRadius={'lg'}
              >
                Login
              </Heading>
              <FormControl
                marginTop={4}
                as={'form'}
                onSubmit={handleSubmit}
                method={'POST'}
              >
                {(errors.username || errors.password) && (
                  <Alert status="error" marginBottom={4} borderRadius={'lg'}>
                    <AlertIcon />
                    Username / Password salah.
                  </Alert>
                )}
                <Box>
                  <Box>
                    <FormLabel htmlFor={'username'}>Username</FormLabel>
                    <Input
                      id={'username'}
                      placeholder={'Masukkan username'}
                      name={'username'}
                      onChange={handleChange}
                      value={form.username}
                      variant={'form-input'}
                    />
                  </Box>
                  <Box marginTop={4}>
                    <FormLabel htmlFor={'password'}>Password</FormLabel>
                    <Input
                      id={'password'}
                      type={'password'}
                      placeholder={'Masukkan password'}
                      name={'password'}
                      onChange={handleChange}
                      value={form.password}
                      variant={'form-input'}
                    />
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
                    type={isSubmit ? 'button' : 'submit'}
                  >
                    {isSubmit ? <Spinner /> : 'Login'}
                  </Button>
                  <Link href={'/forgot-password'}>
                    <LinkChakra>Forgot Password?</LinkChakra>
                  </Link>
                </Box>
              </FormControl>
            </Container>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout.Content>
  );
};

export default Login;
