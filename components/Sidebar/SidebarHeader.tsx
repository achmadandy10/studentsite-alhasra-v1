import {
  Box,
  Flex,
  IconButton,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Image from 'next/image';
import { FC } from 'react';
import { IoChevronForward, IoChevronBack } from 'react-icons/io5';
import { useSidebarContext } from './SidebarContext';
import Logo from '../../media/png/logo.png';

export const SidebarHeader: FC = () => {
  const { isClosed, setIsClosed } = useSidebarContext();

  return (
    <Box as={'header'} position={'relative'}>
      <Flex alignItems={'center'}>
        <Flex alignItems={'center'} justifyContent={'center'} minWidth={'60px'}>
          <Image src={Logo} alt={'Logo'} width={40} height={40} />
        </Flex>

        <Flex
          flexDirection={'column'}
          paddingLeft={3}
          opacity={isClosed ? 0 : 1}
        >
          <Text
            as={'span'}
            marginTop={'2px'}
            fontSize={'18px'}
            fontWeight={'semibold'}
          >
            Al-Hasra
          </Text>
          <Text
            as={'span'}
            fontSize={'16px'}
            marginTop={'-2px'}
            display={'block'}
          >
            Studentsite
          </Text>
        </Flex>

        <IconButton
          aria-label={'Toggle sidebar'}
          colorScheme={'none'}
          onClick={() => setIsClosed(!isClosed)}
          icon={isClosed ? <IoChevronForward /> : <IoChevronBack />}
          position={'absolute'}
          right={'-25px'}
          padding={0}
          height={'25px'}
          width={'25px'}
          minWidth={'none'}
          background={'oceanWavesNormal'}
          transition={'all 0.3 ease'}
          _hover={{
            background: useColorModeValue('oceanWavesBold', 'oceanWavesLight'),
          }}
        />
      </Flex>
    </Box>
  );
};
