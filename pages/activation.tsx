/* eslint-disable react/no-children-prop */
import {
  Box,
  Button,
  Container,
  FormControl,
  Heading,
  Input,
  Grid,
  Link as LinkChakra,
  useColorModeValue,
  Spinner,
  Flex,
  Text,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  GridItem,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  IoCalendarOutline,
  IoIdCardOutline,
  IoLocationOutline,
  IoLockClosedOutline,
  IoMailOutline,
  IoPersonOutline,
  IoPhonePortraitOutline,
} from 'react-icons/io5';
import { Layout, Section, ThemeToggleButton } from '../components';
import { useActivation } from '../hooks';

const Activation: NextPage = () => {
  const { form, handleChange, handleSubmit, isSubmit } = useActivation();

  return (
    <Layout.Content title={'Activation'}>
      <Container paddingX={0} maxWidth={'container.2xl'} height={'100vh'}>
        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', md: '30% 70%' }}
          height={'full'}
        >
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
                alt={'Activation svg'}
                width={250}
                height={250}
              />
            </Flex>
          </Container>
          <Section delay={0}>
            <Container
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'center'}
              maxWidth={'3xl'}
              height={'full'}
              paddingY={4}
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
                Membuat akun studentsite!
              </Heading>
              <Text marginTop={2} borderRadius={'lg'}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error,
                officia!
              </Text>
              <FormControl
                marginTop={10}
                as={'form'}
                onSubmit={handleSubmit}
                method={'POST'}
              >
                <SimpleGrid columns={[1, 1, 2]} gap={4}>
                  <GridItem>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents={'none'}
                        children={<IoIdCardOutline color={'gray.300'} />}
                      />
                      <Input
                        id={'nis'}
                        placeholder={'Masukkan NIS anda'}
                        name={'nis'}
                        onChange={handleChange}
                        value={form.nis}
                        variant={'form-input'}
                      />
                    </InputGroup>
                  </GridItem>
                  <GridItem>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents={'none'}
                        children={<IoPhonePortraitOutline color={'gray.300'} />}
                      />
                      <Input
                        id={'phoneNumber'}
                        type={'text'}
                        placeholder={'Masukkan nomor handphone anda'}
                        name={'phoneNumber'}
                        onChange={handleChange}
                        value={form.phoneNumber}
                        variant={'form-input'}
                      />
                    </InputGroup>
                  </GridItem>
                  <GridItem colSpan={{ base: 1, md: 2 }}>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents={'none'}
                        children={<IoMailOutline color={'gray.300'} />}
                      />
                      <Input
                        id={'email'}
                        type={'email'}
                        placeholder={'Masukkan email anda'}
                        name={'email'}
                        onChange={handleChange}
                        value={form.email}
                        variant={'form-input'}
                      />
                    </InputGroup>
                  </GridItem>
                  <GridItem>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents={'none'}
                        children={<IoLocationOutline color={'gray.300'} />}
                      />
                      <Input
                        id={'placeBorn'}
                        placeholder={'Masukkan tempat lahir anda'}
                        name={'placeBorn'}
                        onChange={handleChange}
                        value={form.placeBorn}
                        variant={'form-input'}
                      />
                    </InputGroup>
                  </GridItem>
                  <GridItem>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents={'none'}
                        children={<IoCalendarOutline color={'gray.300'} />}
                      />
                      <Input
                        id={'dateBorn'}
                        type={'dateBord'}
                        placeholder={'Masukkan tanggal lahir anda'}
                        name={'dateBorn'}
                        onChange={handleChange}
                        value={form.dateBorn}
                        variant={'form-input'}
                      />
                    </InputGroup>
                  </GridItem>
                  <GridItem>
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
                  </GridItem>
                  <GridItem>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents={'none'}
                        children={<IoLockClosedOutline color={'gray.300'} />}
                      />
                      <Input
                        id={'password'}
                        type={'password'}
                        placeholder={'Masukkan kata sandi'}
                        name={'password'}
                        onChange={handleChange}
                        value={form.password}
                        variant={'form-input'}
                      />
                    </InputGroup>
                  </GridItem>
                </SimpleGrid>
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
                    {isSubmit ? <Spinner /> : 'Daftar'}
                  </Button>
                  <Box
                    marginTop={4}
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                  >
                    <Text>
                      Sudah mempunyai akun?{' '}
                      <Link href={'/login'}>
                        <LinkChakra>Masuk</LinkChakra>
                      </Link>
                    </Text>
                  </Box>
                </Box>
              </FormControl>
            </Container>
          </Section>
        </Grid>
      </Container>
    </Layout.Content>
  );
};

export default Activation;
