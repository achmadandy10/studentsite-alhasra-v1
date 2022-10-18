import {
  Container,
  Heading,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';
import { Router } from 'next/router';
import { ReactElement } from 'react';
import { Layout } from '../components';
import { NextPageWithLayout } from './_app';

const Contact: NextPageWithLayout = () => {
  return (
    <Layout.Content title={'Kontak'}>
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
          Kontak
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          test
        </SimpleGrid>
      </Container>
    </Layout.Content>
  );
};

Contact.getLayout = function getLayout(page: ReactElement, router: Router) {
  return <Layout.Main router={router}>{page}</Layout.Main>;
};

export default Contact;
