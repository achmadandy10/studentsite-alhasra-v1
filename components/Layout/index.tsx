import { Box } from '@chakra-ui/react';
import type { ComponentProps, FC } from 'react';
import { LayoutContent } from './LayoutContent';
import { LayoutMain } from './LayoutMain';

const LayoutComponent: FC<ComponentProps<'div'>> = ({
  children,
}): JSX.Element => {
  return <Box as={'div'}>{children}</Box>;
};

LayoutComponent.displayName = 'Layout';

export const Layout = Object.assign(LayoutComponent, {
  Main: LayoutMain,
  Content: LayoutContent,
});
