import { chakra, shouldForwardProp } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import type { ComponentProps, FC } from 'react';

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: props => {
    return shouldForwardProp(props) || props === 'transition';
  },
});

type SectionComponentProps = ComponentProps<'div'> & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  delay: any;
};

export const Section: FC<SectionComponentProps> = ({
  children,
  delay = 0,
}): JSX.Element => {
  return (
    <StyledDiv
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: '0.8', delay }}
      marginBottom={6}
    >
      {children}
    </StyledDiv>
  );
};
