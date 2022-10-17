import { ComponentProps, FC } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { GridItem } from '../GridItem';

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 },
};

type LayoutContentProps = ComponentProps<'div'> & {
  title: string;
};

export const LayoutContent: FC<LayoutContentProps> = ({
  children,
  title,
}): JSX.Element => {
  return (
    <motion.div
      initial={'hidden'}
      animate={'enter'}
      exit={'exit'}
      variants={variants}
      transition={{
        duration: 0.4,
        type: 'easeInOut',
      }}
      style={{
        position: 'relative',
        marginTop: '1.75rem',
      }}
    >
      <>
        {title && (
          <Head>
            <title>{title} - Studentsite Al-Hasra</title>
          </Head>
        )}
        {children}
        <GridItem.Style />
      </>
    </motion.div>
  );
};
