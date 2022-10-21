/* eslint-disable react-hooks/rules-of-hooks */
import {
  Container,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import axios from 'axios';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { Router } from 'next/router';
import { ReactElement } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Card,
  EmptyData,
  HotlineNews,
  Layout,
  Section,
} from '../../components';
import { NextPageWithLayout } from '../_app';

const News: NextPageWithLayout = ({
  dataHotline,
  dataNews,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log(dataHotline);
  console.log(dataNews);

  return (
    <Layout.Content title={'Berita'}>
      <Container maxWidth={'container.xl'} marginTop={4}>
        {dataHotline.length !== 0 && (
          <Swiper>
            <SwiperSlide>
              <HotlineNews />
            </SwiperSlide>
          </Swiper>
        )}
        <Heading as={'h3'} fontSize={'4xl'}>
          Berita
        </Heading>

        {dataNews.length !== 0 ? (
          <SimpleGrid columns={[1, 2, 4]} gap={6} marginTop={4}>
            <Section delay={0}>
              <Card
                imgSrc={'/images/dummy/dummy-news.jpg'}
                imgAlt={'Dummy Logo'}
              >
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
        ) : (
          <EmptyData
            marginBottom={4}
            title={'Tidak ada hasil yang ditemukan'}
            subtitle={
              'Kami tidak dapat menemukan apa yang Anda cari. coba cari lagi.'
            }
          />
        )}
      </Container>
    </Layout.Content>
  );
};

News.getLayout = function getLayout(page: ReactElement, router: Router) {
  return <Layout.Main router={router}>{page}</Layout.Main>;
};

export default News;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios.get('http://localhost:3000/api/news');
  const data = await res.data;

  if (data.code === 200) {
    const dataHotline = await res.data.data.hotline;
    const dataNews = await res.data.data.news;
    return {
      props: {
        dataHotline,
        dataNews,
      },
    };
  } else {
    return {
      props: {
        redirect: {
          destination: `/${data.code}`,
          permanent: false,
        },
      },
    };
  }
};
