import {
  Box,
  Container,
  Grid,
  GridItem,
  useColorModeValue,
} from '@chakra-ui/react';
import type { ComponentProps, FC } from 'react';
import { FooterBrand } from './FooterBrand';
import { FooterCopyright } from './FooterCopyright';
import { FooterDivider } from './FooterDivider';
import { FooterIcon } from './FooterIcon';
import { FooterLink } from './FooterLink';
import { FooterLinkGroup } from './FooterLinkGroup';
import { FooterTitle } from './FooterTitle';
import { IoLogoFacebook, IoLogoInstagram } from 'react-icons/io5';

const FooterComponent: FC<ComponentProps<'div'>> = ({ ...props }) => {
  return (
    <Box
      as={'footer'}
      width={'100%'}
      background={useColorModeValue('#FEFEFE', '#0F0E0E')}
      backdropFilter={'blur(10px)'}
      {...props}
    >
      <Container
        maxWidth={'container.lg'}
        display={{ md: 'flex' }}
        alignItems={{ md: 'center' }}
        justifyContent={{ md: 'space-between' }}
        padding={6}
      >
        <Box width={'100%'}>
          <Box
            display={{ base: 'grid', md: 'flex' }}
            justifyContent={'space-between'}
            gridColumn={1}
          >
            <Box>
              <FooterBrand
                src={'/images/logo.png'}
                alt={'Logo'}
                width={50}
                height={50}
                name={'Al-Hasra'}
              />
            </Box>
            <Grid
              templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
              gap={{ base: 8, md: 6 }}
              marginTop={{ md: 4 }}
            >
              <GridItem>
                <FooterTitle title={'Tentang'} />
                <FooterLinkGroup>
                  <FooterLink href={'/'}>Menu 1</FooterLink>
                  <FooterLink href={'/'}>Menu 2</FooterLink>
                </FooterLinkGroup>
              </GridItem>
              <GridItem>
                <FooterTitle title={'Kontak'} />
                <FooterLinkGroup>
                  <FooterLink href={'/'}>Menu 1</FooterLink>
                  <FooterLink href={'/'}>Menu 2</FooterLink>
                </FooterLinkGroup>
              </GridItem>
              <GridItem>
                <FooterTitle title={'Legal'} />
                <FooterLinkGroup>
                  <FooterLink href={'/'}>Menu 1</FooterLink>
                  <FooterLink href={'/'}>Menu 2</FooterLink>
                </FooterLinkGroup>
              </GridItem>
            </Grid>
          </Box>

          <FooterDivider />

          <Box
            width={'100%'}
            display={{ md: 'flex' }}
            alignItems={{ md: 'center' }}
            justifyContent={{ md: 'space-between' }}
          >
            <FooterCopyright href={'/'} by={'Al-Hasra'} year={2022} />

            <Box
              marginTop={{ base: 4, md: 0 }}
              gap={3}
              display={'flex'}
              justifyContent={{ md: 'center' }}
            >
              <FooterIcon href={'/'} icon={IoLogoFacebook} />
              <FooterIcon href={'/'} icon={IoLogoInstagram} />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

FooterComponent.displayName = 'Footer';

export const Footer = Object.assign(FooterComponent, {
  Copyright: FooterCopyright,
  Link: FooterLink,
  LinkGroup: FooterLinkGroup,
  Brand: FooterBrand,
  Icon: FooterIcon,
  Title: FooterTitle,
  Divider: FooterDivider,
});
