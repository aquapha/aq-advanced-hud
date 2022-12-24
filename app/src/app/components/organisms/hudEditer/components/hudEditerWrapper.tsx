import type { PropsWithChildren } from 'react';
import type { HUDEditerWrapperProps } from '../hudEditer.types';

import { useSharedData } from '@/contexts/sharedDataProvider/sharedDataProvider';

import {
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  Modal,
} from '@chakra-ui/react';

export const HUDEditerWrapper = ({
  children,
  ...props
}: PropsWithChildren<HUDEditerWrapperProps>) => {
  const { config } = useSharedData();

  return (
    <Modal
      {...props}
    >
      <ModalOverlay />

      <ModalContent>
        <ModalHeader>
          {config.LANGUAGE?.HUD_CONTROL}
        </ModalHeader>
        <ModalCloseButton
          fontSize="14px"
          color="red.300"
        />

        {children}
      </ModalContent>
    </Modal>
  );
};
