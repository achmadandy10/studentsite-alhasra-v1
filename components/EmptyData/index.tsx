import { Container, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { ComponentProps, FC } from 'react';
import EmptyDataSVG from '../../media/svg/undraw_brainstorming_re_1lmw.svg';

type EmptyDataProps = ComponentProps<typeof Container> & {
  title: string;
  subtitle: string;
};

export const EmptyData: FC<EmptyDataProps> = ({
  title,
  subtitle,
  ...props
}) => {
  return (
    <Container {...props}>
      <Flex alignItems={'center'} justifyContent={'center'}>
        <Image
          src={EmptyDataSVG}
          alt={'Empty data SVG'}
          width={300}
          height={300}
        />
      </Flex>
      <Heading textAlign={'center'} as={'h1'}>
        {title}
      </Heading>
      <Text textAlign={'center'} marginTop={4}>
        {subtitle}
      </Text>
    </Container>
  );
};
