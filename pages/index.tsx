import { Container } from '@chakra-ui/react';
import { Router } from 'next/router';
import { ReactElement } from 'react';
import { Layout } from '../components';
import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = (): JSX.Element => {
  return <Container maxWidth={'container.lg'}>test</Container>;
};

Home.getLayout = function getLayout(page: ReactElement, router: Router) {
  return <Layout.Main router={router}>{page}</Layout.Main>;
};

export default Home;
