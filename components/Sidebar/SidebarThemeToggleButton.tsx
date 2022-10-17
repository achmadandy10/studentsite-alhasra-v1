import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Icon,
  Switch,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import type { FC } from 'react';
import { useSidebarContext } from './SidebarContext';

export const SidebarThemeToggleButton: FC = () => {
  const { toggleColorMode } = useColorMode();
  const { isClosed } = useSidebarContext();

  return (
    <Flex
      borderRadius={'lg'}
      background={useColorModeValue('gray.200', 'gray.900')}
      position={'relative'}
      height={'50px'}
      display={'flex'}
      alignItems={'center'}
      marginTop={'10px'}
    >
      <Box
        minWidth={'60px'}
        display={isClosed ? 'none' : 'flex'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <AnimatePresence mode={'wait'} initial={false}>
          <motion.div
            key={useColorModeValue('light', 'dark')}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Icon
              aria-label={'Toggle theme'}
              color={useColorModeValue('gray', 'orange')}
              as={useColorModeValue(MoonIcon, SunIcon)}
            />
          </motion.div>
        </AnimatePresence>
      </Box>

      <Text
        as={'span'}
        fontSize={'17px'}
        whiteSpace={'nowrap'}
        display={isClosed ? 'none' : 'flex'}
      >
        {useColorModeValue('Dark', 'Light')} Mode
      </Text>

      <Box
        minWidth={'60px'}
        height={'100%'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Switch onChange={toggleColorMode} />
      </Box>
    </Flex>
  );
};
