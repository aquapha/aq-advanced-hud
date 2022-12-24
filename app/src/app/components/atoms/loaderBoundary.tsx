import type { FC, PropsWithChildren } from 'react';

import { Loader } from './loader';
import { Flex, FlexProps } from '@chakra-ui/react';
import { useAppStatus } from '@/contexts/sharedDataProvider/hooks/useAppStatus';

export const LoaderBoundary: FC<
PropsWithChildren<FlexProps>
> = ({
  children,
  ...props
}) => {
  const { loading } = useAppStatus();

  return (
    <Flex
      bgColor={loading ? 'rgba(0, 0, 0, 0.2)' : 'transparent'}
      zIndex={loading ? 'popover' : 1}
      justifyContent="center"
      alignItems="center"
      position="relative"
      w="100%"
      h="100%"
      {...props}
    >
      {loading ? (
        <Loader />
      ) : null}
      {children}
    </Flex>
  );
};
