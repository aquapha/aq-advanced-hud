import type { ComponentStyleConfig } from '@chakra-ui/react';

export const Input: ComponentStyleConfig = {
  baseStyle: {
    field: {
      transition: 'all 0.3s ease-in-out',
    },
  },
  variants: {
    filled: {
      field: {
        bgColor: 'main.500',
        border: 'none',
        _hover: {
          bgColor: 'main.600',
        },
        _focus: {
          bgColor: 'main.600',
        },
      },
    },
  },
};
