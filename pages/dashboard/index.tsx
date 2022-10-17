import { Container } from '@chakra-ui/react';
import { ReactElement } from 'react';
import { Layout } from '../../components';
import { NextPageWithLayout } from '../_app';

const Home: NextPageWithLayout = (): JSX.Element => {
  return <Container maxWidth={'container.lg'}>test</Container>;
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout.Dashboard>{page}</Layout.Dashboard>;
};

export default Home;
