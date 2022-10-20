/* eslint-disable react/no-children-prop */
import {
  Box,
  Button,
  Container,
  FormControl,
  Heading,
  Input,
  SimpleGrid,
  Link as LinkChakra,
  useColorModeValue,
  Spinner,
  Flex,
  Text,
  InputGroup,
  InputLeftElement,
  useToast,
  useMediaQuery,
  InputRightElement,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  IoEyeOffOutline,
  IoEyeOutline,
  IoLockClosedOutline,
  IoPersonOutline,
} from 'react-icons/io5';
import { Layout, Section, ThemeToggleButton } from '../components';
import { useLogin } from '../hooks';

const Login: NextPage = () => {
  const { form, handleChange, handleSubmit, errors, isSubmit } = useLogin();
  const toast = useToast();
  const [isLargeThan768] = useMediaQuery('(min-width: 768px)');
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  useEffect(() => {
    if ((errors.username || errors.password) !== undefined) {
      const id = 'login-failed';
      if (!toast.isActive(id)) {
        toast({
          id,
          title: 'Username / Kata sandi salah',
          status: 'error',
          position: isLargeThan768 ? 'bottom-right' : 'bottom',
        });
      }
    }
  }, [errors, toast, isLargeThan768]);

  return (
    <Layout.Content title={'Login'}>
      <Container paddingX={0} maxWidth={'container.2xl'} height={'100vh'}>
        <SimpleGrid columns={[1, 1, 2]} height={'full'}>
          <Container
            height={'full'}
            maxWidth={'container.2xl'}
            background={useColorModeValue('#FEFEFE', '#0F0E0E')}
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
                priority
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
              <Flex alignItems={'center'} justifyContent={'space-between'}>
                <Box>
                  <Image
                    src={'/images/logo.png'}
                    alt={'Logo Al-Hasra'}
                    width={50}
                    height={50}
                  />
                </Box>
                <ThemeToggleButton />
              </Flex>
              <Heading
                as={'h3'}
                fontSize={'2xl'}
                marginTop={4}
                borderRadius={'lg'}
              >
                Hai, selamat datang kembali!
              </Heading>
              <Text marginTop={2} borderRadius={'lg'}>
                Lorem ipsum dolor sit amet.
              </Text>
              <FormControl
                marginTop={10}
                as={'form'}
                onSubmit={handleSubmit}
                method={'POST'}
              >
                <Box>
                  <Box>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents={'none'}
                        children={<IoPersonOutline color={'gray.300'} />}
                      />
                      <Input
                        id={'username'}
                        placeholder={'Masukkan username'}
                        name={'username'}
                        onChange={handleChange}
                        value={form.username}
                        variant={'form-input'}
                      />
                    </InputGroup>
                  </Box>
                  <Box marginTop={4}>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents={'none'}
                        children={<IoLockClosedOutline color={'gray.300'} />}
                      />
                      <Input
                        id={'password'}
                        type={show ? 'text' : 'password'}
                        placeholder={'Masukkan kata sandi'}
                        name={'password'}
                        onChange={handleChange}
                        value={form.password}
                        variant={'form-input'}
                      />
                      <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                          {show ? <IoEyeOutline /> : <IoEyeOffOutline />}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  </Box>
                  <Box
                    marginTop={4}
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'end'}
                  >
                    <Link href={'/forgot-password'}>
                      <LinkChakra>Lupa kata sandi?</LinkChakra>
                    </Link>
                  </Box>
                </Box>
                <Box marginTop={10}>
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
                    {isSubmit ? <Spinner /> : 'Masuk'}
                  </Button>
                  <Box
                    marginTop={4}
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                  >
                    <Text>
                      Belum mempunyai akun?{' '}
                      <Link href={'/activation'}>
                        <LinkChakra>Daftar</LinkChakra>
                      </Link>
                    </Text>
                  </Box>
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
