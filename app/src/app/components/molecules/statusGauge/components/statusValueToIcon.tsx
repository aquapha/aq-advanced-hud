import type { StatusIconProps } from '../statusGauge.types';

import { Text } from '@chakra-ui/react';

export const StatusValueToIcon = ({
  iconIsValue,
  statusValue,
}: Omit<StatusIconProps, 'statusName'>) => (
  <>
    {iconIsValue && (
      <Text
        fontSize="16px"
      >
        {statusValue}
      </Text>
    )}
  </>
);
