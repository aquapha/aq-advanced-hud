import type { PropsWithChildren } from 'react';

import { Heading } from '@chakra-ui/react';

export const StatusRowStatusHeading = ({
  children,
}: PropsWithChildren) => (
  <Heading
    fontWeight="semibold"
    fontSize="18px"
    display="flex"
    flexGrow={100}
    color="gray"
    as="h3"
  >
    {children}
  </Heading>
);
