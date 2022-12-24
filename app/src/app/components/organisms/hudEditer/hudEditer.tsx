import type { InitialValuesTemplate } from './utils/generateInitialValues';

import { Formik } from 'formik';
import { StatusRow } from '@/molecules/statusRow/statusRow';
import { useControlModal, useHUDEditerForm } from './hooks';
import { Button, ModalBody, ModalFooter } from '@chakra-ui/react';
import { useSharedData } from '@/contexts/sharedDataProvider/sharedDataProvider';

import {
  HUDEditerContentWrapper,
  HUDEditerDisclaimer,
  HUDEditerWrapper,
} from './components';

export const HUDEditer = () => {
  const {
    handleDisable,
    showHUDModal,
  } = useControlModal();

  const {
    handleUpdateStatuses,
    characterStatuses,
    initalsLoadedIn,
    initialValues,
  } = useHUDEditerForm();

  const { config } = useSharedData();

  return (
    <HUDEditerWrapper
      onClose={handleDisable}
      isOpen={showHUDModal}
      isCentered
    >
      <HUDEditerDisclaimer />

      {initalsLoadedIn && (
        <Formik<InitialValuesTemplate>
          onSubmit={handleUpdateStatuses}
          initialValues={initialValues}
        >
          {({
            handleSubmit, errors, touched, values,
          }) => (
            <form onSubmit={handleSubmit}>
              <ModalBody>
                <HUDEditerContentWrapper>
                  {characterStatuses.map((charStatus, idx) => (
                    <StatusRow
                      name={`${charStatus.status.toString().toLowerCase()}.quota`}
                      statusLabel={charStatus.statusLabel}
                      id={charStatus.status}
                      key={idx}
                      isInvalid={!!errors[charStatus.status]?.quota
                        && !!touched?.[charStatus.status]?.quota}
                      switchProps={{
                        isChecked: values[charStatus.status].show,
                        name: `${charStatus.status}.show`,
                      }}
                    />
                  ))}
                </HUDEditerContentWrapper>
              </ModalBody>

              <ModalFooter>
                <Button
                  bgColor="whatsapp.300"
                  type="submit"
                  mr={3}
                >
                  {config.LANGUAGE?.SAVE}
                </Button>
                <Button
                  onClick={handleDisable}
                  bgColor="red.300"
                >
                  {config.LANGUAGE?.CLOSE}
                </Button>
              </ModalFooter>
            </form>
          )}
        </Formik>
      )}
    </HUDEditerWrapper>
  );
};
