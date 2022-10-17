import { Heading } from '@chakra-ui/react';
import type { ComponentProps, FC } from 'react';

type FooterTitleProps = ComponentProps<'h2'> & {
  title: string;
};

export const FooterTitle: FC<FooterTitleProps> = ({ title }) => {
  return (
    <Heading
      as={'h2'}
      marginBottom={6}
      fontSize={'sm'}
      fontWeight={'semibold'}
      textTransform={'uppercase'}
    >
      {title}
    </Heading>
  );
};
