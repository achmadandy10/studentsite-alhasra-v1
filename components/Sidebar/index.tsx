import { Box, useColorModeValue } from '@chakra-ui/react';
import { FC } from 'react';
import { SidebarFooter } from './SidebarFooter';
import { SidebarHeader } from './SidebarHeader';
import { SidebarItem } from './SidebarItem';
import { SidebarItems } from './SidebarItems';
import {
  IoBookOutline,
  IoHomeOutline,
  IoLogOutOutline,
  IoPencilOutline,
  IoPersonOutline,
  IoReceiptOutline,
  IoSchoolOutline,
} from 'react-icons/io5';
import { SidebarThemeToggleButton } from './SidebarThemeToggleButton';
import { SidebarItemGroup } from './SidebarItemGroup';
import styled from '@emotion/styled';
import { SidebarContext, SidebarContextProps } from './SidebarContext';

const Aside = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  padding: 10px 14px;
  transition: all 0.3s ease;
  z-index: 100;

  &.close {
    width: 88px;
  }

  &.close ~ .content {
    left: '78px';
    height: '100vh';
    width: 'calc(100% - 78px)';
  }
`;

const SidebarComponent: FC<SidebarContextProps> = ({
  isClosed,
  setIsClosed,
}) => {
  return (
    <SidebarContext.Provider value={{ isClosed, setIsClosed }}>
      <Aside
        background={useColorModeValue('#FEFEFE', '#0F0E0E')}
        className={isClosed ? 'close' : ''}
      >
        <SidebarHeader />

        <SidebarItems>
          <Box marginTop={'20px'}>
            <SidebarItemGroup>
              <SidebarItem href={'/'} icon={IoHomeOutline} label={'Beranda'} />
              <SidebarItem
                href={'/'}
                icon={IoSchoolOutline}
                label={'Akademik'}
              />
              <SidebarItem
                href={'/'}
                icon={IoReceiptOutline}
                label={'Blanko Pembayaran'}
              />
              <SidebarItem
                href={'/'}
                icon={IoBookOutline}
                label={'Perpustakaan'}
              />
              <SidebarItem
                href={'/'}
                icon={IoPencilOutline}
                label={'Surat Keterangan'}
              />
              <SidebarItem href={'/'} icon={IoPersonOutline} label={'Profil'} />
            </SidebarItemGroup>
          </Box>

          <SidebarFooter>
            <SidebarItem href={'/'} icon={IoLogOutOutline} label={'Logout'} />

            <SidebarThemeToggleButton />
          </SidebarFooter>
        </SidebarItems>
      </Aside>
    </SidebarContext.Provider>
  );
};

SidebarComponent.displayName = 'Sidebar';

export const Sidebar = Object.assign(SidebarComponent, {});
