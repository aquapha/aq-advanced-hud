import type { ComponentStyleConfig } from '@chakra-ui/react';

export const Button: ComponentStyleConfig = {
  baseStyle: {
    transition: 'all 0.3s ease-in-out',
    _focus: { boxShadow: 'none' },
    borderRadius: 'none',
    lineHeight: 'unset',
    fontWeight: '600',
  },
  variants: {
    solid: {
      bgColor: 'whatsapp.400',
      borderRadius: '5px',
      w: 'fit-content',
      color: 'white',
      py: 4,
      px: 6,
      _hover: {
        bgColor: 'whatsapp.300',
      },
      _loading: {
        _hover: {
          bgColor: 'whatsapp.300',
        },
      },
    },
    anchor: {
      bg: 'transparent',
      color: 'white',
      w: '100%',
      py: 6,
      _hover: {
        bgColor: 'whatsapp.300',
        '& > span > svg': {
          stroke: 'blue.600',
        },
      },
    },
    cancel: {
      borderRadius: '5px',
      bgColor: 'red.400',
      w: 'fit-content',
      color: 'white',
      py: 4,
      px: 6,
      _hover: {
        bgColor: 'red.300',
        _disabled: {
          bgColor: 'red.300',
        },
      },
    },
    participantCutButton: {
      fontSize: '20px',
      px: '0',
      _hover: {
        color: 'blue.300',
      },
      _focus: {
        color: 'blue.300',
      },
    },
  },
};
