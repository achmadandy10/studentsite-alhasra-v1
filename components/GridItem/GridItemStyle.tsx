import { Global } from '@emotion/react';
import { FC } from 'react';

export const GridItemStyle: FC = (): JSX.Element => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
);
