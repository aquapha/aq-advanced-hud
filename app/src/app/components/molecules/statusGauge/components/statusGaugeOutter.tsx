import type { PropsWithChildren } from 'react';
import type { StatusGaugeOutterProps } from '../statusGauge.types';

import { Box, keyframes } from '@chakra-ui/react';

const blinkEffect = keyframes`
  from {opacity: 0.4;}
  to {opacity: 1}
`;

export const StatusGaugeOutter = ({
  gaugeBlinkSpeed,
  children,
}: PropsWithChildren<StatusGaugeOutterProps>) => (
  <Box
    border="2px solid"
    bgColor="rgba(0, 0, 0, 0.2)"
    justifyContent="center"
    borderColor="blue.300"
    overflow="hidden"
    pos="relative"
    display="flex"
    rounded="full"
    maxW="56px"
    maxH="56px"
    animation={
      gaugeBlinkSpeed
        ? `${blinkEffect} ${gaugeBlinkSpeed}s infinite alternate ease-in-out`
        : ''
    }
  >
    {children}
  </Box>
);
