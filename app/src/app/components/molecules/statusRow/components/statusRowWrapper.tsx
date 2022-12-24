import type { PropsWithChildren } from 'react';

import { HStack } from '@chakra-ui/react';

export const StatusRowWrapper = ({
  children,
}: PropsWithChildren) => (
  <HStack
    alignItems="center"
    spacing={5}
    w="100%"
  >
    {children}
  </HStack>
);
