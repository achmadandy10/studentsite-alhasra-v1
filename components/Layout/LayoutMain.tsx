import Head from 'next/head';
import { Box, Container } from '@chakra-ui/react';
import type { ComponentProps, FC } from 'react';
import { Router } from 'next/router';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';

type LayoutMainProps = ComponentProps<'div'> & {
  router: Router;
};

export const LayoutMain: FC<LayoutMainProps> = ({
  children,
  router,
}): JSX.Element => {
  return (
    <Box as={'main'}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Studentsite Al Hasra</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxWidth={'full'} paddingX={0} paddingTop={20}>
        {children}
      </Container>

      <Footer />
    </Box>
  );
};
