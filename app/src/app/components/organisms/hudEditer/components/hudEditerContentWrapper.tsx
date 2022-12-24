import type { PropsWithChildren } from 'react';

import { VStack } from '@chakra-ui/react';

export const HUDEditerContentWrapper = ({
  children,
}: PropsWithChildren) => (
  <VStack>
    {children}
  </VStack>
);
