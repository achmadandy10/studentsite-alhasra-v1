import {
  Container,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Router } from 'next/router';
import { ReactElement } from 'react';
import { Card, Layout, Section } from '../components';
import { NextPageWithLayout } from './_app';

const News: NextPageWithLayout = () => {
  return (
    <Layout.Content title={'Berita'}>
      <Container maxWidth={'container.xl'}>
        <Heading
          as={'h3'}
          fontSize={20}
          marginBottom={4}
          borderRadius={'lg'}
          padding={5}
          background={useColorModeValue('embersGray', 'embersGray')}
          color={'whiteAlpha.900'}
        >
          Berita
        </Heading>

        <SimpleGrid columns={[1, 2, 3]} gap={6}>
          <Section delay={0}>
            <Card imgSrc={'/images/dummy/dummy-news.jpg'} imgAlt={'Dummy Logo'}>
              <Heading
                as={'h5'}
                fontSize={'xl'}
                fontWeight={'bold'}
                letterSpacing={'tight'}
              >
                Berita 1
              </Heading>
              <Text
                fontWeight={'normal'}
                color={useColorModeValue('gray.700', 'gray.400')}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                iure, distinctio cupiditate enim laudantium beatae.
              </Text>
            </Card>
          </Section>
          <Section delay={0}>
            <Card imgSrc={'/images/dummy/dummy-news.jpg'} imgAlt={'Dummy Logo'}>
              <Heading
                as={'h5'}
                fontSize={'xl'}
                fontWeight={'bold'}
                letterSpacing={'tight'}
              >
                Berita 1
              </Heading>
              <Text
                fontWeight={'normal'}
                color={useColorModeValue('gray.700', 'gray.400')}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                iure, distinctio cupiditate enim laudantium beatae.
              </Text>
            </Card>
          </Section>
          <Section delay={0}>
            <Card imgSrc={'/images/dummy/dummy-news.jpg'} imgAlt={'Dummy Logo'}>
              <Heading
                as={'h5'}
                fontSize={'xl'}
                fontWeight={'bold'}
                letterSpacing={'tight'}
              >
                Berita 1
              </Heading>
              <Text
                fontWeight={'normal'}
                color={useColorModeValue('gray.700', 'gray.400')}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                iure, distinctio cupiditate enim laudantium beatae.
              </Text>
            </Card>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout.Content>
  );
};

News.getLayout = function getLayout(page: ReactElement, router: Router) {
  return <Layout.Main router={router}>{page}</Layout.Main>;
};

export default News;
