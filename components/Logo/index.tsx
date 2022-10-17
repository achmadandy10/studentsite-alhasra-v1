import { Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
`;

export const Logo = (): JSX.Element => {
  const Img = '/images/logo.png';

  return (
    <Link href={'/'}>
      <a>
        <LogoBox>
          <Image src={Img} alt={'Logo'} width={50} height={50} />
          <Text
            fontFamily={'Poppins'}
            fontWeight={'bold'}
            marginLeft={3}
            fontSize={'2xl'}
          >
            AL-HASRA
          </Text>
        </LogoBox>
      </a>
    </Link>
  );
};
