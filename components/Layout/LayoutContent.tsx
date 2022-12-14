import { ComponentProps, FC } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';

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
      }}
    >
      <>
        {title && (
          <Head>
            <title>{title} - Studentsite Al-Hasra</title>
          </Head>
        )}
        {children}
      </>
    </motion.div>
  );
};
