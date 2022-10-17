import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, extendTheme } from '@chakra-ui/react';
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: mode('#F2F2F2', '#202023')(props),
    },
  }),
};

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  Link: {
    baseStyle: (props: StyleFunctionProps) => ({
      color: mode('#189AB4', '#189AB4')(props),
      textUnderlineOffset: 3,
    }),
  },
  Input: defineMultiStyleConfig({
    baseStyle: (props: StyleFunctionProps) => {
      return definePartsStyle({
        field: {
          fontFamily: 'mono',
          backgroundColor: mode('whiteAlpha.900', 'whiteAlpha.200')(props),
        },
      });
    },
  }),
};

const fonts = {
  heading: "'Poppins'",
};

const colors = {
  oceanWavesLighter: '#D4F2F4',
  oceanWavesLight: '#74E7DA',
  oceanWavesNormal: '#189AB4',
  oceanWavesBold: '#04445F',
  embersOrange: '#FF9677',
  embersRed: '#F54768',
  embersBrown: '#974063',
  embersGray: '#41436A',
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

export const theme = extendTheme({
  config,
  styles,
  components,
  colors,
  fonts,
});
