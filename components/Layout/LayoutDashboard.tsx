import Head from 'next/head';
import { Box, Container } from '@chakra-ui/react';
import { ComponentProps, FC, useState } from 'react';
import { Sidebar } from '../Sidebar';
import { LayoutContext } from './LayoutContext';

export const LayoutDashboard: FC<ComponentProps<'div'>> = ({
  children,
}): JSX.Element => {
  const [isClosed, setIsClosed] = useState(false);

  return (
    <LayoutContext.Provider value={{ isClosed, setIsClosed }}>
      <Box as={'main'}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Dashboard Studentsite Al Hasra</title>
        </Head>

        <Sidebar isClosed={isClosed} setIsClosed={setIsClosed} />

        <Container
          paddingX={0}
          position={'absolute'}
          top={0}
          left={isClosed ? '88px' : '250px'}
          height={'100vh'}
          width={isClosed ? 'calc(100% - 78px)' : 'calc(100% - 250px)'}
          transition={'all 0.3s ease'}
        >
          {children}
        </Container>
      </Box>
    </LayoutContext.Provider>
  );
};
