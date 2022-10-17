import dynamic from 'next/dynamic';
import type { ComponentProps, FC, Fragment } from 'react';

const NoSSR: FC<ComponentProps<typeof Fragment>> = ({
  children,
}): JSX.Element => <>{children}</>;

export default dynamic(() => Promise.resolve(NoSSR), {
  ssr: false,
});
