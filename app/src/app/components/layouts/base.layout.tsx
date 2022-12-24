import type { PropsWithChildren } from 'react';

import {
  ContainerProps,
  Container,
  Box,
} from '@chakra-ui/react';

export const BaseLayout = ({
  children,
  ...props
}: PropsWithChildren<ContainerProps>) => (
  <Box
    transform="translateY(-50%)"
    overflowY="auto"
    pos="relative"
    maxH="100%"
    top="50%"
    py="30px"
    w="100%"
  >
    <Container
      {...props}
    >
      {children}
    </Container>
  </Box>
);
