import type { ComponentStyleConfig } from '@chakra-ui/react';

export const Container: ComponentStyleConfig = {
  sizes: {
    base: {
      maxW: '800px',
    },
    md: {
      maxW: '1000px',
    },
    lg: {
      maxW: '1200px',
    },
    xl: {
      maxW: '1400px',
    },
    '2xl': {
      maxW: '1600px',
    },
  },
  defaultProps: {
    size: 'lg',
  },
};
