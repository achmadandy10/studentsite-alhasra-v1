import { ChakraProvider } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { Router } from 'next/router';
import { FC, ReactElement, ReactNode } from 'react';
import { Font } from '../components';
import { theme } from '../lib/theme';

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement, router: Router) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App: FC<AppPropsWithLayout> = ({
  Component,
  pageProps,
  router,
}): JSX.Element => {
  const getLayout = Component.getLayout ?? (page => page);
  return (
    <ChakraProvider theme={theme}>
      <Font />
      <AnimatePresence mode={'wait'} initial>
        {getLayout(<Component {...pageProps} key={router.route} />, router)}
      </AnimatePresence>
    </ChakraProvider>
  );
};

export default App;
