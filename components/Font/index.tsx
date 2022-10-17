import type { FC } from 'react';

export const Font: FC = (): JSX.Element => (
  // eslint-disable-next-line react/no-unknown-property
  <style jsx global>{`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
  `}</style>
);
