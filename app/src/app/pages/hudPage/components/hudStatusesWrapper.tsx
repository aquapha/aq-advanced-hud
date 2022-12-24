import type { PropsWithChildren } from 'react';

import { Flex } from '@chakra-ui/react';

export const HudStatusesWrapper = ({
  children,
}: PropsWithChildren) => (
  <Flex
    justifyContent="center"
    alignSelf="flex-end"
    zIndex="popover"
    h="fit-content"
    pos="relative"
    bottom="0px"
    gap="10px"
    pb="10px"
    pr="20px"
    w="100%"
  >
    {children}
  </Flex>
);
