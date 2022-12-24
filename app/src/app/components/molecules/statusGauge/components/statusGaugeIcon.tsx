import type { StatusIconProps } from '../statusGauge.types';

import { Box } from '@chakra-ui/react';
import { StatusNameToIcon } from './statusNameToIcon';
import { StatusValueToIcon } from './statusValueToIcon';

export const StatusGaugeIcon = ({
  iconIsValue,
  statusValue,
  statusName,
}: StatusIconProps) => (
  <Box
    fontSize="20px"
    pos="absolute"
    color="white"
    bottom="12px"
  >
    <StatusValueToIcon iconIsValue={iconIsValue} statusValue={statusValue} />
    <StatusNameToIcon iconIsValue={iconIsValue} statusName={statusName} />
  </Box>
);
